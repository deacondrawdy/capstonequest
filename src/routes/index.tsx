import { createFileRoute } from "@tanstack/react-router";
import { reviewsLoader } from "@/lib/google-reviews";
import { Home } from "@/pages/index";

export const Route = createFileRoute("/")({ ...reviewsLoader, component: Home });
