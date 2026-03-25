import type { Metadata } from "next";
import Link from "next/link";
import { Network, ArrowRight, CheckCircle, Zap, Code, GitBranch, Cpu, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Network Automation",
  description: "Enterprise network automation with Ansible, SD-WAN, and intent-based networking. Reduce deployment time by 10× with M&U Technologies.",
};

const CAPABILITIES = [
  { icon: Code, title: "Infrastructure as Code", desc: "Transform your network configuration into version-controlled, peer-reviewed, tested code with full GitOps workflows." },
  { icon: GitBranch, title: "CI/CD for Networks", desc: "Automated testing, staging, and deployment pipelines ensure every change is validated before reaching production." },
  { icon: Cpu, title: "Intent-Based Networking", desc: "Express business intent in plain language; our platform translates it into vendor-specific configurations automatically." },
  { icon: Zap, title: "Zero-Touch Provisioning", desc: "New devices configure themselves the moment they connect to the network—no technician intervention required." },
  { icon: BarChart3, title: "Continuous Compliance", desc: "Automated drift detection and remediation keeps every device in compliance with your security and operational policies." },
  { icon: Network, title: "Multi-Vendor Support", desc: "Unified automation across Cisco IOS/NX-OS, Juniper JunOS, Aruba, HPE, Fortinet, and 40+ other platforms." },
];

const BENEFITS = [
  "10× faster device provisioning vs manual methods",
  "Zero configuration drift with continuous compliance",
  "Full audit trail for every network change",
  "Rollback any change in under 60 seconds",
  "Integrate with existing ITSM and CMDB systems",
  "Reduce human error by up to 95%",
];

export default function NetworkAutomationPage() {
  return (
    <div className="pt-nav">
      <section className="relative py-20 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/20 flex items-center justify-center">
              <Network size={24} className="text-brand-500" />
            </div>
            <div className="tag">Network Automation</div>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your Network on{" "}
              <span className="text-gradient">Autopilot</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Manual network operations are the #1 cause of outages and security incidents. Our automation framework eliminates human error, accelerates delivery, and ensures every device is always in its intended state.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
                <span>Get Started</span>
                <ArrowRight size={16} className="relative z-10" />
              </Link>
              <Link href="/solutions" className="btn-secondary text-base px-8 py-3.5 inline-flex">
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border card-hover">
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand-500" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Leading Enterprises Choose M&U for Automation
              </h2>
              <div className="space-y-3">
                {BENEFITS.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-4"># M&U Ansible Playbook Example</div>
              <div className="text-green-400">- name<span className="text-white">: Configure Zero Trust VLAN Segment</span></div>
              <div className="text-blue-400 ml-2">hosts<span className="text-white">: all_switches</span></div>
              <div className="text-blue-400 ml-2">roles<span className="text-white">:</span></div>
              <div className="text-yellow-400 ml-4">- mu_vlan_automation</div>
              <div className="text-yellow-400 ml-4">- mu_acl_enforcement</div>
              <div className="text-yellow-400 ml-4">- mu_compliance_check</div>
              <div className="mt-4 text-gray-500"># Result: 500 devices configured in 4 minutes</div>
              <div className="text-emerald-400 mt-2">✓ All devices compliant</div>
              <div className="text-emerald-400">✓ Zero configuration drift</div>
              <div className="text-emerald-400">✓ Audit log updated</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Automate?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Our network automation architects will build a custom roadmap for your environment.</p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
            <span>Book a Free Demo</span>
            <ArrowRight size={16} className="relative z-10" />
          </Link>
        </div>
      </section>
    </div>
  );
}
