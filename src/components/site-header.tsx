import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, Star } from "lucide-react";
import { Logo } from "@/components/logo";
import { SiteSearch } from "@/components/site-search";
import { AccessibilityMenu } from "@/components/accessibility-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { campuses, school } from "@/data/school";
import { cn } from "@/lib/utils";

function DropTrigger({ children }: { children: ReactNode }) {
  return (
    <DropdownMenuTrigger className="inline-flex items-center gap-0.5 px-1 pb-1 text-[13px] font-semibold tracking-[0.04em] text-ink/80 uppercase outline-none hover:text-navy data-[state=open]:text-navy">
      {children}
      <ChevronDown className="size-3.5" />
    </DropdownMenuTrigger>
  );
}

type NavPath = "/" | "/tuition" | "/careers" | "/contact";

function TextLink({
  to,
  active,
  children,
}: {
  to: NavPath;
  active?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "relative px-1 pb-1 text-[13px] font-semibold tracking-[0.04em] text-ink/80 uppercase transition-colors hover:text-navy",
        active && "text-navy",
      )}
    >
      {children}
      {active ? <span className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gold" /> : null}
    </Link>
  );
}

export function TopBanner() {
  return (
    <div className="bg-gold text-navy">
      <div className="mx-auto flex max-w-[1400px] items-center justify-center px-4 py-2 sm:px-6">
        <p className="flex items-center gap-2 text-center text-sm font-bold sm:text-base">
          <Star className="size-3.5 shrink-0 fill-navy text-navy" aria-hidden />
          Only a few spots left in Tucson & Yuma
        </p>
      </div>
    </div>
  );
}

const mobileLinks: Array<{ to: string; label: string }> = [
  { to: "/", label: "Home" },
  { to: "/campuses", label: "Campuses" },
  { to: "/info", label: "Info" },
  { to: "/programs", label: "Programs" },
  { to: "/tuition", label: "Tuition & fees" },
  { to: "/policies", label: "Policies" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
  { to: "/parents", label: "Parent resources" },
  { to: "/tour", label: "Schedule a tour" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 shadow-[var(--shadow-nav)] backdrop-blur-md">
      <div className="hidden border-b border-line sm:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-3 px-4 py-1.5 sm:px-6 lg:px-10">
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
          <TextLink to="/" active={pathname === "/"}>
            Home
          </TextLink>
          <DropdownMenu>
            <DropTrigger>Campuses</DropTrigger>
            <DropdownMenuContent align="start">
              {campuses.map((c) => (
                <DropdownMenuItem key={c.slug} asChild>
                  <Link to="/campuses/$slug" params={{ slug: c.slug }}>
                    {c.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link to="/campuses">All campuses</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropTrigger>Info</DropTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link to="/info">Info home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/programs">Programs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/parents">Parent resources</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/why-us">Why us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/policies">Policies</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <TextLink to="/tuition" active={pathname === "/tuition"}>
            Tuition
          </TextLink>
          <TextLink to="/careers" active={pathname === "/careers"}>
            Careers
          </TextLink>
          <TextLink to="/contact" active={pathname === "/contact"}>
            Contact
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
            <Link to="/enroll">Enroll</Link>
          </Button>
          <Button asChild variant="brand" size="lg" className="hidden sm:inline-flex">
            <Link to="/enroll">Enroll</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 overflow-y-auto text-base font-semibold text-navy">
                {mobileLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to as "/"}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 hover:bg-paper-soft"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4" variant="brand">
                  <Link to="/enroll" onClick={() => setOpen(false)}>
                    Enroll
                  </Link>
                </Button>
                <a href={school.phoneHref} className="mt-2 px-3 text-sm text-brand">
                  {school.phone}
                </a>
                <div className="mt-3 border-t border-line pt-3">
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
