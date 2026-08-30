import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { policies, school } from "@/data/school";

export const Route = createFileRoute("/policies")({ component: PoliciesPage });

function PoliciesPage() {
  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Policies</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
            Enrollment, release, and care policies
          </h1>
          <p className="mt-3 text-muted">
            The licensing policies posted at both campuses, in the same words. Ask the front office
            for anything here in print.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[800px] px-5 py-14 sm:px-8">
        <div className="space-y-10">
          {policies.map((p) => (
            <article key={p.title}>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy">{p.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
              {"list" in p && p.list ? (
                <ul className="mt-3 space-y-1.5">
                  {p.list.map((item) => (
                    <li key={item} className="flex gap-3 text-muted">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {"footer" in p && p.footer ? (
                <p className="mt-3 leading-relaxed text-muted">{p.footer}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <h2 className="text-2xl font-extrabold text-navy">Questions about any of this?</h2>
          <p className="mt-3 text-muted">
            Call {school.phone} or stop by the front office. Suspension and expulsion policies are
            available to parents on request, and licensing inspection reports can be reviewed on the
            premises.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">Talk with us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/parents">Parent resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
