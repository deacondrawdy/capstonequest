import { createFileRoute, notFound } from "@tanstack/react-router";
import { CleverPage } from "@/pages/clever";
import { features } from "@/data/features";

export const Route = createFileRoute("/clever")({
  // Hidden for now: the address returns "page not found" rather than the page.
  beforeLoad: () => {
    if (!features.clever) throw notFound();
  },
  component: CleverPage,
});
