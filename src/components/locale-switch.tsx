import { Link } from "@tanstack/react-router";
import { Languages } from "lucide-react";
import { LOCALE_STORAGE_KEY, useAlternate, useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import type { LinkProps } from "@tanstack/react-router";

/**
 * Switches between the English and Spanish version of the *current* page, so a
 * reader on /tuition lands on /es/tuition rather than being dumped at the
 * Spanish homepage.
 *
 * Always labelled in the language it switches to — a reader who cannot read the
 * current language still recognises their own.
 */
export function LocaleSwitch({ className }: { className?: string }) {
  const c = useContent();
  const { other, href } = useAlternate();

  return (
    <Link
      to={href as LinkProps["to"]}
      // Remembered so the "view this in Spanish" offer stops appearing once the
      // visitor has made a choice either way.
      onClick={() => {
        try {
          window.localStorage.setItem(LOCALE_STORAGE_KEY, other);
        } catch {
          // Blocked storage: the switch still works, it just is not remembered.
        }
      }}
      hrefLang={other}
      aria-label={c.localeSwitch.label}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[13px] font-semibold text-ink/70 transition-colors hover:bg-paper-soft hover:text-navy focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        className,
      )}
    >
      <Languages className="size-4" aria-hidden />
      <span>{other === "es" ? c.localeSwitch.toEs : c.localeSwitch.toEn}</span>
    </Link>
  );
}
