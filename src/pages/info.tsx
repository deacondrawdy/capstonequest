import { BookOpen, Building2, CalendarDays, FileText, GraduationCap, Receipt, ShieldCheck, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { AppLink, useContent, type AppPath } from "@/lib/locale";



export function InfoPage() {
  const c = useContent();

  const cards: Array<{ icon: typeof Building2; to: AppPath; title: string; text: string; cta: string }> = [
    { icon: Building2, to: "/about", ...c.infoPage.cards.about },
    { icon: GraduationCap, to: "/programs", ...c.infoPage.cards.programs },
    { icon: Users, to: "/parents", ...c.infoPage.cards.parents },
    { icon: BookOpen, to: "/clever", ...c.infoPage.cards.clever },
    { icon: CalendarDays, to: "/tour", ...c.infoPage.cards.tour },
    { icon: Receipt, to: "/tuition", ...c.infoPage.cards.tuition },
    { icon: ShieldCheck, to: "/policies", ...c.infoPage.cards.policies },
    { icon: FileText, to: "/why-us", ...c.infoPage.cards.whyUs },
  ];

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.infoPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{c.infoPage.title}</h1>
          <p className="mt-3 text-muted">
            {c.infoPage.lede}
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1100px] gap-5 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-[28px] border border-line p-6">
            <card.icon className="size-7 text-brand" />
            <h2 className="mt-3 text-lg font-bold text-navy">{card.title}</h2>
            <p className="mt-2 text-sm text-muted">{card.text}</p>
            <AppLink to={card.to} className="mt-4 inline-flex text-sm font-semibold text-brand hover:underline">
              {card.cta} →
            </AppLink>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
