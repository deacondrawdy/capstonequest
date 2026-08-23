import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ExternalLink, FileText, HeartHandshake, Smartphone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, parentDocuments } from "@/data/school";

export const Route = createFileRoute("/parents")({ component: ParentsPage });

const resources = [
  {
    icon: Smartphone,
    title: "Parent portal",
    text: "Daily notes, photos, meals, and messages from your child’s teacher.",
    to: "/portal",
    cta: "See how my child is doing",
  },
  {
    icon: CalendarDays,
    title: "Tours & calendar",
    text: "Walk the campus, meet teachers, and peek at a real morning meeting.",
    to: "/tour",
    cta: "Schedule a tour",
  },
  {
    icon: FileText,
    title: "Enrollment packet",
    text: "Health forms, emergency contacts, and DES paperwork in one sitting.",
    to: "/enroll",
    cta: "Start enrollment",
  },
  {
    icon: HeartHandshake,
    title: "Family partnership",
    text: "Conferences twice a year, open-door mornings, and teachers who call back.",
    to: "/contact",
    cta: "Talk with us",
  },
];

function ParentsPage() {
  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Parents</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">You’re on the team</h1>
          <p className="mt-3 text-muted">
            Handbooks, menus, the portal, and the same family resources that live under Info on the current site.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1100px] gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
        {resources.map((r) => (
          <article key={r.title} className="rounded-[28px] border border-line p-6">
            <r.icon className="size-8 text-brand" />
            <h2 className="mt-3 text-xl font-bold text-navy">{r.title}</h2>
            <p className="mt-2 text-sm text-muted">{r.text}</p>
            <Link to={r.to} className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline">
              {r.cta} →
            </Link>
          </article>
        ))}
      </div>
      <section className="border-t border-line bg-paper py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">Handbooks, menus & forms</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            The same documents families download from AmeriSchools Info — parent rights, wellness, menus, and supplies.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {parentDocuments.map((doc) => (
              <li key={doc.title}>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start justify-between gap-3 rounded-2xl border border-line p-4 hover:bg-paper-soft"
                >
                  <span>
                    <span className="font-bold text-navy">{doc.title}</span>
                    <span className="mt-1 block text-sm text-muted">{doc.blurb}</span>
                  </span>
                  <ExternalLink className="mt-1 size-4 shrink-0 text-brand" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="tuition" className="scroll-mt-28 bg-navy py-14 text-paper">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold">Tuition & DES</h2>
          <p className="mt-3 text-paper/80">
            We are 100% approved by the Arizona Department of Economic Security. Families using a DES child care
            subsidy enroll in the same classrooms as private-pay families. Ask during your tour about current rates,
            sibling discounts, and how we handle vouchers — we will walk the paperwork with you.
          </p>
          <Button asChild variant="gold" className="mt-6">
            <Link to="/contact">Ask about tuition</Link>
          </Button>
        </div>
      </section>
      <section className="mx-auto max-w-[800px] px-5 py-14 sm:px-8">
        <h2 className="text-3xl font-extrabold text-navy">Parent FAQs</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteShell>
  );
}
