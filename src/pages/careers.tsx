import { useState, type FormEvent } from "react";
import { Heart, Sparkles, Users, Wallet } from "lucide-react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site-shell";
import { useContent } from "@/lib/locale";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { campuses, school } from "@/data/school";
import { saveJobApp } from "@/lib/inquiries";




export function CareersPage() {
  const c = useContent();
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
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
      toast.success(c.careersPage.received);
    } catch {
      toast.error(`We could not send this. Please call ${school.phone}.`);
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
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
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
        <div className="rounded-[28px] bg-paper-soft p-6 sm:p-8">
          {done ? (
            <p className="text-lg font-semibold text-navy">
              {c.careersPage.thanks}
            </p>
          ) : (
            <form className="grid gap-4" onSubmit={onSubmit}>
              <h2 className="text-xl font-bold text-navy">{c.careersPage.applyTitle}</h2>
              <div className="grid gap-1.5">
                <Label htmlFor="name">{c.careersPage.fields.name}</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">{c.careersPage.fields.email}</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="phone">{c.careersPage.fields.phone}</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="role">{c.careersPage.fields.role}</Label>
                <select
                  id="role"
                  name="role"
                  className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
                >
                  {openings.map((o) => (
                    <option key={o.role}>{o.role}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="campus">{c.careersPage.fields.campus}</Label>
                <select
                  id="campus"
                  name="campus"
                  className="h-11 rounded-md border border-input bg-paper px-3 text-sm"
                >
                  {campuses.map((cam) => (
                    <option key={cam.slug}>{c.campuses[cam.slug].name}</option>
                  ))}
                  <option>{c.careersPage.eitherCampus}</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="message">{c.careersPage.fields.message}</Label>
                <Textarea id="message" name="message" required />
              </div>
              <Button type="submit" size="lg" disabled={sending}>
                {sending ? c.careersPage.sending : c.careersPage.submit}
              </Button>
            </form>
          )}
        </div>
      </div>
    </SiteShell>
  );
}
