import { staff } from "@/data/school";
import { useContent } from "@/lib/locale";

type Member = (typeof staff)[number];

/**
 * Staff cards, shared by /about and the campus pages.
 *
 * The bios are welcome letters the teachers wrote themselves, several
 * paragraphs each, so the portrait and name sit on one row and the letter runs
 * the full width of the card underneath.
 */
export function StaffGrid({ members }: { members: readonly Member[] }) {
  const c = useContent();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {members.map((s) => (
        <article key={s.id} className="rounded-[28px] bg-paper p-6 shadow-card">
          <div className="flex items-center gap-4">
            {/* Empty alt: the name is the heading right beside it, and repeating
                it makes a screen reader say every name twice. */}
            <img
              src={s.image}
              alt=""
              width={640}
              height={640}
              className="size-24 shrink-0 rounded-2xl object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-navy">{s.name}</h3>
              <p className="text-sm font-semibold text-brand">
                {c.aboutPage.staff[s.id].role} · {c.aboutPage.staff[s.id].campus}
              </p>
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            {c.aboutPage.staff[s.id].bio.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
