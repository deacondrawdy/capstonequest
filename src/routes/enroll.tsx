import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { campuses, programs } from "@/data/school";
import { saveEnroll } from "@/lib/inquiries";

export const Route = createFileRoute("/enroll")({ component: EnrollPage });

function EnrollPage() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    saveEnroll({
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
    toast.success("Enrollment started — we will follow up within one business day.");
  }

  return (
    <SiteShell>
      <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-8">
        <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Enroll</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
          Start in as little as one day
        </h1>
        <p className="mt-3 text-muted">
          Tell us about your child. If a seat is open, many families finish the packet the same day they tour.
        </p>
        {done ? (
          <div className="mt-10 rounded-[28px] bg-paper-soft p-8">
            <h2 className="text-2xl font-bold text-navy">Application received</h2>
            <p className="mt-2 text-muted">
              A director will call to confirm campus, start date, and any DES paperwork. Keep an eye on your email.
            </p>
          </div>
        ) : (
          <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
            <Field label="Child’s first name" name="childFirst" required />
            <Field label="Child’s last name" name="childLast" required />
            <Field label="Date of birth" name="dob" type="date" required />
            <Field label="Preferred start" name="start" type="date" />
            <div className="grid gap-1.5">
              <Label htmlFor="campus">Campus</Label>
              <select id="campus" name="campus" className="h-11 rounded-md border border-input bg-paper px-3 text-sm" defaultValue="tucson">
                {campuses.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="program">Program</Label>
              <select id="program" name="program" className="h-11 rounded-md border border-input bg-paper px-3 text-sm">
                {programs.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <Field label="Parent / guardian" name="parentName" required className="sm:col-span-2" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <div className="grid gap-1.5 sm:col-span-2">
              <Label htmlFor="des">Will you use a DES child care subsidy?</Label>
              <select id="des" name="des" className="h-11 rounded-md border border-input bg-paper px-3 text-sm">
                <option value="not-sure">Not sure yet</option>
                <option value="yes">Yes</option>
                <option value="no">No — private pay</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg">
                Submit enrollment
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
