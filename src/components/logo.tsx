import { AppLink, useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { Photo } from "@/components/photo";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const c = useContent();
  const dim = size === "lg" ? "size-[6.25rem]" : size === "sm" ? "size-16" : "size-[5.35rem]";
  return (
    // AppLink so the logo on a Spanish page returns to the Spanish homepage.
    // The image's alt text names the link. It used to be alt="" with an
    // aria-label on the link: the same for a screen reader, but SEO scanners
    // count an empty alt as a missing one.
    <AppLink
      to="/"
      className={cn(
        "relative inline-flex shrink-0 rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <Photo
        src="/images/capstone-quest-academy-logo.png"
        sizes="100px"
        loading="eager"
        alt={c.common.logoHome}
        width={512}
        height={512}
        className={cn(dim, "object-contain outline-none")}
      />
    </AppLink>
  );
}
