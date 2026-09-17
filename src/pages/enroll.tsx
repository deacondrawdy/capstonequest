import { Download, Mail, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { campuses, enrollmentPacket, school } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";

/**
 * Enrollment is on paper. This page hands out the packet and explains what to
 * do with it; it collects no information, so it needs no privacy notice.
 *
 * Every "Enroll" button on the site still points here rather than straight at
 * the PDF: the packet needs instructions (one per child, a doctor completes the
 * immunization form, return it to the registrar), and the packet is a scan a
 * screen reader cannot read, so the help offer below has to sit next to it.
 */
export function EnrollPage() {
  const c = useContent();
  const e = c.enrollPage;
  const fileInfo = e.fileInfo
    .replace("{pages}", String(enrollmentPacket.pages))
    .replace("{size}", enrollmentPacket.size);

  return (
    <SiteShell>
      <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-8">
        <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{e.eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{e.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">{e.lede}</p>

        <div className="mt-8 rounded-[28px] bg-paper-soft p-6 sm:p-8">
          {/* Buttons don't wrap by default; this label is long enough in Spanish
              to push a 320px screen sideways (WCAG 1.4.10). */}
          <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal py-3 text-left">
            <a
              href={enrollmentPacket.href}
              download={enrollmentPacket.fileName}
              aria-describedby="packet-info"
            >
              <Download className="size-4" aria-hidden />
              {e.download}
            </a>
          </Button>
          <p id="packet-info" className="mt-3 text-sm text-muted">
            {fileInfo}
            {e.languageNote ? <> · {e.languageNote}</> : null}
          </p>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{e.stepsTitle}</h2>
          <ol className="mt-4 space-y-4">
            {e.steps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-paper"
                >
                  {i + 1}
                </span>
                <span className="pt-1 leading-relaxed text-ink/85">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 leading-relaxed text-muted">{e.note}</p>
          <p className="mt-3">
            <AppLink to="/tuition" className="font-semibold text-brand underline underline-offset-2">
              {c.common.seeRates}
            </AppLink>
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-line p-6">
          <h2 className="text-xl font-extrabold tracking-tight text-navy">{e.helpTitle}</h2>
          <p className="mt-3 leading-relaxed text-muted">{e.help}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {campuses.map((campus) => (
              <li key={campus.slug} className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                <span className="font-semibold text-navy">{e.campusLabel.replace("{campus}", campus.city)}:</span>
                <a href={campus.phoneHref} className="font-semibold text-brand hover:underline">
                  {campus.phone}
                </a>
              </li>
            ))}
            <li className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <Mail className="size-4 shrink-0 text-brand" aria-hidden />
              <span className="font-semibold text-navy">{e.emailLabel}:</span>
              <a href={`mailto:${school.email}`} className="font-semibold break-all text-brand hover:underline">
                {school.email}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </SiteShell>
  );
}
