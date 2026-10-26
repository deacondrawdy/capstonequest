import { createServerFn } from "@tanstack/react-start";
import type { PlaceReviews } from "@/lib/google-reviews.server";

export type { PlaceReview, PlaceReviews } from "@/lib/google-reviews.server";

/**
 * Both sites' Google rating and reviews; an empty list when not configured.
 *
 * Run as the route loader of the pages that show reviews, so they arrive in
 * the server-rendered HTML. They used to be fetched by the browser after
 * load, a request TanStack's CSRF check refused (403) in PageSpeed's test
 * browser, which cost the Best Practices score. In the HTML they also cost
 * no extra round trip, and search engines can read them.
 */
export const fetchGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<PlaceReviews[]> => {
    const { getCachedPlaceReviews } = await import("@/lib/google-reviews.server");
    return getCachedPlaceReviews();
  },
);

/** Route options for a page with a <GoogleReviews> section. */
export const reviewsLoader = {
  loader: () => fetchGoogleReviews(),
  // The server caches for six hours; moving between pages need not refetch.
  staleTime: 10 * 60 * 1000,
} as const;
