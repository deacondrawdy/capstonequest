import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { campuses, school } from "@/data/school";
import { saveContact } from "@/lib/inquiries";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    try {
      await saveContact({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        topic: String(fd.get("topic") ?? ""),
        message: String(fd.get("message") ?? ""),
      });
      setDone(true);
      toast.success("Message sent. We’ll reply shortly.");
    } catch {
      toast.error(`We could not send this. Please call ${school.phone}.`);
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteShell>
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Contact</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">Let’s talk</h1>
          <p className="mt-3 text-muted">
            Call, write, or send a note. Front offices answer 7:00 AM – 6:00 PM on school days.
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
          <div className="mt-8 space-y-4">
            {campuses.map((c) => (
              <p key={c.slug} className="flex gap-3 text-sm text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>
                  <span className="font-semibold text-navy">{c.name}</span>
                  <br />
                  {c.address}, {c.cityState}
                  <br />
                  {c.phone}
                </span>
              </p>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] bg-paper-soft p-6 sm:p-8">
          {done ? (
            <p className="text-lg font-semibold text-navy">
              Thanks — a director will write back soon.
            </p>
          ) : (
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="topic">Topic</Label>
                <select
                  id="topic"
                  name="topic"
                  className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
                >
                  <option>General question</option>
                  <option>Tour</option>
                  <option>Enrollment</option>
                  <option>DES / tuition</option>
                  <option>Current family</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" required />
              </div>
              <Button type="submit" size="lg" disabled={sending}>
                {sending ? "Sending…" : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </SiteShell>
  );
}
