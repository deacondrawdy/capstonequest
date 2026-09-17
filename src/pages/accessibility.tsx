import { Check, Mail, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { campuses, school } from "@/data/school";
import { useContent } from "@/lib/locale";

/**
 * Accessibility statement.
 *
 * Every "done" item is backed by the WCAG 2.2 AA remediation in the code, and
 * every limitation is real. Keep it that way: a statement that overclaims is
 * worse than none, because it is the page a complainant quotes back.
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
          <p className="mt-4 text-lg leading-relaxed text-ink/80">{a.lede}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[800px] space-y-10 px-5 py-12 sm:px-8">
        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{a.standardTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted">{a.standard}</p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{a.statusTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted">{a.status}</p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{a.doneTitle}</h2>
          <ul className="mt-4 space-y-2.5">
            {a.done.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-ink/80">
                <Check className="mt-1 size-4 shrink-0 text-icon-green" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">{a.menuNote}</p>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{a.limitsTitle}</h2>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 leading-relaxed text-muted marker:text-brand">
            {a.limits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-[28px] border border-line p-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{a.helpTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted">{a.help}</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-brand" aria-hidden />
              <span className="sr-only">{a.emailLabel}: </span>
              <a href={`mailto:${school.email}`} className="font-semibold text-navy hover:underline">
                {school.email}
              </a>
            </li>
            {campuses.map((campus) => (
              <li key={campus.slug} className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                <span>
                  {c.campuses[campus.slug].name}:{" "}
                  <a href={campus.phoneHref} className="font-semibold text-navy hover:underline">
                    {campus.phone}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{a.technicalTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted">{a.technical}</p>
        </section>
      </div>
    </SiteShell>
  );
}
