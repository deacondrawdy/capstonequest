import { AppLink, useContent } from "@/lib/locale";
import { cn } from "@/lib/utils";

/**
 * Shown directly above a form's submit button.
 *
 * Notice is worth most at the moment someone actually hands over their child's
 * name and date of birth, not only in a footer link they will never open. One
 * component so all four forms say the same thing.
 */
export function FormPrivacyNotice({ className }: { className?: string }) {
  const c = useContent();

  return (
    <p className={cn("text-[13px] leading-relaxed text-muted", className)}>
      {c.common.formNotice}{" "}
      <AppLink to="/privacy" className="font-semibold text-brand underline underline-offset-2">
        {c.common.formNoticeLink}
      </AppLink>
      .
    </p>
  );
}
