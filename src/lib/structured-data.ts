import type { Content } from "@/content/en";
import { campuses, faqPageItems, school, social, tuition } from "@/data/school";
import { SITE_ORIGIN, absoluteUrl } from "@/lib/site-url";
import type { Locale } from "@/lib/locale";

/**
 * JSON-LD for search engines and the assistants that read them.
 *
 * Two rules govern everything here:
 *
 *  - Every fact is one the site already states in prose. Structured data that
 *    contradicts the page is worse than none, and answers marked up but not
 *    visible are a policy violation, not a shortcut.
 *  - Nothing self-serving. No Review or AggregateRating: Google disallows a
 *    business marking up its own reviews, and the risk is a manual action
 *    against the whole domain.
 *
 * Built per request from `school.ts` and the content files, so a change to a
 * rate or a phone number moves the markup with the page.
 */
const ORG_ID = `${SITE_ORIGIN}/#organization`;

function campusId(slug: string): string {
  return `${SITE_ORIGIN}/campuses/${slug}#campus`;
}

/** Arizona child care facility licences, as published on the FAQ page. */
const LICENCES: Record<string, string> = {
  tucson: "CDC-17293",
  yuma: "CDC-17301",
};

const GEO: Record<string, { lat: string; lon: string } | undefined> = {
  // Deliberately absent until someone reads them off the map. A guessed
  // coordinate puts the pin on the wrong building, which is worse than no pin.
  tucson: undefined,
  yuma: undefined,
};

type Json = Record<string, unknown>;

function organization(c: Content): Json {
  return {
    "@type": "EducationalOrganization",
    "@id": ORG_ID,
    name: school.name,
    alternateName: "Capstone Quest Academy, Inc.",
    url: SITE_ORIGIN,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logo.png"),
      caption: school.name,
    },
    description: c.meta.description,
    foundingDate: String(school.since),
    email: school.email,
    telephone: school.phone,
    knowsLanguage: ["en-US", "es"],
    areaServed: campuses.map((campus) => ({
      "@type": "City",
      name: campus.city,
      containedInPlace: { "@type": "State", name: "Arizona" },
    })),
    location: campuses.map((campus) => ({ "@id": campusId(campus.slug) })),
    sameAs: social.map((profile) => profile.href),
  };
}

function preschool(slug: string, c: Content): Json | null {
  const campus = campuses.find((entry) => entry.slug === slug);
  if (!campus) return null;
  const geo = GEO[slug];
  const money = (value: string) => Number(value.replace(/[^0-9.]/g, ""));
  const rates = tuition.programs.map((p) => money(p.price)).filter(Boolean);
  // The "bundle" program already includes before- and after-care, so care is
  // added only to the programs that do not. Adding it to everything published a
  // top rate of $230 a week that nobody is charged.
  const withoutCare = tuition.programs.filter((p) => p.id !== "bundle").map((p) => money(p.price));
  const care = tuition.beforeAfter.flatMap((g) => g.options.map((o) => money(o.price)));
  const low = Math.min(...rates);
  const high = Math.max(...rates, Math.max(...withoutCare) + Math.max(...care));

  return {
    "@type": "Preschool",
    "@id": campusId(slug),
    name: `${school.name} — ${campus.city}`,
    parentOrganization: { "@id": ORG_ID },
    url: absoluteUrl(`/campuses/${slug}`),
    image: absoluteUrl(campus.image),
    telephone: campus.phone,
    email: school.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: campus.address,
      addressLocality: campus.city,
      addressRegion: "AZ",
      postalCode: campus.cityState.split(" ").pop(),
      addressCountry: "US",
    },
    ...(geo ? { geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lon } } : {}),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    priceRange: `$${low}-$${high} per week`,
    currenciesAccepted: "USD",
    isAccessibleForFree: false,
    knowsLanguage: ["en-US", "es"],
    areaServed: { "@type": "City", name: campus.city },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: c.schema.audience,
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: c.schema.licence,
        identifier: LICENCES[slug],
      },
    ],
    potentialAction: {
      "@type": "ReserveAction",
      name: c.common.scheduleTour,
      target: { "@type": "EntryPoint", urlTemplate: absoluteUrl("/tour") },
    },
  };
}

/** The three Pre-K programs, priced per week, as the tuition page lists them. */
function offers(c: Content): Json {
  return {
    "@type": "Course",
    "@id": `${SITE_ORIGIN}/tuition#prek`,
    name: c.tuitionPage.title,
    description: c.tuitionPage.lede,
    provider: { "@id": ORG_ID },
    inLanguage: ["en-US", "es"],
    offers: tuition.programs.map((program) => ({
      "@type": "Offer",
      name: c.tuitionPage.programs[program.id].name,
      description: `${c.tuitionPage.programs[program.id].schedule}, ${c.tuitionPage.programs[program.id].hours}`,
      price: program.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      eligibleCustomerType: "https://schema.org/Enthusiast",
      url: absoluteUrl("/tuition"),
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: program.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        unitCode: "WEE",
        billingIncrement: 1,
      },
    })),
  };
}

function website(): Json {
  return {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: school.name,
    inLanguage: ["en-US", "es"],
    publisher: { "@id": ORG_ID },
  };
}

/**
 * Every answer here is rendered on /faq. Marking up an answer the page does not
 * show is what Google's policy forbids, so the two read from the same content.
 */
function faqPage(c: Content, locale: Locale): Json {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(locale === "es" ? "/es/faq" : "/faq")}#faq`,
    inLanguage: locale === "es" ? "es" : "en-US",
    mainEntity: faqPageItems.map((id) => ({
      "@type": "Question",
      name: c.faqPage.items[id].q,
      acceptedAnswer: { "@type": "Answer", text: c.faqPage.items[id].a },
    })),
  };
}

/** Home > section > page, so a result shows the path rather than a bare URL. */
function breadcrumb(path: string, c: Content, locale: Locale): Json | null {
  if (path === "/") return null;
  const trail = path.split("/").filter(Boolean);
  const items = [{ name: c.nav.home, path: "/" }];
  let walked = "";
  for (const part of trail) {
    walked += `/${part}`;
    items.push({ name: crumbName(walked, c), path: walked });
  }
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(locale === "es" && item.path !== "/" ? `/es${item.path}` : item.path),
    })),
  };
}

function crumbName(path: string, c: Content): string {
  const campus = campuses.find((entry) => `/campuses/${entry.slug}` === path);
  if (campus) return c.campuses[campus.slug].name;
  const key = path.replace(/^\//, "") as keyof Content["pageTitles"];
  return c.pageTitles[key] ?? path;
}

/**
 * The graph for one page. `path` is the locale-stripped path, the same value
 * the canonical tag and the page title are built from.
 */
export function structuredData(path: string, c: Content, locale: Locale): string {
  const graph: Json[] = [organization(c)];

  if (path === "/") graph.push(website());

  const campusMatch = path.match(/^\/campuses\/([^/]+)$/);
  if (campusMatch) {
    const node = preschool(campusMatch[1], c);
    if (node) graph.push(node);
  }

  if (path === "/tuition") graph.push(offers(c));
  if (path === "/faq") graph.push(faqPage(c, locale));

  const crumbs = breadcrumb(path, c, locale);
  if (crumbs) graph.push(crumbs);

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}
