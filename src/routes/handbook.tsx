import { createFileRoute } from "@tanstack/react-router";
import { HandbookPage } from "@/pages/handbook";

export const Route = createFileRoute("/handbook")({ component: HandbookPage });
