import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { campuses, school, social } from "@/data/school";
import { features } from "@/data/features";
import { AppLink, useContent } from "@/lib/locale";

export function SiteFooter() {
  const c = useContent();

  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 sm:px-8 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="mb-4 inline-flex rounded-full bg-paper p-1">
            <Logo size="sm" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-paper/75">{c.footer.blurb}</p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold tracking-wide uppercase">{c.footer.visit}</h2>
          <ul className="space-y-4 text-sm text-paper/80">
            {campuses.map((campus) => (
              <li key={campus.slug}>
                <AppLink
                  to="/campuses/$slug"
                  params={{ slug: campus.slug }}
                  className="font-semibold text-paper hover:underline"
                >
                  {c.campuses[campus.slug].name}
                </AppLink>
                <p className="mt-1 flex gap-2">
                  <MapPin className="mt-0.5 size-3.5 shrink-0" />
                  <span>
                    {campus.address}
                    <br />
                    {campus.cityState}
                  </span>
                </p>
                {/* Each campus shows its own local number so the footer NAP on
                    every page matches that campus's Google Business Profile. */}
                <p className="mt-1 flex gap-2">
                  <Phone className="mt-0.5 size-3.5 shrink-0" />
                  <a href={campus.phoneHref} className="hover:text-gold">
                    {campus.phone}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold tracking-wide uppercase">{c.footer.explore}</h2>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <AppLink to="/programs" className="hover:text-gold">
                {c.footer.links.programs}
              </AppLink>
            </li>
            <li>
              <AppLink to="/why-us" className="hover:text-gold">
                {c.footer.links.whyUs}
              </AppLink>
            </li>
            <li>
              <AppLink to="/parents" className="hover:text-gold">
                {c.footer.links.parents}
              </AppLink>
            </li>
            <li>
              <AppLink to="/about" className="hover:text-gold">
                {c.footer.links.about}
              </AppLink>
            </li>
            <li>
              <AppLink to="/tuition" className="hover:text-gold">
                {c.footer.links.tuition}
              </AppLink>
            </li>
            <li>
              <AppLink to="/policies" className="hover:text-gold">
                {c.footer.links.policies}
              </AppLink>
            </li>
            {features.careers ? (
              <li>
                <AppLink to="/careers" className="hover:text-gold">
                  {c.footer.links.careers}
                </AppLink>
              </li>
            ) : null}
            <li>
              <AppLink to="/faq" className="hover:text-gold">
                {c.footer.links.faq}
              </AppLink>
            </li>
            <li>
              <AppLink to="/info" className="hover:text-gold">
                {c.footer.links.info}
              </AppLink>
            </li>
            <li>
              <AppLink to="/tour" className="hover:text-gold">
                {c.footer.links.tour}
              </AppLink>
            </li>
            <li>
              <AppLink to="/handbook" className="hover:text-gold">
                {c.footer.links.handbook}
              </AppLink>
            </li>
            <li>
              <AppLink to="/privacy" className="hover:text-gold">
                {c.footer.links.privacy}
              </AppLink>
            </li>
            <li>
              <AppLink to="/accessibility" className="hover:text-gold">
                {c.footer.links.accessibility}
              </AppLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold tracking-wide uppercase">{c.footer.talk}</h2>
          <ul className="space-y-3 text-sm text-paper/80">
            <li className="flex items-center gap-2">
              <Phone className="size-4" />
              <a href={school.phoneHref} className="hover:text-gold">
                {school.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4" />
              <a href={`mailto:${school.email}`} className="hover:text-gold">
                {school.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4" />
              {c.common.hoursLine}
            </li>
          </ul>
          {/* Footer, not the header: see the note on `social` in data/school.ts. */}
          <h2 className="mt-6 mb-3 text-sm font-bold tracking-wide uppercase">{c.footer.follow}</h2>
          <ul className="flex gap-3">
            {social.map((profile) => {
              const Icon = profile.id === "facebook" ? Facebook : Instagram;
              return (
                <li key={profile.id}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-paper transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                  >
                    <Icon className="size-5" aria-hidden />
                    {/* The school's name is in the label, so a screen reader and
                        a search engine read these as the school's profiles. */}
                    <span className="sr-only">
                      {c.footer.followLabel.replace("{name}", profile.name)} {c.common.opensNewTab}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-4 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Capstone Quest Academy. {c.footer.rights}
          </p>
          <p>{c.footer.badges}</p>
        </div>
      </div>
    </footer>
  );
}
