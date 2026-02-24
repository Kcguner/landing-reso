import { SectionShell } from "@/components/landing/section-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { personas } from "@/lib/content";

const accentClasses = [
  "border-[color:var(--brand-zen)]/12",
  "border-white/12",
  "border-[color:var(--brand-hype)]/12",
  "border-[color:var(--brand-gold)]/12",
];

export function Personas() {
  return (
    <SectionShell id="who-for" eyebrow="Use Cases" title="Reso kimler için ideal?">
      <div className="grid gap-4 sm:grid-cols-2">
        {personas.map((persona, index) => {
          const Icon = persona.icon;
          return (
            <Reveal key={persona.title} delay={index * 0.04}>
              <GlassCard className={`h-full p-5 ${accentClasses[index % accentClasses.length]}`}>
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/85"><Icon className="h-[18px] w-[18px]" /></span>
                <h3 className="font-[var(--font-sora)] text-base font-semibold tracking-tight text-white sm:text-lg">{persona.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-[var(--text-muted)]">{persona.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
