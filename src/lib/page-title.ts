import type { Content } from "@/content/en";
import { campuses } from "@/data/school";
import { features } from "@/data/features";

type TitleKey = keyof Content["pageTitles"];

/** Canonical (English) path to its title key. */
const PATH_TITLES: Record<string, TitleKey> = {
  "/": "home",
  "/about": "about",
  "/accessibility": "accessibility",
  "/campuses": "campuses",
  // Hidden sections are left out, so their 404 is titled "Page not found".
  ...(features.careers ? { "/careers": "careers" as const } : {}),
  ...(features.clever ? { "/clever": "clever" as const } : {}),
  "/contact": "contact",
  "/enroll": "enroll",
  "/faq": "faq",
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
  if (campus) return `${fillCampus(c.pageTitles.campus, campus.slug, campus.city, c)} · ${site}`;

  return `${c.pageTitles.notFound} · ${site}`;
}

/**
 * The `<meta name="description">` for a page.
 *
 * Every page used to carry the site-wide description, so all 36 looked
 * identical to a search engine and none of them described what the page says.
 * Same keys and same fallback as the title above.
 */
export function pageDescription(path: string, c: Content): string {
  const key = PATH_TITLES[path.length > 1 ? path.replace(/\/$/, "") : path];
  if (key) return c.pageDescriptions[key];

  const slug = path.match(/^\/campuses\/([^/]+)\/?$/)?.[1];
  const campus = campuses.find((entry) => entry.slug === slug);
  if (campus) {
    return fillCampus(c.pageDescriptions.campus, campus.slug, campus.city, c);
  }

  return c.pageDescriptions.notFound;
}

/**
 * A campus title or description. `{city}` puts the town in the title, which is
 * what a parent searches ("pre-k tucson"); `{campus}` is the site's own name.
 */
function fillCampus(template: string, slug: (typeof campuses)[number]["slug"], city: string, c: Content) {
  return template.replace("{city}", city).replace("{campus}", c.campuses[slug].name);
}
