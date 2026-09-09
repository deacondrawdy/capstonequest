import { SiteShell } from "@/components/site-shell";
import { StaffGrid } from "@/components/staff-grid";
import { Button } from "@/components/ui/button";
import { staff } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";


export function AboutPage() {
  const c = useContent();

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.aboutPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
            {c.aboutPage.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {c.aboutPage.lede}
          </p>
          <p className="mt-4 text-muted">
            {c.aboutPage.hours}
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <img src="/images/circle-time.jpg" alt={c.aboutPage.imageAlt} className="h-80 w-full rounded-[28px] object-cover" />
        <div>
          <h2 className="text-3xl font-extrabold text-navy">{c.aboutPage.believeTitle}</h2>
          <p className="mt-3 text-muted">
            {c.aboutPage.believe1}
          </p>
          <p className="mt-3 text-muted">
            {c.aboutPage.believe2}
          </p>
        </div>
      </div>
      <section className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">{c.aboutPage.peopleTitle}</h2>
          <div className="mt-8">
            <StaffGrid members={staff} />
          </div>
          <Button asChild className="mt-10">
            <AppLink to="/tour">{c.aboutPage.meetUs}</AppLink>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
