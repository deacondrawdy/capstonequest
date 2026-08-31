import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/pages/info";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/info")({ component: InfoPage });
