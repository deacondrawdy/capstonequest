import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/pages/faq";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/faq")({ component: FaqPage });
