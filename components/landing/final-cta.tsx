import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCTA() {
  return (
    <section id="final-cta" className="section-pad scroll-mt-24">
      <div className="container-shell">
        <div className="relative isolate overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,101,93,0.08),rgba(77,226,177,0.08)_42%,rgba(255,255,255,0.02))] p-4 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
          <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--brand-hype)]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 top-10 h-36 w-36 rounded-full bg-[var(--brand-zen)]/12 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-2/3 -translate-x-1/2 rounded-full bg-[var(--brand-gold)]/8 blur-3xl" />
          <Reveal>
            <div className="glass-panel relative mx-auto max-w-5xl overflow-hidden rounded-[1.35rem] border border-white/12 p-5 sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.03),transparent_70%)]" />
              <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/75 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
                    App Landing
                  </p>
                  <h2 className="mt-4 text-balance font-[var(--font-sora)] text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    Bir sonraki mekanını sadece konuma göre değil, vibe’a göre seç.
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-muted)] sm:text-base sm:leading-7">
                    Reso ile şehrin ses haritasını keşfet. Modunu seç, doğru atmosferi bul, topluluğa katkı ver.
                  </p>
                  <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
                    <Button href="#hero" size="lg" className="w-full sm:w-auto">
                      Uygulamayı İndir
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button href="#showcase" variant="secondary" size="lg" className="w-full sm:w-auto">
                      Arayüzü Gör
                    </Button>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="font-mono text-[11px] tracking-[0.12em] text-white/55 uppercase">Kısa özet</p>
                    <div className="mt-3 grid gap-2 text-sm text-white/82">
                      <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/3 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[var(--brand-zen)]" />
                        Harita tabanlı vibe keşfi
                      </div>
                      <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/3 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[var(--brand-gold)]" />
                        Topluluk katkısıyla güncellenen veri
                      </div>
                      <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/3 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-[var(--brand-hype)]" />
                        Zen / Neutral / Hype modları
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] px-4 py-3 text-sm text-white/60">
                    Zen. Neutral. Hype. Hepsi tek haritada.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
