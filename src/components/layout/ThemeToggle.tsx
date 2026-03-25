"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className={cn(
        "relative w-9 h-9 rounded-lg flex items-center justify-center",
        "bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10",
        "border border-gray-200 dark:border-white/10",
        "transition-all duration-200",
        className
      )}
    >
      <Sun
        size={16}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100 text-amber-500"
        )}
      />
      <Moon
        size={16}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "opacity-100 rotate-0 scale-100 text-brand-400" : "opacity-0 -rotate-90 scale-50"
        )}
      />
    </button>
  );
}
