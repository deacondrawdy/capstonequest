import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/pages/privacy";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/privacy")({ component: PrivacyPage });
