import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/** Three gold stars in a tight cluster — same visual weight as the other stats icons. */
export function QualityFirstStars({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex w-9 shrink-0 flex-col items-center sm:w-10", className)}
      aria-hidden
    >
      <Star className="size-4 fill-gold text-gold sm:size-[1.15rem]" strokeWidth={1.6} />
      <span className="-mt-1 flex items-center justify-center gap-px">
        <Star className="size-4 fill-gold text-gold sm:size-[1.15rem]" strokeWidth={1.6} />
        <Star className="size-4 fill-gold text-gold sm:size-[1.15rem]" strokeWidth={1.6} />
      </span>
    </span>
  );
}
