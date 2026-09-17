import { AppLink, useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";

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
    // The link carries the name; the image inside it is decorative.
    <AppLink
      to="/"
      aria-label={c.common.logoHome}
      className={cn(
        "relative inline-flex shrink-0 rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <img
        src="/images/logo.png"
        alt=""
        width={512}
        height={512}
        className={cn(dim, "object-contain outline-none")}
      />
    </AppLink>
  );
}
