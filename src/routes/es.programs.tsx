import { createFileRoute } from "@tanstack/react-router";
import { ProgramsPage } from "@/pages/programs";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/programs")({ component: ProgramsPage });
