import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { openChat, sendMessage, startVoiceCall } from "@/lib/owlivia/client";
import { useContent } from "@/lib/locale";
import { CAMPUS_DEFAULT, readCampusPref, type CampusPref } from "@/lib/campus";
import { campuses } from "@/data/school";

/**
 * Owlivia: the school's assistant, as a chat box with a voice call inside it.
 *
 * Chat leads. Voice is one click away but not the default: a voice call costs
 * the school per minute and will be pressed out of curiosity, while a typed
 * question costs almost nothing and is easier to get right — an email address
 * typed by a parent beats one dictated over a microphone, which matters because
 * Owlivia books tours.
 *
 * The Retell SDK is imported only when someone starts a call. It carries a
 * WebRTC client that no other page needs, so it stays out of the main bundle.
 *
 * Everything here fails towards the phone number. If Owlivia cannot answer, the
 * panel says so and shows the campus number rather than leaving a parent typing
 * into a box that will not reply.
 */
type VoiceState = "idle" | "connecting" | "live" | "ended" | "error";
type Message = { id: number; role: "agent" | "parent"; text: string };

type RetellClient = {
  startCall: (opts: { accessToken: string }) => Promise<unknown>;
  stopCall: () => void;
  on: (event: string, handler: () => void) => void;
};

