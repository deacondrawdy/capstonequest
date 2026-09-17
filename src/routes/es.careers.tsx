import { createFileRoute, notFound } from "@tanstack/react-router";
import { CareersPage } from "@/pages/careers";
import { features } from "@/data/features";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/careers")({
  // Hidden for now: the address returns "page not found" rather than the page.
  beforeLoad: () => {
    if (!features.careers) throw notFound();
  },
  component: CareersPage,
});
