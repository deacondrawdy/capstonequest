import { useState } from "react";
import { AppLink, useContent } from "@/lib/locale";
import {
  Award,
  Blocks,
  CalendarDays,
  GraduationCap,
  Heart,
  MapPin,
  Play,
  Shield,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import { VideoModal } from "@/components/video-modal";
import { Button } from "@/components/ui/button";
import { OwliviaLauncher } from "@/components/owlivia-launcher";
import { academyColors } from "@/data/school";
import { cn } from "@/lib/utils";

/**
 * The classroom video is hidden until a better-produced one replaces it.
 *
 * When it comes back it needs captions in English and Spanish (WCAG 1.2.2,
 * Level A) — the old file had an audio track and none — and, if the picture
 * shows anything the sound doesn't, a description (1.2.5). Swap the file in
 * video-modal.tsx, add the caption tracks there, flip this to true, and remove
 * the video line from the accessibility statement's known limitations if it has
 * been re-added.
 */
const SHOW_VIDEO = false;

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const c = useContent();

  const reasons = [
    { icon: Heart, bg: "bg-icon-green", ...c.hero.reasons.smallClasses },
    { icon: Shield, bg: "bg-icon-orange", ...c.hero.reasons.safe },
    { icon: GraduationCap, bg: "bg-icon-purple", ...c.hero.reasons.schoolReady },
    { icon: Users, bg: "bg-icon-blue", ...c.hero.reasons.family },
  ];

  const bottomBadges = [
    { icon: Users, color: "text-icon-green", title: c.hero.badges.ages },
    { icon: Heart, color: "text-icon-orange", title: c.hero.badges.teachers },
    { icon: Blocks, color: "text-icon-purple", title: c.hero.badges.play },
    { icon: MapPin, color: "text-icon-pink", title: c.hero.badges.locations },
    { icon: ShieldCheck, color: "text-icon-blue", title: c.hero.badges.des },
  ];

  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Photo lives only on the right so headlines never sit on her face.
          The edges are pinned to the same centred 1400px container as the text
          and the info card, not to the viewport. That matters: a viewport
          percentage keeps scaling the photo up forever, so the girl drifts
          right faster than the container-bound card does, and somewhere past
          1900px the card lands on top of her. Above 1400px the panel is a
          constant 868px, so the composition is identical on a laptop and on a
          4K television.

          The right edge runs one gutter (40px) past the info card and the navy
          badge bar, so both sit on the photo rather than flush against its cut
          edge. */}
      <div className="pointer-events-none absolute inset-y-0 left-[max(38%,calc(50%-168px))] right-[max(0px,calc(50%-700px))] hidden overflow-hidden xl:block">
        <img
          src="/images/hero.jpg"
          alt={c.hero.imageAlt}
          className="h-full w-full object-cover object-[50%_22%] outline-none"
        />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-8 pb-8 sm:px-8 lg:px-10 lg:pt-10 lg:pb-40 xl:flex xl:items-start xl:justify-between xl:gap-8 xl:pb-32">
        <div className="hero-stagger relative z-10 max-w-xl lg:max-w-none xl:max-w-[32rem]">
          <p className="flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] text-brand uppercase">
            {c.hero.eyebrow}
            <Star className="size-3.5 fill-icon-blue text-icon-blue" />
            <Star className="size-4 fill-gold text-gold" />
          </p>

          {/* aria-label names the heading once, for screen readers and for
              crawlers. It replaces an sr-only " Academy" that sat beside the
              coloured letters: assistive technology read the word once, but a
              crawler ignores aria-hidden and read both, so the page's only h1
              indexed as "CAPSTONE QUEST Academy A C A D E M Y". */}
          <h1
            aria-label={c.hero.wordmark}
            className="mt-2 font-display text-[2.15rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.35rem]"
          >
            CAPSTONE QUEST
            {/* Each letter is its own coloured span, which some screen readers
                spell out as "A, C, A, D, E, M, Y". aria-label above covers it. */}
            <span
              aria-hidden
              className="mt-1 flex flex-wrap text-[2.45rem] tracking-[-0.04em] sm:text-6xl lg:text-[3.9rem]"
            >
              {academyColors.map((ch, i) => (
                <span key={`${ch.letter}-${i}`} className={cn(ch.className)}>
                  {ch.letter}
                </span>
              ))}
            </span>
          </h1>

          {/* The rule is wrapped with the tagline in a shrink-to-fit box so it
              spans the whole sentence. It used to be a fixed 12rem, which
              underlined about a third of the English line and a different
              fraction again in Spanish. */}
          <div className="mt-3 inline-block max-w-full">
            <p className="font-script text-[1.65rem] leading-none text-brand italic sm:text-[1.85rem]">
              {c.hero.tagline}
            </p>
            <span className="mt-1 block h-1 rounded-full bg-gold/90" />
          </div>

          <div className="mt-5 overflow-hidden rounded-[24px] xl:hidden">
            <img
              src="/images/hero.jpg"
              alt={c.hero.imageAlt}
              className="h-56 w-full object-cover object-[18%_18%] outline-none sm:h-72 lg:h-[22rem]"
            />
          </div>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">{c.hero.lede}</p>

          {/* A column sized to its widest child, so the Owlivia button below
              lines up with the tour button rather than ending short of it. */}
          <div className="mt-7 flex w-fit flex-col items-stretch gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="xl">
                <AppLink to="/tour">
                  <CalendarDays className="size-4" />
                  {c.common.scheduleTour}
                  <span aria-hidden>→</span>
                </AppLink>
              </Button>
              {SHOW_VIDEO ? (
                <Button variant="outline" size="xl" onClick={() => setVideoOpen(true)}>
                  <Play className="size-4 fill-navy" />
                  {c.hero.watchVideo}
                </Button>
              ) : null}
            </div>
            {/* A parent who is not ready to pick a date can ask a question. */}
            <OwliviaLauncher className="w-full" />
          </div>
        </div>

        {/* A div, not <aside>: nested inside <main> an aside becomes a
            complementary landmark within another landmark (WCAG 1.3.1). The
            h2 below still makes it reachable by heading. */}
        <div className="relative z-10 mt-6 rounded-[24px] bg-paper p-5 shadow-card xl:mt-0 xl:w-[18.1rem] xl:shrink-0 xl:rounded-[26px] xl:p-5">
          <h2 className="mb-3.5 text-[13px] font-extrabold tracking-[0.08em] text-navy uppercase">
            {c.hero.whyTitle}
          </h2>
          {/* Between lg and xl the card sits under the text at full container
              width, so the reasons run two-up rather than as one long column. */}
          <ul className="flex flex-col gap-3.5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 xl:flex xl:gap-3.5">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-3">
                <span
                  className={cn(
                    "mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-paper",
                    r.bg,
                  )}
                >
                  <r.icon className="size-4" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-[14px] font-bold text-navy">{r.title}</p>
                  <p className="text-[13px] leading-snug text-muted">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href="https://www.qualityfirstaz.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-3 rounded-2xl border border-gold/50 bg-gold/10 px-3 py-2.5 transition-colors hover:bg-gold/20"
          >
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
              <Award className="size-4" strokeWidth={2.2} />
            </span>
            <div>
              <p className="text-[14px] font-bold text-navy">{c.hero.qualityFirst.title}</p>
              <p className="text-[13px] leading-snug text-muted">{c.hero.qualityFirst.text}</p>
              <span className="sr-only"> {c.common.opensNewTab}</span>
            </div>
          </a>
        </div>
      </div>

      {/* Sits flush with the bottom of the photo. At bottom-6 a 24px strip of
          the background image showed under the bar and read as a mistake. */}
      <div className="relative mx-auto max-w-[1400px] px-4 pb-8 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-10 lg:pb-0">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[22px] bg-navy-deep lg:grid-cols-5">
          {bottomBadges.map((b, i) => (
            <div
              key={b.title}
              className={cn(
                "flex items-center justify-center gap-2.5 bg-navy px-3 py-4 sm:px-4",
                i === bottomBadges.length - 1 && "col-span-2 lg:col-span-1",
              )}
            >
              <b.icon className={cn("size-8 shrink-0 sm:size-9", b.color)} strokeWidth={1.7} />
              <p className="text-left text-[12px] font-extrabold tracking-wide text-paper uppercase sm:text-[13px]">
                {b.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {SHOW_VIDEO ? <VideoModal open={videoOpen} onOpenChange={setVideoOpen} /> : null}
    </section>
  );
}
