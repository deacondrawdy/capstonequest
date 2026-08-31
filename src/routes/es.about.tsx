import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/about";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/about")({ component: AboutPage });
