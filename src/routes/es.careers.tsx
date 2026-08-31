import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/pages/careers";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/careers")({ component: CareersPage });
