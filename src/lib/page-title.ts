import type { Content } from "@/content/en";
import { campuses } from "@/data/school";

type TitleKey = keyof Content["pageTitles"];

/** Canonical (English) path to its title key. */
const PATH_TITLES: Record<string, TitleKey> = {
  "/": "home",
  "/about": "about",
  "/accessibility": "accessibility",
  "/campuses": "campuses",
  "/careers": "careers",
  "/clever": "clever",
  "/contact": "contact",
  "/enroll": "enroll",
  "/handbook": "handbook",
  "/info": "info",
  "/parents": "parents",
  "/policies": "policies",
  "/privacy": "privacy",
  "/programs": "programs",
  "/tour": "tour",
  "/tuition": "tuition",
  "/why-us": "whyUs",
};

/**
 * The `<title>` for a page: "Tuition & fees · Capstone Quest Academy".
 *
 * Every route used to share the bare site name, which fails WCAG 2.4.2 — a
 * screen-reader user switching tabs, or scanning history, could not tell one
 * page from another. `path` is the locale-stripped path.
 */
export function pageTitle(path: string, c: Content): string {
  const site = c.meta.title;
  const key = PATH_TITLES[path.length > 1 ? path.replace(/\/$/, "") : path];
  if (key) return `${c.pageTitles[key]} · ${site}`;

  const slug = path.match(/^\/campuses\/([^/]+)\/?$/)?.[1];
  const campus = campuses.find((entry) => entry.slug === slug);
  if (campus) return `${c.pageTitles.campus.replace("{campus}", c.campuses[campus.slug].name)} · ${site}`;

  return `${c.pageTitles.notFound} · ${site}`;
}
