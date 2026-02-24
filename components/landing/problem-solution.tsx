import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { SectionShell } from "@/components/landing/section-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { problemSolutionContent } from "@/lib/content";

export function ProblemSolution() {
  return (
    <SectionShell
      id="features-overview"
      eyebrow="Neden Reso"
      title={problemSolutionContent.title}
      description={problemSolutionContent.description}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <GlassCard className="relative overflow-hidden p-5 sm:p-6">
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[var(--brand-hype)]/10 blur-2xl" />
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-hype)]/20 bg-[var(--brand-hype-soft)] text-[var(--brand-hype)]">
                <AlertTriangle className="h-4 w-4" />
              </span>
              <h3 className="font-[var(--font-sora)] text-lg font-semibold text-white">
                {problemSolutionContent.problem.title}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {problemSolutionContent.problem.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-hype)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="relative overflow-hidden p-5 sm:p-6">
            <div className="pointer-events-none absolute -left-2 top-0 h-24 w-24 rounded-full bg-[var(--brand-zen)]/10 blur-2xl" />
            <div className="pointer-events-none absolute right-4 bottom-4 h-20 w-20 rounded-full bg-[var(--brand-gold)]/8 blur-2xl" />
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-zen)]/20 bg-[var(--brand-zen-soft)] text-[var(--brand-zen)]">
                <CheckCircle2 className="h-4 w-4" />
              </span>
              <h3 className="font-[var(--font-sora)] text-lg font-semibold text-white">
                {problemSolutionContent.solution.title}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {problemSolutionContent.solution.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-muted)]">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-zen)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}
