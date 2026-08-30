import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock, Info } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { school, tuition } from "@/data/school";

export const Route = createFileRoute("/tuition")({ component: TuitionPage });

function TuitionPage() {
  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Tuition</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
            Full-day Pre-K, priced by the week
          </h1>
          <p className="mt-3 text-muted">
            One weekly rate covers the instructional day, {tuition.preschoolHours}. Add before- and
            after-care if your workday starts earlier or ends later. Families using a DES child care
            subsidy enroll the same way — copays apply.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8">
        <h2 className="text-3xl font-extrabold text-navy">Pre-K programs</h2>
        <p className="mt-2 text-sm text-muted">
          Choose one program per child. Rates are per child, per week.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tuition.programs.map((p) => (
            <article
              key={`${p.name}-${p.schedule}`}
              className="flex flex-col rounded-[28px] border border-line p-6"
            >
              <h3 className="text-lg font-bold text-navy">{p.name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand">{p.schedule}</p>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-navy">{p.price}</p>
              <p className="text-sm text-muted">{p.unit}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <Clock className="size-4 shrink-0 text-brand" />
                {p.hours}
              </p>
              {"highlight" in p && p.highlight ? (
                <p className="mt-auto pt-4">
                  <span className="block rounded-2xl border border-gold/50 bg-gold/10 px-3 py-2 text-[13px] font-semibold text-navy">
                    {p.highlight}
                  </span>
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">Before &amp; after care</h2>
          <p className="mt-2 text-sm text-muted">
            {tuition.beforeAfterHours}. Priced separately, or bundled into the 5-day rate above.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {tuition.beforeAfter.map((group) => (
              <div key={group.schedule}>
                <h3 className="text-sm font-extrabold tracking-[0.08em] text-navy uppercase">
                  {group.schedule}
                </h3>
                <ul className="mt-3 space-y-3">
                  {group.options.map((o) => (
                    <li
                      key={o.care}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-4 py-3"
                    >
                      <span className="font-bold text-navy">{o.care}</span>
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
            <h2 className="text-2xl font-extrabold text-navy">Discounts</h2>
            <ul className="mt-4 space-y-3">
              {tuition.discounts.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-icon-green" />
                  {d}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 text-2xl font-extrabold text-navy">What the fee covers</h2>
            <ul className="mt-4 space-y-3">
              {tuition.included.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-icon-green" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-navy">Billing &amp; contract terms</h2>
            <ul className="mt-4 space-y-3">
              {tuition.terms.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted">
                  <Info className="mt-0.5 size-4 shrink-0 text-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-paper">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold">Ready to enroll?</h2>
          <p className="mt-3 text-paper/80">
            Complete one registration form per child and return it to the campus registrar. We will
            walk the DES paperwork with you if you are using a subsidy.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="gold">
              <Link to="/enroll">Start enrollment</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/tour">Schedule a tour</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-paper/60">
            Rates shown are from the fee schedule effective {tuition.effective}. Confirm current
            rates with your campus before signing — call {school.phone} or email{" "}
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
