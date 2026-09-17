import { createRouter } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { AppErrorComponent } from "@/lib/error-component";
import { AppLink, useContent } from "@/lib/locale";
import { routeTree } from "./routeTree.gen";

/**
 * Inside the normal site shell, so a visitor who hits a dead link still has the
 * navigation and the skip link, and the page speaks the language of the URL.
 */
function NotFound() {
  const c = useContent();
  return (
    <SiteShell>
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-3 px-6 text-center">
        <h1 className="text-2xl font-bold text-navy">{c.notFound.title}</h1>
        <p className="text-sm text-muted">{c.notFound.text}</p>
        <AppLink to="/" className="font-semibold text-brand hover:underline">
          {c.common.backHome}
        </AppLink>
      </div>
    </SiteShell>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
    defaultPreload: "intent",
    scrollRestoration: true,
  });
}
