"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
};

export function Reveal({ children, delay = 0, y = 20, once = true, className }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{ duration: reduced ? 0.18 : 0.5, ease: "easeOut", delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
