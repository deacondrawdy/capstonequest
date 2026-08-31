import { createFileRoute } from "@tanstack/react-router";
import { WhyUsPage } from "@/pages/why-us";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/why-us")({ component: WhyUsPage });
