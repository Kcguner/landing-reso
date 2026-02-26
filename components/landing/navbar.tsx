"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ResoLogo } from "@/components/ui/reso-logo";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";
import { MobileMenuSheet } from "@/components/landing/mobile-menu-sheet";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-40 px-2 pt-2 sm:px-3 sm:pt-3">
        <nav
          aria-label="Ana navigasyon"
          className={cn(
            "container-shell relative flex h-14 items-center justify-between overflow-hidden rounded-2xl border px-3 transition-all sm:h-[60px] sm:px-4",
            scrolled
              ? "border-white/12 bg-[color:var(--glass)] shadow-[0_14px_46px_rgba(0,0,0,0.34)] backdrop-blur-xl"
              : "border-white/6 bg-black/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-md",
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,101,93,0.03),transparent_35%,rgba(77,226,177,0.025)_72%,transparent)]" />

          <a href="#hero" className="relative flex items-center gap-2.5 rounded-full px-1 py-1">
            <ResoLogo className="h-8 w-8" />
            <span className="font-[var(--font-sora)] text-base font-semibold tracking-tight text-white">
              Reso
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[var(--brand-zen)] shadow-[0_0_0_4px_rgba(77,226,177,0.12)] sm:inline-block" />
          </a>

          <div className="relative hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-white/76 transition hover:bg-white/7 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="relative hidden items-center gap-2 md:flex">
            <Button href="#final-cta" size="sm">
              Uygulamayı İndir
            </Button>
            <Button href="#showcase" variant="ghost" size="sm">
              Canlı Önizleme
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/90 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={open}
            aria-controls="mobile-menu-sheet"
          >
            <Menu className="h-4.5 w-4.5" />
          </button>
        </nav>
      </div>
      <MobileMenuSheet open={open} onClose={() => setOpen(false)} items={items} />
    </>
  );
}
