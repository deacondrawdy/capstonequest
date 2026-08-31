import { createFileRoute } from "@tanstack/react-router";
import { CleverPage } from "@/pages/clever";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/clever")({ component: CleverPage });
