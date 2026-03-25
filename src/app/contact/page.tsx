import type { Metadata } from "next";
import { Mail, Phone, MapPin, Calendar, Clock, Shield, Users } from "lucide-react";
import { COMPANY } from "@/lib/utils";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a free 30-minute consultation with M&U Technologies' senior network architects. Response within 2 business hours.",
};

const WHY = [
  { icon: Clock, title: "Response in 2 Hours", desc: "Every inquiry gets a response from a senior technical consultant within 2 business hours." },
  { icon: Shield, title: "No Commitment Required", desc: "Our free consultation is genuinely free. No pressure, no obligation, no sales games." },
  { icon: Users, title: "Dedicated Success Manager", desc: "Every client gets a named technical account manager from day one." },
];

export default function ContactPage() {
  return (
    <div className="pt-nav">
      {/* Hero */}
      <section className="relative py-16 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mx-auto mb-4">Let&apos;s Talk</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Start Your{" "}
            <span className="text-gradient">Network Transformation</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Book a free 30-minute consultation with our senior network architects. No sales pitch—just real insights for your specific challenges.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-surface-dark rounded-3xl border border-gray-200 dark:border-surface-dark-border p-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              {WHY.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    <Mail size={15} className="text-brand-500 flex-shrink-0" />
                    {COMPANY.email}
                  </a>
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    <Phone size={15} className="text-brand-500 flex-shrink-0" />
                    {COMPANY.phone}
                  </a>
                  <div className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <MapPin size={15} className="text-brand-500 flex-shrink-0 mt-0.5" />
                    {COMPANY.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={15} className="text-brand-500 flex-shrink-0" />
                    Mon–Fri: 8:00 AM – 6:00 PM ET
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 border border-brand-200 dark:border-brand-500/20">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">24/7 Emergency NOC</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">For active incidents, contact our 24/7 NOC directly.</p>
                <a href="tel:+18006683241" className="mt-2 block text-sm font-bold text-brand-600 dark:text-brand-400">+1 (800) NOC-FAST</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
