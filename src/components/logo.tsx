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
      <svg viewBox="0 0 180 180" className={dim} role="img">
        <title>Capstone Quest Academy</title>
        <defs>
          <path id="cq-top" d="M 26,92 A 64,64 0 0 1 154,92" />
          <path id="cq-bot" d="M 36,98 A 54,54 0 0 0 144,98" />
          <clipPath id="cq-owl">
            <circle cx="90" cy="96" r="40" />
          </clipPath>
        </defs>
        <circle cx="90" cy="90" r="87" fill="#ffffff" />
        <circle
          cx="90"
          cy="90"
          r="84"
          fill="none"
          stroke="#0d2c6b"
          strokeWidth="4.5"
        />
        <circle
          cx="90"
          cy="90"
          r="76"
          fill="none"
          stroke="#0d2c6b"
          strokeWidth="1.15"
        />
        <text
          fill="#0d2c6b"
          fontSize="12.5"
          fontWeight="800"
          letterSpacing="2.6"
          fontFamily="Plus Jakarta Sans, Segoe UI, sans-serif"
        >
          <textPath href="#cq-top" startOffset="50%" textAnchor="middle">
            CAPSTONE QUEST
          </textPath>
        </text>
        <text
          fill="#0d2c6b"
          fontSize="12.5"
          fontWeight="800"
          letterSpacing="3.8"
          fontFamily="Plus Jakarta Sans, Segoe UI, sans-serif"
        >
          <textPath href="#cq-bot" startOffset="50%" textAnchor="middle">
            ACADEMY
          </textPath>
        </text>
        <image
          href="/images/owl.png"
          x="48"
          y="54"
          width="84"
          height="84"
          clipPath="url(#cq-owl)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </Link>
  );
}
