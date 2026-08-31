import { ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { useContent } from "@/lib/locale";



export function CleverPage() {
  const c = useContent();

  const portals = [
    { name: "Clever", href: "https://clever.com/oauth/login", blurb: c.cleverPage.portals.clever },
    { name: "PowerSchool", href: "https://amerischools.powerschool.com/public/home.html", blurb: c.cleverPage.portals.powerschool },
    { name: "ClassDojo", href: "https://www.classdojo.com/", blurb: c.cleverPage.portals.classdojo },
    { name: "RAZ Kids", href: "https://www.raz-kids.com/", blurb: c.cleverPage.portals.raz },
    { name: "Khan Academy Kids", href: "https://www.khanacademy.org/kids", blurb: c.cleverPage.portals.khan },
  ];

  return (
    <SiteShell>
      <div className="bg-navy py-14 text-paper">
        <div className="mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-sm font-bold tracking-[0.14em] text-gold uppercase">{c.cleverPage.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{c.cleverPage.title}</h1>
          <p className="mt-3 text-paper/80">
            {c.cleverPage.lede}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[800px] space-y-4 px-5 py-14 sm:px-8">
        {portals.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-start justify-between gap-4 rounded-[24px] border border-line p-5 hover:bg-paper-soft"
          >
            <span>
              <span className="font-bold text-navy">{p.name}</span>
              <span className="mt-1 block text-sm text-muted">{p.blurb}</span>
            </span>
            <ExternalLink className="mt-1 size-4 shrink-0 text-brand" />
          </a>
        ))}
      </div>
    </SiteShell>
  );
}
