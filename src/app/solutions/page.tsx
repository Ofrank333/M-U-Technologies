import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Heart, Shield, Landmark, ShoppingBag, Factory, TrendingUp, Clock, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Industry-specific network automation and AI solutions for enterprises, healthcare, government, financial services, and more.",
};

const INDUSTRIES = [
  {
    icon: Building2,
    title: "Financial Services",
    desc: "Ultra-low latency networks, PCI-DSS compliance automation, and real-time fraud detection for banks, fintechs, and trading firms.",
    outcomes: ["Sub-millisecond trading network latency", "100% PCI-DSS compliance automation", "Zero-day threat isolation"],
    color: "text-brand-500", bg: "bg-brand-500/10",
  },
  {
    icon: Heart,
    title: "Healthcare",
    desc: "HIPAA-compliant networks, medical device security, and AI-driven anomaly detection protecting patient data and clinical systems.",
    outcomes: ["HIPAA compliance out-of-the-box", "Medical IoT device segmentation", "EHR performance optimization"],
    color: "text-rose-500", bg: "bg-rose-500/10",
  },
  {
    icon: Landmark,
    title: "Government & Defense",
    desc: "FedRAMP-authorized, CMMC-certified network solutions for federal agencies, defense contractors, and state/local government.",
    outcomes: ["FedRAMP High authorization support", "CMMC Level 3 compliance", "Air-gapped network design"],
    color: "text-cyan-500", bg: "bg-cyan-500/10",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "High-availability networks for omnichannel retail with POS security, inventory automation, and Black Friday-ready infrastructure.",
    outcomes: ["99.999% checkout availability", "POS endpoint security", "Real-time inventory sync"],
    color: "text-amber-500", bg: "bg-amber-500/10",
  },
  {
    icon: Factory,
    title: "Manufacturing & ICS",
    desc: "OT/IT network convergence, industrial IoT security, and resilient connectivity for smart manufacturing environments.",
    outcomes: ["OT/IT network segmentation", "Industrial IoT visibility", "Production network uptime SLA"],
    color: "text-emerald-500", bg: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "SME & Mid-Market",
    desc: "Enterprise-grade network capabilities right-sized for growing businesses that need to compete with larger organizations.",
    outcomes: ["Enterprise features at SME pricing", "Managed service options", "Rapid 30-day deployment"],
    color: "text-accent-500", bg: "bg-accent-500/10",
  },
];

const CASE_STUDIES = [
  {
    client: "Major US Bank",
    industry: "Financial Services",
    challenge: "Legacy network causing 15-minute outages during peak trading hours, affecting $50M+ in daily transactions.",
    solution: "Deployed intent-based networking with zero-touch failover and SD-WAN across 200+ branch locations.",
    results: [
      { icon: TrendingUp, value: "99.999%", label: "Network uptime achieved" },
      { icon: Clock, value: "0", label: "Trading-hour outages in 18 months" },
      { icon: DollarSign, value: "$4.2M", label: "Annual operational savings" },
    ],
  },
  {
    client: "Regional Health Network",
    industry: "Healthcare",
    challenge: "Ransomware attack had crippled patient records. Needed complete network rebuild with Zero Trust security.",
    solution: "Full Zero Trust architecture implementation with AI threat detection and micro-segmentation of all clinical systems.",
    results: [
      { icon: Shield, value: "0", label: "Security incidents post-deployment" },
      { icon: TrendingUp, value: "100%", label: "HIPAA compliance maintained" },
      { icon: Clock, value: "60s", label: "Maximum threat isolation time" },
    ],
  },
  {
    client: "Federal Civilian Agency",
    industry: "Government",
    challenge: "25-year-old network infrastructure failing compliance audits. $12M legacy modernization backlog.",
    solution: "Phased network modernization with FedRAMP-compliant cloud integration and CMMC compliance automation.",
    results: [
      { icon: Shield, value: "FedRAMP", label: "Authorization achieved" },
      { icon: DollarSign, value: "35%", label: "Budget reduction vs. legacy" },
      { icon: TrendingUp, value: "8×", label: "Network performance improvement" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-nav">
      <section className="relative py-20 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mx-auto mb-4">Industry Solutions</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Solutions Designed for{" "}
            <span className="text-gradient">Your Industry</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We understand that every industry has unique network requirements, compliance obligations, and performance expectations. Our solutions are purpose-built for each vertical.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map(({ icon: Icon, title, desc, outcomes, color, bg }) => (
              <div key={title} className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border card-hover">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${color.replace("text-", "bg-")}`} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag mx-auto mb-4">Case Studies</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Real Results, Real Clients</h2>
          </div>
          <div className="space-y-8">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.client} className="rounded-3xl border border-gray-200 dark:border-surface-dark-border bg-gray-50 dark:bg-surface-dark-card overflow-hidden">
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="tag">{cs.industry}</span>
                    <h3 className="font-bold text-gray-900 dark:text-white">{cs.client}</h3>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Challenge</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">Solution</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{cs.solution}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-surface-dark-border">
                    {cs.results.map(({ icon: Icon, value, label }) => (
                      <div key={label} className="text-center">
                        <Icon size={16} className="text-brand-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gradient">{value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Our network architects have experience in every vertical. Let&apos;s discuss your specific requirements.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
            <span>Discuss Your Use Case</span>
            <ArrowRight size={16} className="relative z-10" />
          </Link>
        </div>
      </section>
    </div>
  );
}
