/**
 * The browser's half of the Owlivia widget: three server functions that keep
 * the Retell key on the server (see ./retell.server.ts).
 *
 * Errors are deliberately allowed to reach the caller. The widget shows the
 * campus phone number when Owlivia cannot answer, rather than a chat that
 * silently stops replying.
 */
import { createServerFn } from "@tanstack/react-start";

export const startVoiceCall = createServerFn({ method: "POST" }).handler(async () => {
  const { createWebCall } = await import("@/lib/owlivia/retell.server");
  return createWebCall();
});

export const openChat = createServerFn({ method: "POST" }).handler(async () => {
  const { createChat } = await import("@/lib/owlivia/retell.server");
  return { chatId: await createChat() };
});

export const sendMessage = createServerFn({ method: "POST" })
  .validator((input: { chatId: string; content: string }) => {
    const chatId = String(input?.chatId ?? "").trim();
    const content = String(input?.content ?? "").trim();
    if (!chatId) throw new Error("No chat to send to.");
    if (!content) throw new Error("Nothing to send.");
    // A parent's question is a sentence or two; anything longer is a paste or
    // an attempt to run up the bill.
    return { chatId, content: content.slice(0, 1000) };
  })
  .handler(async ({ data }) => {
    const { sendChatMessage } = await import("@/lib/owlivia/retell.server");
    return { reply: await sendChatMessage(data.chatId, data.content) };
  });
