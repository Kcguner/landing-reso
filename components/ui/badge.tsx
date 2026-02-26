import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white/90 uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
        className,
      )}
      {...props}
    />
  );
}
