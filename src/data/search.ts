import { features } from "@/data/features";

/**
 * Pages the site search can find. Titles and descriptions live in the content
 * layer (`search.pages` in src/content/en.ts and es.ts) so a Spanish reader
 * searches in Spanish and lands on the Spanish page. Paths are the English app
 * paths; the search dialog localizes them.
 */
const allPages = [
  { id: "home", path: "/" },
  { id: "tucson", path: "/campuses/tucson" },
  { id: "yuma", path: "/campuses/yuma" },
  { id: "programs", path: "/programs" },
  { id: "info", path: "/info" },
  { id: "clever", path: "/clever" },
  { id: "tuition", path: "/tuition" },
  { id: "policies", path: "/policies" },
  { id: "careers", path: "/careers" },
  { id: "about", path: "/about" },
  { id: "parents", path: "/parents" },
  { id: "whyUs", path: "/why-us" },
  { id: "enroll", path: "/enroll" },
  { id: "tour", path: "/tour" },
  { id: "handbook", path: "/handbook" },
  { id: "privacy", path: "/privacy" },
  { id: "contact", path: "/contact" },
  { id: "accessibility", path: "/accessibility" },
] as const;

/** Hidden sections (src/data/features.ts) are left out of search. */
export const searchIndex = allPages.filter(
  (page) =>
    (page.id !== "careers" || features.careers) && (page.id !== "clever" || features.clever),
);
