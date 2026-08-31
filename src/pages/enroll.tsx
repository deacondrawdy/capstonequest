import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { campuses, programs, school } from "@/data/school";
import { useContent } from "@/lib/locale";
import { saveEnroll } from "@/lib/inquiries";


export function EnrollPage() {
  const c = useContent();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const picked = campuses.find((c) => c.slug === String(fd.get("campus") ?? ""));
    setSending(true);
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
      toast.success(c.enrollPage.sent);
    } catch {
      toast.error(c.enrollPage.failed.replace("{phone}", picked?.phone ?? school.phone));
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteShell>
      <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-8">
        <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.enrollPage.eyebrow}</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
          {c.enrollPage.title}
        </h1>
        <p className="mt-3 text-muted">
          {c.enrollPage.lede2}
        </p>
        {done ? (
          <div className="mt-10 rounded-[28px] bg-paper-soft p-8">
            <h2 className="text-2xl font-bold text-navy">{c.enrollPage.doneTitle}</h2>
            <p className="mt-2 text-muted">
          {c.enrollPage.doneText}
        </p>
          </div>
        ) : (
          <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
            <Field label={c.enrollPage.fields.childFirst} name="childFirst" required />
            <Field label={c.enrollPage.fields.childLast} name="childLast" required />
            <Field label={c.enrollPage.fields.dob} name="dob" type="date" required />
            <Field label={c.enrollPage.fields.start} name="start" type="date" />
            <div className="grid gap-1.5">
              <Label htmlFor="campus">{c.enrollPage.fields.campus}</Label>
              <select
                id="campus"
                name="campus"
                className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
                defaultValue="tucson"
              >
                {campuses.map((cam) => (
                  <option key={cam.slug} value={cam.slug}>
                    {c.campuses[cam.slug].name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="program">{c.enrollPage.fields.program}</Label>
              <select
                id="program"
                name="program"
                className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
              >
                {programs.map((pr) => (
                  <option key={pr.slug} value={pr.slug}>
                    {c.programs[pr.slug].name}
                  </option>
                ))}
              </select>
            </div>
            <Field label={c.enrollPage.fields.parentName} name="parentName" required className="sm:col-span-2" />
            <Field label={c.enrollPage.fields.email} name="email" type="email" required />
            <Field label={c.enrollPage.fields.phone} name="phone" type="tel" required />
            <div className="grid gap-1.5 sm:col-span-2">
              <Label htmlFor="des">{c.enrollPage.fields.des}</Label>
              <select
                id="des"
                name="des"
                className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
              >
                <option value="not-sure">{c.enrollPage.des.notSure}</option>
                <option value="yes">{c.enrollPage.yes}</option>
                <option value="no">{c.enrollPage.des.no}</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" disabled={sending}>
                {sending ? c.enrollPage.sending : c.enrollPage.submit}
              </Button>
            </div>
          </form>
        )}
      </div>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={`grid gap-1.5 ${className ?? ""}`}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}
