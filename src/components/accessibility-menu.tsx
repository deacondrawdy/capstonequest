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
import { cn } from "@/lib/utils";

const TEXT_SIZES: Array<{ value: A11yPrefs["text"]; label: string; sample: string }> = [
  { value: "base", label: "Default", sample: "text-[13px]" },
  { value: "lg", label: "Large", sample: "text-[15px]" },
  { value: "xl", label: "Largest", sample: "text-[17px]" },
];

const TOGGLES: Array<{
  key: Exclude<keyof A11yPrefs, "text">;
  on: string;
  off: string;
  label: string;
  hint: string;
}> = [
  {
    key: "contrast",
    on: "high",
    off: "normal",
    label: "Higher contrast",
    hint: "Darkens body text and strengthens borders.",
  },
  {
    key: "links",
    on: "underline",
    off: "default",
    label: "Underline links",
    hint: "Marks every link without relying on colour.",
  },
  {
    key: "font",
    on: "readable",
    off: "default",
    label: "Plainer typeface",
    hint: "A wider face with more space between letters and lines.",
  },
  {
    key: "motion",
    on: "reduce",
    off: "system",
    label: "Reduce motion",
    hint: "Stops the page animating things as you scroll.",
  },
];

export function AccessibilityMenu({ className }: { className?: string }) {
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
          <span>Accessibility</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Accessibility</DialogTitle>
          <DialogDescription>
            Adjust how this site looks. Your choices are saved on this device.
          </DialogDescription>
        </DialogHeader>

        <div role="group" aria-labelledby="a11y-text-size">
          <p id="a11y-text-size" className="text-sm font-bold text-navy">
            Text size
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
                  {size.label}
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
                    <span className="block text-sm font-bold text-navy">{t.label}</span>
                    <span className="block text-[13px] text-muted">{t.hint}</span>
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
            Reset to default
          </button>
          <DialogClose asChild>
            <Button size="sm">Done</Button>
          </DialogClose>
        </div>

        <p className="text-[12px] leading-relaxed text-muted">
          Using a screen reader, magnifier, or other assistive technology? It works with this site
          directly — you do not need these settings. If something is hard to use, please{" "}
          <a href="mailto:hello@capstonequestacademy.org" className="underline underline-offset-2">
            tell us
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
