import { createFileRoute } from "@tanstack/react-router";
import { findSiteFile } from "@/data/site-files";

/**
 * Serves a staff-replaceable file: the uploaded replacement when there is one,
 * otherwise a redirect to the original that shipped with the site.
 *
 *   /files/breakfast-menu.pdf      a PDF slot
 *   /files/campus-tucson.jpg       a photo slot's full-size JPEG
 *   /files/campus-tucson-640.webp  one of its srcset widths
 *
 * The bare URL never changes when a file is replaced, so it is no-cache:
 * browsers (and Cloudflare) check back each time, and an unchanged file costs
 * a 304. Pages load images as ?v=<upload time>, which names one exact upload
 * and is cached for a year.
 */
function resolve(name: string) {
  const original = /^([a-z0-9-]+)\.(pdf|jpg)$/.exec(name);
  if (original) {
    const file = findSiteFile(original[1]);
    if (file && (file.kind === "pdf") === (original[2] === "pdf")) return { file, width: undefined };
  }
  const variant = /^([a-z0-9-]+)-(\d+)\.webp$/.exec(name);
  if (variant) {
    const file = findSiteFile(variant[1]);
    const width = Number(variant[2]);
    if (file?.kind === "photo" && file.widths.includes(width)) return { file, width };
  }
  return null;
}

export const Route = createFileRoute("/files/$name")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const target = resolve(params.name);
        if (!target) return new Response("Not found", { status: 404 });
        const { file, width } = target;

        const { readMeta, readStored } = await import("@/lib/site-files/storage.server");
        const meta = await readMeta(file.slot);
        const body = meta ? await readStored(file.slot, width) : null;

        if (!meta || !body) {
          const fallback = width ? file.fallback.replace(/\.[^.]+$/, `-${width}.webp`) : file.fallback;
          return new Response(null, {
            status: 302,
            headers: { Location: fallback, "Cache-Control": "no-cache" },
          });
        }

        const version = Date.parse(meta.updatedAt);
        const pinned = new URL(request.url).searchParams.get("v") === String(version);
        const etag = `"${file.slot}-${width ?? 0}-${version}"`;
        const headers: Record<string, string> = {
          "Content-Type": file.kind === "pdf" ? "application/pdf" : width ? "image/webp" : "image/jpeg",
          "Cache-Control": pinned ? "public, max-age=31536000, immutable" : "public, no-cache",
          "Last-Modified": new Date(meta.updatedAt).toUTCString(),
          ETag: etag,
          "X-Content-Type-Options": "nosniff",
        };
        if (request.headers.get("if-none-match") === etag) return new Response(null, { status: 304, headers });
        return new Response(new Uint8Array(body), { headers: { ...headers, "Content-Length": String(body.length) } });
      },
    },
  },
});
