import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { staff } from "@/data/school";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <div className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">About</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-navy">
            A quest for curious kids
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Welcome to Capstone Quest Academy, where little steps make big dreams come true. Since 2013 our
            Tucson and Yuma campuses have been a home away from home — a DES-certified Pre-K that prepares children
            aged three to five for kindergarten without rushing childhood.
          </p>
          <p className="mt-4 text-muted">
            The instructional day runs five days a week. Early arrival (7:00–8:00 AM) and late dismissal (3:30–6:00 PM)
            are offered as fee-for-service care so working families can use the full 7 AM–6 PM window.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2">
        <img src="/images/circle-time.jpg" alt="Circle time in a Capstone Quest classroom" className="h-80 w-full rounded-[28px] object-cover" />
        <div>
          <h2 className="text-3xl font-extrabold text-navy">What we believe</h2>
          <p className="mt-3 text-muted">
            Children learn by doing, talking, and belonging. Our teachers design studios — art, blocks, stories, outdoor
            science — where literacy and math show up as tools, not drills. Families are partners, not visitors.
          </p>
          <p className="mt-3 text-muted">
            Owl (our mortarboarded mascot) stands for wisdom earned gently: try, notice, try again.
          </p>
        </div>
      </div>
      <section className="bg-paper-soft py-14">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <h2 className="text-3xl font-extrabold text-navy">People who know your child</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {staff.map((s) => (
              <article key={s.name} className="flex gap-5 rounded-[28px] bg-paper p-5 shadow-card">
                <img src={s.image} alt={s.name} className="size-28 shrink-0 rounded-2xl object-cover" />
                <div>
                  <h3 className="text-xl font-bold text-navy">{s.name}</h3>
                  <p className="text-sm font-semibold text-brand">
                    {s.role} · {s.campus}
                  </p>
                  <p className="mt-2 text-sm text-muted">{s.bio}</p>
                </div>
              </article>
            ))}
          </div>
          <Button asChild className="mt-10">
            <Link to="/tour">Meet us on a tour</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
