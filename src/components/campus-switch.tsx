import { useEffect, useState } from "react";
import { campuses } from "@/data/school";
import {
  CAMPUS_DEFAULT,
  applyCampusPref,
  readCampusPref,
  saveCampusPref,
  type CampusPref,
} from "@/lib/campus";
import { useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";

/**
 * Lets a family say which campus is theirs, so the header shows that campus's
 * phone number.
 *
 * State starts at the default and syncs after mount, matching
 * `accessibility-menu.tsx`: the server cannot know the stored preference, and
 * the boot script has already set `data-campus`, so the visible number is
 * correct from first paint regardless of what this component thinks yet.
 */
export function CampusSwitch({ className }: { className?: string }) {
  const c = useContent();
  const [campus, setCampus] = useState<CampusPref>(CAMPUS_DEFAULT);

  useEffect(() => {
    setCampus(readCampusPref());
  }, []);

  function pick(next: CampusPref) {
    setCampus(next);
    applyCampusPref(next);
    saveCampusPref(next);
  }

  return (
    <div
      role="group"
      aria-label={c.campusSwitch.label}
      className={cn("inline-flex items-center gap-0.5", className)}
    >
      {campuses.map((entry) => {
        const active = campus === entry.slug;
        return (
          <button
            key={entry.slug}
            type="button"
            aria-pressed={active}
            onClick={() => pick(entry.slug)}
            className={cn(
              "rounded-full px-2 py-1 text-[13px] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              active ? "bg-paper-soft text-navy" : "text-ink/70 hover:text-navy",
            )}
          >
            {entry.city}
          </button>
        );
      })}
    </div>
  );
}
