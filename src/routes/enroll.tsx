import { createFileRoute } from "@tanstack/react-router";
import { EnrollPage } from "@/pages/enroll";
import { loadPacketInfo } from "@/lib/site-files";

export const Route = createFileRoute("/enroll")({
  loader: loadPacketInfo,
  component: function Enroll() {
    return <EnrollPage packetInfo={Route.useLoaderData()} />;
  },
});
