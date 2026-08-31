import { createFileRoute } from "@tanstack/react-router";
import { PoliciesPage } from "@/pages/policies";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/policies")({ component: PoliciesPage });
