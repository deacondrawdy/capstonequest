import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Layout for everything under `/campuses`.
 *
 * This file previously held the campus index markup and rendered no `<Outlet />`,
 * so `/campuses/tucson` and `/campuses/yuma` silently served the index page
 * instead of the campus detail page. The index now lives in `campuses.index.tsx`
 * and this route exists only to mount its children.
 */
export const Route = createFileRoute("/campuses")({
  component: () => <Outlet />,
});
