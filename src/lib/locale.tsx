import { Link, useRouterState, type LinkProps } from "@tanstack/react-router";
import { en } from "@/content/en";
import { es } from "@/content/es";

export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];
export const LOCALE_STORAGE_KEY = "cqa-locale";

/** Every English route path. Spanish paths are these with an `/es` prefix. */
export type AppPath =
  | "/"
  | "/about"
  | "/campuses"
  | "/campuses/$slug"
  | "/careers"
  | "/clever"
  | "/contact"
  | "/enroll"
  | "/info"
  | "/parents"
  | "/policies"
  | "/programs"
  | "/tour"
  | "/tuition"
  | "/why-us";

const CONTENT = { en, es } as const;

/** The locale a pathname belongs to. `/es` and anything under it is Spanish. */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

/** Translate an English app path into the given locale. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

/** Strip the locale prefix, giving the canonical English path. */
export function stripLocale(pathname: string): string {
  if (pathname === "/es") return "/";
  return pathname.startsWith("/es/") ? pathname.slice(3) : pathname;
}

export function useLocale(): Locale {
  return useRouterState({ select: (s) => localeFromPathname(s.location.pathname) });
}

/** The copy for the active locale. `es` is type-locked to `en`'s shape. */
export function useContent() {
  return CONTENT[useLocale()];
}

/** The current page's equivalent in the other language, for the toggle. */
export function useAlternate() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPathname(pathname);
  const other: Locale = locale === "en" ? "es" : "en";
  return { locale, other, href: localizePath(stripLocale(pathname), other) };
}

type AppLinkProps = Omit<LinkProps, "to"> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
    to: AppPath;
    children?: React.ReactNode;
  };

/**
 * `Link`, but it keeps the visitor in their language.
 *
 * Call sites pass the English path — checked against `AppPath` — and the `/es`
 * prefix is applied here. Without this, a link inside a Spanish page would
 * silently drop the reader back into English.
 */
export function AppLink({ to, ...props }: AppLinkProps) {
  const locale = useLocale();
  // The Spanish routes mirror the English ones exactly, so the localized path
  // is always a real route; TanStack cannot infer that from a computed string.
  return <Link {...props} to={localizePath(to, locale) as LinkProps["to"]} />;
}
