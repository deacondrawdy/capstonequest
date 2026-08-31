import { createFileRoute } from "@tanstack/react-router";
import { ParentsPage } from "@/pages/parents";

export const Route = createFileRoute("/parents")({ component: ParentsPage });
