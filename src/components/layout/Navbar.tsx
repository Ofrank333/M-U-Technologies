"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Network, Brain, Shield, Server, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/layout/ThemeToggle";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "Network Automation": Network,
  "AI Integration": Brain,
  "Network Security": Shield,
  "IT Infrastructure": Server,
  "IT Procurement": Package,
};

const SERVICES = [
  { label: "Network Automation", href: "/services/network-automation", desc: "Ansible, SD-WAN, intent-based networking" },
  { label: "AI Integration", href: "/services/ai-integration", desc: "AIOps, automation workflows, predictive analytics" },
  { label: "Network Security", href: "/services/security", desc: "Zero Trust, SASE, threat detection" },
  { label: "IT Infrastructure", href: "/services/infrastructure", desc: "Cloud, hybrid, on-premise solutions" },
  { label: "IT Procurement", href: "/services/procurement", desc: "Hardware & software sourcing" },
];

const NAV_ITEMS = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/5 shadow-sm"
            : "bg-transparent"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive("/services")
                    ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-100 dark:hover:bg-white/5"
                )}
              >
                Services
                <ChevronDown
                  size={14}
                  className={cn("transition-transform duration-200", servicesOpen && "rotate-180")}
                />
              </button>

              {/* Mega dropdown */}
              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px]",
                  "bg-white dark:bg-surface-dark-card rounded-2xl border border-gray-200 dark:border-surface-dark-border",
                  "shadow-xl dark:shadow-card-dark p-3",
                  "transition-all duration-200 origin-top",
                  servicesOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                )}
              >
                <div className="grid grid-cols-1 gap-1">
                  {SERVICES.map((service) => {
                    const Icon = SERVICE_ICONS[service.label];
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-500/10 group transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500/20 to-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          {Icon && <Icon size={16} className="text-brand-500 dark:text-brand-400" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                            {service.label}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{service.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Other nav items */}
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-gray-100 dark:hover:bg-white/5"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              <span>Book a Consultation</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 bg-white dark:bg-surface-dark-card",
            "border-l border-gray-200 dark:border-surface-dark-border",
            "p-6 overflow-y-auto transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-8">
            <Logo size="sm" />
            <button onClick={() => setMobileOpen(false)}>
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          <nav className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 px-3">Services</p>
            {SERVICES.map((s) => {
              const Icon = SERVICE_ICONS[s.label];
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-50 dark:hover:bg-brand-500/10 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {Icon && <Icon size={16} className="text-brand-500" />}
                  {s.label}
                </Link>
              );
            })}

            <div className="my-4 section-divider" />

            {[{ label: "Solutions", href: "/solutions" }, { label: "About", href: "/about" }, { label: "Insights", href: "/blog" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-3 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6">
              <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                <span>Book a Consultation</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
