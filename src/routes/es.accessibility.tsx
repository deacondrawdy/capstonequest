import { createFileRoute } from "@tanstack/react-router";
import { AccessibilityPage } from "@/pages/accessibility";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/accessibility")({ component: AccessibilityPage });
