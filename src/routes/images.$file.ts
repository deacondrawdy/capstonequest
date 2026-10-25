import { createFileRoute } from "@tanstack/react-router";

/**
 * The photos were renamed from one-word names (hero.jpg, tucson.jpg) to
 * descriptive ones for image search. Requests for an old name, and its WebP
 * widths, are sent to the new one so links and indexed images keep working.
 * Existing files under public/images are served statically and never get here.
 */
const RENAMED: Record<string, string> = {
  hero: "preschooler-coloring-capstone-quest-academy",
  binoculars: "preschoolers-toy-binoculars-pre-k-classroom",
  bubbles: "preschooler-blowing-bubbles-after-care",
  "classroom-morning": "pre-k-classroom-wooden-blocks-learning-centers",
  "playground-smile": "preschooler-smiling-playground-climber",
  "turkey-hats": "preschoolers-thanksgiving-turkey-hats",
  tucson: "capstone-quest-academy-tucson-campus",
  "tucson-banner": "capstone-quest-academy-tucson-campus-banner",
  yuma: "capstone-quest-academy-yuma-campus",
  zoe: "zoe-cordova-capstone-quest-academy",
  juridia: "juridia-hernandez-capstone-quest-academy",
  sidney: "sidney-quinn-capstone-quest-academy",
  tianna: "tianna-garcia-capstone-quest-academy",
  logo: "capstone-quest-academy-logo",
  owl: "owlivia-capstone-quest-owl",
};

export const Route = createFileRoute("/images/$file")({
  server: {
    handlers: {
      GET: ({ params }) => {
        const match = /^([a-z-]+?)((?:-\d+)?\.(?:jpg|png|webp))$/.exec(params.file);
        const renamed = match && RENAMED[match[1]];
        if (!renamed) return new Response("Not found", { status: 404 });
        return new Response(null, { status: 301, headers: { Location: `/images/${renamed}${match[2]}` } });
      },
    },
  },
});
