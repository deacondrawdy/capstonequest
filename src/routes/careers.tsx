import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Users, Wallet } from "lucide-react";
import { toast } from "sonner";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { campuses } from "@/data/school";
import { saveJobApp } from "@/lib/inquiries";

export const Route = createFileRoute("/careers")({ component: CareersPage });

const perks = [
  { icon: Users, title: "Small classes", text: "Teach ten children, not thirty. You will actually know every family." },
  { icon: Wallet, title: "Real benefits", text: "Insurance, retirement contributions, tuition reimbursement, extra-income incentives." },
  { icon: Sparkles, title: "Room to invent", text: "Studios, outdoor play, and a curriculum that still lets teachers be creative." },
  { icon: Heart, title: "A family shop", text: "Pre-K campuses in Tucson and Yuma with the same calm, DES-approved culture." },
];

const openings = [
  { role: "Lead Pre-K Teacher", campus: "Tucson or Yuma", req: "Fingerprint clearance, bachelor’s degree, AEPA or NES preferred." },
  { role: "Assistant Teacher", campus: "Tucson or Yuma", req: "Love of three-to-five-year-olds, classroom experience a plus." },
  { role: "Before & After Care Lead", campus: "Either campus", req: "7:00 AM start or 3:30–6:00 PM close. Reliable, warm, certified." },
];

function CareersPage() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    saveJobApp({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      role: String(fd.get("role") ?? ""),
      campus: String(fd.get("campus") ?? ""),
      message: String(fd.get("message") ?? ""),
    });
    setDone(true);
    toast.success("Application received.");
  }

  return (
    <SiteShell>
      <div className="bg-navy py-14 text-paper">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">Careers</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Come teach the year that matters</h1>
          <p className="mt-3 text-paper/80">
            Capstone Quest hires people who like small rooms, real play, and parents who want to be partners. Fingerprint
            clearance is required. A bachelor’s degree and AEPA or NES are expected for lead roles.
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
          <h2 className="text-2xl font-extrabold text-navy">Open roles</h2>
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
            <p className="text-lg font-semibold text-navy">Thank you — a director will write back if there’s a match.</p>
          ) : (
            <form className="grid gap-4" onSubmit={onSubmit}>
              <h2 className="text-xl font-bold text-navy">Apply</h2>
              <div className="grid gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="role">Role</Label>
                <select id="role" name="role" className="h-11 rounded-md border border-input bg-paper px-3 text-sm">
                  {openings.map((o) => (
                    <option key={o.role}>{o.role}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="campus">Campus</Label>
                <select id="campus" name="campus" className="h-11 rounded-md border border-input bg-paper px-3 text-sm">
                  {campuses.map((c) => (
                    <option key={c.slug}>{c.name}</option>
                  ))}
                  <option>Either campus</option>
                </select>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="message">Why this work</Label>
                <Textarea id="message" name="message" required />
              </div>
              <Button type="submit" size="lg">
                Submit application
              </Button>
            </form>
          )}
        </div>
      </div>
    </SiteShell>
  );
}
