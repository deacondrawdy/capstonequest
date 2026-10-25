/**
 * The /staff sign-in: one shared password for the school office.
 *
 * STAFF_PASSWORD is set in Railway's variables. A correct password earns a
 * signed, HTTP-only cookie good for 12 hours. The signing key is derived from
 * the password, so changing STAFF_PASSWORD signs everyone out.
 *
 * Deliberately not per-person accounts: there is one office, the only thing
 * behind the door is replacing public files, and visitors have no accounts.
 */
if (typeof window !== "undefined") {
  throw new Error("@/lib/site-files/session.server is server-only.");
}

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { getCookie, getRequestIP, setCookie } from "@tanstack/react-start/server";

const COOKIE = "cq_staff";
const TTL_SECONDS = 12 * 60 * 60;

function password(): string | null {
  return process.env.STAFF_PASSWORD?.trim() || null;
}

export function staffConfigured(): boolean {
  return password() !== null;
}

function sign(expires: string, secret: string): string {
  const key = createHash("sha256").update(`cq-staff-session:${secret}`).digest();
  return createHmac("sha256", key).update(expires).digest("base64url");
}

function same(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

/** True when the request carries a valid, unexpired staff cookie. */
export function isStaff(cookieValue = getCookie(COOKIE)): boolean {
  const secret = password();
  if (!secret || !cookieValue) return false;
  const [expires, sig] = cookieValue.split(".");
  if (!expires || !sig || Number(expires) * 1000 < Date.now()) return false;
  return same(sig, sign(expires, secret));
}

/** Read the staff cookie from a raw request (server routes). */
export function isStaffRequest(request: Request): boolean {
  const header = request.headers.get("cookie") ?? "";
  const match = new RegExp(`(?:^|;\\s*)${COOKIE}=([^;]+)`).exec(header);
  return isStaff(match ? decodeURIComponent(match[1]) : undefined);
}

// Five wrong guesses from one address lock it out for 15 minutes. In memory:
// one server process, and a restart clearing it is acceptable.
const failures = new Map<string, { count: number; until: number }>();

export function tryLogin(attempt: string): "ok" | "wrong" | "locked" | "unconfigured" {
  const secret = password();
  if (!secret) return "unconfigured";
  const ip = getRequestIP({ xForwardedFor: true }) ?? "unknown";
  const record = failures.get(ip);
  if (record && record.count >= 5 && record.until > Date.now()) return "locked";

  if (!same(attempt, secret)) {
    const fresh = !record || record.until < Date.now();
    failures.set(ip, {
      count: fresh ? 1 : record.count + 1,
      until: Date.now() + 15 * 60 * 1000,
    });
    return "wrong";
  }

  failures.delete(ip);
  const expires = String(Math.floor(Date.now() / 1000) + TTL_SECONDS);
  setCookie(COOKIE, `${expires}.${sign(expires, secret)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: TTL_SECONDS,
  });
  return "ok";
}

export function logout(): void {
  setCookie(COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
}
