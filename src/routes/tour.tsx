import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { campuses, school } from "@/data/school";
import { saveTour } from "@/lib/inquiries";

type Search = { campus?: string };

export const Route = createFileRoute("/tour")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    campus: typeof s.campus === "string" ? s.campus : undefined,
  }),
  component: TourPage,
});

function TourPage() {
  const { campus: preset } = Route.useSearch();
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
      toast.success("Tour requested — we will confirm by email.");
    } catch {
      toast.error(`We could not send your request. Please call ${picked?.phone ?? school.phone}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteShell>
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Visit</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">Schedule a tour</h1>
          <p className="mt-3 text-muted">
            Walk the classrooms, meet a lead teacher, and see a real morning. Most tours last about
            40 minutes. We can often confirm the same day.
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
              <h2 className="text-2xl font-bold text-navy">You’re on the calendar</h2>
              <p className="mt-2 text-muted">
                We saved your request and will email a confirmation. Want to enroll while you wait?
              </p>
              <Button asChild className="mt-6">
                <Link to="/enroll">Start enrollment</Link>
              </Button>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
              <Field label="Your name" name="name" required className="sm:col-span-2" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" required />
              <div className="grid gap-1.5">
                <Label htmlFor="campus">Campus</Label>
                <select
                  id="campus"
                  name="campus"
                  defaultValue={preset ?? "tucson"}
                  className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
                >
                  {campuses.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <Field label="Child’s age" name="childAge" placeholder="e.g. 3 years, 10 months" />
              <Field label="Preferred date" name="date" type="date" required />
              <div className="grid gap-1.5">
                <Label htmlFor="time">Preferred time</Label>
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
                <Label htmlFor="notes">Anything we should know?</Label>
                <Textarea id="notes" name="notes" placeholder="Sibling, DES voucher, allergies…" />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" disabled={sending}>
                  {sending ? "Sending…" : "Request this tour"}
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
