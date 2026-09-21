import { lazy, Suspense, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useContent } from "@/lib/locale";

/**
 * The button that opens Owlivia, on every page.
 *
 * Lazy: the panel pulls in the chat plumbing and, if a call starts, a WebRTC
 * client. None of that should load for the majority of visitors who never open
 * it, so nothing is fetched until the button is pressed.
 *
 * It sits bottom-right rather than in the header, which at 320px already needs
 * every pixel it has for the phone and Enroll buttons (WCAG 1.4.10). It also
 * sits above the footer's last row rather than over the page's content, and
 * the mobile menu carries the same entry for anyone who never reaches it.
 */
const Owlivia = lazy(() => import("@/components/owlivia").then((m) => ({ default: m.Owlivia })));

export function OwliviaLauncher() {
  const c = useContent();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-navy py-3 pr-5 pl-3 text-sm font-bold text-paper shadow-card transition-colors hover:bg-navy-mid focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <img
          src="/images/owl.png"
          alt=""
          width={28}
          height={28}
          className="size-7 rounded-full bg-paper object-contain p-0.5"
        />
        <span className="max-[380px]:sr-only">{c.owlivia.open}</span>
        <MessageCircle className="size-4 min-[381px]:hidden" aria-hidden />
      </button>
      {/* Mounted only once opened; it stays mounted after that so a parent can
          close the panel and come back to the conversation. */}
      {open ? (
        <Suspense fallback={null}>
          <Owlivia open={open} onOpenChange={setOpen} />
        </Suspense>
      ) : null}
    </>
  );
}
