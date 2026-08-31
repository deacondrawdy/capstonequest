import { Clock, Home, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { AppLink, useContent } from "@/lib/locale";
import type { Campus } from "@/data/school";

/** `campus` is resolved in the route's beforeLoad so an unknown slug 404s. */
export function CampusDetail({ campus }: { campus: Campus }) {
  const c = useContent();

  return (
    <SiteShell>
      {"banner" in campus && campus.banner ? (
        // A 4:1 banner cannot fill the fixed-height hero below without cropping
        // its sides away on anything narrower than ~1290px -- which would lose
        // the enrolment banner and the campus sign, the whole subject of the
        // photo. So it runs at its own aspect ratio and the title sits under it.
        <>
          <div className="bg-navy-deep">
            <img
              src={campus.banner}
              alt={c.campuses[campus.slug].bannerAlt}
              width={1145}
              height={283}
              className="h-auto w-full"
            />
          </div>
          <div className="border-b border-line bg-paper-soft py-6">
            <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
              <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.campusPage.eyebrow}</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-navy">{c.campuses[campus.slug].name}</h1>
            </div>
          </div>
        </>
      ) : (
        <div className="relative h-64 overflow-hidden sm:h-80">
          <img src={campus.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-navy-deep/10" />
          <div className="absolute bottom-8 left-0 w-full px-5 sm:px-8">
            <div className="mx-auto max-w-[1100px]">
              <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">{c.campusPage.eyebrow}</p>
              <h1 className="text-4xl font-extrabold text-paper">{c.campuses[campus.slug].name}</h1>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-lg leading-relaxed text-ink/80">{c.campuses[campus.slug].blurb}</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-5 text-brand" />
              <span>
                {campus.address}
                <br />
                {campus.cityState}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 text-brand" />
              <a href={campus.phoneHref} className="font-semibold text-navy hover:underline">
                {campus.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-5 text-brand" />
              {c.common.hoursLine}
            </li>
            <li className="flex items-center gap-3">
              <Home className="size-5 text-brand" />
              {c.campuses[campus.slug].feel}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <AppLink to="/tour" search={{ campus: campus.slug }}>
                {c.common.scheduleTour}
              </AppLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={campus.mapUrl} target="_blank" rel="noreferrer">
                {c.campusPage.openInMaps}
              </a>
            </Button>
          </div>
        </div>
        <aside className="h-fit rounded-[28px] bg-paper-soft p-6">
          <h2 className="font-bold text-navy">{c.campusPage.tourTitle}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            {c.campusPage.tourList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            {c.campusPage.preferOther}{" "}
            <AppLink to="/campuses" className="font-semibold text-brand hover:underline">
              {c.campusPage.compare}
            </AppLink>
            .
          </p>
        </aside>
      </div>
    </SiteShell>
  );
}
