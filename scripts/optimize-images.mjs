/**
 * Writes WebP copies of every photo in public/images at a few widths, plus a
 * manifest the <Photo> component reads to build its srcset.
 *
 * The originals stay: structured data, Open Graph and the share cards point at
 * the .jpg/.png files, and some crawlers still expect those formats.
 *
 * Run after adding or replacing an image:  node scripts/optimize-images.mjs
 * The outputs are committed, so the build does not need sharp.
 */
import { readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const MANIFEST = "src/data/image-variants.json";

// Photos fill anything from a 96px staff avatar to a full-width hero on a
// high-density phone. Icons (the owl, the logo) only ever render small.
const PHOTO_WIDTHS = [384, 640, 1024, 1600];
const ICON_WIDTHS = [96, 192];
const ICONS = new Set(["logo.png", "owl.png"]);

const manifest = {};

for (const file of readdirSync(DIR).sort()) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const src = path.join(DIR, file);
  const { width } = await sharp(src).metadata();
  const wanted = ICONS.has(file) ? ICON_WIDTHS : PHOTO_WIDTHS;
  // Never upscale; keep the original width as the top size when it falls
  // between steps, so the largest variant is as sharp as the source.
  const widths = [...new Set([...wanted.filter((w) => w < width), Math.min(width, wanted.at(-1))])];
  const stem = file.replace(/\.[^.]+$/, "");

  for (const w of widths) {
    await sharp(src)
      .resize({ width: w })
      .webp({ quality: ICONS.has(file) ? 90 : 78 })
      .toFile(path.join(DIR, `${stem}-${w}.webp`));
  }
  manifest[`/images/${file}`] = widths;
  console.log(file, widths.join(", "));
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`wrote ${MANIFEST}`);
