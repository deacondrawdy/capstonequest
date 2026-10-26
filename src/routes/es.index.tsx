import { createFileRoute } from "@tanstack/react-router";
import { reviewsLoader } from "@/lib/google-reviews";
import { Home } from "@/pages/index";

/** Spanish mirror of the homepage. Copy comes from `useContent()`. */
export const Route = createFileRoute("/es/")({ ...reviewsLoader, component: Home });
