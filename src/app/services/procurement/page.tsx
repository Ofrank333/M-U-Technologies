import type { Metadata } from "next";
import Link from "next/link";
import { Package, ArrowRight, TrendingDown, RefreshCw, ShoppingCart, Award, BarChart3, Handshake } from "lucide-react";

export const metadata: Metadata = { title: "IT Procurement", description: "Strategic IT hardware and software procurement with optimized pricing and lifecycle management from M&U Technologies." };

const CAPS = [
  { icon: Handshake, title: "Vendor Management", desc: "Deep relationships with Cisco, HPE, Fortinet, Juniper, Palo Alto, and 50+ vendors for best-in-class pricing." },
  { icon: ShoppingCart, title: "Hardware Sourcing", desc: "End-to-end procurement from specification and sourcing to delivery, staging, and deployment." },
  { icon: TrendingDown, title: "License Optimization", desc: "Audit existing licenses, identify waste, and renegotiate contracts to eliminate software spend by up to 40%." },
  { icon: RefreshCw, title: "Lifecycle Management", desc: "Track assets from purchase to retirement with automated refresh planning and ITAD disposal." },
  { icon: BarChart3, title: "Spend Analytics", desc: "Real-time dashboards show your IT spend profile with actionable optimization recommendations." },
  { icon: Award, title: "Certified Partnerships", desc: "Cisco Gold, HPE Platinum, Fortinet Elite, and Juniper Partner Program certifications ensure best pricing." },
];

const VENDORS = ["Cisco", "HPE", "Fortinet", "Juniper", "Palo Alto Networks", "Aruba", "F5", "Nutanix", "Pure Storage", "Dell Technologies", "VMware", "Lenovo"];

export default function ProcurementPage() {
  return (
    <div className="pt-nav">
      <section className="relative py-20 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
              <Package size={24} className="text-amber-500" />
            </div>
            <div className="tag">IT Procurement</div>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Maximum Value from{" "}
              <span className="text-gradient">Every IT Dollar</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Our procurement specialists source the right technology at the right price, with full lifecycle support from day one through retirement—saving clients an average of $2M+ annually.
            </p>
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
              <span>Optimize My Procurement</span>
              <ArrowRight size={16} className="relative z-10" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Procurement Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border card-hover">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-amber-500" />
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">Our Vendor Partners</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {VENDORS.map((v) => (
              <span key={v} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-sm font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">{v}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
