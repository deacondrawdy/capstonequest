import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/hero";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { campuses, dailySchedule, programs, school, testimonials } from "@/data/school";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <Hero />

      <section className="border-t border-line bg-paper py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">
              Pre-K in Tucson & Yuma
            </p>
            <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Little steps make big dreams come true
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{school.welcome}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Campuses are a home away from home — play, discovery, and a kindergarten-ready year without rushing
              childhood. Instruction runs five days a week. Doors open {school.hours.replace("Monday–Friday, ", "")},
              Monday–Friday, with before- and after-care for working families.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/tour">Schedule a tour</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Our story</Link>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {[
              "Ages 3–5, Tucson and Yuma since 2013",
              "Open 7:00 AM – 6:00 PM, Monday–Friday",
              "Before- and after-school care on both campuses",
              "DES-approved · State of Arizona licensed",
            ].map((item) => (
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
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Our programs</p>
          <h2 className="mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A Pre-K year that still feels like childhood
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
                    {p.ages} · {p.hours}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <Link
                    to="/programs"
                    hash={p.slug}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                  >
                    See the program <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Two Arizona campuses</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Close to home in Tucson and Yuma
            </h2>
            <p className="mt-4 max-w-md text-muted">
              The same play-based curriculum, DES approval, and small class sizes — pick the campus that fits your morning drive.
            </p>
            <div className="mt-8 space-y-4">
              {campuses.map((c) => (
                <Link
                  key={c.slug}
                  to="/campuses/$slug"
                  params={{ slug: c.slug }}
                  className="block rounded-[24px] border border-line bg-paper p-5 shadow-[var(--shadow-card)] transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <h3 className="text-lg font-bold text-navy">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {c.address}, {c.cityState}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand">Visit campus →</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/tucson.jpg" alt="Tucson campus exterior" className="h-56 w-full rounded-[24px] object-cover sm:h-72" />
            <img src="/images/yuma.jpg" alt="Yuma campus exterior" className="mt-8 h-56 w-full rounded-[24px] object-cover sm:h-72" />
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-paper sm:py-20">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">A day in Pre-K</p>
          <h2 className="mt-2 max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">
            Rhythm, play, and just enough school
          </h2>
          <ol className="mt-10 grid gap-2.5 sm:grid-cols-2">
            {dailySchedule.map((item) => (
              <li key={item.time} className="flex items-baseline gap-4 rounded-2xl bg-white/10 px-4 py-3">
                <span className="w-[6.5rem] shrink-0 text-sm font-extrabold text-gold tabular-nums">
                  {item.time}
                </span>
                <p className="font-semibold">{item.title}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-paper/70">
            Before- and after-care wraps around this day, 7:00–8:00 AM and 3:30–6:00 PM.{" "}
            <Link to="/tuition" className="font-semibold text-gold underline underline-offset-2">
              See rates
            </Link>
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">From our families</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Kindergarten-ready, still themselves
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-[28px] bg-paper-soft p-6">
                <p className="text-[15px] leading-relaxed text-ink">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-bold text-navy">
                  {t.name}
                  <span className="block font-medium text-muted">{t.role}</span>
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
              Now enrolling the {school.year} school year
            </h2>
            <p className="mt-1 flex items-center gap-2 text-sm text-ink/80">
              <Check className="size-4" /> Limited seats · DES welcome · Tours most weekdays
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/enroll">Enroll Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/tour">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
