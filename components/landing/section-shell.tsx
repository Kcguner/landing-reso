import { cn } from "@/lib/utils";
import type { SectionShellProps } from "@/lib/types";

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-pad scroll-mt-24", className)}>
      <div className="container-shell">
        <div className={cn("space-y-6", contentClassName)}>
          <div className="relative max-w-4xl overflow-hidden rounded-[1.2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4 sm:p-5">
            <div className="pointer-events-none absolute -right-8 top-2 h-24 w-24 rounded-full bg-[var(--brand-gold)]/6 blur-2xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 h-20 w-20 rounded-full bg-[var(--brand-zen)]/7 blur-2xl" />
            <div className="pointer-events-none absolute inset-0 hero-grid opacity-20" />
            <div className="pointer-events-none absolute bottom-4 left-4 top-4 hidden w-px bg-gradient-to-b from-[var(--brand-gold)]/45 via-white/10 to-transparent sm:block" />
            <div className="relative space-y-3 sm:pl-5">
            {eyebrow ? (
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/78 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]" />
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-balance font-[var(--font-sora)] text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-2xl text-sm leading-6 text-[var(--text-muted)] sm:text-base sm:leading-7">
                {description}
              </p>
            ) : null}
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
