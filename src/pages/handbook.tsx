import { Download, Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { campuses, dailySchedule, school } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";

const PDF_HREF = "/documents/capstone-quest-parent-handbook.pdf";

function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-extrabold tracking-tight text-navy">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </article>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Sub({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="font-semibold text-navy">{title}</p>
      <p className="mt-1">{body}</p>
    </div>
  );
}

/**
 * The parent handbook, on the web.
 *
 * Campus addresses and phone numbers come from `school.ts`, not from the PDF.
 * Page 5 of that document lists campuses the school no longer runs and phone
 * numbers that no longer answer; this page cannot reproduce that mistake
 * because it holds no copy of those facts.
 *
 * The daily schedule reuses the shared `dailySchedule` for the same reason, so
 * it cannot drift away from the homepage and /why-us.
 */
export function HandbookPage() {
  const c = useContent();
  const h = c.handbookPage;

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[820px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{h.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{h.title}</h1>
          <p className="mt-3 font-semibold text-brand">{h.subtitle}</p>
          <p className="mt-4 leading-relaxed text-muted">{h.lede}</p>
          <Button asChild className="mt-6">
            <a href={PDF_HREF} target="_blank" rel="noreferrer">
              <Download className="size-4" />
              {h.downloadPdf}
            </a>
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-[820px] space-y-12 px-5 py-12 sm:px-8">
        <Section title={h.foreword.title}>
          <p>{h.foreword.p1}</p>
          <p>{h.foreword.p2}</p>
          <p>{h.foreword.p3}</p>
          <p>{h.foreword.p4}</p>
        </Section>

        <section className="rounded-[28px] border border-line p-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-navy">{h.officesTitle}</h2>
          <p className="mt-2 text-sm text-muted">{h.officesNote}</p>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2">
            {campuses.map((campus) => (
              <li key={campus.slug}>
                <p className="font-bold text-navy">{c.campuses[campus.slug].name}</p>
                <p className="mt-1 flex gap-2 text-sm text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    {campus.address}
                    <br />
                    {campus.cityState}
                  </span>
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm">
                  <Phone className="size-4 shrink-0 text-brand" />
                  <a href={campus.phoneHref} className="font-semibold text-navy hover:underline">
                    {campus.phone}
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-5 flex items-center gap-2 text-sm">
            <Mail className="size-4 shrink-0 text-brand" />
            <a href={`mailto:${school.email}`} className="font-semibold text-navy hover:underline">
              {school.email}
            </a>
          </p>
        </section>

        <Section title={h.philosophy.title}>
          <p className="font-semibold text-navy">{h.philosophy.valuesTitle}</p>
          <ul className="flex flex-wrap gap-2">
            {h.philosophy.values.map((v) => (
              <li
                key={v}
                className="rounded-full bg-paper-soft px-3 py-1 text-sm font-semibold text-navy"
              >
                {v}
              </li>
            ))}
          </ul>
          <p className="pt-2 font-semibold text-navy">{h.philosophy.descriptionTitle}</p>
          <p>{h.philosophy.description}</p>
          <p className="pt-2 font-semibold text-navy">{h.philosophy.datesTitle}</p>
          <p>{h.philosophy.dates}</p>
          <p className="pt-2 font-semibold text-navy">{h.philosophy.curriculumTitle}</p>
          <p>{h.philosophy.curriculum}</p>
          <p className="pt-2 font-semibold text-navy">{h.philosophy.centersTitle}</p>
          <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {h.philosophy.centers.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
          <blockquote className="rounded-2xl bg-paper-soft p-5">
            <p className="font-script text-xl text-brand">{h.philosophy.quote}</p>
            <footer className="mt-1 text-sm font-semibold text-navy">
              {h.philosophy.quoteAuthor}
            </footer>
          </blockquote>
          <p>{h.philosophy.partnership}</p>
        </Section>

        <Section title={h.admissions.title}>
          <p className="font-semibold text-navy">{h.admissions.criteriaTitle}</p>
          <p>{h.admissions.criteriaIntro}</p>
          <Bullets items={h.admissions.criteria} />
          <p className="pt-2 font-semibold text-navy">{h.admissions.registrationTitle}</p>
          <p>{h.admissions.registrationIntro}</p>
          <Bullets items={h.admissions.registration} />
          <p>{h.admissions.registrationNote}</p>
          <p className="pt-2 font-semibold text-navy">{h.admissions.contractTitle}</p>
          <p>{h.admissions.contract}</p>
          <p>
            <AppLink to="/tuition" className="font-semibold text-brand underline underline-offset-2">
              {h.admissions.contractLink}
            </AppLink>
          </p>
          <p className="pt-2 font-semibold text-navy">{h.admissions.collectionsTitle}</p>
          <p>{h.admissions.collections}</p>
          <p className="pt-2 font-semibold text-navy">{h.admissions.refundTitle}</p>
          <p>{h.admissions.refund}</p>
        </Section>

        <Section title={h.participation.title}>
          <Sub {...h.participation.arrival} />
          <Sub {...h.participation.dismissal} />
          <Sub {...h.participation.attendance} />
          <div>
            <p className="font-semibold text-navy">{h.participation.options.title}</p>
            <p className="mt-1">{h.participation.options.body}</p>
            <div className="mt-2">
              <Bullets items={h.participation.options.items} />
            </div>
          </div>
          <Sub {...h.participation.immunizations} />
          <Sub {...h.participation.medication} />
          <Sub {...h.participation.snack} />
          <Sub {...h.participation.backpacks} />
          <Sub {...h.participation.fireDrills} />
          <div>
            <p className="font-semibold text-navy">{h.participation.emergency.title}</p>
            <p className="mt-1">{h.participation.emergency.bodyIntro}</p>
            <div className="mt-2">
              <Bullets items={h.participation.emergency.items} />
            </div>
            <p className="mt-2">{h.participation.emergency.bodyEnd}</p>
          </div>
          <Sub {...h.participation.conferences} />
          <Sub {...h.participation.discipline} />
          <Sub {...h.participation.pesticide} />
        </Section>

        <Section id="suspension" title={h.suspension.title}>
          <p className="font-semibold text-navy">{h.suspension.commitmentTitle}</p>
          <p>{h.suspension.commitment}</p>
          <p className="pt-2 font-semibold text-navy">{h.suspension.preventionTitle}</p>
          <Bullets items={h.suspension.prevention} />
          <p className="pt-2 font-semibold text-navy">{h.suspension.familyTitle}</p>
          <p>{h.suspension.familyIntro}</p>
          <Bullets items={h.suspension.family} />
          <p className="pt-2 font-semibold text-navy">{h.suspension.inclusionTitle}</p>
          <p>{h.suspension.inclusionIntro}</p>
          <Bullets items={h.suspension.inclusion} />
          <p className="pt-2 font-semibold text-navy">{h.suspension.consultationTitle}</p>
          <p>{h.suspension.consultationIntro}</p>
          <Bullets items={h.suspension.consultation} />
          <p className="pt-2 font-semibold text-navy">{h.suspension.documentationTitle}</p>
          <p>{h.suspension.documentationIntro}</p>
          <p className="pt-2 font-semibold text-navy">{h.suspension.lastResortTitle}</p>
          <p>{h.suspension.lastResortIntro}</p>
          <Bullets items={h.suspension.lastResort} />
          <p>{h.suspension.transitionIntro}</p>
          <Bullets items={h.suspension.transition} />
          <p className="pt-2 font-semibold text-navy">{h.suspension.reviewTitle}</p>
          <p>{h.suspension.reviewIntro}</p>
        </Section>

        <Section title={h.scheduleTitle}>
          <p className="text-sm">{h.scheduleNote}</p>
          <ol className="space-y-2">
            {dailySchedule.map((item) => (
              <li
                key={item.id}
                className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line pb-2"
              >
                <span className="text-sm font-extrabold text-brand tabular-nums">{item.time}</span>
                <span className="font-semibold text-navy">{c.schedule[item.id]}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm">{h.napNote}</p>
          <p className="text-sm">{h.recessNote}</p>
        </Section>
      </div>
    </SiteShell>
  );
}
