"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote: "M&U Technologies transformed our 5,000-node network in 60 days. Their automation framework reduced our provisioning time from days to minutes. The ROI was evident within the first quarter.",
    author: "Sarah Chen",
    title: "CTO, FinServe Capital",
    company: "Financial Services",
    initials: "SC",
    color: "bg-brand-500",
  },
  {
    quote: "The Zero Trust implementation gave our security team full visibility across our hybrid environment. Threat detection that used to take hours now happens in seconds. Remarkable transformation.",
    author: "Marcus Johnson",
    title: "CISO, HealthPath Systems",
    company: "Healthcare",
    initials: "MJ",
    color: "bg-accent-500",
  },
  {
    quote: "Their AIOps platform predicted and prevented 3 critical outages in our first month. We've seen a 42% reduction in network incidents and our team spends their time on innovation, not firefighting.",
    author: "Dr. Aisha Patel",
    title: "VP Infrastructure, TechCore Gov",
    company: "Government",
    initials: "AP",
    color: "bg-cyan-500",
  },
  {
    quote: "Procurement alone saved us $2.3M annually. M&U's vendor relationships and lifecycle management turned what used to be a chaotic process into a strategic advantage.",
    author: "Robert Kimura",
    title: "IT Director, RetailMax Corp",
    company: "Retail",
    initials: "RK",
    color: "bg-emerald-500",
  },
];

const LOGOS = ["Cisco", "Palo Alto", "Fortinet", "Juniper", "Aruba", "VMware", "AWS", "Microsoft"];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 bg-gray-50 dark:bg-surface-dark-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="tag mx-auto mb-4">Client Success Stories</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-surface-dark rounded-3xl p-8 sm:p-12 border border-gray-200 dark:border-surface-dark-border shadow-card-light dark:shadow-card-dark">
            <Quote size={48} className="text-brand-200 dark:text-brand-500/30 mb-6" />

            <blockquote className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm", t.color)}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{t.author}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t.title}</div>
                  <div className="text-xs text-brand-600 dark:text-brand-400 font-medium mt-0.5">{t.company}</div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-50 dark:hover:bg-brand-500/10 hover:border-brand-300 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === active ? "w-6 bg-brand-500" : "w-1.5 bg-gray-300 dark:bg-gray-600"
                      )}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-50 dark:hover:bg-brand-500/10 hover:border-brand-300 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-6 uppercase tracking-widest font-semibold">
            Technology Partners & Certifications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-sm font-bold text-gray-400 dark:text-gray-600 hover:text-brand-500 dark:hover:text-brand-400 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
