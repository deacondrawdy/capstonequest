/**
 * Viewing preferences for the accessibility menu.
 *
 * Everything is driven by `data-a11y-*` attributes on `<html>`; the styling
 * lives in styles.css. Keeping the DOM contract to attributes (rather than
 * inline styles) means the boot script can apply saved preferences before first
 * paint without React ever disagreeing with the server-rendered markup.
 *
 * These are genuine user preferences, not an accessibility overlay: nothing
 * here rewrites page semantics, intercepts the keyboard, or claims compliance.
 */

export type TextSize = "base" | "lg" | "xl";

export type A11yPrefs = {
  text: TextSize;
  contrast: "normal" | "high";
  links: "default" | "underline";
  font: "default" | "readable";
  motion: "system" | "reduce";
};

export const A11Y_DEFAULTS: A11yPrefs = {
  text: "base",
  contrast: "normal",
  links: "default",
  font: "default",
  motion: "system",
};

export const A11Y_STORAGE_KEY = "cqa-a11y";

/** Only non-default values become attributes, so the DOM stays clean by default. */
const ATTR: Array<[keyof A11yPrefs, string, string]> = [
  ["text", "data-a11y-text", "base"],
  ["contrast", "data-a11y-contrast", "normal"],
  ["links", "data-a11y-links", "default"],
  ["font", "data-a11y-font", "default"],
  ["motion", "data-a11y-motion", "system"],
];

export function applyA11yPrefs(prefs: A11yPrefs, root?: HTMLElement) {
  const el = root ?? document.documentElement;
  for (const [key, attr, fallback] of ATTR) {
    const value = prefs[key];
    if (value === fallback) el.removeAttribute(attr);
    else el.setAttribute(attr, value);
  }
}

export function readA11yPrefs(): A11yPrefs {
  if (typeof window === "undefined") return A11Y_DEFAULTS;
  try {
    const raw = window.localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return A11Y_DEFAULTS;
    const parsed = JSON.parse(raw) as Partial<A11yPrefs>;
    return { ...A11Y_DEFAULTS, ...parsed };
  } catch {
    return A11Y_DEFAULTS;
  }
}

export function saveA11yPrefs(prefs: A11yPrefs) {
  try {
    window.localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // Private browsing or blocked storage: the preference still applies for
    // this page view, it just will not be remembered.
  }
}

/**
 * Runs in `<head>` before first paint so a saved preference never flashes the
 * default styling first. Deliberately tiny, dependency-free, and swallowing its
 * own errors — a storage exception must never block rendering the page.
 */
export const A11Y_BOOT_SCRIPT = `(function(){try{var p=JSON.parse(localStorage.getItem(${JSON.stringify(
  A11Y_STORAGE_KEY,
)})||"{}");var d=document.documentElement;var m=${JSON.stringify(
  ATTR.map(([key, attr, fallback]) => [key, attr, fallback]),
)};for(var i=0;i<m.length;i++){var v=p[m[i][0]];if(v&&v!==m[i][2])d.setAttribute(m[i][1],v);}}catch(e){}})();`;
