"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/lib/types";
import { ResoLogo } from "@/components/ui/reso-logo";

type MobileMenuSheetProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
};

export function MobileMenuSheet({ open, onClose, items }: MobileMenuSheetProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();

      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const focusTarget = panelRef.current?.querySelector<HTMLElement>("button, a[href]");
    focusTarget?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.12 : 0.18 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobil menü"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Menüyü kapat"
          />
          <motion.div
            id="mobile-menu-sheet" ref={panelRef}
            className="absolute inset-3 flex flex-col rounded-[1.35rem] border border-white/12 bg-[color:var(--glass)] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            initial={reduced ? { opacity: 1 } : { y: 16, opacity: 0.95 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { y: 10, opacity: 0.9 }}
            transition={{ duration: reduced ? 0.12 : 0.22, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/8 pb-4">
              <div className="flex items-center gap-2.5">
                <ResoLogo className="h-8 w-8" />
                <span className="font-[var(--font-sora)] text-lg font-semibold tracking-tight">Reso</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/85 focus-visible:outline-none"
                aria-label="Menüyü kapat"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2" aria-label="Mobil navigasyon">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="rounded-2xl border border-transparent bg-white/3 px-4 py-3 text-base font-medium text-white/90 transition hover:border-white/10 hover:bg-white/7"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-5 grid gap-3">
              <Button href="#final-cta" size="lg" onClick={onClose}>
                Uygulamayı İndir
              </Button>
              <Button href="#showcase" variant="ghost" size="lg" onClick={onClose}>
                Canlı Önizleme
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
