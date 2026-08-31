import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout for everything under /es/campuses, mirroring routes/campuses.tsx. */
export const Route = createFileRoute("/es/campuses")({
  component: () => <Outlet />,
});
