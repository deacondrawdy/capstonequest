import { MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { campuses } from "@/data/school";
import { AppLink, useContent } from "@/lib/locale";


export function CampusesPage() {
  const cc = useContent();

  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{cc.campusesPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{cc.campusesPage.title}</h1>
          <p className="mt-3 max-w-2xl text-muted">
            {cc.campusesPage.lede}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {campuses.map((c) => (
              <article key={c.slug} className="overflow-hidden rounded-[28px] bg-paper shadow-card">
                <img
                  src={c.image}
                  alt={`${cc.campuses[c.slug].name} ${cc.campusesPage.exteriorAlt}`}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-navy">{cc.campuses[c.slug].name}</h2>
                  <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                    <MapPin className="mt-0.5 size-4 shrink-0" />
                    {c.address}, {c.cityState}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                    <Phone className="size-4" />
                    {c.phone}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/80">{cc.campuses[c.slug].blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild>
                      <AppLink to="/campuses/$slug" params={{ slug: c.slug }}>
                        {cc.campusesPage.details}
                      </AppLink>
                    </Button>
                    <Button asChild variant="outline">
                      <AppLink to="/tour" search={{ campus: c.slug }}>
                        {cc.campusesPage.bookTour}
                      </AppLink>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
