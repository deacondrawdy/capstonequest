import { useState } from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
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
import { campuses, school, social } from "@/data/school";
import { useContent } from "@/lib/locale";
import { saveContact } from "@/lib/inquiries";

export function ContactPage() {
  const c = useContent();
  const f = c.contactPage.fields;
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function onValidSubmit(fd: FormData) {
    setSending(true);
    setFailed(false);
    try {
      await saveContact({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        topic: String(fd.get("topic") ?? ""),
        message: String(fd.get("message") ?? ""),
      });
      setDone(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteShell>
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.contactPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{c.contactPage.title}</h1>
          <p className="mt-3 text-muted">
            {c.contactPage.lede}
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-5 text-brand" />
              <a href={school.phoneHref} className="font-semibold text-navy">
                {school.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-brand" />
              <a href={`mailto:${school.email}`} className="font-semibold text-navy">
                {school.email}
              </a>
            </li>
          </ul>
          {/* Someone on this page is looking for a way to reach the school, so
              the profiles belong here as well as in the footer. */}
          <div className="mt-8">
            <h2 className="text-sm font-bold tracking-wide text-navy uppercase">{c.footer.follow}</h2>
            <ul className="mt-3 flex gap-3">
              {social.map((profile) => {
                const Icon = profile.id === "facebook" ? Facebook : Instagram;
                return (
                  <li key={profile.id}>
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-11 items-center justify-center rounded-full border border-line text-brand transition-colors hover:bg-paper-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      <Icon className="size-5" aria-hidden />
                      <span className="sr-only">
                        {c.footer.followLabel.replace("{name}", profile.name)} {c.common.opensNewTab}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-8 space-y-4">
            {campuses.map((cam) => (
              <p key={cam.slug} className="flex gap-3 text-sm text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>
                  <span className="font-semibold text-navy">{c.campuses[cam.slug].name}</span>
                  <br />
                  {cam.address}, {cam.cityState}
                  <br />
                  {cam.phone}
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="min-w-0 rounded-[28px] bg-paper-soft p-6 sm:p-8">
          {done ? (
            <FormDone>
              <p className="text-lg font-semibold text-navy">{c.contactPage.thanks}</p>
            </FormDone>
          ) : (
            <ValidatedForm className="grid gap-4" onValidSubmit={onValidSubmit}>
              <TextField label={f.name} name="name" required autoComplete="name" />
              <TextField label={f.email} name="email" type="email" required autoComplete="email" />
              <SelectField label={f.topic} name="topic">
                <option>{c.contactPage.topics.general}</option>
                <option>{c.contactPage.topics.tour}</option>
                <option>{c.contactPage.topics.enrollment}</option>
                <option>{c.contactPage.topics.des}</option>
                <option>{c.contactPage.topics.current}</option>
              </SelectField>
              <TextAreaField label={f.message} name="message" required />
              {failed ? (
                <FormFailure template={c.contactPage.failed} phone={school.phone} phoneHref={school.phoneHref} />
              ) : null}
              <FormPrivacyNotice className="mb-1" />
              <Button type="submit" size="lg" disabled={sending}>
                {sending ? c.contactPage.sending : c.contactPage.submit}
              </Button>
            </ValidatedForm>
          )}
        </div>
      </div>
    </SiteShell>
  );
}
