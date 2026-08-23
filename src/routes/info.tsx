import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Building2, CalendarDays, FileText, GraduationCap, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/info")({ component: InfoPage });

const cards = [
  {
    icon: Building2,
    title: "About Capstone Quest",
    text: "DES-approved Pre-K in Tucson and Yuma since 2013. Little steps, big dreams.",
    to: "/about",
    cta: "Our story",
  },
  {
    icon: GraduationCap,
    title: "Programs",
    text: "Pre-K 3s, Pre-K 4s, and before & after care, 7 AM–6 PM, five days a week.",
    to: "/programs",
    cta: "See programs",
  },
  {
    icon: Users,
    title: "Parent resources",
    text: "Handbooks, menus, parent rights, wellness policy, and supplies.",
    to: "/parents",
    cta: "For parents",
  },
  {
    icon: BookOpen,
    title: "Clever & portals",
    text: "Clever, PowerSchool, ClassDojo, RAZ Kids — plus the Pre-K parent portal.",
    to: "/clever",
    cta: "Open portals",
  },
  {
    icon: CalendarDays,
    title: "Schedule a tour",
    text: "Walk a real morning meeting. Most tours last about 40 minutes.",
    to: "/tour",
    cta: "Book a tour",
  },
  {
    icon: FileText,
    title: "Why families stay",
    text: "Small classes, school-ready play, and a day that still feels like childhood.",
    to: "/why-us",
    cta: "Why us",
  },
];

function InfoPage() {
  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Info</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">The school, in one place</h1>
          <p className="mt-3 text-muted">
            Everything that used to live under Info on the current site — about us, programs, parent resources, and
            portals — rewritten for Pre-K families.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1100px] gap-5 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article key={c.title} className="rounded-[28px] border border-line p-6">
            <c.icon className="size-7 text-brand" />
            <h2 className="mt-3 text-lg font-bold text-navy">{c.title}</h2>
            <p className="mt-2 text-sm text-muted">{c.text}</p>
            <Link to={c.to as "/info"} className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline">
              {c.cta} →
            </Link>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
