import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[340px] rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-1.5 w-24 -translate-x-1/2 rounded-full bg-white/14" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[var(--surface)]">
        {children}
      </div>
    </div>
  );
}
