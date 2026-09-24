import { Check, Clock, Download, Info } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { feeSchedule, scholarship, school, tuition } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";

export function TuitionPage() {
  const c = useContent();
  const s = c.tuitionPage.scholarship;

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">
            {c.tuitionPage.eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
            {c.tuitionPage.title}
          </h1>
          <p className="mt-3 text-muted">{c.tuitionPage.lede}</p>
        </div>
      </div>

      <section className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8">
        <h2 className="text-3xl font-extrabold text-navy">{c.tuitionPage.programsTitle}</h2>
        <p className="mt-2 text-sm text-muted">{c.tuitionPage.programsNote}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tuition.programs.map((p) => {
            const copy = c.tuitionPage.programs[p.id];
            return (
              <article key={p.id} className="flex flex-col rounded-[28px] border border-line p-6">
                <h3 className="text-lg font-bold text-navy">{copy.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand">{copy.schedule}</p>
                <p className="mt-4 text-3xl font-extrabold tracking-tight text-navy">{p.price}</p>
                <p className="text-sm text-muted">{c.tuitionPage.perWeek}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                  <Clock className="size-4 shrink-0 text-brand" />
                  {copy.hours}
                </p>
                {"highlight" in copy && copy.highlight ? (
                  <p className="mt-auto pt-4">
                    <span className="block rounded-2xl border border-gold/50 bg-gold/10 px-3 py-2 text-[13px] font-semibold text-navy">
                      {copy.highlight}
                    </span>
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">{c.tuitionPage.baTitle}</h2>
          <p className="mt-2 text-sm text-muted">{c.tuitionPage.baNote}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {tuition.beforeAfter.map((group) => (
              <div key={group.id}>
                <h3 className="text-sm font-extrabold tracking-[0.08em] text-navy uppercase">
                  {c.tuitionPage.baGroups[group.id]}
                </h3>
                <ul className="mt-3 space-y-3">
                  {group.options.map((o) => (
                    <li
                      key={o.id}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-4 py-3"
                    >
                      <span className="font-bold text-navy">{c.tuitionPage.baOptions[o.id]}</span>
                      <span className="shrink-0 text-lg font-extrabold text-navy">{o.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-navy">{c.tuitionPage.discountsTitle}</h2>
            <ul className="mt-4 space-y-3">
              {c.tuitionPage.discounts.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-icon-green" />
                  {d}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-extrabold text-navy">
              {c.tuitionPage.includedTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {c.tuitionPage.included.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-icon-green" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-navy">{c.tuitionPage.termsTitle}</h2>
            <ul className="mt-4 space-y-3">
              {c.tuitionPage.terms.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted">
                  <Info className="mt-0.5 size-4 shrink-0 text-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sits under the rates, where a family works out whether they can afford
          the program at all. */}
      <section className="border-t border-line bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">{s.title}</h2>
          <p className="mt-2 text-lg font-semibold text-brand">{s.covers}</p>
          <p className="mt-4 leading-relaxed text-muted">{s.origin}</p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-navy">{s.whoTitle}</h3>
              <ul className="mt-3 space-y-3">
                {s.who.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-icon-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy">{s.howTitle}</h3>
              <ol className="mt-3 space-y-3">
                {s.how.map((item, i) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span
                      aria-hidden
                      className="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-paper"
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted">{s.decision}</p>

          <Button asChild className="mt-6 h-auto min-h-12 whitespace-normal py-3 text-left">
            <a href={scholarship.href} download={scholarship.fileName}>
              <Download className="size-4 shrink-0" aria-hidden />
              {s.cta}
              <span className="ml-1 font-normal opacity-80">({c.common.pdf})</span>
            </a>
          </Button>
        </div>
      </section>

      <section className="bg-navy py-14 text-paper">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold">{c.tuitionPage.ctaTitle}</h2>
          <p className="mt-3 text-paper/80">{c.tuitionPage.ctaText}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="gold">
              <AppLink to="/enroll">{c.common.startEnrollment}</AppLink>
            </Button>
            <Button asChild variant="outline">
              <AppLink to="/tour">{c.common.scheduleTour}</AppLink>
            </Button>
          </div>
          {/* The rates above are a summary; this is the sheet families sign. */}
          <p className="mt-6 text-sm">
            <a
              href={feeSchedule.href}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold underline underline-offset-4"
            >
              {c.tuitionPage.feeScheduleCta}
              <span className="ml-1.5 font-normal text-paper/70">({c.common.pdf})</span>
              <span className="sr-only"> {c.common.opensNewTab}</span>
            </a>
          </p>
          <p className="mt-8 text-sm text-paper/60">
            {c.tuitionPage.effectiveNote.replace("{phone}", school.phone)}{" "}
            <a href={`mailto:${school.email}`} className="underline underline-offset-2">
              {school.email}
            </a>
            .
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
