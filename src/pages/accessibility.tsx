import { Check, Clock, Mail, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { campuses, school } from "@/data/school";
import { useContent } from "@/lib/locale";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-extrabold tracking-tight text-navy">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

/**
 * Accessibility statement.
 *
 * Wording comes from the statement drafted for the school in September 2026,
 * corrected where it claimed more than was tested. Keep every sentence true: a
 * statement that overclaims is worse than none, because it is the page a
 * complainant quotes back.
 *
 * Contact details come from school.ts, not the copy, so the statement can never
 * list a phone number or inbox the rest of the site has moved away from.
 */
export function AccessibilityPage() {
  const c = useContent();
  const a = c.accessibilityPage;

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{a.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{a.title}</h1>
          <p className="mt-2 text-sm text-muted">{a.updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[800px] space-y-10 px-5 py-12 sm:px-8">
        <Section title={a.commitmentTitle}>
          {a.commitment.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </Section>

        <Section title={a.standardTitle}>
          <p>{a.standard}</p>
        </Section>

        <Section title={a.standingTitle}>
          {a.standing.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </Section>

        <Section title={a.improvingTitle}>
          <p className="font-semibold text-navy">{a.improvingIntro}</p>
          <p>{a.auditResult}</p>
          <p>{a.openIntro}</p>
          <ul className="list-disc space-y-2.5 pl-5 marker:text-brand">
            {a.open.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <section className="rounded-[28px] border border-line p-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{a.helpTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted">{a.helpIntro}</p>
          <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-6">
            <dt className="flex items-center gap-2 font-semibold text-navy">
              <Mail className="size-4 shrink-0 text-brand" aria-hidden />
              {a.emailLabel}
            </dt>
            <dd>
              <a href={`mailto:${school.email}`} className="font-semibold text-brand hover:underline">
                {school.email}
              </a>
            </dd>
            {campuses.map((campus) => (
              <div key={campus.slug} className="contents">
                <dt className="flex items-center gap-2 font-semibold text-navy">
                  <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                  {a.campusLabel.replace("{campus}", campus.city)}
                </dt>
                <dd>
                  <a href={campus.phoneHref} className="font-semibold text-brand hover:underline">
                    {campus.phone}
                  </a>
                </dd>
              </div>
            ))}
            <dt className="flex items-center gap-2 font-semibold text-navy">
              <Clock className="size-4 shrink-0 text-brand" aria-hidden />
              {a.hoursLabel}
            </dt>
            <dd className="text-muted">{c.common.hoursLine}</dd>
          </dl>
          <p className="mt-5 leading-relaxed text-muted">{a.helpDetails}</p>
          <p className="mt-3 leading-relaxed text-muted">{a.formats}</p>
        </section>

        <Section title={a.technicalTitle}>
          <ul className="space-y-2.5">
            {a.technical.map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-icon-green" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </SiteShell>
  );
}
