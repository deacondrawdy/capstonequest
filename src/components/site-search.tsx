import { useEffect, useId, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { searchIndex } from "@/data/search";
import { localizePath, useContent, useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

export function SiteSearch({ variant = "text" }: { variant?: "text" | "icon" }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const c = useContent();
  const locale = useLocale();
  const inputId = useId();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Titles and blurbs come from the active locale, so a Spanish reader searches
  // Spanish text and every result links to the Spanish page.
  const pages = useMemo(
    () => searchIndex.map((entry) => ({ ...entry, ...c.search.pages[entry.id] })),
    [c],
  );

  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return pages;
    return pages.filter(
      (p) => p.title.toLowerCase().includes(needle) || p.blurb.toLowerCase().includes(needle),
    );
  }, [q, pages]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center font-semibold text-ink/70 hover:text-navy focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
          variant === "icon"
            ? "size-9 justify-center rounded-full hover:bg-paper-soft"
            : "gap-1.5 rounded-full px-2 py-1 text-[13px]",
        )}
        // The text variant is named by its visible word; only the icon-only
        // variant needs a label of its own.
        aria-label={variant === "icon" ? c.search.trigger : undefined}
      >
        <Search className="size-3.5" aria-hidden />
        {variant === "text" ? <span>{c.search.trigger}</span> : null}
      </button>
      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setQ("");
        }}
      >
        <DialogContent className="max-w-lg p-0 sm:rounded-[24px]">
          <DialogHeader className="px-5 pt-5">
            <DialogTitle>{c.search.title}</DialogTitle>
          </DialogHeader>
          <div className="px-5 pb-5">
            {/* A placeholder is not a label: it disappears as soon as someone
                types, and several screen readers never announce it. */}
            <label htmlFor={inputId} className="sr-only">
              {c.search.inputLabel}
            </label>
            <input
              id={inputId}
              type="search"
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={c.search.placeholder}
              className="h-11 w-full rounded-md border border-input bg-paper px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <ul className="mt-3 max-h-72 overflow-y-auto">
              {hits.length === 0 ? (
                <li className="px-2 py-6 text-center text-sm text-muted">{c.search.empty}</li>
              ) : (
                hits.map((hit) => (
                  <li key={hit.id}>
                    <button
                      type="button"
                      className="w-full rounded-xl px-3 py-2.5 text-left hover:bg-paper-soft focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      onClick={() => {
                        setOpen(false);
                        setQ("");
                        void navigate({ to: localizePath(hit.path, locale) as "/" });
                      }}
                    >
                      <span className="block text-sm font-bold text-navy">{hit.title}</span>
                      <span className="block text-xs text-muted">{hit.blurb}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
