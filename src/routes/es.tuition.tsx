import { createFileRoute } from "@tanstack/react-router";
import { TuitionPage } from "@/pages/tuition";

/** Spanish mirror of /tuition. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/tuition")({ component: TuitionPage });
