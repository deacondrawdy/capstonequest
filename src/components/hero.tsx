import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
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

const features = [
  { icon: Heart, color: "text-icon-green", ring: "border-icon-green/40", label: "Play-Based Learning" },
  { icon: Users, color: "text-icon-orange", ring: "border-icon-orange/40", label: "Caring & Experienced Teachers" },
  { icon: Shield, color: "text-icon-purple", ring: "border-icon-purple/40", label: "Safe & Secure Environment" },
  { icon: BookOpen, color: "text-icon-blue", ring: "border-icon-blue/40", label: "School Ready Pre-K Curriculum" },
];

const reasons = [
  {
    icon: Heart,
    bg: "bg-icon-green",
    title: "Small Class Sizes",
    text: "Individualized attention for every child.",
  },
  {
    icon: Shield,
    bg: "bg-icon-orange",
    title: "Safe & Secure",
    text: "Top-notch safety with trusted care.",
  },
  {
    icon: GraduationCap,
    bg: "bg-icon-purple",
    title: "School Ready",
    text: "Engaging Pre-K curriculum that builds skills & confidence.",
  },
  {
    icon: Users,
    bg: "bg-icon-blue",
    title: "Family Partnership",
    text: "We work together with you every step of the way.",
  },
];

const remainingStats = [
  { icon: MapPin, color: "text-icon-pink", title: "Tucson & Yuma convenient locations" },
  { icon: ShieldCheck, color: "text-icon-blue", title: "100% Approved by DES" },
];

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-paper">
      {/* Photo lives only on the right so headlines never sit on her face */}
      <div className="pointer-events-none absolute inset-y-0 left-[38%] right-0 hidden overflow-hidden lg:block">
        <img
          src="/images/hero.jpg"
          alt="A preschooler coloring at a classroom table"
          className="h-full w-full object-cover object-[15%_22%] outline-none"
        />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 pt-8 pb-8 sm:px-8 lg:min-h-[640px] lg:px-10 lg:pt-10 lg:pb-28">
        <div className="hero-stagger relative z-10 max-w-xl lg:max-w-[32rem]">
          <p className="flex items-center gap-2 text-[13px] font-bold tracking-[0.14em] text-brand uppercase">
            Pre-K Programs at
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
            Where curiosity grows and bright futures begin.
          </p>
          <span className="mt-1 block h-1 w-48 rounded-full bg-gold/90" />

          <div className="mt-5 overflow-hidden rounded-[24px] lg:hidden">
            <img
              src="/images/hero.jpg"
              alt="A preschooler coloring at a classroom table"
              className="h-56 w-full object-cover object-[18%_18%] outline-none sm:h-72"
            />
          </div>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
            A nurturing, play-based learning environment that helps your child build confidence,
            friendships, and foundational skills for lifelong success.
          </p>

          <ul className="mt-6 grid max-w-lg grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 sm:gap-x-0">
            {features.map((f, i) => (
              <li
                key={f.label}
                className={cn(
                  "flex flex-col items-center px-1 text-center sm:items-center sm:text-center",
                  i > 0 && "sm:border-l sm:border-line",
                )}
              >
                <span
                  className={cn(
                    "mb-2 inline-flex size-11 items-center justify-center rounded-full border-2 bg-paper",
                    f.ring,
                    f.color,
                  )}
                >
                  <f.icon className="size-5" strokeWidth={1.8} />
                </span>
                <span className="text-[11px] font-semibold leading-snug text-navy">{f.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button asChild size="xl">
              <Link to="/tour">
                <CalendarDays className="size-4" />
                Schedule a Tour
                <span aria-hidden>→</span>
              </Link>
            </Button>
            <Button variant="outline" size="xl" onClick={() => setVideoOpen(true)}>
              <Play className="size-4 fill-navy" />
              Watch Our Video
            </Button>
          </div>
        </div>

        <aside className="mt-6 rounded-[24px] bg-paper p-5 shadow-card lg:absolute lg:top-[5.75rem] lg:right-6 lg:mt-0 lg:w-[18.1rem] lg:rounded-[26px] lg:p-5">
          <h2 className="mb-3.5 text-[13px] font-extrabold tracking-[0.08em] text-navy uppercase">
            Why Families Choose Us
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
        </aside>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 pb-8 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-6 lg:px-10 lg:pb-0">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[22px] bg-navy-deep sm:grid-cols-4">
          <div className="flex items-center justify-center gap-2.5 bg-navy px-3 py-4 sm:px-4">
            <Users className="size-8 shrink-0 text-icon-green sm:size-9" strokeWidth={1.7} />
            <p className="text-left text-[12px] font-extrabold tracking-wide text-paper uppercase sm:text-[13px]">
              Ages 3–5 Years
            </p>
          </div>
          <a
            href="https://www.qualityfirstaz.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2.5 bg-navy px-3 py-4 transition-colors hover:bg-navy-mid sm:px-4"
          >
            <Award className="size-8 shrink-0 text-gold sm:size-9" strokeWidth={1.7} />
            <p className="text-left text-[12px] font-extrabold tracking-wide text-paper uppercase sm:text-[13px]">
              Quality First Program
            </p>
          </a>
          {remainingStats.map((s) => (
            <div
              key={s.title}
              className="flex items-center justify-center gap-2.5 bg-navy px-3 py-4 sm:px-4"
            >
              <s.icon className={cn("size-8 shrink-0 sm:size-9", s.color)} strokeWidth={1.7} />
              <p className="text-left text-[12px] font-extrabold tracking-wide text-paper uppercase sm:text-[13px]">
                {s.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </section>
  );
}
