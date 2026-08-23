import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { campuses } from "@/data/school";

export const Route = createFileRoute("/campuses/$slug")({
  component: CampusDetail,
});

function CampusDetail() {
  const { slug } = Route.useParams();
  const campus = campuses.find((c) => c.slug === slug);
  if (!campus) throw notFound();

  return (
    <SiteShell>
      <div className="relative h-64 overflow-hidden sm:h-80">
        <img src={campus.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-navy-deep/10" />
        <div className="absolute bottom-8 left-0 w-full px-5 sm:px-8">
          <div className="mx-auto max-w-[1100px]">
            <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">Campus</p>
            <h1 className="text-4xl font-extrabold text-paper">{campus.name}</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-lg leading-relaxed text-ink/80">{campus.blurb}</p>
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
              {campus.hours}, Monday–Friday
            </li>
            <li className="flex items-center gap-3">
              <Users className="size-5 text-brand" />
              {campus.capacity}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/tour" search={{ campus: campus.slug }}>
                Schedule a tour
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={campus.mapUrl} target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </Button>
          </div>
        </div>
        <aside className="h-fit rounded-[28px] bg-paper-soft p-6">
          <h2 className="font-bold text-navy">What you’ll see on a tour</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Classrooms sized for ten children or fewer</li>
            <li>Shade-sail playground and outdoor studios</li>
            <li>Secure entry and signed-in pickup</li>
            <li>The same DES-approved curriculum on both campuses</li>
          </ul>
          <p className="mt-5 text-sm text-muted">
            Prefer the other campus?{" "}
            <Link to="/campuses" className="font-semibold text-brand hover:underline">
              Compare locations
            </Link>
            .
          </p>
        </aside>
      </div>
    </SiteShell>
  );
}
