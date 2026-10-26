import { createFileRoute } from "@tanstack/react-router";
import { reviewsLoader } from "@/lib/google-reviews";
import { WhyUsPage } from "@/pages/why-us";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/why-us")({ ...reviewsLoader, component: WhyUsPage });
