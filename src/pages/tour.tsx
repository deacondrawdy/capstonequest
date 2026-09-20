import { useState } from "react";
import { Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { CalBooker } from "@/components/cal-booker";
import { campuses } from "@/data/school";
import { useContent } from "@/lib/locale";
import { CAMPUS_DEFAULT, type CampusPref } from "@/lib/campus";

function isCampus(value: string | undefined): value is CampusPref {
  return value === "tucson" || value === "yuma";
}

export function TourPage({ preset }: { preset?: string }) {
  const c = useContent();
  // ?campus=yuma on the link from a campus page; otherwise Tucson, matching the
  // sitewide default in lib/campus.ts.
  const [slug, setSlug] = useState<CampusPref>(isCampus(preset) ? preset : CAMPUS_DEFAULT);
  const campus = campuses.find((cam) => cam.slug === slug) ?? campuses[0];

  return (
    <SiteShell>
      <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">{c.tourPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">{c.tourPage.title}</h1>
          <p className="mt-3 text-muted">{c.tourPage.lede}</p>
        </div>

        {/* Two buttons rather than a tab list: each one swaps the booker below,
            and `aria-pressed` says which campus is showing. */}
        <div className="mt-8">
          <p id="campus-choice" className="text-sm font-bold text-navy">
            {c.tourPage.pickCampus}
          </p>
          <div className="mt-2 flex flex-wrap gap-2" role="group" aria-labelledby="campus-choice">
            {campuses.map((cam) => {
              const active = cam.slug === slug;
              return (
                <button
                  key={cam.slug}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSlug(cam.slug as CampusPref)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "border-navy bg-navy text-paper"
                      : "border-line bg-paper text-navy hover:bg-paper-soft"
                  }`}
                >
                  {c.campuses[cam.slug].name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="min-w-0 rounded-[28px] border border-line bg-paper p-2 sm:p-4">
            {/* Keyed by campus so switching mounts a fresh booker. */}
            <CalBooker
              key={campus.slug}
              calLink={campus.calLink}
              namespace={campus.slug === "tucson" ? "tucson-tour" : "yuma-tour"}
              className="min-h-[640px] w-full"
            />
          </div>

          <div className="min-w-0">
            <div className="rounded-[28px] bg-paper-soft p-6">
              <h2 className="text-lg font-bold text-navy">{c.tourPage.helpTitle}</h2>
              <p className="mt-2 text-sm text-muted">{c.tourPage.helpText}</p>
              <p className="mt-4 flex items-center gap-2 text-sm">
                <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                <a href={campus.phoneHref} className="font-semibold text-navy hover:underline">
                  {campus.phone}
                </a>
              </p>
              <p className="mt-2 text-sm text-muted">
                {campus.address}
                <br />
                {campus.cityState}
              </p>
              {/* The booker itself is English-only, so a Spanish reader is told
                  before they meet it, not after. */}
              <p className="mt-4 text-sm text-muted">{c.tourPage.bookingNote}</p>
            </div>
            <img
              src="/images/classroom-morning.jpg"
              alt=""
              className="mt-6 hidden h-56 w-full rounded-[28px] object-cover lg:block"
            />
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
