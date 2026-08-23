import { createFileRoute } from "@tanstack/react-router";
import { Heart, Shield, GraduationCap, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { dayInTheLife, faqs, testimonials } from "@/data/school";

export const Route = createFileRoute("/why-us")({ component: WhyUsPage });

const pillars = [
  {
    icon: Heart,
    title: "Small by design",
    text: "Classes of ten or fewer mean your child is known — not managed. Teachers write real notes, not templates.",
  },
  {
    icon: Shield,
    title: "Safety you can feel",
    text: "Secure entries, signed pickup, trained staff, and a culture of calm. We are 100% DES-approved and state-licensed.",
  },
  {
    icon: GraduationCap,
    title: "School-ready, still playful",
    text: "Literacy, math, and self-help skills live inside studios and stories — never worksheets for three-year-olds.",
  },
  {
    icon: Users,
    title: "Family partnership",
    text: "Tours, conferences, and a parent portal so you never have to wonder how the day actually went.",
  },
];

function WhyUsPage() {
  return (
    <SiteShell>
      <div className="bg-navy py-16 text-paper">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">Why us</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            The Pre-K Arizona families stay with
          </h1>
          <p className="mt-4 max-w-xl text-paper/75">
            Since 2013 we have been the DES-certified home away from home in Tucson and Yuma — affordable on purpose, excellent on purpose.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1100px] gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
        {pillars.map((p) => (
          <article key={p.title} className="rounded-[28px] bg-paper-soft p-6">
            <p.icon className="size-8 text-brand" />
            <h2 className="mt-3 text-xl font-bold text-navy">{p.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </article>
        ))}
      </div>

      <section id="safety" className="scroll-mt-28 bg-paper-soft py-14">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <img src="/images/playground.jpg" alt="Shaded preschool playground" className="h-72 w-full rounded-[28px] object-cover" />
          <div>
            <h2 className="text-3xl font-extrabold text-navy">Approved by DES. Built for families.</h2>
            <p className="mt-3 text-muted">
              Both campuses are fully approved by the Arizona Department of Economic Security. We accept child care subsidies, and every family — voucher or private pay — gets the same classroom, the same teachers, the same day.
            </p>
          </div>
        </div>
      </section>

      <section id="day" className="scroll-mt-28 py-14">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">A day in Pre-K</h2>
          <ol className="mt-8 space-y-4">
            {dayInTheLife.map((item) => (
              <li key={item.time} className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-line pb-4">
                <span className="font-extrabold text-brand tabular-nums">{item.time}</span>
                <div>
                  <p className="font-bold text-navy">{item.title}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">Families in their own words</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-[28px] bg-paper p-6 shadow-card">
                <p className="text-sm leading-relaxed">“{t.quote}”</p>
                <footer className="mt-4 text-sm font-bold text-navy">
                  {t.name}
                  <span className="block font-medium text-muted">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-5 py-14 sm:px-8">
        <h2 className="text-3xl font-extrabold text-navy">Questions we hear on every tour</h2>
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
