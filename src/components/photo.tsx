import type { ComponentProps } from "react";
import variants from "@/data/image-variants.json";

type PhotoProps = Omit<ComponentProps<"img">, "src" | "srcSet" | "sizes"> & {
  /** The original file under /images. The WebP variants are looked up from it. */
  src: string;
  /**
   * How wide the image renders, as a `sizes` attribute. Without it the browser
   * assumes full viewport width and downloads the largest file.
   */
  sizes: string;
  /**
   * The largest image in the first screen (the hero). Loads eagerly at high
   * priority; everything else waits until it is about to scroll into view.
   */
  priority?: boolean;
};

const table = variants as Record<string, number[]>;

/**
 * An <img> that serves WebP at the width the layout needs.
 *
 * The variants come from `scripts/optimize-images.mjs`. An image that has not
 * been through it yet falls back to its original file, so a new photo still
 * shows before anyone runs the script.
 */
export function Photo({ src, sizes, priority = false, ...rest }: PhotoProps) {
  const widths = table[src];
  const stem = src.replace(/\.[^.]+$/, "");
  const srcSet = widths?.map((w) => `${stem}-${w}.webp ${w}w`).join(", ");
  // The middle variant is the fallback for the rare browser that ignores
  // srcset; the original stays as the fallback for an unprocessed image.
  const fallback = widths ? `${stem}-${widths[Math.min(1, widths.length - 1)]}.webp` : src;

  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={widths ? sizes : undefined}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      {...rest}
    />
  );
}
