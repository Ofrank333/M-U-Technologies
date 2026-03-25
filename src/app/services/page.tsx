import type { Metadata } from "next";
import Link from "next/link";
import { Network, Brain, Shield, Server, Package, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Enterprise network automation, AI integration, cybersecurity, IT infrastructure, and procurement services from M&U Technologies.",
};

const SERVICES = [
  {
    icon: Network,
    title: "Network Automation",
    href: "/services/network-automation",
    desc: "Eliminate manual configuration complexity with intelligent automation. Our Ansible-based frameworks, SD-WAN orchestration, and intent-based networking solutions reduce deployment time by 10× while maintaining full compliance.",
    features: ["Ansible Playbook Development", "SD-WAN Orchestration", "Intent-Based Networking", "NetDevOps Pipelines", "Configuration Management", "Network-as-Code"],
    color: "from-brand-500 to-brand-700",
    tagColor: "bg-brand-500/15 text-brand-600 dark:text-brand-400",
  },
  {
    icon: Brain,
    title: "AI Integration",
    href: "/services/ai-integration",
    desc: "Bring intelligence to every layer of your network with AIOps. Our AI-powered platform continuously learns your traffic patterns, predicts anomalies before they become outages, and automates remediation workflows.",
    features: ["AIOps Platform", "Predictive Analytics", "Automated Root Cause Analysis", "ML-Driven Capacity Planning", "Intelligent Automation Workflows", "Natural Language Network Ops"],
    color: "from-accent-500 to-accent-700",
    tagColor: "bg-accent-500/15 text-accent-600 dark:text-accent-400",
  },
  {
    icon: Shield,
    title: "Network Security",
    href: "/services/security",
    desc: "Fortify your perimeter—and eliminate it. Our Zero Trust and SASE implementations ensure that no user, device, or application is trusted by default, with continuous verification at every access point.",
    features: ["Zero Trust Architecture", "SASE Framework", "ZTNA Implementation", "Micro-Segmentation", "AI Threat Detection", "Automated Incident Response"],
    color: "from-cyan-500 to-cyan-700",
    tagColor: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    href: "/services/infrastructure",
    desc: "Design, deploy, and manage resilient infrastructure that scales with your business. From cloud-native to hybrid and on-premise architectures, we ensure performance, redundancy, and future-readiness.",
    features: ["Cloud Architecture Design", "Hybrid Environment Management", "Data Center Modernization", "Edge Computing", "Disaster Recovery", "Infrastructure-as-Code"],
    color: "from-emerald-500 to-emerald-700",
    tagColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Package,
    title: "IT Procurement",
    href: "/services/procurement",
    desc: "Maximize value from every technology dollar. Our procurement specialists leverage deep vendor relationships and market intelligence to source the right hardware and software at the best prices with full lifecycle support.",
    features: ["Strategic Vendor Management", "Hardware Sourcing & Logistics", "Software License Optimization", "Lifecycle Management", "ITAD & Refresh Planning", "Multi-Vendor Negotiation"],
    color: "from-amber-500 to-amber-700",
    tagColor: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-nav">
      {/* Hero */}
      <section className="relative py-20 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mx-auto mb-4">Enterprise Services</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Full-Spectrum Network{" "}
            <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Every service we offer is designed for enterprise scale, built on AI-first principles, and backed by our 99.9% SLA guarantee.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.href}
                className="rounded-3xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border overflow-hidden card-hover"
              >
                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Icon panel */}
                  <div className={`relative lg:w-72 xl:w-80 flex-shrink-0 bg-gradient-to-br ${service.color} p-12 flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="relative">
                      <div className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={44} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-2xl">
                      {service.desc}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
                      {service.features.map((f) => (
                        <span key={f} className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${service.tagColor} bg-opacity-10`}>
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link href={service.href} className="btn-primary text-sm inline-flex">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="relative z-10" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Our network architects will assess your current state and recommend the highest-impact starting point for your organization.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
            <span>Schedule a Free Assessment</span>
            <ArrowRight size={16} className="relative z-10" />
          </Link>
        </div>
      </section>
    </div>
  );
}
