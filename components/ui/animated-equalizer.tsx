"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function AnimatedEqualizer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  const reduced = useReducedMotion();
  const bars = [18, 12, 22, 10, 24, 14, 20, 11, 16];

  return (
    <div className={cn("flex items-end gap-1", className)} aria-hidden="true" {...props}>
      {bars.map((height, index) => (
        <motion.span
          key={`${height}-${index}`}
          className="block w-1 rounded-full bg-white/70"
          style={{ height }}
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.45, 0.9, 0.45],
                  scaleY: [0.85, 1.15, 0.9],
                }
          }
          transition={
            reduced
              ? undefined
              : {
                  duration: 1.6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.08,
                }
          }
        />
      ))}
    </div>
  );
}
