import { createFileRoute } from "@tanstack/react-router";
import { ProgramsPage } from "@/pages/programs";

export const Route = createFileRoute("/programs")({ component: ProgramsPage });
