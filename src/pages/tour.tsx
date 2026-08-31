import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { campuses, school } from "@/data/school";
import { saveTour } from "@/lib/inquiries";
import { AppLink, useContent } from "@/lib/locale";

export function TourPage({ preset }: { preset?: string }) {
  const c = useContent();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const picked = campuses.find((c) => c.slug === String(fd.get("campus") ?? ""));
    setSending(true);
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
      toast.success(c.tourPage.sent);
    } catch {
      toast.error(c.tourPage.failed.replace("{phone}", picked?.phone ?? school.phone));
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteShell>
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.tourPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{c.tourPage.title}</h1>
          <p className="mt-3 text-muted">
            {c.tourPage.lede}
              </p>
          <img
            src="/images/circle-time.jpg"
            alt=""
            className="mt-8 hidden h-64 w-full rounded-[28px] object-cover lg:block"
          />
        </div>
        <div className="rounded-[28px] bg-paper-soft p-6 sm:p-8">
          {done ? (
            <div>
              <h2 className="text-2xl font-bold text-navy">{c.tourPage.doneTitle}</h2>
              <p className="mt-2 text-muted">
            {c.tourPage.doneText}
              </p>
              <Button asChild className="mt-6">
                <AppLink to="/enroll">{c.common.startEnrollment}</AppLink>
              </Button>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
              <Field label={c.tourPage.fields.name} name="name" required className="sm:col-span-2" />
              <Field label={c.tourPage.fields.email} name="email" type="email" required />
              <Field label={c.tourPage.fields.phone} name="phone" type="tel" required />
              <div className="grid gap-1.5">
                <Label htmlFor="campus">{c.tourPage.fields.campus}</Label>
                <select
                  id="campus"
                  name="campus"
                  defaultValue={preset ?? "tucson"}
                  className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
                >
                  {campuses.map((cam) => (
                    <option key={cam.slug} value={cam.slug}>
                      {c.campuses[cam.slug].name}
                    </option>
                  ))}
                </select>
              </div>
              <Field label={c.tourPage.fields.childAge} name="childAge" placeholder={c.tourPage.fields.childAgeHint} />
              <Field label={c.tourPage.fields.date} name="date" type="date" required />
              <div className="grid gap-1.5">
                <Label htmlFor="time">{c.tourPage.fields.time}</Label>
                <select
                  id="time"
                  name="time"
                  className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
                  defaultValue="9:00 AM"
                >
                  {["8:30 AM", "9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-1.5 sm:col-span-2">
                <Label htmlFor="notes">{c.tourPage.fields.notes}</Label>
                <Textarea id="notes" name="notes" placeholder={c.tourPage.fields.notesHint} />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" disabled={sending}>
                  {sending ? c.tourPage.sending : c.tourPage.submit}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`grid gap-1.5 ${className ?? ""}`}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} placeholder={placeholder} />
    </div>
  );
}
