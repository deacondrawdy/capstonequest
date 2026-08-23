import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { campuses, school } from "@/data/school";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 sm:px-8 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="mb-4 inline-block rounded-full bg-paper p-1">
            <Logo size="sm" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-paper/75">
            {school.tagline} DES-approved Pre-K in Tucson and Yuma since 2013.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold tracking-wide uppercase">Visit</h3>
          <ul className="space-y-4 text-sm text-paper/80">
            {campuses.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/campuses/$slug"
                  params={{ slug: c.slug }}
                  className="font-semibold text-paper hover:underline"
                >
                  {c.name}
                </Link>
                <p className="mt-1 flex gap-2">
                  <MapPin className="mt-0.5 size-3.5 shrink-0" />
                  <span>
                    {c.address}
                    <br />
                    {c.cityState}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold tracking-wide uppercase">Explore</h3>
          <ul className="space-y-2 text-sm text-paper/80">
            <li>
              <Link to="/programs" className="hover:text-gold">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/why-us" className="hover:text-gold">
                Why Us
              </Link>
            </li>
            <li>
              <Link to="/parents" className="hover:text-gold">
                Parents
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold">
                About
              </Link>
            </li>
            <li>
              <Link to="/clever" className="hover:text-gold">
                Clever & portals
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-gold">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/info" className="hover:text-gold">
                Info
              </Link>
            </li>
            <li>
              <Link to="/tour" className="hover:text-gold">
                Schedule a tour
              </Link>
            </li>
            <li>
              <Link to="/portal" className="hover:text-gold">
                Parent portal
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold tracking-wide uppercase">Talk with us</h3>
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
              {school.hours}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-6 py-4 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Capstone Quest Academy. All rights reserved.</p>
          <p>Arizona DES approved · State licensed · Ages 3–5</p>
        </div>
      </div>
    </footer>
  );
}
