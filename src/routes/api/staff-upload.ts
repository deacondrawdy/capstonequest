import { createFileRoute } from "@tanstack/react-router";
import { findSiteFile } from "@/data/site-files";

/**
 * Upload endpoint behind /staff. A plain multipart POST (slot + file) rather
 * than a server function, so a 20 MB scan streams as a file instead of being
 * serialised. Same-origin only: the staff cookie is SameSite=Strict.
 */
export const Route = createFileRoute("/api/staff-upload")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const reply = (status: number, body: object) =>
          new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

        const { isStaffRequest } = await import("@/lib/site-files/session.server");
        if (!isStaffRequest(request)) return reply(401, { error: "Please sign in again." });

        const { saveUpload, storageProblem, UploadError } = await import("@/lib/site-files/storage.server");
        const problem = storageProblem();
        if (problem) return reply(503, { error: problem });

        let form: FormData;
        try {
          form = await request.formData();
        } catch {
          return reply(400, { error: "The upload did not arrive. Please try again." });
        }
        const file = findSiteFile(String(form.get("slot") ?? ""));
        const upload = form.get("file");
        if (!file) return reply(400, { error: "Unknown file." });
        if (!(upload instanceof File) || upload.size === 0) return reply(400, { error: "Please choose a file." });

        try {
          const meta = await saveUpload(file, upload.name, Buffer.from(await upload.arrayBuffer()));
          return reply(200, { meta });
        } catch (err) {
          if (err instanceof UploadError) return reply(400, { error: err.message });
          console.error("[staff-upload]", err);
          return reply(500, { error: "Something went wrong saving that file. Please try again." });
        }
      },
    },
  },
});
