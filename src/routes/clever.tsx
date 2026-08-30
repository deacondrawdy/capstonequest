import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/clever")({ component: CleverPage });

const portals = [
  {
    name: "Clever",
    href: "https://clever.com/oauth/login",
    blurb: "The single sign-on the current AmeriSchools site uses for students and staff.",
  },
  {
    name: "PowerSchool",
    href: "https://amerischools.powerschool.com/public/home.html",
    blurb: "Attendance, grades for K–8 siblings, and the historic “See how my child is doing” link.",
  },
  {
    name: "ClassDojo",
    href: "https://www.classdojo.com/",
    blurb: "Classroom stories and messages from the lead teacher.",
  },
  {
    name: "RAZ Kids",
    href: "https://www.raz-kids.com/",
    blurb: "Leveled readers for Pre-K 4s who are ready for books at home.",
  },
  {
    name: "Khan Academy Kids",
    href: "https://www.khanacademy.org/kids",
    blurb: "Optional practice — never homework for three-year-olds.",
  },
];

function CleverPage() {
  return (
    <SiteShell>
      <div className="bg-navy py-14 text-paper">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">Clever</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Portals families already know</h1>
          <p className="mt-3 text-paper/80">
            The live AmeriSchools site sends “See how my child is doing” to PowerSchool and puts Clever in the top bar.
            Those links still work.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[800px] space-y-4 px-5 py-14 sm:px-8">
        {portals.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-start justify-between gap-4 rounded-[24px] border border-line p-5 hover:bg-paper-soft"
          >
            <span>
              <span className="font-bold text-navy">{p.name}</span>
              <span className="mt-1 block text-sm text-muted">{p.blurb}</span>
            </span>
            <ExternalLink className="mt-1 size-4 shrink-0 text-brand" />
          </a>
        ))}
      </div>
    </SiteShell>
  );
}
