import { createFileRoute, notFound } from "@tanstack/react-router";
import { CleverPage } from "@/pages/clever";
import { features } from "@/data/features";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/clever")({
  // Hidden for now: the address returns "page not found" rather than the page.
  beforeLoad: () => {
    if (!features.clever) throw notFound();
  },
  component: CleverPage,
});
