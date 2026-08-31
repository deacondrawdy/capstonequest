import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { A11Y_BOOT_SCRIPT } from "@/lib/a11y";
import { localizePath, stripLocale, useLocale } from "@/lib/locale";
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
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  const locale = useLocale();
  const canonical = useRouterState({ select: (s) => stripLocale(s.location.pathname) });
  const meta = locale === "es" ? es.meta : en.meta;

  return (
    <html lang={locale} className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        {/* Rendered here rather than in `head`, which is evaluated once and
            cannot see the active locale. React hoists these into <head>. */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* Relative hrefs: the production domain is not configured here yet.
            Swap for absolute URLs once it is — Google prefers them. */}
        <link rel="alternate" hrefLang="en" href={localizePath(canonical, "en")} />
        <link rel="alternate" hrefLang="es" href={localizePath(canonical, "es")} />
        <link rel="alternate" hrefLang="x-default" href={localizePath(canonical, "en")} />
        {/* Applies saved accessibility preferences before first paint, so a
            visitor who chose larger text never sees the default size flash. */}
        <script dangerouslySetInnerHTML={{ __html: A11Y_BOOT_SCRIPT }} />
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
