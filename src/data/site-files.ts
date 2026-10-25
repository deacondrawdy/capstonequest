/**
 * The files school staff can replace themselves from /staff.
 *
 * Each is a fixed slot with a stable public URL under /files. Until someone
 * uploads a replacement, /files serves the original that shipped with the site
 * (`fallback`), so pages link to the slot URL and never to the original.
 *
 * Slots, not free-form uploads: the pages still decide where every file goes,
 * so a replacement can change a menu or a photo but never the layout.
 *
 * Client-safe: no server imports. Storage lives in lib/site-files.
 */

export type SiteFileGroup = "documents" | "enrollment" | "photos";

type PdfSlot = {
  slot: string;
  kind: "pdf";
  group: SiteFileGroup;
  label: string;
  hint: string;
  /** The original under public/, served until a replacement is uploaded. */
  fallback: string;
};

type PhotoSlot = {
  slot: string;
  kind: "photo";
  group: SiteFileGroup;
  label: string;
  hint: string;
  fallback: string;
  /**
   * WebP widths the layout asks for, matching the original's entry in
   * image-variants.json so a replacement drops into the same `srcset`.
   */
  widths: readonly number[];
  /**
   * Width ÷ height the page renders at. A replacement is cropped to it, so a
   * portrait phone photo cannot stretch a square headshot or a wide banner.
   * Omitted where the page crops with object-cover anyway.
   */
  aspect?: number;
};

export type SiteFile = PdfSlot | PhotoSlot;

export const siteFiles = [
  {
    slot: "breakfast-menu",
    kind: "pdf",
    group: "documents",
    label: "Breakfast menu",
    hint: "Parent resources page. Replace it each month.",
    fallback: "/documents/originals/capstone-quest-breakfast-menu.pdf",
  },
  {
    slot: "school-calendar",
    kind: "pdf",
    group: "documents",
    label: "School calendar",
    hint: "Parent resources page.",
    fallback: "/documents/originals/capstone-quest-2026-27-calendar.pdf",
  },
  {
    slot: "parent-handbook",
    kind: "pdf",
    group: "documents",
    label: "Parent handbook",
    hint: "Parent resources and handbook pages. The handbook page text is not changed by this upload.",
    fallback: "/documents/originals/capstone-quest-parent-handbook.pdf",
  },
  {
    slot: "enrollment-packet-tucson",
    kind: "pdf",
    group: "enrollment",
    label: "Tucson enrollment packet",
    hint: "Enroll page, Tucson download button.",
    fallback: "/documents/originals/capstone-quest-prek-enrollment-packet.pdf",
  },
  {
    slot: "enrollment-packet-yuma",
    kind: "pdf",
    group: "enrollment",
    label: "Yuma enrollment packet",
    hint: "Enroll page, Yuma download button.",
    fallback: "/documents/originals/capstone-quest-prek-enrollment-packet-yuma.pdf",
  },
  {
    slot: "fee-schedule",
    kind: "pdf",
    group: "enrollment",
    label: "Fee schedule",
    hint: "Tuition and parent resources pages. The prices written on the tuition page are not changed by this upload.",
    fallback: "/documents/originals/capstone-quest-prek-fee-schedule.pdf",
  },
  {
    slot: "scholarship-application",
    kind: "pdf",
    group: "enrollment",
    label: "Barr Family scholarship application",
    hint: "Tuition page.",
    fallback: "/documents/originals/barr-family-early-learners-scholarship-application.pdf",
  },
  {
    slot: "home-hero",
    kind: "photo",
    group: "photos",
    label: "Homepage photo",
    hint: "The large photo at the top of the homepage.",
    fallback: "/images/preschooler-coloring-capstone-quest-academy.jpg",
    widths: [384, 640, 1024, 1600],
  },
  {
    slot: "campus-tucson",
    kind: "photo",
    group: "photos",
    label: "Tucson campus photo",
    hint: "Campuses page card.",
    fallback: "/images/capstone-quest-academy-tucson-campus.jpg",
    widths: [384, 640, 1024, 1160],
  },
  {
    slot: "campus-tucson-banner",
    kind: "photo",
    group: "photos",
    label: "Tucson campus banner",
    hint: "Wide photo across the top of the Tucson page. Cropped to a 4:1 strip.",
    fallback: "/images/capstone-quest-academy-tucson-campus-banner.jpg",
    widths: [384, 640, 1024, 1145],
    aspect: 1145 / 283,
  },
  {
    slot: "campus-yuma",
    kind: "photo",
    group: "photos",
    label: "Yuma campus photo",
    hint: "Campuses page card and the top of the Yuma page.",
    fallback: "/images/capstone-quest-academy-yuma-campus.jpg",
    widths: [384, 640, 1024, 1600],
  },
  ...(
    [
      ["zoe", "zoe-cordova"],
      ["juridia", "juridia-hernandez"],
      ["sidney", "sidney-quinn"],
      ["tianna", "tianna-garcia"],
    ] as const
  ).map(
    ([id, fullName]) =>
      ({
        slot: `staff-${id}`,
        kind: "photo",
        group: "photos",
        label: `${id[0].toUpperCase()}${id.slice(1)}'s photo`,
        hint: "Staff card on the About page and campus page. Cropped square.",
        fallback: `/images/${fullName}-capstone-quest-academy.jpg`,
        widths: [384, 640],
        aspect: 1,
      }) as const,
  ),
] as const satisfies readonly SiteFile[];

export type SiteFileSlot = (typeof siteFiles)[number]["slot"];

export function findSiteFile(slot: string): SiteFile | undefined {
  return (siteFiles as readonly SiteFile[]).find((f) => f.slot === slot);
}

/** The public URL pages link to. PDFs keep a .pdf name so links read as downloads. */
export function siteFileUrl(slot: SiteFileSlot): string {
  const file = findSiteFile(slot)!;
  return `/files/${slot}.${file.kind === "pdf" ? "pdf" : "jpg"}`;
}

/** WebP widths for a /files photo URL, so <Photo> can build its srcset. */
export function siteFileWidths(src: string): readonly number[] | undefined {
  const match = /^\/files\/([a-z0-9-]+)\.jpg$/.exec(src);
  const file = match ? findSiteFile(match[1]) : undefined;
  return file?.kind === "photo" ? file.widths : undefined;
}
