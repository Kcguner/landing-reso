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
            "container-shell flex h-14 items-center justify-between rounded-2xl border border-transparent px-3 transition-all sm:h-[60px] sm:px-4",
            scrolled
              ? "border-white/10 bg-[color:var(--glass)] shadow-[0_12px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl"
              : "bg-transparent",
          )}
        >
          <a href="#hero" className="flex items-center gap-2.5 rounded-full px-1 py-1">
            <ResoLogo className="h-8 w-8" />
            <span className="font-[var(--font-sora)] text-base font-semibold tracking-tight text-white">
              Reso
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/78 transition hover:bg-white/6 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
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
