#!/usr/bin/env node
/**
 * WCAG 2.2 AA regression check: every page, both languages.
 *
 * Runs against a live server (the local dev server by default). For each route:
 *
 *  - axe-core with the WCAG 2.0 / 2.1 / 2.2 A and AA rule sets, plus the
 *    landmark rules the September 2026 audit cited (finding 04). Any violation
 *    fails.
 *  - axe's *undecided* colour-contrast results, where it did compute a ratio
 *    and that ratio is below the requirement. axe reports these as "incomplete"
 *    instead of failing them because it skips text it judges too short to
 *    assess -- which is how three letters of the ACADEMY wordmark sat at
 *    1.65-2.16:1 through a clean axe run.
 *  - The wordmark letters themselves, measured directly for the same reason
 *    (audit finding 05): a palette tweak must not slip under 3:1 unnoticed.
 *  - Focus Not Obscured (2.4.11, audit finding 02): scroll-padding-top must
 *    clear the sticky header, at desktop and phone widths.
 *  - Reflow at 320px (WCAG 1.4.10): no sideways scrolling.
 *  - A unique <title> on every page (WCAG 2.4.2).
 *
 * Automated checks find roughly a third of WCAG problems. Passing this is
 * necessary, not sufficient; keyboard and screen-reader testing still matter.
 *
 * Usage:  npm run a11y            (dev server on http://127.0.0.1:8081)
 *         npm run a11y -- --base https://example.com
 * Exit:   0 clean, 1 problems found, 2 could not run.
 */
import { createRequire } from "node:module";
import { chromium } from "playwright";

const require = createRequire(import.meta.url);
const AXE_PATH = require.resolve("axe-core/axe.min.js");

const baseIndex = process.argv.indexOf("--base");
const BASE = (baseIndex > -1 ? process.argv[baseIndex + 1] : "http://127.0.0.1:8081").replace(/\/$/, "");

// Every English route. Each has a Spanish mirror at the same path under /es.
const PATHS = [
  "/",
  "/about",
  "/accessibility",
  "/campuses",
  "/campuses/tucson",
  "/campuses/yuma",
  "/careers",
  "/clever",
  "/contact",
  "/enroll",
  "/handbook",
  "/info",
  "/parents",
  "/policies",
  "/privacy",
  "/programs",
  "/tour",
  "/tuition",
  "/why-us",
];
const ROUTES = PATHS.flatMap((path) => [path, path === "/" ? "/es" : `/es${path}`]);
const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"];
// Best-practice rules, run by name alongside the tags: axe files landmark
// structure under "best-practice", but these are what the audit's finding 04
// (WCAG 1.3.1) checked.
const EXTRA_RULES = [
  "region",
  "landmark-complementary-is-top-level",
  "landmark-no-duplicate-main",
  "landmark-one-main",
  "landmark-unique",
];

/** Header must not cover what the browser scrolls to (WCAG 2.4.11). */
function headerClearance() {
  const header = document.querySelector("header");
  if (!header) return null;
  const pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const height = header.getBoundingClientRect().height;
  return { pad: Math.round(pad), height: Math.round(height), ok: pad >= height };
}

async function launch() {
  try {
    return await chromium.launch({ headless: true });
  } catch {
    // Playwright's bundled Chromium is not installed; use the system Chrome
    // rather than make every run download a browser.
    return chromium.launch({ headless: true, channel: "chrome" });
  }
}

