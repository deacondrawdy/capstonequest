import { createFileRoute } from "@tanstack/react-router";
import { CampusesPage } from "@/pages/campuses.index";

export const Route = createFileRoute("/campuses/")({ component: CampusesPage });
