import type { Metadata } from "next";
import Link from "next/link";
import { Brain, ArrowRight, CheckCircle, BarChart3, Eye, Zap, AlertTriangle, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Integration",
  description: "AIOps, predictive analytics, and intelligent automation workflows. Transform network operations with AI by M&U Technologies.",
};

const CAPABILITIES = [
  { icon: Eye, title: "Observability & Analytics", desc: "Full-stack visibility across every layer—network, application, and infrastructure—with AI-powered correlation." },
  { icon: AlertTriangle, title: "Predictive Incident Prevention", desc: "ML models trained on your network's historical data predict failures up to 72 hours before they occur." },
  { icon: Bot, title: "Autonomous Remediation", desc: "Closed-loop automation resolves 80% of incidents without human intervention, in seconds not hours." },
  { icon: BarChart3, title: "Capacity Intelligence", desc: "AI-driven capacity planning ensures you scale resources precisely when and where they're needed." },
  { icon: Brain, title: "Natural Language Operations", desc: "Query your network in plain English. Our AI translates intent into operational actions instantly." },
  { icon: Zap, title: "Workflow Automation Engine", desc: "Design complex multi-step automation workflows with a drag-and-drop interface—no coding required." },
];

export default function AIIntegrationPage() {
  return (
    <div className="pt-nav">
      <section className="relative py-20 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-accent-500/20 flex items-center justify-center">
              <Brain size={24} className="text-accent-500" />
            </div>
            <div className="tag">AI Integration</div>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Networks That{" "}
              <span className="text-gradient">Think for Themselves</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Our AIOps platform brings machine intelligence to every aspect of network operations—from anomaly detection and root cause analysis to capacity planning and autonomous remediation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
                <span>See a Live Demo</span>
                <ArrowRight size={16} className="relative z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">AI Platform Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border card-hover">
                <div className="w-10 h-10 rounded-xl bg-accent-500/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-accent-600 to-brand-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              {[
                { value: "80%", label: "Incidents resolved autonomously" },
                { value: "72hrs", label: "Advance failure prediction" },
                { value: "95%", label: "Reduction in MTTR" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-5xl font-bold mb-2">{value}</div>
                  <div className="text-white/80">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Start Your AIOps Journey</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Connect your first data source in under 10 minutes. See AI insights immediately.</p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
            <span>Request a Demo</span>
            <ArrowRight size={16} className="relative z-10" />
          </Link>
        </div>
      </section>
    </div>
  );
}
