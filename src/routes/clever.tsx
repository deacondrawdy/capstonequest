import { createFileRoute } from "@tanstack/react-router";
import { CleverPage } from "@/pages/clever";

export const Route = createFileRoute("/clever")({ component: CleverPage });
