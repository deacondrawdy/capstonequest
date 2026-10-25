import { createFileRoute } from "@tanstack/react-router";
import { siteFiles } from "@/data/site-files";

/**
 * The old /documents/<name>.pdf links (search results, printed flyers, emails)
 * redirect to the slot that now serves that document, so they get the latest
 * replacement rather than the file that shipped with the site. The originals
 * live in public/documents/originals, which static serving answers first.
 */
export const Route = createFileRoute("/documents/$file")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const file = siteFiles.find((f) => f.kind === "pdf" && f.fallback.endsWith(`/${params.file}`));
        if (!file) return new Response("Not found", { status: 404 });
        return new Response(null, { status: 301, headers: { Location: `/files/${file.slot}.pdf` } });
      },
    },
  },
});
