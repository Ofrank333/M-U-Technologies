import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-surface-dark">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-accent-700" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/10 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
          <Calendar size={14} />
          Free 30-Minute Strategy Session
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform{" "}
          <br className="hidden sm:block" />
          Your Network Infrastructure?
        </h2>

        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Join 500+ enterprises that have modernized their networks with M&U Technologies.
          Our experts will analyze your current infrastructure and design a tailored transformation roadmap—at no cost.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-all hover:shadow-glow-md w-full sm:w-auto justify-center"
          >
            Book Your Free Consultation
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/solutions"
            className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-all w-full sm:w-auto justify-center"
          >
            View Case Studies
          </Link>
        </div>

        <p className="mt-8 text-white/60 text-sm">
          No commitment required • Enterprise-grade SLA • Dedicated success manager
        </p>
      </div>
    </section>
  );
}
