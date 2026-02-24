import { Crown, LogIn, MapPinned, SlidersHorizontal } from "lucide-react";
import { SectionShell } from "@/components/landing/section-shell";
import { PhoneFrame } from "@/components/ui/phone-frame";
import { Reveal } from "@/components/ui/reveal";
import { showcaseItems } from "@/lib/content";
import type { ShowcaseItem } from "@/lib/types";
import { cn } from "@/lib/utils";

function MockScreen({ item }: { item: ShowcaseItem }) {
  const variant = item.variant;

  return (
    <PhoneFrame className="max-w-[290px]">
      <div className="relative h-[500px] overflow-hidden bg-[var(--surface)] p-3">
        <div className="pointer-events-none absolute inset-0 hero-grid opacity-45" />
        <div className="relative space-y-3">
          <div className="rounded-xl border border-white/10 bg-black/20 px-3 py-2">
            <div className="flex items-center justify-between gap-2 text-xs text-white/70">
              <span className="font-semibold text-white">{item.title}</span>
              <span className="font-mono uppercase tracking-[0.12em]">UI</span>
            </div>
          </div>

          {variant === "map" && (
            <>
              <div className="rounded-xl border border-white/10 bg-white/3 p-2">
                <div className="grid grid-cols-3 gap-1 rounded-lg bg-white/5 p-1 text-[10px] font-semibold uppercase tracking-[0.08em]">
                  <div className="rounded-md bg-[var(--brand-zen-soft)] px-2 py-1 text-center text-[var(--brand-zen)]">Zen</div>
                  <div className="rounded-md px-2 py-1 text-center text-white/70">Neutral</div>
                  <div className="rounded-md px-2 py-1 text-center text-white/70">Hype</div>
                </div>
              </div>
              <div className="relative h-72 rounded-xl border border-white/10 bg-white/2">
                <MapPinned className="absolute left-10 top-12 h-4 w-4 text-[var(--brand-zen)]" />
                <MapPinned className="absolute left-32 top-24 h-4 w-4 text-white/65" />
                <MapPinned className="absolute right-10 bottom-[72px] h-4 w-4 text-[var(--brand-hype)]" />
              </div>
              <div className="rounded-xl border border-white/10 bg-black/35 p-3 text-xs text-white/70">Bottom sheet preview</div>
            </>
          )}

          {variant === "list" && (
            <>
              <div className="rounded-xl border border-white/10 bg-white/3 p-2">
                <div className="flex items-center gap-2 text-xs text-white/75"><SlidersHorizontal className="h-3.5 w-3.5" /> Filtreler</div>
              </div>
              <div className="space-y-2">
                {[1, 2, 3, 4].map((row) => (
                  <div key={row} className="rounded-xl border border-white/10 bg-white/3 p-3">
                    <div className="mb-2 h-3 w-2/3 rounded bg-white/10" />
                    <div className="h-2.5 w-1/2 rounded bg-white/7" />
                    <div className="mt-2 flex gap-2"><span className="h-5 w-12 rounded-full bg-white/7" /><span className="h-5 w-16 rounded-full bg-white/7" /></div>
                  </div>
                ))}
              </div>
            </>
          )}

          {variant === "auth" && (
            <div className="grid h-[410px] place-items-center rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
              <div className="w-full max-w-[220px] space-y-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-center">
                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"><LogIn className="h-4 w-4" /></span>
                <p className="font-[var(--font-sora)] text-sm font-semibold">Hoş geldin</p>
                <div className="space-y-2">
                  <div className="h-9 rounded-lg border border-white/10 bg-white/4" />
                  <div className="h-9 rounded-lg border border-white/10 bg-white/4" />
                  <div className="h-9 rounded-lg bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-2)]" />
                </div>
              </div>
            </div>
          )}

          {variant === "pro" && (
            <div className="space-y-3">
              <div className="rounded-xl border border-[color:var(--brand-gold)]/20 bg-[rgba(251,191,36,0.06)] p-3">
                <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-white"><Crown className="h-4 w-4 text-[var(--brand-gold)]" /> Reso PRO</div>
                <p className="text-xs leading-5 text-white/70">Daha geniş alan ve daha fazla mekan görünümü</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                <div className="mb-2 text-xs text-white/60">Planlar</div>
                <div className="grid gap-2">
                  <div className="rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-xs text-white/75">Aylık</div>
                  <div className="rounded-lg border border-[color:var(--brand-gold)]/20 bg-[rgba(251,191,36,0.05)] px-3 py-2 text-xs text-white">Yıllık • En Popüler</div>
                </div>
              </div>
              <div className="space-y-2 rounded-xl border border-white/10 bg-white/3 p-3">
                {["Reklamsız", "20 km alan", "Katkı limiti"].map((v) => <div key={v} className="flex items-center gap-2 text-xs text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />{v}</div>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}

export function Showcase() {
  return (
    <SectionShell id="showcase" eyebrow="Arayüz" title="Reso arayüzü: hızlı, temiz, odaklı" description="Mobil deneyim, harita merkezli keşif ve bottom-sheet akışı için optimize edildi.">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4 sm:p-6">
        <div className="pointer-events-none absolute -left-10 top-8 h-40 w-40 rounded-full bg-[var(--brand-hype)]/8 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-40 w-40 rounded-full bg-[var(--brand-zen)]/8 blur-3xl" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {showcaseItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className={cn(index % 2 === 1 ? "xl:pt-6" : "", "flex justify-center")}>
              <MockScreen item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
