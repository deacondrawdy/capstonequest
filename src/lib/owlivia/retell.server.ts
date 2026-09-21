/**
 * Server-only calls to Retell, for the Owlivia widget.
 *
 * The API key stays here. A Retell key can start calls and read transcripts, so
 * it must never reach the browser: the page asks this server for a short-lived
 * web-call token instead, which is what the browser SDK needs and all it needs.
 *
 * Set RETELL_API_KEY in the deployment's environment. Without it the widget
 * reports that Owlivia is unavailable and shows the campus phone number, which
 * is the honest failure — the same rule the forms follow.
 */
if (typeof window !== "undefined") {
  throw new Error(
    "@/lib/owlivia/retell.server is server-only. Call it from a createServerFn handler, never from a component.",
  );
}

/** Owlivia on the phone, and the same voice in the browser. */
export const VOICE_AGENT_ID = "agent_b7f5c03adab996bc139d8c84b8";
/** Retell keeps text chat on its own agent. */
export const CHAT_AGENT_ID = "agent_ac37c7c9f0f1ac4fbc00c8c550";

const API = "https://api.retellai.com";
const TIMEOUT_MS = 15_000;

function key(): string {
  const raw = typeof process !== "undefined" ? process.env?.RETELL_API_KEY : undefined;
  const trimmed = raw?.trim();
  if (!trimmed) {
    throw new Error("RETELL_API_KEY is not set, so Owlivia cannot start a call or a chat.");
  }
  return trimmed;
}

/** True when the widget can work at all; the page hides itself when false. */
export function owliviaConfigured(): boolean {
  return Boolean(
    typeof process !== "undefined" && process.env?.RETELL_API_KEY?.trim(),
  );
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${key()}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Retell ${path} responded ${res.status}${detail ? `: ${detail.slice(0, 300)}` : ""}`);
  }
  return (await res.json()) as T;
}

/** A token the browser SDK trades for a live voice call. Expires on its own. */
export async function createWebCall(): Promise<{ accessToken: string; callId: string }> {
  const data = await post<{ access_token?: string; call_id?: string }>("/v2/create-web-call", {
    agent_id: VOICE_AGENT_ID,
  });
  if (!data.access_token) throw new Error("Retell returned no access token for the web call.");
  return { accessToken: data.access_token, callId: data.call_id ?? "" };
}

/** Opens a chat. The id comes back to the browser and identifies the thread. */
export async function createChat(): Promise<string> {
  const data = await post<{ chat_id?: string }>("/create-chat", { agent_id: CHAT_AGENT_ID });
  if (!data.chat_id) throw new Error("Retell returned no chat id.");
  return data.chat_id;
}

type ChatMessage = { message_id?: string; role?: string; content?: string };

/**
 * Sends one message and returns what Owlivia says back.
 *
 * Retell answers with the messages it added this turn, which can include tool
 * calls with no text of their own (checking the Cal.com calendar, for one). We
 * keep the agent's spoken text and join it, so a booking turn reads as a reply
 * rather than an empty bubble.
 */
export async function sendChatMessage(chatId: string, content: string): Promise<string> {
  const data = await post<{ messages?: ChatMessage[] }>("/create-chat-completion", {
    chat_id: chatId,
    content,
  });
  const reply = (data.messages ?? [])
    .filter((m) => m.role === "agent" || m.role === "assistant")
    .map((m) => (m.content ?? "").trim())
    .filter(Boolean)
    .join("\n\n");
  return reply;
}
