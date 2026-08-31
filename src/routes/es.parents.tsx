import { createFileRoute } from "@tanstack/react-router";
import { ParentsPage } from "@/pages/parents";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/parents")({ component: ParentsPage });
