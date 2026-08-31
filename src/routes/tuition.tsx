import { createFileRoute } from "@tanstack/react-router";
import { TuitionPage } from "@/pages/tuition";

export const Route = createFileRoute("/tuition")({ component: TuitionPage });