async function checkRoute(page, route) {
  const problems = [];

  await page.setViewportSize({ width: 1280, height: 900 });
  const res = await page.goto(BASE + route, { waitUntil: "load" });
  if (!res || !res.ok()) return { problems: [`HTTP ${res ? res.status() : "no response"}`], title: "" };
  // Let the hero's fade-in finish, so contrast is measured on the settled page.
  await page.waitForTimeout(800);

  await page.addScriptTag({ path: AXE_PATH });
  const result = await page.evaluate(async ({ tags, extraRules }) => {
    const out = await window.axe.run(document, {
      runOnly: { type: "tag", values: tags },
      resultTypes: ["violations", "incomplete"],
    });
    const landmarks = await window.axe.run(document, {
      runOnly: { type: "rule", values: extraRules },
      resultTypes: ["violations"],
    });
    return {
      violations: [...out.violations, ...landmarks.violations].map((v) => ({
        id: v.id,
        impact: v.impact,
        targets: v.nodes.slice(0, 3).map((n) => n.target.join(" ")),
        count: v.nodes.length,
      })),
      lowContrast: out.incomplete
        .filter((v) => v.id === "color-contrast")
        .flatMap((v) => v.nodes)
        .map((n) => {
          const data = (n.any[0] && n.any[0].data) || {};
          return {
            target: n.target.join(" "),
            ratio: data.contrastRatio,
            need: parseFloat(data.expectedContrastRatio),
          };
        })
        // A ratio below 1 is impossible; axe reports 0 when it could not
        // compute one at all (an empty textarea, text over a photo). Those need
        // a human, not an automatic failure.
        .filter((x) => typeof x.ratio === "number" && x.ratio >= 1 && x.need && x.ratio < x.need),
      // The coloured ACADEMY letters: aria-hidden spans inside the h1. Measured
      // against white at their rendered size, with WCAG's large-text rule
      // (>= 24px, or >= 18.66px bold) picking 3:1 or 4.5:1.
      wordmark: [...document.querySelectorAll("h1 [aria-hidden] > span")].map((el) => {
        const cs = getComputedStyle(el);
        const rgb = cs.color.match(/[\d.]+/g).slice(0, 3).map(Number);
        const lin = (c) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
        const L = 0.2126 * lin(rgb[0]) + 0.7152 * lin(rgb[1]) + 0.0722 * lin(rgb[2]);
        const px = parseFloat(cs.fontSize);
        const large = px >= 24 || (px >= 18.66 && Number(cs.fontWeight) >= 700);
        return { letter: el.textContent, ratio: 1.05 / (L + 0.05), need: large ? 3 : 4.5 };
      }),
      // Checked directly: axe's landmark-complementary-is-top-level rule does
      // not flag an <aside> inside <main>, which is exactly what the audit's
      // finding 04 was about.
      nestedAsides: document.querySelectorAll("main aside, header aside, footer aside, nav aside").length,
      title: document.title,
    };
  }, { tags: TAGS, extraRules: EXTRA_RULES });

  for (const v of result.violations) {
    problems.push(`axe ${v.id} (${v.impact}) x${v.count}: ${v.targets.join(" | ")}`);
  }
  for (const x of result.lowContrast) {
    problems.push(`contrast ${x.ratio.toFixed(2)}:1 < ${x.need}:1 at ${x.target}`);
  }
  if (result.nestedAsides > 0) {
    problems.push(`${result.nestedAsides} <aside> nested inside another landmark (complementary must be top level)`);
  }
  for (const w of result.wordmark) {
    if (w.ratio < w.need) problems.push(`wordmark "${w.letter}" ${w.ratio.toFixed(2)}:1 < ${w.need}:1`);
  }

  const desktop = await page.evaluate(headerClearance);
  if (desktop && !desktop.ok) {
    problems.push(`sticky header ${desktop.height}px taller than scroll-padding-top ${desktop.pad}px at 1280px (2.4.11)`);
  }

  await page.setViewportSize({ width: 320, height: 800 });
  await page.waitForTimeout(300);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  if (overflow > 0) problems.push(`scrolls sideways by ${overflow}px at 320px wide`);
  const phone = await page.evaluate(headerClearance);
  if (phone && !phone.ok) {
    problems.push(`sticky header ${phone.height}px taller than scroll-padding-top ${phone.pad}px at 320px (2.4.11)`);
  }

  return { problems, title: result.title };
}

let browser;
try {
  browser = await launch();
} catch (error) {
  console.error(`Could not start a browser: ${error.message}`);
  process.exit(2);
}

const page = await browser.newPage();
const titles = new Map();
let failures = 0;

try {
  for (const route of ROUTES) {
    let outcome;
    try {
      outcome = await checkRoute(page, route);
    } catch (error) {
      console.error(`Could not check ${route}: ${error.message}`);
      process.exitCode = 2;
      break;
    }
    const seen = titles.get(outcome.title);
    if (outcome.title && seen) outcome.problems.push(`same <title> as ${seen}: "${outcome.title}"`);
    else titles.set(outcome.title, route);

    if (outcome.problems.length) {
      failures += 1;
      console.log(`✗ ${route}`);
      for (const p of outcome.problems) console.log(`    ${p}`);
    } else {
      console.log(`✓ ${route}`);
    }
  }
} finally {
  await browser.close();
}

if (process.exitCode === 2) process.exit(2);
console.log(
  failures
    ? `\n${failures} of ${ROUTES.length} pages have problems.`
    : `\nAll ${ROUTES.length} pages pass. Automated checks are not the whole story — test with a keyboard and a screen reader too.`,
);
process.exit(failures ? 1 : 0);
