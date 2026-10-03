import { ExternalLink, Star } from "lucide-react";
import { campuses, googleReviews } from "@/data/school";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";

/**
 * Reviews from the school's Google Business Profiles, plus a link to each
 * site's profile so a parent can read every review, not just the chosen few.
 *
 * Quotes come only from `googleReviews` (real reviews, copied verbatim). While
 * that list is empty the section is just the two profile links, which is still
 * honest social proof: the parent sees the reviews on Google itself.
 */
export function GoogleReviews({ cardClassName }: { cardClassName?: string }) {
  const c = useContent();
  const r = c.reviews;

  return (
    <>
      <p className="mt-3 max-w-2xl text-muted">{r.lede}</p>

      {googleReviews.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {googleReviews.map((review) => (
            <blockquote key={`${review.name}-${review.campus}`} className={cn("rounded-[28px] p-6", cardClassName)}>
              <p className="flex gap-0.5" aria-label={r.stars.replace("{n}", String(review.rating))} role="img">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    aria-hidden
                    className={cn("size-4", i < review.rating ? "fill-gold text-gold" : "text-line")}
                  />
                ))}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">“{review.text}”</p>
              <footer className="mt-4 text-sm font-bold text-navy">
                {review.name}
                <span className="block font-medium text-muted">
                  {r.source} · {c.campuses[review.campus].name}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      ) : null}

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
                {r.read.replace("{campus}", c.campuses[campus.slug].name)}
                <ExternalLink aria-hidden className="size-3.5 text-muted" />
                <span className="sr-only"> {c.common.opensNewTab}</span>
              </a>
            </li>
          ) : null,
        )}
      </ul>
    </>
  );
}
