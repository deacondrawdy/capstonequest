/**
 * Server-only delivery of a captured lead.
 *
 * Deliberately does NOT touch the database. Auth is off in this workspace, and
 * `.grok/references/data-and-auth.md` is explicit that unowned rows must never
 * hold personal data — a lead carries a parent's name, email, phone and a
 * child's date of birth. So leads are forwarded and never stored at rest here.
 *
 * Two independent channels, both optional, at least one required:
 *   LEAD_WEBHOOK_URL  POST the raw JSON. Point it at Zapier/Make/n8n today and
 *                     at the Twilio/cal.com flow later with no code change.
 *   RESEND_API_KEY    + LEAD_EMAIL_TO (+ optional LEAD_EMAIL_FROM) to email the
 *                     school directly.
 *
 * If neither is configured, delivery throws. That is intentional: the form must
 * never tell a parent "we'll confirm by email" when nothing was sent.
 */
if (typeof window !== "undefined") {
  throw new Error(
    "@/lib/leads/deliver.server is server-only. Call it from a createServerFn handler, never from a component or browser fetch.",
  );
}

export type LeadKind = "tour" | "enroll" | "contact" | "job";

export type LeadEnvelope = {
  kind: LeadKind;
  subject: string;
  fields: Array<[label: string, value: string]>;
  submittedAt: string;
};

const TIMEOUT_MS = 10_000;

function env(name: string): string {
  const raw = typeof process !== "undefined" ? process.env?.[name] : undefined;
  return raw && raw.trim() ? raw.trim() : "";
}

/** True when at least one delivery channel is configured. */
export function leadDeliveryConfigured(): boolean {
  return Boolean(env("LEAD_WEBHOOK_URL") || (env("RESEND_API_KEY") && env("LEAD_EMAIL_TO")));
}

function renderText(lead: LeadEnvelope): string {
  const lines = lead.fields
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value}`);
  return [lead.subject, "", ...lines, "", `Submitted: ${lead.submittedAt}`].join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHtml(lead: LeadEnvelope): string {
  const rows = lead.fields
    .filter(([, value]) => value.trim())
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 14px 6px 0;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:system-ui,sans-serif"><h2 style="margin:0 0 12px">${escapeHtml(lead.subject)}</h2><table style="border-collapse:collapse;font-size:14px">${rows}</table><p style="color:#666;font-size:12px;margin-top:16px">Submitted ${escapeHtml(lead.submittedAt)}</p></div>`;
}

async function postWebhook(url: string, lead: LeadEnvelope): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`webhook responded ${res.status}`);
}

async function sendEmail(lead: LeadEnvelope): Promise<void> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env("RESEND_API_KEY")}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env("LEAD_EMAIL_FROM") || "Capstone Quest website <onboarding@resend.dev>",
      to: env("LEAD_EMAIL_TO")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      subject: lead.subject,
      text: renderText(lead),
      html: renderHtml(lead),
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`resend responded ${res.status}`);
}

/**
 * Forward a lead on every configured channel. Resolves when at least one
 * succeeds; throws when none is configured or all configured channels fail.
 */
export async function deliverLead(lead: LeadEnvelope): Promise<{ channels: string[] }> {
  const attempts: Array<{ channel: string; run: () => Promise<void> }> = [];
  const webhook = env("LEAD_WEBHOOK_URL");
  if (webhook) attempts.push({ channel: "webhook", run: () => postWebhook(webhook, lead) });
  if (env("RESEND_API_KEY") && env("LEAD_EMAIL_TO")) {
    attempts.push({ channel: "email", run: () => sendEmail(lead) });
  }

  if (attempts.length === 0) {
    throw new Error(
      "No lead delivery channel configured. Set LEAD_WEBHOOK_URL, or RESEND_API_KEY together with LEAD_EMAIL_TO.",
    );
  }

  const results = await Promise.allSettled(attempts.map((a) => a.run()));
  const delivered = attempts
    .filter((_, i) => results[i].status === "fulfilled")
    .map((a) => a.channel);

  results.forEach((result, i) => {
    if (result.status === "rejected") {
      console.error(
        `[leads] ${lead.kind} delivery failed on ${attempts[i].channel}:`,
        result.reason,
      );
    }
  });

  if (delivered.length === 0) throw new Error("Every configured lead delivery channel failed.");
  return { channels: delivered };
}
