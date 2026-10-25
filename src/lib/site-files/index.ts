import { createServerFn } from "@tanstack/react-start";
import { findSiteFile, siteFiles } from "@/data/site-files";
import { enrollmentPackets } from "@/data/school";
import type { StoredMeta } from "@/lib/site-files/storage.server";

export type { StoredMeta } from "@/lib/site-files/storage.server";

export type StaffState =
  | { signedIn: false; configured: boolean }
  | {
      signedIn: true;
      storageProblem: string | null;
      files: Record<string, StoredMeta | null>;
    };

/** What /staff renders: the sign-in form, or every slot with its replacement. */
export const getStaffState = createServerFn({ method: "GET" }).handler(async (): Promise<StaffState> => {
  const { isStaff, staffConfigured } = await import("@/lib/site-files/session.server");
  if (!isStaff()) return { signedIn: false, configured: staffConfigured() };
  const { readMeta, storageProblem } = await import("@/lib/site-files/storage.server");
  const entries = await Promise.all(siteFiles.map(async (f) => [f.slot, await readMeta(f.slot)] as const));
  return { signedIn: true, storageProblem: storageProblem(), files: Object.fromEntries(entries) };
});

/**
 * Root route loader: which slots are replaced, so pages link straight to the
 * right file instead of through a /files redirect (see SiteFilesProvider).
 */
export const getReplacedFiles = createServerFn({ method: "GET" }).handler(async () => {
  const { replacedVersions } = await import("@/lib/site-files/storage.server");
  return replacedVersions();
});

export const staffLogin = createServerFn({ method: "POST" })
  .validator((input: { password: string }) => ({ password: String(input?.password ?? "").slice(0, 200) }))
  .handler(async ({ data }) => {
    const { tryLogin } = await import("@/lib/site-files/session.server");
    return { result: tryLogin(data.password) };
  });

export const staffLogout = createServerFn({ method: "POST" }).handler(async () => {
  const { logout } = await import("@/lib/site-files/session.server");
  logout();
  return { ok: true as const };
});

export const revertStaffFile = createServerFn({ method: "POST" })
  .validator((input: { slot: string }) => {
    if (!findSiteFile(input?.slot)) throw new Error("Unknown file.");
    return { slot: input.slot };
  })
  .handler(async ({ data }) => {
    const { isStaff } = await import("@/lib/site-files/session.server");
    if (!isStaff()) throw new Error("Please sign in again.");
    const { revertSlot } = await import("@/lib/site-files/storage.server");
    await revertSlot(data.slot);
    return { ok: true as const };
  });

/**
 * Size and page count of a replaced PDF, for pages that print them beside the
 * download button. Null for a slot still serving its original.
 */
export const getPdfInfo = createServerFn({ method: "GET" })
  .validator((input: { slots: string[] }) => ({
    slots: (input?.slots ?? []).filter((s) => findSiteFile(s)?.kind === "pdf"),
  }))
  .handler(async ({ data }) => {
    const { readMeta } = await import("@/lib/site-files/storage.server");
    const entries = await Promise.all(
      data.slots.map(async (slot) => {
        const meta = await readMeta(slot);
        return [slot, meta ? { size: meta.size, pages: meta.pages ?? null } : null] as const;
      }),
    );
    return Object.fromEntries(entries) as Record<string, { size: number; pages: number | null } | null>;
  });

export type PacketInfo = Awaited<ReturnType<typeof getPdfInfo>>;

/**
 * /enroll's route loader: size and page count of any packet staff replaced.
 * Lives here, not in pages/enroll, so the route file does not import the page
 * (which ties the page into the router chunk and makes a circular import).
 */
export function loadPacketInfo() {
  return getPdfInfo({ data: { slots: enrollmentPackets.map((p) => `enrollment-packet-${p.campus}`) } });
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
