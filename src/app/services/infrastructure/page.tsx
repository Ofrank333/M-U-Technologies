import type { Metadata } from "next";
import Link from "next/link";
import { Server, ArrowRight, Cloud, Database, Layers, GitBranch, RefreshCw, Monitor } from "lucide-react";

export const metadata: Metadata = { title: "IT Infrastructure", description: "Cloud, hybrid, and on-premise infrastructure solutions designed for enterprise resilience and scale by M&U Technologies." };

const CAPS = [
  { icon: Cloud, title: "Cloud Architecture", desc: "Design and deploy cloud-native architectures on AWS, Azure, and GCP optimized for performance and cost." },
  { icon: Layers, title: "Hybrid Environments", desc: "Seamlessly bridge on-premise data centers with public and private cloud workloads through unified management." },
  { icon: Database, title: "Data Center Modernization", desc: "Transform legacy data centers with software-defined networking, hyper-converged infrastructure, and automation." },
  { icon: GitBranch, title: "Infrastructure as Code", desc: "Manage all infrastructure through Terraform, Pulumi, and Ansible—consistent, repeatable, version-controlled." },
  { icon: RefreshCw, title: "Disaster Recovery", desc: "RPO/RTO-optimized DR strategies with automated failover that protects your business continuity." },
  { icon: Monitor, title: "24/7 Monitoring & NOC", desc: "Round-the-clock network operations center staffed by certified engineers ensuring maximum uptime." },
];

export default function InfrastructurePage() {
  return (
    <div className="pt-nav">
      <section className="relative py-20 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
              <Server size={24} className="text-emerald-500" />
            </div>
            <div className="tag">IT Infrastructure</div>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Infrastructure Built to{" "}
              <span className="text-gradient">Last and Scale</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Whether you&apos;re migrating to the cloud, modernizing a legacy data center, or building a hybrid environment, we architect solutions that deliver maximum performance, resilience, and ROI.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
              <span>Design My Infrastructure</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Infrastructure Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border card-hover">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-emerald-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
