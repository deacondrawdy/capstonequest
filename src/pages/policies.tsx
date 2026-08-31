import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { policies, school } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";


export function PoliciesPage() {
  const c = useContent();

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.policiesPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
            {c.policiesPage.title}
          </h1>
          <p className="mt-3 text-muted">
            {c.policiesPage.lede}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[800px] px-5 py-14 sm:px-8">
        <div className="space-y-10">
          {policies.map((p) => (
            <article key={p.id}>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy">{c.policiesPage.items[p.id].title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{c.policiesPage.items[p.id].body}</p>
              {c.policiesPage.items[p.id].list.length ? (
                <ul className="mt-3 space-y-1.5">
                  {c.policiesPage.items[p.id].list.map((item) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {c.policiesPage.items[p.id].footer ? (
                <p className="mt-3 leading-relaxed text-muted">{c.policiesPage.items[p.id].footer}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <h2 className="text-2xl font-extrabold text-navy">{c.policiesPage.questionsTitle}</h2>
          <p className="mt-3 text-muted">
            {c.policiesPage.questionsText.replace("{phone}", school.phone)}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <AppLink to="/contact">{c.common.talkWithUs}</AppLink>
            </Button>
            <Button asChild variant="outline">
              <AppLink to="/parents">{c.nav.parents}</AppLink>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
