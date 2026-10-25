import { createContext, useContext, type ReactNode } from "react";
import { findSiteFile } from "@/data/site-files";

/**
 * Turns a slot URL (/files/campus-tucson.jpg) into the file to actually load.
 *
 * Pages keep linking to the stable /files URL, which redirects to the right
 * file. For images, though, that redirect was an extra round trip before the
 * homepage photo, the one Google times. So images resolve here, at render:
 * the shipped original under /images when nothing has been replaced, or the
 * upload with ?v=<upload time>, which /files caches for a year.
 */
const SiteFilesContext = createContext<Record<string, number>>({});

export function SiteFilesProvider({ versions, children }: { versions: Record<string, number>; children: ReactNode }) {
  return <SiteFilesContext.Provider value={versions}>{children}</SiteFilesContext.Provider>;
}

export function useResolveSiteFile(): (src: string) => string {
  const versions = useContext(SiteFilesContext);
  return (src) => {
    const match = /^\/files\/([a-z0-9-]+)\.(jpg|pdf)$/.exec(src);
    const file = match ? findSiteFile(match[1]) : undefined;
    if (!file) return src;
    const version = versions[file.slot];
    return version ? `${src}?v=${version}` : file.fallback;
  };
}
