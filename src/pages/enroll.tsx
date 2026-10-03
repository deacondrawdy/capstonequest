import { useState } from "react";
import { Download, Mail, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { FormPrivacyNotice } from "@/components/form-privacy-notice";
import { FormDone, FormFailure, SelectField, TextField, ValidatedForm } from "@/components/form-kit";
import { Button } from "@/components/ui/button";
import { campuses, enrollmentPackets, school } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";
import { saveSpot } from "@/lib/inquiries";

/**
 * Enrollment is on paper. This page hands out the packet and explains what to
 * do with it.
 *
 * Above the packet sits a short "Reserve a spot" form. A parent who is ready
 * to commit used to be met only by a 13-page PDF to print and return; the form
 * catches them at that moment with a phone number the office can call, and the
 * paperwork follows. It carries its own privacy notice.
 *
 * Every "Enroll" button on the site still points here rather than straight at
 * the PDF: the packet needs instructions (one per child, a doctor completes the
 * immunization form, return it to the registrar), and the packet is a scan a
 * screen reader cannot read, so the help offer below has to sit next to it.
 */
export function EnrollPage() {
  const c = useContent();
  const e = c.enrollPage;

  return (
    <SiteShell>
      <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-8">
        <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{e.eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{e.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted">{e.lede}</p>

        <ReserveSpot />

        <p className="mt-10 font-semibold text-navy">{e.reserve.or}</p>
        {/* One packet per site: each carries its own site's name, so a family
            must download the one they are enrolling at. */}
        <div className="mt-4 grid gap-4 rounded-[28px] bg-paper-soft p-6 sm:grid-cols-2 sm:p-8">
          {enrollmentPackets.map((packet) => {
            const campus = campuses.find((cam) => cam.slug === packet.campus) ?? campuses[0];
            const infoId = `packet-info-${packet.campus}`;
            return (
              <div key={packet.campus} className="min-w-0">
                <h2 className="text-lg font-bold text-navy">{c.campuses[campus.slug].name}</h2>
                {/* Buttons don't wrap by default; this label is long enough in
                    Spanish to push a 320px screen sideways (WCAG 1.4.10). */}
                <Button
                  asChild
                  size="lg"
                  className="mt-3 h-auto min-h-12 w-full whitespace-normal py-3 text-left"
                >
                  <a href={packet.href} download={packet.fileName} aria-describedby={infoId}>
                    <Download className="size-4 shrink-0" aria-hidden />
                    {e.download}
                    <span className="sr-only"> — {c.campuses[campus.slug].name}</span>
                  </a>
                </Button>
                <p id={infoId} className="mt-3 text-sm text-muted">
                  {e.fileInfo.replace("{pages}", String(packet.pages)).replace("{size}", packet.size)}
                </p>
              </div>
            );
          })}
          {e.languageNote ? (
            <p className="text-sm text-muted sm:col-span-2">{e.languageNote}</p>
          ) : null}
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

function ReserveSpot() {
  const c = useContent();
  const r = c.enrollPage.reserve;
  const f = r.fields;
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function onValidSubmit(fd: FormData) {
    setSending(true);
    setFailed(false);
    const get = (key: string) => String(fd.get(key) ?? "");
    try {
      await saveSpot({
        parentName: get("parentName"),
        phone: get("phone"),
        email: get("email"),
        campus: get("campus"),
        childAge: get("childAge"),
        start: get("start"),
        des: get("des"),
      });
      setDone(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <section aria-labelledby="reserve-title" className="mt-8 rounded-[28px] border-2 border-brand/25 bg-paper p-6 shadow-card sm:p-8">
      <h2 id="reserve-title" className="text-2xl font-extrabold tracking-tight text-navy">
        {r.title}
      </h2>
      {done ? (
        <FormDone className="mt-3">
          <p className="text-lg font-semibold text-navy">{r.thanks}</p>
        </FormDone>
      ) : (
        <>
          <p className="mt-2 leading-relaxed text-muted">{r.lede}</p>
          <ValidatedForm className="mt-5 grid gap-4 sm:grid-cols-2" onValidSubmit={onValidSubmit}>
            <TextField label={f.parentName} name="parentName" required autoComplete="name" />
            <TextField label={f.phone} name="phone" type="tel" required autoComplete="tel" />
            <TextField label={f.email} name="email" type="email" required autoComplete="email" />
            <SelectField label={f.campus} name="campus" required defaultValue="">
              <option value="" disabled>
                {f.chooseCampus}
              </option>
              {campuses.map((cam) => (
                <option key={cam.slug} value={cam.slug}>
                  {c.campuses[cam.slug].name}
                </option>
              ))}
            </SelectField>
            <SelectField label={f.childAge} name="childAge" required defaultValue="">
              <option value="" disabled>
                {f.chooseAge}
              </option>
              {f.ages.map((age) => (
                <option key={age}>{age}</option>
              ))}
            </SelectField>
            <SelectField label={f.des} name="des">
              {f.desOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </SelectField>
            <div className="sm:col-span-2">
              <TextField label={f.start} name="start" placeholder={f.startHint} />
            </div>
            {failed ? (
              <FormFailure template={r.failed} phone={school.phone} phoneHref={school.phoneHref} />
            ) : null}
            <FormPrivacyNotice className="mb-1 sm:col-span-2" />
            <Button type="submit" size="lg" disabled={sending} className="sm:col-span-2 sm:justify-self-start">
              {sending ? r.sending : r.submit}
            </Button>
          </ValidatedForm>
        </>
      )}
    </section>
  );
}
