#!/usr/bin/env node
/**
 * Writes public/sitemap.xml.
 *
 * Generated rather than hand-kept, because a sitemap that lists a page which
 * 404s costs trust with a crawler, and this site hides sections behind a flag
 * (src/data/features.ts). Careers and Clever are switched off today and are
 * therefore absent here; turning either back on means running this again.
 *
 * Every page has a Spanish mirror under /es, and each entry declares both plus
 * an x-default, matching the hreflang links the pages themselves carry.
 *
 * Usage:  npm run sitemap
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ORIGIN = "https://capstonequestacademy.com";
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * English paths, with the priority a crawler should read as relative
 * importance. Keep in step with PATHS in scripts/a11y-check.mjs.
 */
const PAGES = [
  ["/", 1.0],
  ["/tuition", 0.9],
  ["/faq", 0.9],
  ["/enroll", 0.9],
  ["/tour", 0.9],
  ["/programs", 0.8],
  ["/campuses", 0.8],
  ["/campuses/tucson", 0.8],
  ["/campuses/yuma", 0.8],
  ["/why-us", 0.7],
  ["/about", 0.6],
  ["/parents", 0.6],
  ["/handbook", 0.6],
  ["/policies", 0.6],
  ["/info", 0.6],
  ["/contact", 0.6],
  ["/privacy", 0.6],
  ["/accessibility", 0.6],
];

const en = (path) => `${ORIGIN}${path === "/" ? "" : path}`;
const es = (path) => `${ORIGIN}/es${path === "/" ? "" : path}`;

function entry(loc, path, priority, lastmod) {
  return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${en(path)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${es(path)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${en(path)}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
}

const lastmod = new Date().toISOString().slice(0, 10);
const urls = [
  ...PAGES.map(([path, priority]) => entry(en(path), path, priority, lastmod)),
  ...PAGES.map(([path, priority]) => entry(es(path), path, priority, lastmod)),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), xml);
console.log(`Wrote public/sitemap.xml — ${urls.length} URLs, lastmod ${lastmod}.`);
