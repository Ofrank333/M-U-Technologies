"use client";
import Link from "next/link";
import { Network, Brain, Shield, Server, Package, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: Network,
    title: "Network Automation",
    href: "/services/network-automation",
    desc: "Eliminate manual configuration with Ansible playbooks, SD-WAN orchestration, and intent-based networking that adapts in real time.",
    tags: ["Ansible", "SD-WAN", "Intent-Based"],
    color: "from-brand-500/20 to-brand-600/10",
    iconColor: "text-brand-500",
    glow: "group-hover:shadow-glow-sm",
  },
  {
    icon: Brain,
    title: "AI Integration",
    href: "/services/ai-integration",
    desc: "Transform operations with AIOps, predictive analytics, and intelligent automation workflows that learn and optimize continuously.",
    tags: ["AIOps", "ML Ops", "Predictive"],
    color: "from-accent-500/20 to-accent-600/10",
    iconColor: "text-accent-500",
    glow: "group-hover:shadow-glow-purple",
  },
  {
    icon: Shield,
    title: "Network Security",
    href: "/services/security",
    desc: "Protect every layer with Zero Trust architecture, SASE frameworks, and AI-driven threat detection and automated response.",
    tags: ["Zero Trust", "SASE", "ZTNA"],
    color: "from-cyan-400/20 to-cyan-600/10",
    iconColor: "text-cyan-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    href: "/services/infrastructure",
    desc: "Architect resilient hybrid environments spanning cloud, edge, and on-premise—built for performance, redundancy, and scale.",
    tags: ["Cloud", "Hybrid", "On-Prem"],
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
  },
  {
    icon: Package,
    title: "IT Procurement",
    href: "/services/procurement",
    desc: "Streamline hardware and software acquisition with vetted vendor relationships, lifecycle management, and optimized pricing.",
    tags: ["Cisco", "HPE", "Fortinet"],
    color: "from-amber-500/20 to-amber-600/10",
    iconColor: "text-amber-500",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative bg-gray-50 dark:bg-surface-dark-card">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag mx-auto mb-4">Our Core Services</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything Your Network Needs,{" "}
            <span className="text-gradient">Intelligently Delivered</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From automation to security, we cover the full spectrum of enterprise network requirements with AI-first solutions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className={cn(
                  "group relative p-6 rounded-2xl border transition-all duration-300 card-hover",
                  "bg-white dark:bg-surface-dark",
                  "border-gray-200 dark:border-surface-dark-border",
                  "hover:border-brand-300 dark:hover:border-brand-500/30",
                  service.glow,
                  i === 4 && "md:col-span-2 lg:col-span-1"
                )}
              >
                {/* Icon */}
                <div className={cn(
                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                  service.color
                )}>
                  <Icon size={22} className={service.iconColor} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-500/0 to-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
