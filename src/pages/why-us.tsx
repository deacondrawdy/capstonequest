import { Heart, Shield, GraduationCap, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { dailySchedule, faqs } from "@/data/school";
import { GoogleReviews } from "@/components/google-reviews";
import { useContent } from "@/lib/locale";
import { Photo } from "@/components/photo";



export function WhyUsPage() {
  const c = useContent();

  const pillars = [
    { icon: Heart, ...c.whyUsPage.pillars.small },
    { icon: Shield, ...c.whyUsPage.pillars.safety },
    { icon: GraduationCap, ...c.whyUsPage.pillars.ready },
    { icon: Users, ...c.whyUsPage.pillars.family },
  ];

  return (
    <SiteShell>
      <div className="bg-navy py-16 text-paper">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">{c.whyUsPage.eyebrow}</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {c.whyUsPage.title}
          </h1>
          <p className="mt-4 max-w-xl text-paper/75">
            {c.whyUsPage.lede}
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

      <section id="safety" className="bg-paper-soft py-14">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Photo src="/images/playground-smile.jpg" sizes="(min-width: 1024px) 50vw, 100vw" alt={c.whyUsPage.playgroundAlt} className="h-72 w-full rounded-[28px] object-cover" />
          <div>
            <h2 className="text-3xl font-extrabold text-navy">{c.whyUsPage.desTitle}</h2>
            <p className="mt-3 text-muted">
            {c.whyUsPage.desText}
          </p>
          </div>
        </div>
      </section>

      <section id="day" className="py-14">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">{c.whyUsPage.dayTitle}</h2>
          <ol className="mt-8 space-y-4">
            {dailySchedule.map((item) => (
              <li key={item.id} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line pb-3">
                <span className="text-sm font-extrabold text-brand tabular-nums">{item.time}</span>
                <p className="font-semibold text-navy">{c.schedule[item.id]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">{c.whyUsPage.wordsTitle}</h2>
          <GoogleReviews cardClassName="bg-paper shadow-card" />
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-5 py-14 sm:px-8">
        <h2 className="text-3xl font-extrabold text-navy">{c.whyUsPage.faqTitle}</h2>
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
