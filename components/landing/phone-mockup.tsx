"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { VibeChip } from "@/components/ui/vibe-chip";
import { AnimatedEqualizer } from "@/components/ui/animated-equalizer";
import { cn } from "@/lib/utils";

const venues = [
  { name: "Noir Coffee Lab", distance: "0.8 km", type: "KAFE", vibe: "zen" as const, rating: "4.8" },
  { name: "Müze Avlu", distance: "1.4 km", type: "MÜZE", vibe: "neutral" as const, rating: "4.7" },
  { name: "Late Room Jazz Bar", distance: "2.1 km", type: "BAR", vibe: "hype" as const, rating: "4.9" },
];

const pins = [
  { top: "18%", left: "26%", mode: "zen" as const },
  { top: "32%", left: "58%", mode: "neutral" as const },
  { top: "55%", left: "24%", mode: "hype" as const },
  { top: "61%", left: "68%", mode: "zen" as const },
  { top: "40%", left: "42%", mode: "hype" as const },
];

const pinColor = {
  zen: "var(--brand-zen)",
  neutral: "#9CA3AF",
  hype: "var(--brand-hype)",
} as const;

type PhoneMockupProps = {
  className?: string;
  floating?: boolean;
};

export function PhoneMockup({ className, floating = true }: PhoneMockupProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("relative mx-auto w-full max-w-[390px]", className)}
      animate={
        floating && !reduced
          ? { y: [0, -6, 0], rotate: [0, -0.35, 0] }
          : undefined
      }
      transition={
        floating && !reduced
          ? { duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          : undefined
      }
    >
      <div className="pointer-events-none absolute -left-6 top-16 h-24 w-24 rounded-full bg-[var(--brand-hype)]/14 blur-2xl" />
      <div className="pointer-events-none absolute -right-6 bottom-20 h-28 w-28 rounded-full bg-[var(--brand-zen)]/12 blur-2xl" />

      <PhoneFrame>
        <div className="hero-grid relative h-[620px] bg-[var(--surface)] p-3 text-white">
          <div className="mb-3 rounded-2xl border border-white/10 bg-black/25 p-2 backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-1 rounded-xl bg-white/4 p-1">
              <button type="button" className="rounded-lg border border-[color:var(--brand-zen)]/20 bg-[var(--brand-zen-soft)] px-2 py-2 text-[11px] font-semibold tracking-[0.08em] text-[var(--brand-zen)] uppercase">
                ZEN
              </button>
              <button type="button" className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-[11px] font-semibold tracking-[0.08em] text-white/75 uppercase">
                NEUTRAL
              </button>
              <button type="button" className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-[11px] font-semibold tracking-[0.08em] text-white/75 uppercase">
                HYPE
              </button>
            </div>
          </div>

          <div className="relative h-[295px] overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
            <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 320 280" aria-hidden="true">
              <path d="M-10 180 C60 140, 80 210, 150 170 S260 110, 340 135" stroke="rgba(255,255,255,0.16)" strokeWidth="2" fill="none" strokeDasharray="5 7" />
              <path d="M-20 80 C40 120, 70 40, 130 85 S250 160, 330 115" stroke="rgba(255,255,255,0.11)" strokeWidth="2" fill="none" />
              <path d="M20 250 C80 210, 130 225, 185 205 S280 195, 340 230" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
            </svg>

            {pins.map((pin, index) => (
              <div key={`${pin.left}-${pin.top}-${index}`} className="absolute" style={{ top: pin.top, left: pin.left }}>
                <div className="relative">
                  <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-md" style={{ backgroundColor: pinColor[pin.mode] }} />
                  <MapPin className="h-4 w-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ color: pinColor[pin.mode], fill: pinColor[pin.mode] }} />
                </div>
              </div>
            ))}

            <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-zen)]" />
              Vibe haritası aktif
            </div>

            <div className="absolute right-3 top-3 rounded-xl border border-white/10 bg-black/30 p-2 backdrop-blur-sm">
              <AnimatedEqualizer className="h-6" />
            </div>
          </div>

          <div className="absolute inset-x-2 bottom-2 rounded-[1.2rem] border border-white/10 bg-[rgba(18,18,18,0.82)] p-2 shadow-[0_-10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/15" />
            <div className="space-y-2">
              {venues.map((venue) => (
                <div key={venue.name} className="rounded-xl border border-white/8 bg-white/4 p-2.5">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold tracking-tight text-white">{venue.name}</p>
                      <p className="text-[11px] text-white/55">Topluluk puanı {venue.rating}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-white/70">
                      {venue.distance}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full border border-white/10 bg-white/4 px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-white/72">
                      {venue.type}
                    </span>
                    <VibeChip mode={venue.vibe}>{venue.vibe.toUpperCase()}</VibeChip>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PhoneFrame>
    </motion.div>
  );
}
