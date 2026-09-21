import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { A11Y_BOOT_SCRIPT } from "@/lib/a11y";
import { CAMPUS_BOOT_SCRIPT } from "@/lib/campus";
import { localizePath, stripLocale, useLocale } from "@/lib/locale";
import { absoluteUrl } from "@/lib/site-url";
import { pageTitle } from "@/lib/page-title";
import { en } from "@/content/en";
import { es } from "@/content/es";
import { useRouterState } from "@tanstack/react-router";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Title and description are rendered in RootDocument instead: this block
      // is evaluated once and cannot vary by locale, so a static entry here
      // would win over the Spanish one and ship English metadata on /es pages.
      { name: "theme-color", content: "#0D2C6B" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      // Fonts are self-hosted (see the @font-face block in src/styles.css).
      // They used to come from fonts.googleapis.com, which handed Google every
      // visitor's IP on every page view.
      //
      // These two faces carry the headline and body text, so they are preloaded.
      // Measured: preloaded faces start at ~200ms, in parallel with the
      // stylesheet; the faces that are not preloaded do not start until ~430ms,
      // after CSS parses and layout asks for them.
      //
      // Chrome logs "preloaded ... but not used within a few seconds" for these.
      // That warning is a false positive -- its heuristic misfires on fonts with
      // a `unicode-range`, and both faces do end up in `document.fonts` as
      // loaded, each fetched exactly once. Do not "fix" it by deleting these.
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/plus-jakarta-sans-800-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/plus-jakarta-sans-400-latin.woff2",
        crossOrigin: "anonymous",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  const locale = useLocale();
  const canonical = useRouterState({ select: (s) => stripLocale(s.location.pathname) });
  const content = locale === "es" ? es : en;
  const meta = content.meta;

  return (
    <html lang={locale} className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Rendered here rather than in `head`, which is evaluated once and
            cannot see the active locale. React hoists these into <head>. */}
        <title>{pageTitle(canonical, content)}</title>
        <meta name="description" content={meta.description} />
        {/* Absolute, on the canonical origin: Google prefers them, and the app
            answers on more than one hostname. */}
        <link rel="canonical" href={absoluteUrl(localizePath(canonical, locale))} />
        <link rel="alternate" hrefLang="en" href={absoluteUrl(localizePath(canonical, "en"))} />
        <link rel="alternate" hrefLang="es" href={absoluteUrl(localizePath(canonical, "es"))} />
        <link rel="alternate" hrefLang="x-default" href={absoluteUrl(localizePath(canonical, "en"))} />
        {/* Applies saved accessibility preferences before first paint, so a
            visitor who chose larger text never sees the default size flash. */}
        <script dangerouslySetInnerHTML={{ __html: A11Y_BOOT_SCRIPT }} />
        {/* Same pre-paint trick for the campus phone number. */}
        <script dangerouslySetInnerHTML={{ __html: CAMPUS_BOOT_SCRIPT }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
          <Toaster richColors position="top-right" />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
