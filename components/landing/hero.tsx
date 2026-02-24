import { ArrowRight, Download, Sparkles } from "lucide-react";
import { heroContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PhoneMockup } from "@/components/landing/phone-mockup";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-18 scroll-mt-24">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.28)] sm:p-6 lg:rounded-[2rem] lg:p-8">
          <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-[var(--brand-hype)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-[var(--brand-zen)]/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-55" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="max-w-xl space-y-5">
              <Reveal>
                <Badge className="w-fit bg-black/20">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
                  {heroContent.badge}
                </Badge>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-balance font-[var(--font-sora)] text-[clamp(1.9rem,4vw,3.5rem)] leading-[1.05] font-extrabold tracking-tight text-white">
                  {heroContent.title}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-balance text-sm leading-6 text-[var(--text-muted)] sm:text-base sm:leading-7">
                  {heroContent.description}
                </p>
              </Reveal>

              <div className="space-y-2.5">
                {heroContent.bullets.map((bullet, index) => {
                  const Icon = bullet.icon;
                  return (
                    <Reveal key={bullet.text} delay={0.12 + index * 0.05}>
                      <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5">
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <p className="text-sm font-medium text-white/88">{bullet.text}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.28}>
                <div className="grid gap-3 sm:flex sm:flex-wrap">
                  <Button href={heroContent.primaryCta.href} size="lg" className="w-full sm:w-auto">
                    <Sparkles className="h-4 w-4" />
                    {heroContent.primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    href={heroContent.secondaryCta.href}
                    variant="secondary"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {heroContent.secondaryCta.label}
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="grid gap-2 sm:grid-cols-2">
                  {heroContent.stores.map((store) => (
                    <div
                      key={store.label}
                      className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3 backdrop-blur-sm"
                    >
                      <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-white">
                        <Download className="h-4 w-4 text-white/80" />
                        {store.label}
                      </div>
                      <p className="text-xs text-white/55">{store.note}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.36}>
                <p className="text-sm text-white/55">{heroContent.footnote}</p>
              </Reveal>
            </div>

            <Reveal delay={0.12} y={26} className="lg:pl-2">
              <PhoneMockup />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
