import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function ResoLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="resoPin" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#50C878" />
        </linearGradient>
      </defs>
      <path
        d="M32 6C20.95 6 12 14.95 12 26c0 11.97 15.26 28.57 18.02 31.48a2.95 2.95 0 0 0 4.3 0C36.74 54.57 52 37.97 52 26 52 14.95 43.05 6 32 6Z"
        fill="#0B1017"
        stroke="url(#resoPin)"
        strokeWidth="2.2"
      />
      <circle cx="32" cy="26" r="11.5" fill="#121212" stroke="rgba(255,255,255,0.16)" />
      <path
        d="M22 27c2-6 4 6 6 0s4-6 6 0 4 6 8-1"
        stroke="#FBBF24"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="26" r="2.5" fill="#50C878" />
    </svg>
  );
}
