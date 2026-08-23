import { useEffect, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LogOut, Moon, Sun, Utensils } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  album,
  DEMO_CODE,
  DEMO_LAST,
  messages,
  milestones,
  portalChild,
  todayReport,
} from "@/data/portal";

const SESSION_KEY = "cqa-portal";

export const Route = createFileRoute("/portal")({ component: PortalPage });

function PortalPage() {
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setAuthed(sessionStorage.getItem(SESSION_KEY) === "maya");
  }, []);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const code = String(fd.get("code") ?? "").trim().toUpperCase();
    const last = String(fd.get("last") ?? "").trim().toUpperCase();
    if (code === DEMO_CODE && last === DEMO_LAST) {
      sessionStorage.setItem(SESSION_KEY, "maya");
      setAuthed(true);
      setError("");
    } else {
      setError("We couldn’t find that family. Try the demo: code QUEST, last name Chen.");
    }
  }

  if (!authed) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-md px-5 py-16">
          <p className="text-sm font-bold tracking-[0.14em] text-brand uppercase">Parent portal</p>
          <h1 className="mt-2 text-3xl font-extrabold text-navy">See how my child is doing</h1>
          <p className="mt-2 text-sm text-muted">
            Sign in with your family code. For this preview, use code <strong>QUEST</strong> and last name{" "}
            <strong>Chen</strong>.
          </p>
          <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-1.5">
              <Label htmlFor="code">Family code</Label>
              <Input id="code" name="code" autoComplete="off" placeholder="QUEST" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="last">Child’s last name</Label>
              <Input id="last" name="last" autoComplete="off" placeholder="Chen" />
            </div>
            {error ? <p className="text-sm text-destructive">{error}</p> : null}
            <Button type="submit" size="lg">
              Open today’s report
            </Button>
          </form>
        </div>
      </SiteShell>
    );
  }

  const child = portalChild;

  return (
    <SiteShell>
      <div className="bg-paper-soft">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:px-8">
          <img src={child.photo} alt="" className="size-20 rounded-2xl object-cover" />
          <div className="flex-1">
            <p className="text-xs font-bold tracking-wide text-brand uppercase">{child.classroom}</p>
            <h1 className="text-3xl font-extrabold text-navy">{child.firstName} {child.lastName}</h1>
            <p className="text-sm text-muted">
              {child.age} · {child.campus} · {child.teacher}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              sessionStorage.removeItem(SESSION_KEY);
              setAuthed(false);
            }}
          >
            <LogOut className="size-4" />
            Sign out
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8">
        <Tabs defaultValue="today">
          <TabsList className="flex w-full flex-wrap justify-start gap-1">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="today">
            <p className="text-sm text-muted">{todayReport.dateLabel}</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <Stat icon={Sun} label="Mood" value={todayReport.mood} />
              <Stat icon={Moon} label="Rest" value={todayReport.rest} />
              <Stat icon={Utensils} label="Meals" value="Ate well at every sitting" />
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[24px] border border-line p-5">
                <h2 className="font-bold text-navy">Highlights</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/80">
                  {todayReport.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[24px] bg-paper-soft p-5">
                <h2 className="font-bold text-navy">Note from {child.teacher}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/80">{todayReport.teacherNote}</p>
              </div>
            </div>
            <div className="mt-6 rounded-[24px] border border-line p-5">
              <h2 className="font-bold text-navy">Meals</h2>
              <ul className="mt-3 divide-y divide-line">
                {todayReport.meals.map((m) => (
                  <li key={m.name} className="flex flex-col py-3 text-sm sm:flex-row sm:justify-between">
                    <span className="font-semibold text-navy">{m.name}</span>
                    <span className="text-muted">{m.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="learning">
            <div className="grid gap-4 sm:grid-cols-2">
              {milestones.map((m) => (
                <article key={m.area} className="rounded-[24px] border border-line p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-bold text-navy">{m.area}</h2>
                    <span className="rounded-full bg-icon-green/15 px-2.5 py-0.5 text-xs font-bold text-success">
                      {m.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{m.note}</p>
                </article>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos">
            <div className="grid gap-4 sm:grid-cols-2">
              {album.map((p) => (
                <figure key={p.src} className="overflow-hidden rounded-[24px]">
                  <img src={p.src} alt={p.caption} className="h-56 w-full object-cover" />
                  <figcaption className="bg-paper-soft px-4 py-3 text-sm font-medium text-navy">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages">
            <ul className="space-y-4">
              {messages.map((m) => (
                <li key={m.body} className="rounded-[24px] border border-line p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-bold text-navy">{m.from}</p>
                    <p className="text-xs text-muted">{m.when}</p>
                  </div>
                  <p className="mt-2 text-sm text-ink/80">{m.body}</p>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </SiteShell>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Sun;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] bg-paper-soft p-4">
      <p className="flex items-center gap-2 text-xs font-bold tracking-wide text-muted uppercase">
        <Icon className="size-4 text-brand" />
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-navy">{value}</p>
    </div>
  );
}
