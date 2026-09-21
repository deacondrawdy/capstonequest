import { lazy, Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";

/**
 * The buttons that open Owlivia, and the panel itself.
 *
 * Lazy: the panel pulls in the chat plumbing and, if a call starts, a WebRTC
 * client. None of that should load for the majority of visitors who never open
 * it, so nothing is fetched until a button is pressed.
 *
 * Two entry points, one panel. `OwliviaLauncher` is the hero button on the
 * homepage, sized to sit under "Schedule a tour". `OwliviaPanel` is the
 * controlled version the header owns, so the desktop button and the mobile
 * menu entry share a single conversation.
 */
const Owlivia = lazy(() => import("@/components/owlivia").then((m) => ({ default: m.Owlivia })));

export function OwliviaPanel({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  // Nothing is mounted until first opened; it stays mounted after that so a
  // parent can close the panel and come back to the conversation.
  if (!open) return null;
  return (
    <Suspense fallback={null}>
      <Owlivia open={open} onOpenChange={onOpenChange} />
    </Suspense>
  );
}

/** The owl, at the size each button wants it. */
export function OwlMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/owl.png"
      alt=""
      width={40}
      height={40}
      className={cn("rounded-full bg-paper object-contain p-0.5", className)}
    />
  );
}

export function OwliviaLauncher({ className }: { className?: string }) {
  const c = useContent();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="owl"
        size="xl"
        className={className}
        onClick={() => setOpen(true)}
      >
        <OwlMark className="-ml-3 size-10" />
        {c.owlivia.open}
      </Button>
      <OwliviaPanel open={open} onOpenChange={setOpen} />
    </>
  );
}
