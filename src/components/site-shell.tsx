import { OwliviaLauncher } from "@/components/owlivia-launcher";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader, TopBanner } from "@/components/site-header";
import { useContent } from "@/lib/locale";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const c = useContent();
  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      {/* First focusable element on every page (WCAG 2.4.1). Hidden until a
          keyboard user tabs to it, then it saves them the ~20 header stops. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper focus:shadow-card focus:ring-2 focus:ring-gold focus:outline-none"
      >
        {c.common.skipToContent}
      </a>
      <TopBanner />
      <SiteHeader />
      {/* tabIndex -1 so the skip link moves focus here, not just the scroll
          position. Clearance under the sticky header comes from the global
          scroll-padding-top in styles.css. */}
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <SiteFooter />
      <OwliviaLauncher />
    </div>
  );
}
