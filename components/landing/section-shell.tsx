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
        <div className={cn("space-y-5", contentClassName)}>
          <div className="max-w-3xl space-y-3">
            {eyebrow ? (
              <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.08em] text-white/75 uppercase">
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
          {children}
        </div>
      </div>
    </section>
  );
}
