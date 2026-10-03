import { useEffect, useState } from "react";
import { ExternalLink, Star } from "lucide-react";
import { campuses } from "@/data/school";
import { fetchGoogleReviews, type PlaceReviews } from "@/lib/google-reviews";
import { useContent, useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

/** Reviews shown per site; Google returns at most five. */
const PER_SITE = 3;

/**
 * Each site's Google rating and its most relevant reviews, live from the
 * Places API (see `@/lib/google-reviews.server`), with a link to read the rest
 * on Google.
 *
 * Fetched after the page loads, so a slow answer from Google never holds up
 * the page. Until it arrives, or when the API key is not set, the section is
 * just the links to each site's Google profile.
 */
export function GoogleReviews({ cardClassName }: { cardClassName?: string }) {
  const c = useContent();
  const r = c.reviews;
  const locale = useLocale();
  const [places, setPlaces] = useState<PlaceReviews[]>([]);

  useEffect(() => {
    let live = true;
    fetchGoogleReviews()
      .then((data) => live && setPlaces(data))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  const withReviews = places.filter((p) => p.reviews.length > 0);

  if (withReviews.length === 0) {
    return (
      <>
        <p className="mt-3 max-w-2xl text-muted">{r.lede}</p>
        <ProfileLinks />
      </>
    );
  }

  return (
    <div className="mt-6 space-y-12">
      {withReviews.map((place) => {
        const campus = campuses.find((cam) => cam.slug === place.campus);
        if (!campus) return null;
        const name = c.campuses[campus.slug].name;
        return (
          <section key={place.campus} aria-label={name}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-bold text-navy">{name}</h3>
              <Stars rating={place.rating} label={r.stars.replace("{n}", place.rating.toFixed(1))} />
              <p className="text-sm font-semibold text-muted">
                {(place.count === 1 ? r.summaryOne : r.summary)
                  .replace("{rating}", place.rating.toFixed(1))
                  .replace("{count}", String(place.count))}
              </p>
            </div>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              {place.reviews.slice(0, PER_SITE).map((review) => (
                <blockquote
                  key={`${review.author}-${review.publishedAt}`}
                  className={cn("flex flex-col rounded-[28px] p-6", cardClassName)}
                >
                  <Stars rating={review.rating} label={r.stars.replace("{n}", String(review.rating))} />
                  <p className="mt-3 line-clamp-6 text-[15px] leading-relaxed text-ink">“{review.text}”</p>
                  <footer className="mt-auto pt-4 text-sm">
                    <a
                      href={review.authorUrl || review.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-navy hover:underline"
                    >
                      {review.author}
                      <span className="sr-only"> {c.common.opensNewTab}</span>
                    </a>
                    <span className="block text-muted">
                      {r.source}
                      {review.publishedAt ? ` · ${ago(review.publishedAt, locale)}` : ""}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
            <a
              href={place.url || campus.googleProfile}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline"
            >
              {(place.count === 1 ? r.seeAllOne : r.seeAll).replace("{count}", String(place.count)).replace("{campus}", name)}
              <ExternalLink aria-hidden className="size-3.5" />
              <span className="sr-only"> {c.common.opensNewTab}</span>
            </a>
          </section>
        );
      })}
      {/* Google's terms ask for its name beside reviews pulled from Maps. */}
      <p className="text-xs text-muted">{r.attribution}</p>
    </div>
  );
}

/** "3 weeks ago" / "hace 3 semanas", in the page's language. */
function ago(iso: string, locale: string): string {
  const days = (Date.parse(iso) - Date.now()) / 86_400_000;
  if (Number.isNaN(days)) return "";
  const fmt = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  if (days > -7) return fmt.format(Math.round(days), "day");
  if (days > -30) return fmt.format(Math.round(days / 7), "week");
  if (days > -365) return fmt.format(Math.round(days / 30), "month");
  return fmt.format(Math.round(days / 365), "year");
}

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <span role="img" aria-label={label} className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn("size-4", i < Math.round(rating) ? "fill-gold text-gold" : "text-line")}
        />
      ))}
    </span>
  );
}

function ProfileLinks() {
  const c = useContent();
  return (
    <ul className="mt-8 flex flex-wrap gap-3">
      {campuses.map((campus) =>
        "googleProfile" in campus ? (
          <li key={campus.slug}>
            <a
              href={campus.googleProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-paper px-5 py-2.5 text-sm font-bold text-navy shadow-card transition-colors hover:bg-paper-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Star aria-hidden className="size-4 fill-gold text-gold" />
              {c.reviews.read.replace("{campus}", c.campuses[campus.slug].name)}
              <ExternalLink aria-hidden className="size-3.5 text-muted" />
              <span className="sr-only"> {c.common.opensNewTab}</span>
            </a>
          </li>
        ) : null,
      )}
    </ul>
  );
}
