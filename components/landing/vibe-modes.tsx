import { SectionShell } from "@/components/landing/section-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { VibeChip } from "@/components/ui/vibe-chip";
import { Reveal } from "@/components/ui/reveal";
import type { VibeCardItem } from "@/lib/types";
import { vibeCards } from "@/lib/content";

const modeAccent = {
  zen: {
    border: "hover:border-[color:var(--brand-zen)]/30",
    glow: "group-hover:shadow-[0_20px_60px_rgba(80,200,120,0.10)]",
    ring: "from-[var(--brand-zen)]/20 to-transparent",
  },
  neutral: {
    border: "hover:border-white/18",
    glow: "group-hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]",
    ring: "from-white/12 to-transparent",
  },
  hype: {
    border: "hover:border-[color:var(--brand-hype)]/30",
    glow: "group-hover:shadow-[0_20px_60px_rgba(255,49,49,0.10)]",
    ring: "from-[var(--brand-hype)]/22 to-transparent",
  },
} as const;

function VibeCard({ item, index }: { item: VibeCardItem; index: number }) {
  const accent = modeAccent[item.mode];

  return (
    <Reveal delay={index * 0.05}>
      <GlassCard className={`group relative h-full overflow-hidden p-5 transition duration-300 hover:-translate-y-1 ${accent.border} ${accent.glow}`}>
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b ${accent.ring}`} />
        <div className="relative space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-[var(--font-sora)] text-xl font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">{item.subtitle}</p>
            </div>
            <VibeChip mode={item.mode}>{item.title.toUpperCase()}</VibeChip>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-[11px] tracking-[0.12em] text-white/55 uppercase">Örnek kullanım</p>
            <div className="flex flex-wrap gap-2">
              {item.useCases.map((useCase) => (
                <span key={useCase} className="rounded-full border border-white/10 bg-white/4 px-2.5 py-1.5 text-xs font-medium text-white/85">
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-[11px] tracking-[0.12em] text-white/55 uppercase">Mekan türleri</p>
            <div className="flex flex-wrap gap-2">
              {item.venueTypes.map((venueType) => (
                <span key={venueType} className="rounded-full border border-white/8 bg-black/20 px-2.5 py-1.5 text-xs text-white/75">
                  {venueType}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export function VibeModes({ items = vibeCards }: { items?: VibeCardItem[] }) {
  return (
    <SectionShell
      id="vibe-modes"
      eyebrow="Vibe Modları"
      title="Modunu seç. Reso seni doğru atmosfere götürsün."
      description="Reso’daki keşif deneyimi üç temel vibe etrafında şekillenir. Her mod, farklı mekan türleri ve enerji seviyeleri için optimize edilir."
    >
      <div className="grid gap-4 md:grid-cols-3">{items.map((item, index) => <VibeCard key={item.mode} item={item} index={index} />)}</div>
    </SectionShell>
  );
}
