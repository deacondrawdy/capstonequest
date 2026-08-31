import { Check } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";


export function ProgramsPage() {
  const c = useContent();

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.programsPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{c.programsPage.title}</h1>
          <p className="mt-3 max-w-2xl text-muted">
            {c.programsPage.lede}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] space-y-16 px-5 py-14 sm:px-8">
        {programs.map((p, i) => (
          <article
            id={p.slug}
            key={p.slug}
            className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2"
          >
            <img
              src={p.image}
              alt=""
              className={`h-72 w-full rounded-[28px] object-cover object-top ${i % 2 ? "lg:order-2" : ""}`}
            />
            <div>
              <p className="text-xs font-bold tracking-wide text-brand uppercase">
                {c.programs[p.slug].ages} · {c.programs[p.slug].hours}
              </p>
              <h2 className="mt-1 text-3xl font-extrabold text-navy">{c.programs[p.slug].name}</h2>
              <p className="mt-3 text-muted">{c.programs[p.slug].summary}</p>
              <ul className="mt-5 space-y-2">
                {c.programs[p.slug].points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-icon-green" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <AppLink to="/enroll">{c.common.startEnrollment}</AppLink>
                </Button>
                <Button asChild variant="outline">
                  <AppLink to="/tuition">{c.common.seeRates}</AppLink>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
