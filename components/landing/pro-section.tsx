import { Check, Crown } from "lucide-react";
import { SectionShell } from "@/components/landing/section-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { proBenefits, proPlans } from "@/lib/content";

export function ProSection() {
  return (
    <SectionShell id="pro" eyebrow="Reso PRO" title="Reso PRO ile keşfi büyüt" description="Daha geniş alan, daha fazla mekan ve reklamsız deneyim ile Reso’dan maksimum verim alın.">
      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {proPlans.map((plan, index) => (
              <GlassCard key={plan.name} className={`relative overflow-hidden p-5 sm:p-6 ${plan.highlighted ? "border-[color:var(--brand-gold)]/22" : ""}`}>
                {plan.highlighted && <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[rgba(251,191,36,0.12)] to-transparent" />}
                <div className="relative flex h-full flex-col">
                  {plan.badge ? (
                    <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--brand-gold)]/20 bg-[rgba(251,191,36,0.08)] px-3 py-1 text-xs font-semibold text-[var(--brand-gold)]"><Crown className="h-3.5 w-3.5" />{plan.badge}</span>
                  ) : (
                    <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80">{index + 1}</span>
                  )}
                  <h3 className="font-[var(--font-sora)] text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{plan.subtitle}</p>
                  <div className="my-5 rounded-xl border border-dashed border-white/10 bg-black/20 p-3 text-xs leading-5 text-white/60">Fiyat bilgisi uygulama içi mağazada ülkenize göre gösterilir.</div>
                  <Button href="#final-cta" variant={plan.highlighted ? "primary" : "secondary"} className="mt-auto w-full">{plan.cta}</Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="relative overflow-hidden p-5 sm:p-6">
            <div className="pointer-events-none absolute -right-8 top-4 h-28 w-28 rounded-full bg-[var(--brand-gold)]/8 blur-3xl" />
            <h3 className="font-[var(--font-sora)] text-lg font-semibold text-white">PRO avantajları</h3>
            <ul className="mt-4 space-y-3">
              {proBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-[var(--text-muted)]">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[color:var(--brand-gold)]/20 bg-[rgba(251,191,36,0.08)] text-[var(--brand-gold)]"><Check className="h-3 w-3" /></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/60">Güncel fiyatlar uygulama içi mağazada ülkenize göre gösterilir.</p>
            <p className="mt-2 text-xs leading-5 text-white/45">Abonelikler uygulama mağazası üzerinden yönetilir. İstediğiniz zaman iptal edebilirsiniz.</p>
          </GlassCard>
        </Reveal>
      </div>
    </SectionShell>
  );
}
