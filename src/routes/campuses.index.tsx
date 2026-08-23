import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { campuses } from "@/data/school";

export const Route = createFileRoute("/campuses/")({ component: CampusesPage });

function CampusesPage() {
  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Campuses</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">Tucson & Yuma</h1>
          <p className="mt-3 max-w-2xl text-muted">
            Two warm, licensed campuses. One play-based Pre-K. Tour the one closest to home — or
            both.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {campuses.map((c) => (
              <article key={c.slug} className="overflow-hidden rounded-[28px] bg-paper shadow-card">
                <img
                  src={c.image}
                  alt={`${c.name} exterior`}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-navy">{c.name}</h2>
                  <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                    <MapPin className="mt-0.5 size-4 shrink-0" />
                    {c.address}, {c.cityState}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                    <Phone className="size-4" />
                    {c.phone}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/80">{c.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link to="/campuses/$slug" params={{ slug: c.slug }}>
                        Campus details
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/tour" search={{ campus: c.slug }}>
                        Book a tour
                      </Link>
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
