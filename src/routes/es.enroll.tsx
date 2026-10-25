import { createFileRoute } from "@tanstack/react-router";
import { EnrollPage } from "@/pages/enroll";
import { loadPacketInfo } from "@/lib/site-files";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/enroll")({
  loader: loadPacketInfo,
  component: function Enroll() {
    return <EnrollPage packetInfo={Route.useLoaderData()} />;
  },
});
