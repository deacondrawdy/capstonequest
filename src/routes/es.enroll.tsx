import { createFileRoute } from "@tanstack/react-router";
import { EnrollPage } from "@/pages/enroll";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/enroll")({ component: EnrollPage });
