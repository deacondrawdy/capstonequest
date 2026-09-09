import { createFileRoute } from "@tanstack/react-router";
import { HandbookPage } from "@/pages/handbook";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/handbook")({ component: HandbookPage });
