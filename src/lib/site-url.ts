/**
 * Where this site actually lives.
 *
 * The app answers on its Railway hostname as well as the real domain. Left
 * alone, a search engine indexes both and splits the site between two copies of
 * every page, so `canonicalHost` redirects everything to one of them and the
 * `<link rel="alternate">` tags point at absolute URLs on it.
 *
 * SITE_ORIGIN overrides this for a staging deployment that should not redirect
 * to production.
 */
export const SITE_ORIGIN =
  (typeof process !== "undefined" && process.env?.SITE_ORIGIN?.trim()) ||
  "https://capstonequestacademy.com";

/** "capstonequestacademy.com" */
export const SITE_HOST = SITE_ORIGIN.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * True for a host that should be redirected to `SITE_HOST`: the Railway
 * hostname, and the www. form of the real domain.
 *
 * Localhost and preview hosts are left alone, so development and Railway's
 * per-deployment preview URLs keep working.
 */
export function shouldRedirectHost(host: string): boolean {
  const bare = host.toLowerCase().split(":")[0];
  if (!bare || bare === SITE_HOST) return false;
  if (bare === `www.${SITE_HOST}`) return true;
  return bare.endsWith(".up.railway.app");
}

/** An absolute URL on the canonical origin, for a path that starts with "/". */
export function absoluteUrl(path: string): string {
  return `${SITE_ORIGIN}${path === "/" ? "" : path}`;
}
