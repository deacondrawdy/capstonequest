import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, Star } from "lucide-react";
import { Logo } from "@/components/logo";
import { SiteSearch } from "@/components/site-search";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { LocaleSwitch } from "@/components/locale-switch";
import { CampusSwitch } from "@/components/campus-switch";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { campuses } from "@/data/school";
import { AppLink, stripLocale, useContent, type AppPath } from "@/lib/locale";
import { cn } from "@/lib/utils";

function DropTrigger({ children }: { children: ReactNode }) {
  return (
    <DropdownMenuTrigger className="inline-flex items-center gap-0.5 px-1 pb-1 text-[13px] font-semibold tracking-[0.04em] text-ink/80 uppercase outline-none transition-colors hover:text-navy focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[state=open]:text-navy">
      {children}
      <ChevronDown className="size-3.5" />
    </DropdownMenuTrigger>
  );
}

function TextLink({
  to,
  active,
  children,
}: {
  to: AppPath;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <AppLink
      to={to}
      className={cn(
        "relative px-1 pb-1 text-[13px] font-semibold tracking-[0.04em] text-ink/80 uppercase transition-colors hover:text-navy",
        active && "text-navy",
      )}
    >
      {children}
      {active ? <span className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gold" /> : null}
    </AppLink>
  );
}

export function TopBanner() {
  const c = useContent();
  return (
    // A named region, so the enrollment notice is reachable by landmark
    // navigation. As a bare div it sat outside every landmark on the page.
    <section aria-label={c.banner.label} className="bg-gold text-navy">
      <div className="mx-auto flex max-w-[1400px] items-center justify-center px-4 py-2 sm:px-6">
        <p className="flex items-center gap-2 text-center text-sm font-bold sm:text-base">
          <Star className="size-3.5 shrink-0 fill-navy text-navy" aria-hidden />
          {c.banner.text}
        </p>
      </div>
    </section>
  );
}

export function SiteHeader() {
  // Compared against the locale-stripped path so /es/tuition marks Tuition
  // active exactly as /tuition does.
  const path = useRouterState({ select: (s) => stripLocale(s.location.pathname) });
  const [open, setOpen] = useState(false);
  const c = useContent();
  const headerRef = useRef<HTMLElement>(null);

  // Publishes the header's real height as --header-h, which sets
  // scroll-padding-top in styles.css (WCAG 2.4.11). Measured rather than
  // hard-coded: the header is 64px on a small phone, 126px on desktop, and
  // taller again when a visitor picks larger text in the accessibility menu.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const root = document.documentElement;
    const publish = () => root.style.setProperty("--header-h", `${Math.ceil(header.getBoundingClientRect().height)}px`);
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const mobileLinks: Array<{ to: AppPath; label: string }> = [
    { to: "/", label: c.nav.home },
    { to: "/campuses", label: c.nav.campuses },
    // Was missing from the mobile menu entirely.
    { to: "/about", label: c.nav.about },
    { to: "/info", label: c.nav.info },
    { to: "/programs", label: c.nav.programs },
    { to: "/tuition", label: c.nav.tuitionFees },
    { to: "/policies", label: c.nav.policies },
    { to: "/careers", label: c.nav.careers },
    { to: "/contact", label: c.nav.contact },
    { to: "/parents", label: c.nav.parents },
    { to: "/tour", label: c.common.scheduleTour },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 bg-paper/95 shadow-[var(--shadow-nav)] backdrop-blur-md"
    >
      <div className="hidden border-b border-line sm:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-3 px-4 py-1.5 sm:px-6 lg:px-10">
          <CampusSwitch />
          <span className="text-ink/25" aria-hidden>
            |
          </span>
          <LocaleSwitch />
          <span className="text-ink/25" aria-hidden>
            |
          </span>
          <AccessibilityMenu />
          <span className="text-ink/25" aria-hidden>
            |
          </span>
          <SiteSearch variant="text" />
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-3 py-2 sm:px-6 lg:px-8">
        {/* Slightly smaller below 360px: see the action row below. */}
        <Logo className="-my-2 max-[359px]:[&_img]:size-16" />

        {/* Seven items now. The gap tightens below xl so the longer Spanish
            labels still fit on one line at 1024px. */}
        <nav
          aria-label={c.nav.mainLabel}
          className="ml-2 hidden flex-1 items-center justify-center gap-3 lg:flex xl:gap-6"
        >
          <TextLink to="/" active={path === "/"}>
            {c.nav.home}
          </TextLink>
          <DropdownMenu>
            <DropTrigger>{c.nav.campuses}</DropTrigger>
            <DropdownMenuContent align="start">
              {campuses.map((campus) => (
                <DropdownMenuItem key={campus.slug} asChild>
                  <AppLink to="/campuses/$slug" params={{ slug: campus.slug }}>
                    {c.campuses[campus.slug].name}
                  </AppLink>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <AppLink to="/campuses">{c.nav.allCampuses}</AppLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* About is a top-level item, not a row inside "Info". It carries the
              staff, the philosophy and the school's history, and nobody hunts
              for that under a menu called Info. */}
          <TextLink to="/about" active={path === "/about"}>
            {c.nav.about}
          </TextLink>
          <DropdownMenu>
            <DropTrigger>{c.nav.info}</DropTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <AppLink to="/info">{c.nav.infoHome}</AppLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <AppLink to="/programs">{c.nav.programs}</AppLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <AppLink to="/parents">{c.nav.parents}</AppLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <AppLink to="/why-us">{c.nav.whyUs}</AppLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <AppLink to="/policies">{c.nav.policies}</AppLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <TextLink to="/tuition" active={path === "/tuition"}>
            {c.nav.tuition}
          </TextLink>
          <TextLink to="/careers" active={path === "/careers"}>
            {c.nav.careers}
          </TextLink>
          <TextLink to="/contact" active={path === "/contact"}>
            {c.nav.contact}
          </TextLink>
        </nav>

        {/* At 320px wide -- the width WCAG 1.4.10 requires to work without
            sideways scrolling -- this row needed ~300px and had 296, and the
            Spanish "Inscribirse" pushed it 39px over. Below 360px the search
            icon moves into the menu sheet and the logo shrinks, which frees
            ~65px. */}
        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:gap-3">
          <div className="max-[359px]:hidden sm:hidden">
            <SiteSearch variant="icon" />
          </div>
          {/* Both numbers are rendered; CSS shows the one matching the
              visitor's campus preference. Choosing in CSS keeps the SSR HTML
              valid for either campus and keeps the hidden number out of the
              accessibility tree. */}
          {campuses.map((entry) => (
            <a
              key={entry.slug}
              data-campus-phone={entry.slug}
              href={entry.phoneHref}
              className="hidden items-center gap-2 text-sm font-bold text-brand xl:inline-flex"
            >
              <Phone className="size-4" />
              {entry.phone}
            </a>
          ))}
          {/* Below xl the number had no place in the header at all, so the
              quickest way to reach the school was invisible on a phone. */}
          {campuses.map((entry) => (
            <a
              key={`call-${entry.slug}`}
              data-campus-phone={entry.slug}
              href={entry.phoneHref}
              aria-label={c.campusSwitch.call.replace("{campus}", entry.city)}
              className="inline-flex size-11 items-center justify-center rounded-full text-brand transition-colors hover:bg-paper-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none xl:hidden"
            >
              <Phone className="size-5" />
            </a>
          ))}
          <Button asChild variant="brand" size="sm" className="sm:hidden">
            <AppLink to="/enroll">{c.common.enroll}</AppLink>
          </Button>
          <Button asChild variant="brand" size="lg" className="hidden sm:inline-flex">
            <AppLink to="/enroll">{c.common.enroll}</AppLink>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label={c.nav.openMenu}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{c.nav.menu}</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 overflow-y-auto text-base font-semibold text-navy">
                <nav aria-label={c.nav.mainLabel} className="flex flex-col gap-1">
                  {mobileLinks.map((item) => (
                    <AppLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 hover:bg-paper-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                    >
                      {item.label}
                    </AppLink>
                  ))}
                </nav>
                <Button asChild className="mt-4" variant="brand">
                  <AppLink to="/enroll" onClick={() => setOpen(false)}>
                    {c.common.enroll}
                  </AppLink>
                </Button>
                {campuses.map((entry) => (
                  <a
                    key={`sheet-${entry.slug}`}
                    data-campus-phone={entry.slug}
                    href={entry.phoneHref}
                    className="mt-2 px-3 text-sm text-brand"
                  >
                    {entry.phone}
                  </a>
                ))}
                <div className="mt-3 flex flex-col items-start gap-1 border-t border-line pt-3">
                  <LocaleSwitch className="px-3 py-2 text-sm" />
                  <AccessibilityMenu className="px-3 py-2 text-sm" />
                  {/* The header drops its search icon below 360px, so search
                      has to be reachable from here. */}
                  <SiteSearch variant="text" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
