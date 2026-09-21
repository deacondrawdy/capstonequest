import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/locale";

/**
 * The button that opens Owlivia.
 *
 * Lazy: the panel pulls in the chat plumbing and, if a call starts, a WebRTC
 * client. None of that should load for the majority of visitors who never open
 * it, so nothing is fetched until the button is pressed.
 *
 * It sits in the hero beneath "Schedule a tour", not in a floating corner
 * bubble, and it is the school's green rather than a vendor's colour.
 */
const Owlivia = lazy(() => import("@/components/owlivia").then((m) => ({ default: m.Owlivia })));

export function OwliviaLauncher({ className }: { className?: string }) {
  const c = useContent();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" variant="owl" size="xl" className={className} onClick={() => setOpen(true)}>
        <img
          src="/images/owl.png"
          alt=""
          width={28}
          height={28}
          className="-ml-2 size-7 rounded-full bg-paper object-contain p-0.5"
        />
        {c.owlivia.open}
      </Button>
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
