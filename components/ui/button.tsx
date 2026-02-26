import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

const variantClasses: Record<Variant, string> = {
  primary:
    "border border-[#fce2b7]/25 bg-gradient-to-r from-[var(--brand-gold)] to-[var(--brand-gold-2)] text-[#261204] shadow-[0_16px_40px_rgba(255,157,87,0.22),inset_0_1px_0_rgba(255,255,255,0.45)] hover:-translate-y-0.5 hover:brightness-105",
  secondary:
    "border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-white/22 hover:bg-white/12",
  ghost:
    "border border-white/10 bg-black/18 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:border-white/16 hover:bg-white/6",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-4 text-sm sm:px-5",
  lg: "h-12 px-5 text-sm sm:h-[54px] sm:px-6 sm:text-[15px]",
};

function baseClass(variant: Variant, size: Size, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-[0.01em] transition duration-200 backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button(props: LinkProps | NativeButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";

  if (typeof (props as LinkProps).href === "string") {
    const { href, className, children, ...rest } = props as LinkProps;
    const external = href.startsWith("http");

    if (external) {
      return (
        <a className={baseClass(variant, size, className)} href={href} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link className={baseClass(variant, size, className)} href={href} {...rest}>
        {children}
      </Link>
    );
  }

  const { className, children, type = "button", ...rest } = props as NativeButtonProps;
  return (
    <button className={baseClass(variant, size, className)} type={type} {...rest}>
      {children}
    </button>
  );
}
