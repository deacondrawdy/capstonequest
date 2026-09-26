import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { faqPageItems } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";

/**
 * The questions families ask before they call.
 *
 * Plain headings and paragraphs rather than an accordion: every answer is
 * visible to a reader scrolling the page, to a search engine, and to an
 * assistant quoting the school. The same answers are published as FAQPage
 * structured data from `src/lib/structured-data.ts`, and the two must stay
 * identical — Google treats marked-up answers that are not on the page as a
 * policy violation.
 */
export function FaqPage() {
  const c = useContent();
  const f = c.faqPage;

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{f.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{f.title}</h1>
          <p className="mt-3 leading-relaxed text-muted">{f.lede}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[800px] px-5 py-14 sm:px-8">
        <dl>
          {faqPageItems.map((id) => (
            <div key={id} className="border-b border-line py-6 first:pt-0 last:border-0">
              <dt className="text-xl font-bold text-navy">{f.items[id].q}</dt>
              <dd className="mt-3 leading-relaxed text-ink/85">{f.items[id].a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <AppLink to="/tour">{c.common.scheduleTour}</AppLink>
          </Button>
          <Button asChild size="lg" variant="outline">
            <AppLink to="/tuition">{c.common.seeRates}</AppLink>
          </Button>
        </div>
      </div>
    </SiteShell>
  );
}
