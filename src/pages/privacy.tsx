import { Check, Mail, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { campuses, school } from "@/data/school";
import { features } from "@/data/features";
import { useContent } from "@/lib/locale";

/**
 * Privacy notice for the website.
 *
 * Every claim here is checkable against the code: the collected fields come from
 * the four forms, the single named processor is the Resend path in
 * `src/lib/leads/deliver.server.ts`, and the "no cookies, no analytics" claim
 * holds because there is no analytics or cookie code anywhere in the app.
 *
 * It describes practices; it deliberately makes no compliance assertions.
 */
export function PrivacyPage() {
  const c = useContent();
  const s = c.privacyPage.sections;

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">
            {c.privacyPage.eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
            {c.privacyPage.title}
          </h1>
          <p className="mt-2 text-sm text-muted">{c.privacyPage.updated}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">{c.privacyPage.lede}</p>
        </div>
      </div>

      <section className="mx-auto max-w-[800px] px-5 pt-12 sm:px-8">
        <div className="rounded-[28px] border border-line bg-paper p-6">
          <h2 className="text-lg font-extrabold text-navy">{c.privacyPage.summaryTitle}</h2>
          <ul className="mt-4 space-y-2.5">
            {c.privacyPage.summary.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                <Check className="mt-1 size-4 shrink-0 text-icon-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] space-y-9 px-5 py-12 sm:px-8">
        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.who.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.who.body}</p>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.collect.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.collect.intro}</p>
          <ul className="mt-4 space-y-3">
            {/* The job application form is only listed while Careers is switched on. */}
            {[s.collect.tour, s.collect.contact, ...(features.careers ? [s.collect.careers] : [])].map(
              (item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ),
            )}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">{s.collect.note}</p>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.why.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.why.body}</p>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.recipients.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.recipients.body}</p>
        </article>

        <article className="rounded-[28px] bg-paper-soft p-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.dont.title}</h2>
          <ul className="mt-4 space-y-2.5">
            {s.dont.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-muted">
                <Check className="mt-1 size-4 shrink-0 text-icon-green" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.browser.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.browser.body}</p>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.children.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.children.body}</p>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.retention.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.retention.body}</p>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.choices.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.choices.body}</p>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.scope.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.scope.body}</p>
        </article>

        <article>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.changes.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.changes.body}</p>
        </article>
      </section>

      <section className="border-t border-line bg-paper-soft py-12">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{s.contact.title}</h2>
          <p className="mt-3 leading-relaxed text-muted">{s.contact.body}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-brand" />
              <a href={school.phoneHref} className="font-semibold text-navy hover:underline">
                {school.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-brand" />
              <a
                href={`mailto:${school.email}`}
                className="font-semibold text-navy hover:underline"
              >
                {school.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            {campuses.map((campus) => (
              <li key={campus.slug}>
                <span className="font-semibold text-navy">{c.campuses[campus.slug].name}</span>
                <br />
                {campus.address}, {campus.cityState}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
