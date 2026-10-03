/**
 * Server-only: each site's rating and reviews from the Google Places API (New).
 *
 * Needs GOOGLE_PLACES_API_KEY (a key from the school's Google Cloud project,
 * restricted to Places API (New)). Without it this returns nothing and the
 * page shows its plain "read our reviews on Google" links instead.
 *
 * Results are kept in memory for a few hours, so a busy day costs a handful
 * of API calls rather than one per visitor. Railway runs one long-lived
 * process, so the cache survives between requests; a restart just refetches.
 */
if (typeof window !== "undefined") {
  throw new Error("@/lib/google-reviews.server is server-only.");
}

export type PlaceReview = {
  author: string;
  authorUrl: string;
  rating: number;
  text: string;
  /** ISO date; the page words it ("3 weeks ago") in its own language. */
  publishedAt: string;
  url: string;
};

export type PlaceReviews = {
  campus: string;
  rating: number;
  count: number;
  url: string;
  reviews: PlaceReview[];
};

// Overridable only so the section can be checked against a local stand-in.
const API = process.env.GOOGLE_PLACES_API_BASE?.trim() || "https://places.googleapis.com/v1";
const TTL_MS = 6 * 60 * 60 * 1000;
const TIMEOUT_MS = 8_000;

/**
 * How each site is found on Google. The text search runs once per process to
 * get the place ID; after that only the details call repeats.
 */
const QUERIES: Record<string, string> = {
  tucson: "Capstone Quest Academy, 1150 North Country Club Road, Tucson, AZ 85716",
  yuma: "Capstone Quest Academy, 1220 South 4th Avenue, Yuma, AZ 85364",
};

const placeIds = new Map<string, string>();
let cache: { at: number; data: PlaceReviews[] } | null = null;
let inflight: Promise<PlaceReviews[]> | null = null;

function key(): string {
  return process.env.GOOGLE_PLACES_API_KEY?.trim() ?? "";
}

async function places<T>(path: string, init: RequestInit & { fieldMask: string }): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      "content-type": "application/json",
      "X-Goog-Api-Key": key(),
      "X-Goog-FieldMask": init.fieldMask,
    },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Places API ${path} responded ${res.status}: ${await res.text()}`);
  return (await res.json()) as T;
}

async function placeId(campus: string): Promise<string | null> {
  const known = placeIds.get(campus);
  if (known) return known;
  const found = await places<{ places?: Array<{ id: string }> }>("/places:searchText", {
    method: "POST",
    fieldMask: "places.id",
    body: JSON.stringify({ textQuery: QUERIES[campus], maxResultCount: 1 }),
  });
  const id = found.places?.[0]?.id ?? null;
  if (id) placeIds.set(campus, id);
  return id;
}

type Details = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: Array<{
    rating?: number;
    publishTime?: string;
    googleMapsUri?: string;
    originalText?: { text?: string };
    text?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string };
  }>;
};

async function load(campus: string): Promise<PlaceReviews | null> {
  const id = await placeId(campus);
  if (!id) return null;
  const d = await places<Details>(`/places/${id}`, {
    method: "GET",
    fieldMask: "rating,userRatingCount,googleMapsUri,reviews",
  });
  return {
    campus,
    rating: d.rating ?? 0,
    count: d.userRatingCount ?? 0,
    url: d.googleMapsUri ?? "",
    // Google's order, unfiltered: picking only the five-star ones would
    // misrepresent what families say.
    reviews: (d.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "",
        authorUrl: r.authorAttribution?.uri ?? "",
        rating: r.rating ?? 0,
        // The words as the parent wrote them, not Google's translation.
        text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
        publishedAt: r.publishTime ?? "",
        url: r.googleMapsUri ?? "",
      }))
      .filter((r) => r.text && r.author),
  };
}

/** Both sites' reviews, or an empty list when the key is missing or Google fails. */
export async function getPlaceReviews(): Promise<PlaceReviews[]> {
  if (!key()) return [];
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  inflight ??= Promise.all(Object.keys(QUERIES).map(load))
    .then((all) => {
      const data = all.filter((p): p is PlaceReviews => p !== null);
      cache = { at: Date.now(), data };
      return data;
    })
    .catch((error) => {
      console.error("[google-reviews]", error);
      // Serve the last good copy if there is one; otherwise show the links.
      return cache?.data ?? [];
    })
    .finally(() => {
      inflight = null;
    });
  return inflight;
}
