import { useState } from "react";
import { Heart, Sparkles, Users, Wallet } from "lucide-react";
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
import { useContent } from "@/lib/locale";
import { Button } from "@/components/ui/button";
import { campuses, school } from "@/data/school";
import { saveJobApp } from "@/lib/inquiries";

export function CareersPage() {
  const c = useContent();
  const f = c.careersPage.fields;
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const perks = [
    { icon: Users, ...c.careersPage.perks.classes },
    { icon: Wallet, ...c.careersPage.perks.benefits },
    { icon: Sparkles, ...c.careersPage.perks.invent },
    { icon: Heart, ...c.careersPage.perks.family },
  ];
  const openings = [
    c.careersPage.openings.lead,
    c.careersPage.openings.assistant,
    c.careersPage.openings.care,
  ];

  async function onValidSubmit(fd: FormData) {
    setSending(true);
    setFailed(false);
    try {
      await saveJobApp({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        phone: String(fd.get("phone") ?? ""),
        role: String(fd.get("role") ?? ""),
        campus: String(fd.get("campus") ?? ""),
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
      <div className="bg-navy py-14 text-paper">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">{c.careersPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            {c.careersPage.title}
          </h1>
          <p className="mt-3 text-paper/80">
            {c.careersPage.lede}
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1100px] gap-6 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {perks.map((p) => (
          <article key={p.title} className="rounded-[24px] bg-paper-soft p-5">
            <p.icon className="size-7 text-brand" />
            <h2 className="mt-3 font-bold text-navy">{p.title}</h2>
            <p className="mt-1 text-sm text-muted">{p.text}</p>
          </article>
        ))}
      </div>
      {/* min-w-0 on both columns: without it a grid item is as wide as its
          longest unbreakable content, and the Spanish role names pushed this
          page 121px sideways at 320px. */}
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div className="min-w-0">
          <h2 className="text-2xl font-extrabold text-navy">{c.careersPage.openTitle}</h2>
          <ul className="mt-5 space-y-4">
            {openings.map((o) => (
              <li key={o.role} className="rounded-[24px] border border-line p-5">
                <p className="font-bold text-navy">{o.role}</p>
                <p className="text-sm font-semibold text-brand">{o.campus}</p>
                <p className="mt-2 text-sm text-muted">{o.req}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 rounded-[28px] bg-paper-soft p-6 sm:p-8">
          {done ? (
            <FormDone>
              <p className="text-lg font-semibold text-navy">{c.careersPage.thanks}</p>
            </FormDone>
          ) : (
            <>
              <h2 className="mb-4 text-xl font-bold text-navy">{c.careersPage.applyTitle}</h2>
              <ValidatedForm className="grid gap-4" onValidSubmit={onValidSubmit}>
                <TextField label={f.name} name="name" required autoComplete="name" />
                <TextField label={f.email} name="email" type="email" required autoComplete="email" />
                <TextField label={f.phone} name="phone" type="tel" required autoComplete="tel" />
                <SelectField label={f.role} name="role">
                  {openings.map((o) => (
                    <option key={o.role}>{o.role}</option>
                  ))}
                </SelectField>
                <SelectField label={f.campus} name="campus">
                  {campuses.map((cam) => (
                    <option key={cam.slug}>{c.campuses[cam.slug].name}</option>
                  ))}
                  <option>{c.careersPage.eitherCampus}</option>
                </SelectField>
                <TextAreaField label={f.message} name="message" required />
                {failed ? (
                  <FormFailure template={c.careersPage.failed} phone={school.phone} phoneHref={school.phoneHref} />
                ) : null}
                <FormPrivacyNotice className="mb-1" />
                <Button type="submit" size="lg" disabled={sending}>
                  {sending ? c.careersPage.sending : c.careersPage.submit}
                </Button>
              </ValidatedForm>
            </>
          )}
        </div>
      </div>
    </SiteShell>
  );
}
