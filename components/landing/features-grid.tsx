import { SectionShell } from "@/components/landing/section-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { features } from "@/lib/content";
import type { FeatureItem } from "@/lib/types";

const accents = [
  "hover:border-[color:var(--brand-zen)]/24",
  "hover:border-[color:var(--brand-gold)]/24",
  "hover:border-[color:var(--brand-hype)]/24",
  "hover:border-white/16",
] as const;

function FeatureCard({ item, index }: { item: FeatureItem; index: number }) {
  const Icon = item.icon;
  return (
    <Reveal delay={(index % 4) * 0.03}>
      <GlassCard className={`group h-full p-4 transition duration-250 hover:-translate-y-1 ${accents[index % accents.length]}`}>
        <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85 transition group-hover:bg-white/8">
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <h3 className="font-[var(--font-sora)] text-base font-semibold tracking-tight text-white">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
      </GlassCard>
    </Reveal>
  );
}

export function FeaturesGrid({ items = features }: { items?: FeatureItem[] }) {
  return (
    <SectionShell id="features" eyebrow="Özellikler" title="Keşfi daha akıllı yapan özellikler">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{items.map((item, index) => <FeatureCard key={item.title} item={item} index={index} />)}</div>
    </SectionShell>
  );
}
