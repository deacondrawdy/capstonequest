import { useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { ExternalLink, FileText, LogOut, RotateCcw, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteFiles, type SiteFile, type SiteFileGroup } from "@/data/site-files";
import {
  formatBytes,
  revertStaffFile,
  staffLogin,
  staffLogout,
  type StaffState,
  type StoredMeta,
} from "@/lib/site-files";

/**
 * /staff: where the school office replaces the menu, calendar, enrollment
 * packets and photos without a developer. English only, unlisted, noindex.
 *
 * Written for office staff, not developers: plain words, one button per job,
 * and an undo ("Put the original back") on everything.
 */
export function StaffPage({ state }: { state: StaffState }) {
  return (
    <main className="min-h-screen bg-paper-soft px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-sm font-semibold text-brand hover:underline">
          ← Back to the website
        </a>
        {state.signedIn ? <FileManager state={state} /> : <SignIn configured={state.configured} />}
      </div>
    </main>
  );
}

function SignIn({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const { result } = await staffLogin({ data: { password } });
      if (result === "ok") return router.invalidate();
      setError(
        result === "locked"
          ? "Too many tries. Please wait 15 minutes and try again."
          : result === "unconfigured"
            ? "Staff sign-in is not set up yet."
            : "That password is not right. Please try again.",
      );
    } catch {
      setError("Could not reach the website. Please check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-6 rounded-[28px] bg-paper p-6 shadow-card sm:p-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-navy">Staff updates</h1>
      <p className="mt-2 text-muted">
        Sign in to replace the menu, calendar, enrollment packets and photos on the website.
      </p>
      {configured ? (
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="staff-password">Staff password</Label>
            <Input
              id="staff-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby={error ? "staff-error" : undefined}
            />
          </div>
          {error ? (
            <p id="staff-error" role="alert" className="text-sm font-semibold text-red-700">
              {error}
            </p>
          ) : null}
          <Button type="submit" size="lg" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </Button>
        </form>
      ) : (
        <p className="mt-6 rounded-2xl bg-gold/20 p-4 text-sm text-ink">
          Staff sign-in is not set up yet. Your web developer needs to set a staff password.
        </p>
      )}
    </div>
  );
}

const GROUPS: Array<{ id: SiteFileGroup; title: string }> = [
  { id: "documents", title: "Parent documents" },
  { id: "enrollment", title: "Enrollment and tuition" },
  { id: "photos", title: "Photos" },
];

function FileManager({ state }: { state: Extract<StaffState, { signedIn: true }> }) {
  const router = useRouter();

  return (
    <>
      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-navy">Staff updates</h1>
          <p className="mt-2 max-w-xl text-muted">
            Choose <strong>Replace</strong> next to any file to upload a new one. It shows on the website right away.
            You can always put the original back.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            await staffLogout();
            await router.invalidate();
          }}
        >
          <LogOut className="size-4" aria-hidden /> Sign out
        </Button>
      </div>

      {state.storageProblem ? (
        <p role="alert" className="mt-6 rounded-2xl bg-gold/20 p-4 text-sm font-semibold text-ink">
          {state.storageProblem}
        </p>
      ) : null}

      {GROUPS.map((group) => (
        <section key={group.id} className="mt-10">
          <h2 className="text-xl font-extrabold tracking-tight text-navy">{group.title}</h2>
          <ul className="mt-4 space-y-3">
            {(siteFiles as readonly SiteFile[])
              .filter((f) => f.group === group.id)
              .map((file) => (
                <FileRow
                  key={file.slot}
                  file={file}
                  meta={state.files[file.slot] ?? null}
                  disabled={state.storageProblem !== null}
                />
              ))}
          </ul>
        </section>
      ))}
    </>
  );
}

