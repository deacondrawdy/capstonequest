/**
 * Which campus a visitor is interested in.
 *
 * This exists so the header can show the phone number for the campus a family
 * actually attends. It is a stored preference, not detection: the two campuses
 * share a timezone (`America/Phoenix`), so the browser cannot tell them apart,
 * and inferring a city from an IP would mean adding a third-party geo provider
 * and contradicting the privacy policy's "no tracking" statement.
 *
 * Like `a11y.ts`, the contract with the DOM is a single attribute on `<html>`,
 * applied before first paint. The header renders both numbers and CSS shows one,
 * which avoids a hydration mismatch (the server cannot know the preference) and
 * means the hidden number is `display: none` — out of the accessibility tree, so
 * a screen reader announces one number rather than two.
 */

export type CampusPref = "tucson" | "yuma";

/** Tucson until a visitor says otherwise. */
export const CAMPUS_DEFAULT: CampusPref = "tucson";
export const CAMPUS_STORAGE_KEY = "cqa-campus";
const CAMPUS_ATTR = "data-campus";

export function applyCampusPref(campus: CampusPref, root?: HTMLElement) {
  const el = root ?? document.documentElement;
  if (campus === CAMPUS_DEFAULT) el.removeAttribute(CAMPUS_ATTR);
  else el.setAttribute(CAMPUS_ATTR, campus);
}

export function readCampusPref(): CampusPref {
  if (typeof window === "undefined") return CAMPUS_DEFAULT;
  try {
    const raw = window.localStorage.getItem(CAMPUS_STORAGE_KEY);
    return raw === "yuma" || raw === "tucson" ? raw : CAMPUS_DEFAULT;
  } catch {
    return CAMPUS_DEFAULT;
  }
}

export function saveCampusPref(campus: CampusPref) {
  try {
    window.localStorage.setItem(CAMPUS_STORAGE_KEY, campus);
  } catch {
    // Blocked storage: the choice still applies to this page view, it just is
    // not remembered.
  }
}

/**
 * Runs in `<head>` before first paint, so a Yuma family never sees the Tucson
 * number flash before theirs appears. Swallows its own errors — a storage
 * exception must never block rendering.
 */
export const CAMPUS_BOOT_SCRIPT = `(function(){try{var v=localStorage.getItem(${JSON.stringify(
  CAMPUS_STORAGE_KEY,
)});if(v===${JSON.stringify("yuma")})document.documentElement.setAttribute(${JSON.stringify(
  CAMPUS_ATTR,
)},v);}catch(e){}})();`;
