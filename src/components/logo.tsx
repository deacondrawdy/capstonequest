import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim = size === "lg" ? "size-[6.25rem]" : size === "sm" ? "size-16" : "size-[5.35rem]";
  return (
    <Link
      to="/"
      aria-label="Capstone Quest Academy home"
      className={cn("relative inline-flex shrink-0", className)}
    >
      <img
        src="/images/logo.png"
        alt="Capstone Quest Academy"
        width={512}
        height={512}
        className={cn(dim, "object-contain outline-none")}
      />
    </Link>
  );
}
