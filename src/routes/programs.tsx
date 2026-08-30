import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { programs } from "@/data/school";

export const Route = createFileRoute("/programs")({ component: ProgramsPage });

function ProgramsPage() {
  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Programs</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">Pre-K built for ages 3–5</h1>
          <p className="mt-3 max-w-2xl text-muted">
            Play first. Skills close behind. Every program is DES-approved and taught by teachers who stay with your child through the year.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] space-y-16 px-5 py-14 sm:px-8">
        {programs.map((p, i) => (
          <article
            id={p.slug}
            key={p.slug}
            className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2"
          >
            <img
              src={p.image}
              alt=""
              className={`h-72 w-full rounded-[28px] object-cover object-top ${i % 2 ? "lg:order-2" : ""}`}
            />
            <div>
              <p className="text-xs font-bold tracking-wide text-brand uppercase">
                {p.ages} · {p.hours}
              </p>
              <h2 className="mt-1 text-3xl font-extrabold text-navy">{p.name}</h2>
              <p className="mt-3 text-muted">{p.summary}</p>
              <ul className="mt-5 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-icon-green" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/enroll">Start enrollment</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/tuition">See rates</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
