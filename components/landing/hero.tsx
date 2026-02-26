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
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.34)] sm:p-6 lg:rounded-[2.2rem] lg:p-8">
          <div className="pointer-events-none absolute -left-16 top-6 h-56 w-56 rounded-full bg-[var(--brand-hype)]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-14 top-20 h-56 w-56 rounded-full bg-[var(--brand-zen)]/12 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-[-72px] h-40 w-[72%] -translate-x-1/2 rounded-full bg-[var(--brand-gold)]/7 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-60" />

          <div className="relative mb-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/8 bg-black/15 px-3 py-2 text-[11px] tracking-[0.14em] text-white/65 uppercase sm:px-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-zen)] shadow-[0_0_0_4px_rgba(77,226,177,0.12)]" />
              City Sonar Interface
            </span>
            <span className="font-mono text-white/45">TR / Mobile-first Landing</span>
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10">
            <div className="max-w-xl space-y-5">
              <Reveal>
                <Badge className="w-fit bg-black/25">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
                  {heroContent.badge}
                </Badge>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="text-balance bg-gradient-to-br from-white via-white to-white/72 bg-clip-text font-[var(--font-sora)] text-[clamp(2rem,4.3vw,3.75rem)] leading-[0.98] font-extrabold tracking-tight text-transparent">
                  {heroContent.title}
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-balance max-w-[58ch] text-sm leading-6 text-[var(--text-muted)] sm:text-base sm:leading-7">
                  {heroContent.description}
                </p>
              </Reveal>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {heroContent.bullets.map((bullet, index) => {
                  const Icon = bullet.icon;
                  return (
                    <Reveal key={bullet.text} delay={0.12 + index * 0.05}>
                      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-white/85">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-white/92">{bullet.text}</p>
                            <p className="mt-1 text-[11px] tracking-[0.1em] text-white/45 uppercase">Feature 0{index + 1}</p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.28}>
                <div className="rounded-2xl border border-white/10 bg-black/18 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
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
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="grid gap-2 sm:grid-cols-2">
                  {heroContent.stores.map((store, index) => (
                    <div
                      key={store.label}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-3 py-3 backdrop-blur-sm"
                    >
                      <div className="pointer-events-none absolute right-[-18px] top-[-18px] h-16 w-16 rounded-full blur-2xl" style={{ backgroundColor: index === 0 ? "rgba(255,157,87,0.12)" : "rgba(77,226,177,0.12)" }} />
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
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/58">
                  <p>{heroContent.footnote}</p>
                  <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
                  <p className="font-mono tracking-[0.08em] uppercase">Zen / Neutral / Hype</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} y={26} className="relative lg:pl-2">
              <div className="relative mx-auto w-full max-w-[460px]">
                <div className="pointer-events-none absolute -left-3 top-8 z-10 hidden w-44 rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-xl sm:block">
                  <p className="text-[11px] tracking-[0.12em] text-white/55 uppercase">Canlı Sinyal</p>
                  <p className="mt-1 font-[var(--font-sora)] text-sm font-semibold text-white">Vibe haritası güncel akıyor</p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[var(--brand-zen)] to-[var(--brand-gold)]" />
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-2 bottom-12 z-10 hidden w-44 rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-xl sm:block">
                  <p className="text-[11px] tracking-[0.12em] text-white/55 uppercase">Akış</p>
                  <div className="mt-2 space-y-1.5 text-xs text-white/78">
                    <div className="flex items-center justify-between rounded-lg border border-white/8 bg-white/4 px-2 py-1.5">
                      <span>Harita</span>
                      <span className="text-[var(--brand-zen)]">Aktif</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-white/8 bg-white/4 px-2 py-1.5">
                      <span>Katkı</span>
                      <span className="text-[var(--brand-gold)]">Açık</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-white/8 bg-white/4 px-2 py-1.5">
                      <span>Vibe Modu</span>
                      <span className="text-white">3</span>
                    </div>
                  </div>
                </div>

                <PhoneMockup />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
