import { createFileRoute } from "@tanstack/react-router";
import { StaffPage } from "@/pages/staff";
import { getStaffState } from "@/lib/site-files";

/** The office's file manager. Unlisted and kept out of search engines. */
export const Route = createFileRoute("/staff")({
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
  loader: () => getStaffState(),
  component: function Staff() {
    return <StaffPage state={Route.useLoaderData()} />;
  },
});
