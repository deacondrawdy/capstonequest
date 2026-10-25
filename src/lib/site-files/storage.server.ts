/**
 * Disk storage for the files staff replace from /staff.
 *
 * Files live on a Railway volume, not in the database: the site has no
 * database, and a volume costs cents a month where a Postgres service costs
 * dollars. The container's own disk is rebuilt on every deploy, so production
 * refuses uploads unless STAFF_FILES_DIR points at the mounted volume
 * (e.g. /data/staff-files). Locally it defaults to .data/staff-files.
 *
 * Layout, one directory per slot:
 *   <dir>/<slot>/meta.json      filename, size, pages, updatedAt
 *   <dir>/<slot>/original.pdf   or original.jpg
 *   <dir>/<slot>/<width>.webp   photo variants
 * A slot directory is replaced whole (written beside it, then renamed), so a
 * reader never sees a new meta.json beside an old file.
 */
if (typeof window !== "undefined") {
  throw new Error(
    "@/lib/site-files/storage.server is server-only. Call it from a createServerFn handler or a server route.",
  );
}

import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { findSiteFile, siteFiles, type SiteFile } from "@/data/site-files";

export type StoredMeta = {
  filename: string;
  size: number;
  /** PDF page count when it could be read from the file. */
  pages?: number;
  updatedAt: string;
};

const PDF_MAX = 25 * 1024 * 1024;
const PHOTO_MAX = 25 * 1024 * 1024;

const configuredDir = process.env.STAFF_FILES_DIR?.trim();
const baseDir = configuredDir || join(process.cwd(), ".data", "staff-files");

/** Uploads are only safe where they survive a deploy. */
export function storageProblem(): string | null {
  if (configuredDir || process.env.NODE_ENV !== "production") return null;
  return "File storage is not set up yet, so uploads are turned off. Your web developer needs to attach a volume and set STAFF_FILES_DIR.";
}

function slotDir(slot: string) {
  return join(baseDir, slot);
}

export async function readMeta(slot: string): Promise<StoredMeta | null> {
  try {
    return JSON.parse(await readFile(join(slotDir(slot), "meta.json"), "utf8")) as StoredMeta;
  } catch {
    return null;
  }
}

/** The stored bytes for a slot's original or one photo width, or null. */
export async function readStored(slot: string, width?: number): Promise<Buffer | null> {
  const file = findSiteFile(slot);
  if (!file) return null;
  const name = width ? `${width}.webp` : file.kind === "pdf" ? "original.pdf" : "original.jpg";
  try {
    return await readFile(join(slotDir(slot), name));
  } catch {
    return null;
  }
}

export class UploadError extends Error {}

/** Validate, process and store a replacement. Throws UploadError on bad input. */
export async function saveUpload(file: SiteFile, filename: string, bytes: Buffer): Promise<StoredMeta> {
  const outputs = new Map<string, Buffer>();
  let pages: number | undefined;

  if (file.kind === "pdf") {
    if (bytes.length > PDF_MAX) throw new UploadError("That PDF is over 25 MB. Please save a smaller copy and try again.");
    if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
      throw new UploadError("That file is not a PDF. Please choose a .pdf file.");
    }
    pages = countPdfPages(bytes);
    outputs.set("original.pdf", bytes);
  } else {
    if (bytes.length > PHOTO_MAX) throw new UploadError("That photo is over 25 MB. Please choose a smaller one.");
    const sharp = (await import("sharp")).default;
    let meta;
    try {
      meta = await sharp(bytes).metadata();
    } catch {
      throw new UploadError("That file is not a photo we can read. Please upload a JPG, PNG or WebP.");
    }
    if (!meta.format || !["jpeg", "png", "webp"].includes(meta.format)) {
      throw new UploadError("Please upload a JPG, PNG or WebP photo. (iPhone HEIC photos need to be exported as JPG first.)");
    }
    const largest = Math.max(...file.widths);
    // rotate() applies the phone's EXIF orientation before anything is cropped.
    const base = () => sharp(bytes).rotate();
    const fit = (width: number) =>
      file.aspect
        ? { width, height: Math.round(width / file.aspect), fit: "cover" as const, position: "attention" as const }
        : { width, withoutEnlargement: true };
    outputs.set("original.jpg", await base().resize(fit(largest)).jpeg({ quality: 85, mozjpeg: true }).toBuffer());
    for (const width of file.widths) {
      outputs.set(`${width}.webp`, await base().resize(fit(width)).webp({ quality: 78 }).toBuffer());
    }
  }

  const stored: StoredMeta = {
    filename: filename.slice(0, 200),
    size: outputs.get(file.kind === "pdf" ? "original.pdf" : "original.jpg")!.length,
    pages,
    updatedAt: new Date().toISOString(),
  };
  outputs.set("meta.json", Buffer.from(JSON.stringify(stored, null, 2)));

  const dir = slotDir(file.slot);
  const staging = `${dir}.uploading-${Date.now()}`;
  const retired = `${dir}.old-${Date.now()}`;
  await mkdir(staging, { recursive: true });
  for (const [name, data] of outputs) await writeFile(join(staging, name), data);
  await rename(dir, retired).catch(() => undefined);
  await rename(staging, dir);
  await rm(retired, { recursive: true, force: true });
  versionCache = null;
  return stored;
}

/** Drop a replacement so the slot serves the original again. */
export async function revertSlot(slot: string): Promise<void> {
  await rm(slotDir(slot), { recursive: true, force: true });
  versionCache = null;
}

// Which slots hold a replacement, and when it was uploaded. Every page render
// asks, so it is kept in memory; this process is the only writer, and both
// writes above clear it.
let versionCache: Promise<Record<string, number>> | null = null;

/** Slot -> upload time (ms) for every replaced slot. */
export function replacedVersions(): Promise<Record<string, number>> {
  versionCache ??= Promise.all(
    siteFiles.map(async (f) => [f.slot, (await readMeta(f.slot))?.updatedAt] as const),
  ).then((entries) =>
    Object.fromEntries(entries.filter(([, at]) => at).map(([slot, at]) => [slot, Date.parse(at!)])),
  );
  return versionCache;
}

/**
 * Page count from the PDF's page tree. Reads the uncompressed /Type /Pages
 * /Count entries and takes the largest (the root counts every page). Returns
 * undefined when the tree sits inside a compressed object stream, rather than
 * guess.
 */
function countPdfPages(bytes: Buffer): number | undefined {
  const text = bytes.toString("latin1");
  let best = 0;
  for (const m of text.matchAll(/\/Type\s*\/Pages\b[^>]*?\/Count\s+(\d+)|\/Count\s+(\d+)[^>]*?\/Type\s*\/Pages\b/g)) {
    best = Math.max(best, Number(m[1] ?? m[2]));
  }
  return best > 0 ? best : undefined;
}
