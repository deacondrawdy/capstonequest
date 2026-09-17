import { useEffect, useState } from "react";
import { Accessibility, Check, RotateCcw } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  A11Y_DEFAULTS,
  applyA11yPrefs,
  readA11yPrefs,
  saveA11yPrefs,
  type A11yPrefs,
} from "@/lib/a11y";
import { useContent } from "@/lib/locale";
import { school } from "@/data/school";
import { cn } from "@/lib/utils";

// Labels live in the content layer (`a11yMenu`); only the values and the sample
// sizes are fixed here.
const TEXT_SIZES: Array<{ value: A11yPrefs["text"]; sample: string }> = [
  { value: "base", sample: "text-[13px]" },
  { value: "lg", sample: "text-[15px]" },
  { value: "xl", sample: "text-[17px]" },
];

const TOGGLES: Array<{
  key: Exclude<keyof A11yPrefs, "text">;
  on: string;
  off: string;
}> = [
  { key: "contrast", on: "high", off: "normal" },
  { key: "links", on: "underline", off: "default" },
  { key: "font", on: "readable", off: "default" },
  { key: "motion", on: "reduce", off: "system" },
];

/**
 * Display preferences for visitors who want them.
 *
 * This is a convenience, not an accessibility compliance measure: WCAG
 * conformance lives in the page markup itself, and the site has to work fully
 * for a screen-reader or keyboard user who never opens this menu.
 */
export function AccessibilityMenu({ className }: { className?: string }) {
  const c = useContent();
  const m = c.a11yMenu;
  // Server render always uses the defaults; the boot script has already styled
  // the page from storage, so syncing state after mount avoids a hydration
  // mismatch without the visitor ever seeing unstyled defaults.
  const [prefs, setPrefs] = useState<A11yPrefs>(A11Y_DEFAULTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPrefs(readA11yPrefs());
    setReady(true);
  }, []);

  function update(next: A11yPrefs) {
    setPrefs(next);
    applyA11yPrefs(next);
    saveA11yPrefs(next);
  }

  const changed = ready && JSON.stringify(prefs) !== JSON.stringify(A11Y_DEFAULTS);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[13px] font-semibold text-ink/70 transition-colors hover:bg-paper-soft hover:text-navy focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            className,
          )}
        >
          <Accessibility className="size-4" aria-hidden />
          <span>{m.trigger}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{m.title}</DialogTitle>
          <DialogDescription>{m.description}</DialogDescription>
        </DialogHeader>

        <div role="group" aria-labelledby="a11y-text-size">
          <p id="a11y-text-size" className="text-sm font-bold text-navy">
            {m.textSize}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {TEXT_SIZES.map((size) => {
              const active = prefs.text === size.value;
              return (
                <button
                  key={size.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => update({ ...prefs, text: size.value })}
                  className={cn(
                    "rounded-2xl border px-3 py-2.5 font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    size.sample,
                    active
                      ? "border-navy bg-navy text-paper"
                      : "border-line text-navy hover:bg-paper-soft",
                  )}
                >
                  {m.sizes[size.value]}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="space-y-2">
          {TOGGLES.map((t) => {
            const active = prefs[t.key] === t.on;
            return (
              <li key={t.key}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => update({ ...prefs, [t.key]: active ? t.off : t.on })}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-2xl border px-3 py-2.5 text-left transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    active ? "border-navy bg-paper-soft" : "border-line hover:bg-paper-soft",
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md border-2",
                      active ? "border-navy bg-navy text-paper" : "border-line",
                    )}
                  >
                    {active ? <Check className="size-3.5" strokeWidth={3} /> : null}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-navy">{m.toggles[t.key].label}</span>
                    <span className="block text-[13px] text-muted">{m.toggles[t.key].hint}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => update(A11Y_DEFAULTS)}
            disabled={!changed}
            className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[13px] font-semibold text-brand transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40"
          >
            <RotateCcw className="size-3.5" aria-hidden />
            {m.reset}
          </button>
          <DialogClose asChild>
            <Button size="sm">{m.done}</Button>
          </DialogClose>
        </div>

        <p className="text-[12px] leading-relaxed text-muted">
          {m.atNote}{" "}
          <a href={`mailto:${school.email}`} className="underline underline-offset-2">
            {m.atNoteLink}
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
