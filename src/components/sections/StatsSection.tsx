"use client";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const STATS = [
  { value: 500, suffix: "+", label: "Enterprise Clients", sublabel: "Across 30+ countries", icon: Users, color: "text-brand-500" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", sublabel: "Guaranteed availability", icon: TrendingUp, color: "text-emerald-500" },
  { value: 10, suffix: "×", label: "Faster Deployments", sublabel: "vs manual processes", icon: Clock, color: "text-accent-500" },
  { value: 40, suffix: "%", label: "OpEx Reduction", sublabel: "Average client savings", icon: DollarSign, color: "text-cyan-500" },
];

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target * 10) / 10);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, animate }: { stat: typeof STATS[0]; animate: boolean }) {
  const Icon = stat.icon;
  const count = useCounter(stat.value, 1800, animate);
  const display = stat.value % 1 === 0 ? Math.round(count) : count.toFixed(1);

  return (
    <div className="relative p-8 rounded-2xl bg-white dark:bg-surface-dark-card border border-gray-200 dark:border-surface-dark-border text-center group card-hover">
      <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-4">
        <Icon size={22} className={stat.color} />
      </div>
      <div className={`text-4xl sm:text-5xl font-bold mb-1 ${stat.color}`}>
        {animate ? display : 0}{stat.suffix}
      </div>
      <div className="text-base font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{stat.sublabel}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Proven Results at{" "}
            <span className="text-gradient">Enterprise Scale</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Numbers that reflect our commitment to excellence and client success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} animate={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
