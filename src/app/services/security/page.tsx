import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowRight, Lock, Eye, AlertTriangle, Network, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Network Security",
  description: "Zero Trust architecture, SASE, and AI-driven threat detection. Enterprise-grade network security from M&U Technologies.",
};

const CAPABILITIES = [
  { icon: Lock, title: "Zero Trust Architecture", desc: "Never trust, always verify. We design and implement ZTNA frameworks that enforce least-privilege access across every user, device, and application." },
  { icon: Globe, title: "SASE Framework", desc: "Converge networking and security in the cloud with Secure Access Service Edge—delivering consistent policy enforcement everywhere." },
  { icon: Eye, title: "AI Threat Detection", desc: "Machine learning models continuously analyze traffic patterns to detect threats that signature-based tools miss entirely." },
  { icon: AlertTriangle, title: "Automated Response (SOAR)", desc: "Security orchestration and automated response isolates threats in milliseconds before they can spread laterally." },
  { icon: Network, title: "Micro-Segmentation", desc: "Limit blast radius with granular network segmentation that isolates workloads and prevents lateral movement." },
  { icon: Shield, title: "Compliance & Governance", desc: "Automated compliance reporting for PCI-DSS, HIPAA, SOC 2, FedRAMP, and ISO 27001 frameworks." },
];

export default function SecurityPage() {
  return (
    <div className="pt-nav">
      <section className="relative py-20 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
              <Shield size={24} className="text-cyan-500" />
            </div>
            <div className="tag">Network Security</div>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-gradient">Zero Trust.</span>{" "}
              Total Protection.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Modern threats demand modern defenses. Our Zero Trust and SASE implementations ensure every connection is verified, every access is controlled, and every threat is stopped—before it becomes an incident.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
                <span>Get a Security Assessment</span>
                <ArrowRight size={16} className="relative z-10" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Security Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border card-hover">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-cyan-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Compliance Frameworks Supported</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["PCI-DSS", "HIPAA", "SOC 2 Type II", "FedRAMP", "ISO 27001", "NIST CSF", "CMMC", "GDPR", "CIS Controls"].map((c) => (
              <span key={c} className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                <CheckCircle size={13} className="text-emerald-500" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
