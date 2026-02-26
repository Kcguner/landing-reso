import { footerColumns, footerSocials } from "@/lib/content";
import { ResoLogo } from "@/components/ui/reso-logo";

export function Footer() {
  return (
    <footer className="pb-8 pt-6">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-5 sm:p-6">
          <div className="pointer-events-none absolute inset-0 hero-grid opacity-15" />
          <div className="pointer-events-none absolute -right-10 top-3 h-32 w-32 rounded-full bg-[var(--brand-gold)]/6 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative">
              <div className="flex items-center gap-2.5">
                <ResoLogo className="h-8 w-8" />
                <span className="font-[var(--font-sora)] text-lg font-semibold tracking-tight text-white">Reso</span>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-muted)]">Akustik vibe odaklı mekan keşif uygulaması.</p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/8 bg-black/15 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/60 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-zen)]" />
                Mobile-first landing
              </p>
            </div>

            <div className="relative grid gap-6 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="font-[var(--font-sora)] text-sm font-semibold tracking-tight text-white">{column.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-white/65 transition hover:text-white focus-visible:outline-none">{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-white/8 pt-4 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 KCG Apps HQ. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-2">
              {footerSocials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href={social.href} aria-label={social.label} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white/75 transition hover:bg-white/8 hover:text-white">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
