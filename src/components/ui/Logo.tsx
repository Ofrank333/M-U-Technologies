"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "icon" | "wordmark";
  className?: string;
}

const sizes = {
  sm: { svg: 28, text: "text-lg" },
  md: { svg: 36, text: "text-xl" },
  lg: { svg: 48, text: "text-2xl" },
  xl: { svg: 64, text: "text-3xl" },
};

export default function Logo({ size = "md", variant = "full", className }: LogoProps) {
  const { svg, text } = sizes[size];

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      {/* SVG Icon Mark */}
      <div className="relative flex-shrink-0">
        <svg
          width={svg}
          height={svg}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Background hexagon */}
          <path
            d="M24 2L43.05 13V35L24 46L4.95 35V13L24 2Z"
            fill="url(#hexGrad)"
            opacity="0.15"
          />
          <path
            d="M24 2L43.05 13V35L24 46L4.95 35V13L24 2Z"
            stroke="url(#hexStroke)"
            strokeWidth="1"
            fill="none"
          />
          {/* M letter stylized */}
          <path
            d="M10 32V16L18 26L24 18L30 26L38 16V32"
            stroke="url(#mGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Connecting node dots */}
          <circle cx="10" cy="16" r="2" fill="#6366f1" />
          <circle cx="24" cy="18" r="2" fill="#d946ef" />
          <circle cx="38" cy="16" r="2" fill="#06b6d4" />
          <circle cx="18" cy="26" r="1.5" fill="#818cf8" opacity="0.8" />
          <circle cx="30" cy="26" r="1.5" fill="#a78bfa" opacity="0.8" />
          {/* Network lines */}
          <line x1="10" y1="16" x2="38" y2="16" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5" />
          <line x1="10" y1="32" x2="38" y2="32" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5" />

          <defs>
            <linearGradient id="hexGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="hexStroke" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="mGrad" x1="10" y1="24" x2="38" y2="24" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="10" y1="0" x2="38" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Wordmark */}
      {variant !== "icon" && (
        <div className="flex flex-col leading-none">
          <span className={cn("font-bold tracking-tight text-gradient", text)}>
            M<span className="text-brand-400">&</span>U
          </span>
          {variant === "full" && size !== "sm" && (
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mt-0.5">
              Technologies
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
