import { createFileRoute } from "@tanstack/react-router";
import { TourPage } from "@/pages/tour";

type Search = { campus?: string };

export const Route = createFileRoute("/es/tour")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    campus: typeof s.campus === "string" ? s.campus : undefined,
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { campus } = Route.useSearch();
  return <TourPage preset={campus} />;
}
