import { ArrowRightLeft, Map, Vote } from "lucide-react";
import { SectionShell } from "@/components/landing/section-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { howItWorksSteps } from "@/lib/content";

export function HowItWorks() {
  return (
    <SectionShell id="how-it-works" eyebrow="Akış" title="3 adımda keşfet, katkı ver, şehri birlikte şekillendir">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.06}>
                <GlassCard className="p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/85">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-[var(--font-sora)] text-base font-semibold tracking-tight text-white sm:text-lg">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{step.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <GlassCard className="relative overflow-hidden p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-8 top-4 h-28 w-28 rounded-full bg-[var(--brand-gold)]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-2 h-24 w-24 rounded-full bg-[var(--brand-zen)]/10 blur-3xl" />
            <div className="relative space-y-4">
              <div>
                <p className="font-mono text-[11px] tracking-[0.12em] text-white/55 uppercase">Mini süreç</p>
                <h3 className="mt-2 font-[var(--font-sora)] text-lg font-semibold text-white">Map → Venue Card → Add Venue / Vote</h3>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <Map className="h-4 w-4 text-[var(--brand-zen)]" /> Harita
                  </div>
                  <div className="relative h-20 overflow-hidden rounded-xl border border-white/8 bg-white/3">
                    <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:16px_16px] opacity-60" />
                    <span className="absolute left-8 top-6 h-3 w-3 rounded-full bg-[var(--brand-zen)] shadow-[0_0_0_4px_rgba(80,200,120,0.18)]" />
                    <span className="absolute right-10 bottom-4 h-3 w-3 rounded-full bg-[var(--brand-hype)] shadow-[0_0_0_4px_rgba(255,49,49,0.16)]" />
                  </div>
                </div>
                <div className="flex items-center justify-center text-white/50"><ArrowRightLeft className="h-4 w-4" /></div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <Vote className="h-4 w-4 text-[var(--brand-gold)]" /> Katkı / Oylama
                  </div>
                  <div className="space-y-2">
                    <div className="rounded-lg border border-white/8 bg-white/4 p-2 text-xs text-white/70">Mekan fotoğrafı eklendi</div>
                    <div className="rounded-lg border border-white/8 bg-white/4 p-2 text-xs text-white/70">Vibe oylaması güncellendi</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}