export function Owlivia({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const c = useContent();
  // Same pattern as campus-switch.tsx: start at the default, read the stored
  // preference after mount, so the server and the first paint agree.
  const [campusSlug, setCampusSlug] = useState<CampusPref>(CAMPUS_DEFAULT);
  useEffect(() => setCampusSlug(readCampusPref()), []);
  const campus = campuses.find((cam) => cam.slug === campusSlug) ?? campuses[0];

  const [voice, setVoice] = useState<VoiceState>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [broken, setBroken] = useState(false);

  const chatId = useRef<string | null>(null);
  const client = useRef<RetellClient | null>(null);
  const nextId = useRef(1);
  const greeted = useRef(false);
  const logEnd = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function add(role: Message["role"], text: string) {
    setMessages((prev) => [...prev, { id: nextId.current++, role, text }]);
  }

  // The greeting goes in once, when the panel first opens. Guarded by a ref,
  // not by messages.length: Strict Mode runs the effect twice with the same
  // state, which greeted every parent twice.
  useEffect(() => {
    if (!open || greeted.current) return;
    greeted.current = true;
    add("agent", c.owlivia.greeting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    logEnd.current?.scrollIntoView({ block: "end" });
  }, [messages, busy]);

  // Hanging up when the panel closes matters: a call left running keeps the
  // microphone open and keeps billing.
  useEffect(() => {
    if (!open) hangUp();
  }, [open]);

  useEffect(() => {
    return () => {
      client.current?.stopCall();
      client.current = null;
    };
  }, []);

  function hangUp() {
    if (client.current) {
      try {
        client.current.stopCall();
      } catch {
        // Already gone; nothing to stop.
      }
      client.current = null;
    }
    setVoice((s) => (s === "live" || s === "connecting" ? "ended" : s));
  }

  async function call() {
    if (voice === "connecting" || voice === "live") {
      hangUp();
      return;
    }
    setVoice("connecting");
    try {
      const { accessToken } = await startVoiceCall();
      const { RetellWebClient } = await import("retell-client-js-sdk");
      const live = new RetellWebClient() as unknown as RetellClient;
      live.on("call_started", () => setVoice("live"));
      live.on("call_ended", () => {
        client.current = null;
        setVoice("ended");
      });
      client.current = live;
      // The browser asks for the microphone here. A refusal rejects.
      await live.startCall({ accessToken });
    } catch {
      client.current = null;
      setVoice("error");
    }
  }

  async function say(text: string) {
    if (busy || !text.trim()) return;
    setBusy(true);
    add("parent", text);
    try {
      if (!chatId.current) {
        const { chatId: id } = await openChat();
        chatId.current = id;
      }
      const { reply } = await sendMessage({ data: { chatId: chatId.current, content: text } });
      add("agent", reply || c.owlivia.noReply);
    } catch {
      setBroken(true);
      add("agent", c.owlivia.failed.replace("{phone}", campus.phone));
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  const voiceLabel = {
    idle: c.owlivia.startCall,
    connecting: c.owlivia.connecting,
    live: c.owlivia.endCall,
    ended: c.owlivia.callAgain,
    error: c.owlivia.tryAgain,
  }[voice];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl gap-0 p-0">
        <div className="flex items-center gap-4 rounded-t-[28px] bg-navy px-6 py-5 text-paper">
          <img
            src="/images/owl.png"
            alt=""
            width={56}
            height={56}
            className="size-14 rounded-full bg-paper object-contain p-1"
          />
          <div className="min-w-0">
            <DialogTitle className="text-xl font-extrabold text-paper">{c.owlivia.name}</DialogTitle>
            <DialogDescription className="text-sm text-paper/75">{c.owlivia.role}</DialogDescription>
          </div>
        </div>

        <div className="border-b border-line bg-paper-soft px-6 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant={voice === "live" ? "default" : "outline"}
              size="sm"
              onClick={call}
              disabled={voice === "connecting"}
            >
              {voice === "live" ? (
                <MicOff className="mr-1.5 size-4" aria-hidden />
              ) : (
                <Mic className="mr-1.5 size-4" aria-hidden />
              )}
              {voiceLabel}
            </Button>
            {/* Spoken aloud once when it changes, so a screen-reader user hears
                the call connect rather than watching a button relabel itself. */}
            <p role="status" className="text-sm text-muted">
              {voice === "live"
                ? c.owlivia.liveHint
                : voice === "connecting"
                  ? c.owlivia.connecting
                  : voice === "error"
                    ? c.owlivia.failed.replace("{phone}", campus.phone)
                    : c.owlivia.voiceHint}
            </p>
          </div>
        </div>

        <div className="max-h-[46vh] min-h-[14rem] overflow-y-auto px-6 py-4">
          <ul className="space-y-3">
            {messages.map((m) => (
              <li
                key={m.id}
                className={
                  m.role === "parent"
                    ? "ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-navy px-4 py-2.5 text-sm text-paper"
                    : "w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-paper-soft px-4 py-2.5 text-sm whitespace-pre-line text-ink"
                }
              >
                <span className="sr-only">
                  {m.role === "parent" ? c.owlivia.youSaid : `${c.owlivia.name}: `}
                </span>
                {m.text}
              </li>
            ))}
            {busy ? (
              <li className="w-fit rounded-2xl rounded-bl-sm bg-paper-soft px-4 py-2.5 text-sm text-muted">
                {c.owlivia.thinking}
              </li>
            ) : null}
          </ul>
          <div ref={logEnd} />
          {/* Announced separately from the bubbles: a live region on the list
              itself would re-read the whole conversation. */}
          <p className="sr-only" role="status">
            {busy ? c.owlivia.thinking : messages[messages.length - 1]?.text}
          </p>
        </div>

        <form
          className="flex items-end gap-2 border-t border-line px-6 py-4"
          onSubmit={(e) => {
            e.preventDefault();
            const text = draft.trim();
            setDraft("");
            void say(text);
          }}
        >
          <label htmlFor="owlivia-message" className="sr-only">
            {c.owlivia.inputLabel}
          </label>
          <input
            id="owlivia-message"
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={c.owlivia.placeholder}
            autoComplete="off"
            maxLength={1000}
            disabled={broken}
            className="min-w-0 flex-1 rounded-full border border-input bg-paper px-4 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none disabled:opacity-60"
          />
          <Button type="submit" size="sm" disabled={busy || broken || !draft.trim()}>
            <Send className="mr-1.5 size-4" aria-hidden />
            {c.owlivia.send}
          </Button>
        </form>

        <p className="px-6 pb-5 text-center text-xs text-balance text-muted">
          {c.owlivia.disclaimer}{" "}
          {/* nowrap: the number was breaking after the area code. */}
          <a
            href={campus.phoneHref}
            className="font-semibold whitespace-nowrap text-brand underline underline-offset-2"
          >
            {campus.phone}
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
}
