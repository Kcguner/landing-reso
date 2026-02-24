"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import type { FAQItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: FAQItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();
  const reduced = useReducedMotion();

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="glass-panel overflow-hidden rounded-2xl border border-white/10">
            <h3>
              <button
                id={triggerId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-white sm:px-5 sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-inset"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-white/70 transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduced ? 0.15 : 0.24, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/8 px-4 pb-4 pt-3 text-sm leading-6 text-[var(--text-muted)] sm:px-5">
                    {item.answer}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
