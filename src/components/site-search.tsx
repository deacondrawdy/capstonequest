import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { searchIndex } from "@/data/search";
import { cn } from "@/lib/utils";

export function SiteSearch({ variant = "text" }: { variant?: "text" | "icon" }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

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

  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return searchIndex;
    return searchIndex.filter(
      (p) =>
        p.title.toLowerCase().includes(needle) || p.blurb.toLowerCase().includes(needle),
    );
  }, [q]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex items-center font-semibold text-ink/70 hover:text-navy",
          variant === "icon"
            ? "size-9 justify-center rounded-full hover:bg-paper-soft"
            : "gap-1.5 text-[13px]",
        )}
        aria-label="Search the site"
      >
        <Search className="size-3.5" />
        {variant === "text" ? <span>Search</span> : null}
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
            <DialogTitle>Search Capstone Quest</DialogTitle>
          </DialogHeader>
          <div className="px-5 pb-5">
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Campuses, programs, careers…"
              className="h-11 w-full rounded-md border border-input bg-paper px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <ul className="mt-3 max-h-72 overflow-y-auto">
              {hits.length === 0 ? (
                <li className="px-2 py-6 text-center text-sm text-muted">No matching pages.</li>
              ) : (
                hits.map((hit) => (
                  <li key={hit.path}>
                    <button
                      type="button"
                      className="w-full rounded-xl px-3 py-2.5 text-left hover:bg-paper-soft"
                      onClick={() => {
                        setOpen(false);
                        setQ("");
                        void navigate({ to: hit.path as "/" });
                      }}
                    >
                      <p className="text-sm font-bold text-navy">{hit.title}</p>
                      <p className="text-xs text-muted">{hit.blurb}</p>
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
