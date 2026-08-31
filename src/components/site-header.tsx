import { useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, Star } from "lucide-react";
import { Logo } from "@/components/logo";
import { SiteSearch } from "@/components/site-search";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { LocaleSwitch } from "@/components/locale-switch";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { campuses, school } from "@/data/school";
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
    <div className="bg-gold text-navy">
      <div className="mx-auto flex max-w-[1400px] items-center justify-center px-4 py-2 sm:px-6">
        <p className="flex items-center gap-2 text-center text-sm font-bold sm:text-base">
          <Star className="size-3.5 shrink-0 fill-navy text-navy" aria-hidden />
          {c.banner.text}
        </p>
      </div>
    </div>
  );
}

export function SiteHeader() {
  // Compared against the locale-stripped path so /es/tuition marks Tuition
  // active exactly as /tuition does.
  const path = useRouterState({ select: (s) => stripLocale(s.location.pathname) });
  const [open, setOpen] = useState(false);
  const c = useContent();

  const mobileLinks: Array<{ to: AppPath; label: string }> = [
    { to: "/", label: c.nav.home },
    { to: "/campuses", label: c.nav.campuses },
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
    <header className="sticky top-0 z-40 bg-paper/95 shadow-[var(--shadow-nav)] backdrop-blur-md">
      <div className="hidden border-b border-line sm:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-3 px-4 py-1.5 sm:px-6 lg:px-10">
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
        <Logo className="-my-2" />

        <nav className="ml-2 hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6">
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
          <DropdownMenu>
            <DropTrigger>{c.nav.info}</DropTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <AppLink to="/info">{c.nav.infoHome}</AppLink>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <AppLink to="/about">{c.nav.about}</AppLink>
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

        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:gap-3">
          <div className="sm:hidden">
            <SiteSearch variant="icon" />
          </div>
          <a
            href={school.phoneHref}
            className="hidden items-center gap-2 text-sm font-bold text-brand xl:inline-flex"
          >
            <Phone className="size-4" />
            {school.phone}
          </a>
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
                {mobileLinks.map((item) => (
                  <AppLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 hover:bg-paper-soft"
                  >
                    {item.label}
                  </AppLink>
                ))}
                <Button asChild className="mt-4" variant="brand">
                  <AppLink to="/enroll" onClick={() => setOpen(false)}>
                    {c.common.enroll}
                  </AppLink>
                </Button>
                <a href={school.phoneHref} className="mt-2 px-3 text-sm text-brand">
                  {school.phone}
                </a>
                <div className="mt-3 flex flex-col gap-1 border-t border-line pt-3">
                  <LocaleSwitch className="px-3 py-2 text-sm" />
                  <AccessibilityMenu className="px-3 py-2 text-sm" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
