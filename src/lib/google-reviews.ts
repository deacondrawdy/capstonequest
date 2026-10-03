import { createServerFn } from "@tanstack/react-start";
import type { PlaceReviews } from "@/lib/google-reviews.server";

export type { PlaceReview, PlaceReviews } from "@/lib/google-reviews.server";

/** Both sites' Google rating and reviews; an empty list when not configured. */
export const fetchGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<PlaceReviews[]> => {
    const { getPlaceReviews } = await import("@/lib/google-reviews.server");
    return getPlaceReviews();
  },
);
