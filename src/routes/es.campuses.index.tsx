import { createFileRoute } from "@tanstack/react-router";
import { CampusesPage } from "@/pages/campuses.index";

/** Spanish mirror. The page resolves its locale from the pathname. */
export const Route = createFileRoute("/es/campuses/")({ component: CampusesPage });
