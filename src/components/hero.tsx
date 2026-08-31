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
import { academyColors } from "@/data/school";
import { cn } from "@/lib/utils";

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
      {/* Photo lives only on the right so headlines never sit on her face */}
      <div className="pointer-events-none absolute inset-y-0 left-[38%] right-0 hidden overflow-hidden lg:block">
        <img
          src="/images/hero.jpg"
          alt={c.hero.imageAlt}
          className="h-full w-full object-cover object-[15%_22%] outline-none"
        />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-8 pb-8 sm:px-8 lg:flex lg:items-start lg:justify-between lg:gap-8 lg:px-10 lg:pt-10 lg:pb-36 xl:pb-32 2xl:pb-32">
        <div className="hero-stagger relative z-10 max-w-xl lg:max-w-[32rem]">
          <p className="flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] text-brand uppercase">
            {c.hero.eyebrow}
            <Star className="size-3.5 fill-icon-blue text-icon-blue" />
            <Star className="size-4 fill-gold text-gold" />
          </p>

          <h1 className="mt-2 font-display text-[2.15rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.35rem]">
            CAPSTONE QUEST
            <span className="mt-1 flex flex-wrap text-[2.45rem] tracking-[-0.04em] sm:text-6xl lg:text-[3.9rem]">
              {academyColors.map((ch, i) => (
                <span key={`${ch.letter}-${i}`} className={cn(ch.className)}>
                  {ch.letter}
                </span>
              ))}
            </span>
          </h1>

          <p className="font-script mt-3 text-[1.65rem] leading-none text-brand italic sm:text-[1.85rem]">
            {c.hero.tagline}
          </p>
          <span className="mt-1 block h-1 w-48 rounded-full bg-gold/90" />

          <div className="mt-5 overflow-hidden rounded-[24px] lg:hidden">
            <img
              src="/images/hero.jpg"
              alt={c.hero.imageAlt}
              className="h-56 w-full object-cover object-[18%_18%] outline-none sm:h-72"
            />
          </div>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            {c.hero.lede}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="xl">
              <AppLink to="/tour">
                <CalendarDays className="size-4" />
                {c.common.scheduleTour}
                <span aria-hidden>→</span>
              </AppLink>
            </Button>
            <Button variant="outline" size="xl" onClick={() => setVideoOpen(true)}>
              <Play className="size-4 fill-navy" />
              {c.hero.watchVideo}
            </Button>
          </div>
        </div>

        <aside className="relative z-10 mt-6 rounded-[24px] bg-paper p-5 shadow-card lg:mt-0 lg:w-[18.1rem] lg:shrink-0 lg:rounded-[26px] lg:p-5">
          <h2 className="mb-3.5 text-[13px] font-extrabold tracking-[0.08em] text-navy uppercase">
            {c.hero.whyTitle}
          </h2>
          <ul className="space-y-3.5">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-3">
                <span className={cn("mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-paper", r.bg)}>
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
              <p className="text-[13px] leading-snug text-muted">
                {c.hero.qualityFirst.text}
              </p>
            </div>
          </a>
        </aside>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 pb-8 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-6 lg:px-10 lg:pb-0">
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

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </section>
  );
}
