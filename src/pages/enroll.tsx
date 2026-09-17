import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { FormPrivacyNotice } from "@/components/form-privacy-notice";
import { FormDone, FormFailure, SelectField, TextField, ValidatedForm } from "@/components/form-kit";
import { Button } from "@/components/ui/button";
import { campuses, programs, school } from "@/data/school";
import { useContent } from "@/lib/locale";
import { saveEnroll } from "@/lib/inquiries";

type Contact = { phone: string; phoneHref: string };

export function EnrollPage() {
  const c = useContent();
  const f = c.enrollPage.fields;
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState<Contact | null>(null);

  async function onValidSubmit(fd: FormData) {
    const picked = campuses.find((cam) => cam.slug === String(fd.get("campus") ?? ""));
    setSending(true);
    setFailed(null);
    try {
      await saveEnroll({
        childFirst: String(fd.get("childFirst") ?? ""),
        childLast: String(fd.get("childLast") ?? ""),
        dob: String(fd.get("dob") ?? ""),
        campus: String(fd.get("campus") ?? ""),
        program: String(fd.get("program") ?? ""),
        parentName: String(fd.get("parentName") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        des: String(fd.get("des") ?? ""),
        start: String(fd.get("start") ?? ""),
      });
      setDone(true);
    } catch {
      setFailed(picked ?? school);
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteShell>
      <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-8">
        <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.enrollPage.eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{c.enrollPage.title}</h1>
        <p className="mt-3 text-muted">{c.enrollPage.lede2}</p>
        {done ? (
          <FormDone className="mt-10 rounded-[28px] bg-paper-soft p-8">
            <h2 className="text-2xl font-bold text-navy">{c.enrollPage.doneTitle}</h2>
            <p className="mt-2 text-muted">{c.enrollPage.doneText}</p>
          </FormDone>
        ) : (
          <ValidatedForm className="mt-8 grid gap-4 sm:grid-cols-2" onValidSubmit={onValidSubmit}>
            {/* The child's details take no autocomplete: WCAG 1.3.5 covers data
                about the person filling in the form, and autofilling the
                parent's own name into the child's field would be a mistake. */}
            <TextField label={f.childFirst} name="childFirst" required />
            <TextField label={f.childLast} name="childLast" required />
            <TextField label={f.dob} name="dob" type="date" required />
            <TextField label={f.start} name="start" type="date" />
            <SelectField label={f.campus} name="campus" defaultValue="tucson">
              {campuses.map((cam) => (
                <option key={cam.slug} value={cam.slug}>
                  {c.campuses[cam.slug].name}
                </option>
              ))}
            </SelectField>
            <SelectField label={f.program} name="program">
              {programs.map((pr) => (
                <option key={pr.slug} value={pr.slug}>
                  {c.programs[pr.slug].name}
                </option>
              ))}
            </SelectField>
            <TextField
              label={f.parentName}
              name="parentName"
              required
              autoComplete="name"
              className="sm:col-span-2"
            />
            <TextField label={f.email} name="email" type="email" required autoComplete="email" />
            <TextField label={f.phone} name="phone" type="tel" required autoComplete="tel" />
            <SelectField label={f.des} name="des" className="sm:col-span-2">
              <option value="not-sure">{c.enrollPage.des.notSure}</option>
              <option value="yes">{c.enrollPage.yes}</option>
              <option value="no">{c.enrollPage.des.no}</option>
            </SelectField>
            {failed ? (
              <FormFailure template={c.enrollPage.failed} phone={failed.phone} phoneHref={failed.phoneHref} />
            ) : null}
            <div className="sm:col-span-2">
              <FormPrivacyNotice className="mb-3" />
              <Button type="submit" size="lg" disabled={sending}>
                {sending ? c.enrollPage.sending : c.enrollPage.submit}
              </Button>
            </div>
          </ValidatedForm>
        )}
      </div>
    </SiteShell>
  );
}
