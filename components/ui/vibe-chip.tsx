import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { VibeMode } from "@/lib/types";

const modeClasses: Record<VibeMode, string> = {
  zen: "border-[color:var(--brand-zen)]/25 bg-[var(--brand-zen-soft)] text-[var(--brand-zen)]",
  neutral: "border-white/12 bg-white/6 text-white/80",
  hype: "border-[color:var(--brand-hype)]/25 bg-[var(--brand-hype-soft)] text-[var(--brand-hype)]",
};

export function VibeChip({
  mode,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { mode: VibeMode }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full border px-2.5 text-[11px] font-semibold tracking-[0.08em] uppercase",
        modeClasses[mode],
        className,
      )}
      {...props}
    />
  );
}
