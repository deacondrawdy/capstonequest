/**
 * Where this site actually lives.
 *
 * The app answers on its Railway hostname as well as the real domain, so every
 * page carries a rel=canonical and absolute hreflang links pointing here — that
 * is what tells a search engine which copy counts.
 *
 * Redirecting the other hostnames is not done in the app: a route file may not
 * import server-only modules, so the host is not readable from here. The www
 * form is redirected by a Cloudflare rule, and the Railway hostname is removed
 * from the service once the custom domain works.
 *
 * SITE_ORIGIN overrides the origin for a staging deployment.
 */
export const SITE_ORIGIN =
  (typeof process !== "undefined" && process.env?.SITE_ORIGIN?.trim()) ||
  "https://capstonequestacademy.com";

/** An absolute URL on the canonical origin, for a path that starts with "/". */
export function absoluteUrl(path: string): string {
  return `${SITE_ORIGIN}${path === "/" ? "" : path}`;
}
