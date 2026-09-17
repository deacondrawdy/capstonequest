import { createFileRoute, notFound } from "@tanstack/react-router";
import { CareersPage } from "@/pages/careers";
import { features } from "@/data/features";

export const Route = createFileRoute("/careers")({
  // Hidden for now: the address returns "page not found" rather than the page.
  beforeLoad: () => {
    if (!features.careers) throw notFound();
  },
  component: CareersPage,
});
