"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { COMPANY } from "@/lib/utils";

const FOOTER_LINKS = {
  Services: [
    { label: "Network Automation", href: "/services/network-automation" },
    { label: "AI Integration", href: "/services/ai-integration" },
    { label: "Network Security", href: "/services/security" },
    { label: "IT Infrastructure", href: "/services/infrastructure" },
    { label: "IT Procurement", href: "/services/procurement" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Solutions", href: "/solutions" },
    { label: "Insights", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
  ],
  Resources: [
    { label: "Case Studies", href: "/solutions#case-studies" },
    { label: "Documentation", href: "/docs" },
    { label: "Security Policy", href: "/security" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-surface-dark border-t border-gray-200 dark:border-surface-dark-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-200 dark:border-surface-dark-border">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="md" />
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              {COMPANY.description}
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <Mail size={14} className="text-brand-500" />
                {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <Phone size={14} className="text-brand-500" />
                {COMPANY.phone}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                <MapPin size={14} className="text-brand-500 mt-0.5 flex-shrink-0" />
                {COMPANY.address}
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href={COMPANY.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-white/5 flex items-center justify-center hover:bg-brand-500 dark:hover:bg-brand-500 hover:text-white transition-all"
                aria-label="Twitter/X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-b border-gray-200 dark:border-surface-dark-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Stay ahead of the curve</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Get the latest insights on network automation and AI trends.
              </p>
            </div>
            <form className="flex gap-2 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2.5 text-sm rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
              <button type="submit" className="btn-primary text-sm px-4 py-2.5 whitespace-nowrap">
                <span>Subscribe</span>
                <ArrowRight size={14} className="relative z-10" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-400 dark:text-gray-600">Powered by</span>
            <span className="text-xs font-semibold text-gradient ml-1">AI-First Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