function FileRow({ file, meta, disabled }: { file: SiteFile; meta: StoredMeta | null; disabled: boolean }) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState<"upload" | "revert" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [confirmRevert, setConfirmRevert] = useState(false);
  const [saved, setSaved] = useState(false);

  // The version query only defeats this browser's cache for the preview; the
  // public URL itself never changes.
  const version = meta ? `?v=${Date.parse(meta.updatedAt)}` : "";
  const url = `/files/${file.slot}.${file.kind === "pdf" ? "pdf" : "jpg"}${version}`;
  const thumb = file.kind === "photo" ? `/files/${file.slot}-${file.widths[0]}.webp${version}` : null;

  async function upload(chosen: File) {
    setBusy("upload");
    setError(null);
    setSaved(false);
    try {
      const body = new FormData();
      body.set("slot", file.slot);
      body.set("file", chosen);
      const res = await fetch("/api/staff-upload", { method: "POST", body });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "Something went wrong. Please try again.");
      setSaved(true);
      await router.invalidate();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(null);
      if (input.current) input.current.value = "";
    }
  }

  async function revert() {
    setBusy("revert");
    setError(null);
    try {
      await revertStaffFile({ data: { slot: file.slot } });
      setConfirmRevert(false);
      setSaved(false);
      await router.invalidate();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(null);
    }
  }

  const statusId = `status-${file.slot}`;

  return (
    <li className="rounded-[22px] bg-paper p-4 shadow-card sm:p-5">
      <div className="flex gap-4">
        {thumb ? (
          <img src={thumb} alt="" className="size-16 shrink-0 rounded-xl bg-paper-soft object-cover" />
        ) : (
          <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-paper-soft text-brand">
            <FileText className="size-7" aria-hidden />
          </span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-navy">{file.label}</h3>
          <p className="text-sm text-muted">{file.hint}</p>
          <p id={statusId} className="mt-1 text-sm text-ink">
            {meta ? (
              <>
                <span className="font-semibold text-owl">Replaced</span> on{" "}
                {new Date(meta.updatedAt).toLocaleDateString("en-US", { dateStyle: "medium" })} ·{" "}
                <span className="break-all">{meta.filename}</span> · {formatBytes(meta.size)}
              </>
            ) : (
              "Showing the original file"
            )}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <input
          ref={input}
          type="file"
          className="sr-only"
          tabIndex={-1}
          aria-hidden
          accept={file.kind === "pdf" ? "application/pdf,.pdf" : "image/jpeg,image/png,image/webp"}
          onChange={(e) => {
            const chosen = e.target.files?.[0];
            if (chosen) void upload(chosen);
          }}
        />
        <Button
          size="sm"
          disabled={disabled || busy !== null}
          onClick={() => input.current?.click()}
          aria-describedby={statusId}
        >
          <Upload className="size-4" aria-hidden />
          {busy === "upload" ? "Uploading…" : `Replace ${file.kind === "pdf" ? "PDF" : "photo"}`}
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href={url} target="_blank" rel="noreferrer">
            <ExternalLink className="size-4" aria-hidden /> View
          </a>
        </Button>
        {meta && !confirmRevert ? (
          <Button variant="ghost" size="sm" disabled={busy !== null} onClick={() => setConfirmRevert(true)}>
            <RotateCcw className="size-4" aria-hidden /> Put the original back
          </Button>
        ) : null}
        {confirmRevert ? (
          <span className="flex flex-wrap items-center gap-2 text-sm">
            Remove your upload?
            <Button variant="outline" size="sm" disabled={busy !== null} onClick={revert}>
              {busy === "revert" ? "Restoring…" : "Yes, put the original back"}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setConfirmRevert(false)}>
              Cancel
            </Button>
          </span>
        ) : null}
      </div>

      <div aria-live="polite">
        {error ? <p className="mt-3 text-sm font-semibold text-red-700">{error}</p> : null}
        {saved && !error ? <p className="mt-3 text-sm font-semibold text-owl">Saved. It is live on the website now.</p> : null}
      </div>
    </li>
  );
}
