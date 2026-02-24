import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCTA() {
  return (
    <section id="final-cta" className="section-pad scroll-mt-24">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,49,49,0.08),rgba(80,200,120,0.08)_45%,rgba(255,255,255,0.02))] p-4 sm:p-6 lg:p-8 isolation-isolate">
          <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--brand-hype)]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-8 top-10 h-36 w-36 rounded-full bg-[var(--brand-zen)]/12 blur-3xl" />
          <Reveal>
            <div className="glass-panel relative mx-auto max-w-4xl rounded-[1.3rem] border border-white/12 p-5 sm:p-7 lg:p-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance font-[var(--font-sora)] text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Bir sonraki mekanını sadece konuma göre değil, vibe’a göre seç.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)] sm:text-base sm:leading-7">
                  Reso ile şehrin ses haritasını keşfet. Modunu seç, doğru atmosferi bul, topluluğa katkı ver.
                </p>
                <div className="mt-5 grid gap-3 sm:flex sm:justify-center">
                  <Button href="#hero" size="lg" className="w-full sm:w-auto">
                    Uygulamayı İndir
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="#pro" variant="secondary" size="lg" className="w-full sm:w-auto">
                    Reso PRO’yu Gör
                  </Button>
                </div>
                <p className="mt-4 text-sm text-white/55">Zen. Neutral. Hype. Hepsi tek haritada.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
