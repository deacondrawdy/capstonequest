/**
 * Site sections that are switched off for now. Flip a value to true to bring
 * the section back everywhere at once.
 *
 * careers — hidden September 16, 2026. While false: no Careers link in the
 * header, mobile menu, footer or site search; /careers and /es/careers return
 * "page not found"; and the privacy policy stops listing the job application
 * form as something the site collects. When restoring, also add "/careers"
 * back to PATHS in scripts/a11y-check.mjs.
 */
export const features = {
  careers: false,
} as const;
