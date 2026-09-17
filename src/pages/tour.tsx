import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { FormPrivacyNotice } from "@/components/form-privacy-notice";
import {
  FormDone,
  FormFailure,
  SelectField,
  TextAreaField,
  TextField,
  ValidatedForm,
} from "@/components/form-kit";
import { Button } from "@/components/ui/button";
import { campuses, school } from "@/data/school";
import { saveTour } from "@/lib/inquiries";
import { AppLink, useContent } from "@/lib/locale";

/** Tour slots. The value sent to the office is fixed; the label is localized. */
const TIMES = ["8:30 AM", "9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"] as const;

type Contact = { phone: string; phoneHref: string };

export function TourPage({ preset }: { preset?: string }) {
  const c = useContent();
  const f = c.tourPage.fields;
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState<Contact | null>(null);

  async function onValidSubmit(fd: FormData) {
    const picked = campuses.find((cam) => cam.slug === String(fd.get("campus") ?? ""));
    setSending(true);
    setFailed(null);
    try {
      await saveTour({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        campus: String(fd.get("campus") ?? ""),
        childAge: String(fd.get("childAge") ?? ""),
        date: String(fd.get("date") ?? ""),
        time: String(fd.get("time") ?? ""),
        notes: String(fd.get("notes") ?? ""),
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
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.tourPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{c.tourPage.title}</h1>
          <p className="mt-3 text-muted">{c.tourPage.lede}</p>
          <img
            src="/images/classroom-morning.jpg"
            alt=""
            className="mt-8 hidden h-64 w-full rounded-[28px] object-cover lg:block"
          />
        </div>
        <div className="min-w-0 rounded-[28px] bg-paper-soft p-6 sm:p-8">
          {done ? (
            <FormDone>
              <h2 className="text-2xl font-bold text-navy">{c.tourPage.doneTitle}</h2>
              <p className="mt-2 text-muted">{c.tourPage.doneText}</p>
              <Button asChild className="mt-6">
                <AppLink to="/enroll">{c.common.startEnrollment}</AppLink>
              </Button>
            </FormDone>
          ) : (
            <ValidatedForm className="grid gap-4 sm:grid-cols-2" onValidSubmit={onValidSubmit}>
              <TextField label={f.name} name="name" required autoComplete="name" className="sm:col-span-2" />
              <TextField label={f.email} name="email" type="email" required autoComplete="email" />
              <TextField label={f.phone} name="phone" type="tel" required autoComplete="tel" />
              <SelectField label={f.campus} name="campus" defaultValue={preset ?? "tucson"}>
                {campuses.map((cam) => (
                  <option key={cam.slug} value={cam.slug}>
                    {c.campuses[cam.slug].name}
                  </option>
                ))}
              </SelectField>
              <TextField label={f.childAge} name="childAge" placeholder={f.childAgeHint} />
              <TextField label={f.date} name="date" type="date" required />
              <SelectField label={f.time} name="time" defaultValue="9:00 AM">
                {TIMES.map((t, i) => (
                  <option key={t} value={t}>
                    {c.tourPage.timeLabels[i] ?? t}
                  </option>
                ))}
              </SelectField>
              <TextAreaField label={f.notes} name="notes" placeholder={f.notesHint} className="sm:col-span-2" />
              {failed ? (
                <FormFailure template={c.tourPage.failed} phone={failed.phone} phoneHref={failed.phoneHref} />
              ) : null}
              <div className="sm:col-span-2">
                <FormPrivacyNotice className="mb-3" />
                <Button type="submit" size="lg" disabled={sending}>
                  {sending ? c.tourPage.sending : c.tourPage.submit}
                </Button>
              </div>
            </ValidatedForm>
          )}
        </div>
      </div>
    </SiteShell>
  );
}
