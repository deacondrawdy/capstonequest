import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/hero";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { campuses, dailySchedule, programs, school, testimonials } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";


export function Home() {
  const c = useContent();

  return (
    <SiteShell>
      <Hero />

      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">
              {c.homePage.eyebrow}
            </p>
            <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {c.homePage.title}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{c.homePage.welcome}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              {c.homePage.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <AppLink to="/tour">{c.common.scheduleTour}</AppLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <AppLink to="/about">{c.common.ourStory}</AppLink>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {c.homePage.pills.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-line bg-paper-soft px-4 py-3 text-sm font-semibold text-navy"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-icon-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper-soft py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.homePage.programsEyebrow}</p>
          <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            {c.homePage.programsTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <article
                key={p.slug}
                className="overflow-hidden rounded-[28px] bg-paper shadow-card transition-[box-shadow,transform] duration-200 hover:shadow-card-hover"
              >
                <img src={p.image} alt="" className="h-44 w-full object-cover object-top" />
                <div className="p-6">
                  <p className="text-xs font-bold tracking-wide text-brand uppercase">
                    {c.programs[p.slug].ages} · {c.programs[p.slug].hours}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-navy">{c.programs[p.slug].name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.programs[p.slug].summary}</p>
                  <AppLink
                    to="/programs"
                    hash={p.slug}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                  >
                    {c.homePage.seeProgram} <ArrowRight className="size-4" />
                  </AppLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.homePage.campusesEyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              {c.homePage.campusesTitle}
            </h2>
            <p className="mt-4 max-w-md text-muted">
              {c.homePage.campusesLede}
            </p>
            <div className="mt-8 space-y-4">
              {campuses.map((campus) => (
                <AppLink
                  key={campus.slug}
                  to="/campuses/$slug"
                  params={{ slug: campus.slug }}
                  className="block rounded-[24px] border border-line bg-paper p-5 shadow-[var(--shadow-card)] transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <h3 className="text-lg font-bold text-navy">{c.campuses[campus.slug].name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {campus.address}, {campus.cityState}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand">{c.homePage.visitCampus} →</p>
                </AppLink>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/tucson.jpg" alt={c.campuses.tucson.imageAlt} className="h-56 w-full rounded-[24px] object-cover sm:h-72" />
            <img src="/images/yuma.jpg" alt={c.campuses.yuma.imageAlt} className="mt-8 h-56 w-full rounded-[24px] object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">{c.homePage.dayEyebrow}</p>
          <h2 className="mt-2 max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">
            {c.homePage.dayTitle}
          </h2>
          <ol className="mt-10 grid gap-2.5 sm:grid-cols-2">
            {dailySchedule.map((item) => (
              <li key={item.id} className="flex items-baseline gap-4 rounded-2xl bg-white/10 px-4 py-3">
                <span className="w-[6.5rem] shrink-0 text-sm font-extrabold text-gold tabular-nums">
                  {item.time}
                </span>
                <p className="font-semibold">{c.schedule[item.id]}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-paper/70">
            Before- and after-care wraps around this day, 7:00–8:00 AM and 3:30–6:00 PM.{" "}
            <AppLink to="/tuition" className="font-semibold text-gold underline underline-offset-2">
              {c.common.seeRates}
            </AppLink>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.homePage.familiesEyebrow}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            {c.homePage.familiesTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="rounded-[28px] bg-paper-soft p-6">
                <p className="text-[15px] leading-relaxed text-ink">“{c.testimonials[t.id].quote}”</p>
                <footer className="mt-4 text-sm font-bold text-navy">
                  {t.name}
                  <span className="block font-medium text-muted">{c.testimonials[t.id].role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-gold py-12">
        <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-ink sm:text-3xl">
              {c.homePage.ctaTitle.replace("{year}", school.year)}
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-ink/80">
              <Check className="size-4" /> {c.homePage.ctaNote}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <AppLink to="/enroll">{c.homePage.enrollNow}</AppLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <AppLink to="/tour">{c.common.scheduleTour}</AppLink>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
