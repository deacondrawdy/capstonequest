import { createFileRoute, notFound } from "@tanstack/react-router";
import { CampusDetail } from "@/pages/campuses.$slug";
import { campuses } from "@/data/school";

export const Route = createFileRoute("/es/campuses/$slug")({
  beforeLoad: ({ params }) => {
    const campus = campuses.find((c) => c.slug === params.slug);
    if (!campus) throw notFound();
    return { campus };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { campus } = Route.useRouteContext();
  return <CampusDetail campus={campus} />;
}
