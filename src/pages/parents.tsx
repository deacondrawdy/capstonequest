import { CalendarDays, ExternalLink, FileText, HeartHandshake, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, parentDocuments } from "@/data/school";
import { AppLink, useContent, type AppPath } from "@/lib/locale";


export function ParentsPage() {
  const c = useContent();

  const resources: Array<{ icon: typeof CalendarDays; to: AppPath; title: string; text: string; cta: string }> = [
    { icon: CalendarDays, to: "/tour", ...c.parents.resources.tours },
    { icon: FileText, to: "/enroll", ...c.parents.resources.packet },
    { icon: ShieldCheck, to: "/policies", ...c.parents.resources.policies },
    { icon: HeartHandshake, to: "/contact", ...c.parents.resources.partnership },
  ];

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.parents.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{c.parents.title}</h1>
          <p className="mt-3 text-muted">
            {c.parents.lede}
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1100px] gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
        {resources.map((r) => (
          <article key={r.title} className="rounded-[28px] border border-line p-6">
            <r.icon className="size-8 text-brand" />
            <h2 className="mt-3 text-xl font-bold text-navy">{r.title}</h2>
            <p className="mt-2 text-sm text-muted">{r.text}</p>
            <AppLink to={r.to} className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline">
              {r.cta} →
            </AppLink>
          </article>
        ))}
      </div>
      <section className="border-t border-line bg-paper py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">{c.parents.docsTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            {c.parents.docsLede}
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {parentDocuments.map((doc) => (
              <li key={c.documents[doc.id].title}>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start justify-between gap-3 rounded-2xl border border-line p-4 hover:bg-paper-soft"
                >
                  <span>
                    <span className="font-bold text-navy">{c.documents[doc.id].title}</span>
                    <span className="mt-1 block text-sm text-muted">{c.documents[doc.id].blurb}</span>
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
          <h2 className="text-3xl font-extrabold">{c.parents.tuitionTitle}</h2>
          <p className="mt-3 text-paper/80">
            {c.parents.tuitionText}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="gold">
              <AppLink to="/tuition">{c.parents.tuitionCta}</AppLink>
            </Button>
            <Button asChild variant="outline">
              <AppLink to="/contact">{c.parents.tuitionAsk}</AppLink>
            </Button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[800px] px-5 py-14 sm:px-8">
        <h2 className="text-3xl font-extrabold text-navy">{c.parents.faqTitle}</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faqs.map((f) => (
            <AccordionItem key={f.id} value={f.id}>
              <AccordionTrigger>{c.faqs[f.id].q}</AccordionTrigger>
              <AccordionContent>{c.faqs[f.id].a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteShell>
  );
}
