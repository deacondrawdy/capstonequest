import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/pages/faq";

export const Route = createFileRoute("/faq")({ component: FaqPage });
