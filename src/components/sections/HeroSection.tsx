"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, Shield, Zap, Brain } from "lucide-react";

const FLOATING_TAGS = [
  { label: "Zero Trust Security", icon: Shield, x: "8%", y: "25%", delay: 0 },
  { label: "AIOps Automation", icon: Brain, x: "80%", y: "20%", delay: 0.5 },
  { label: "SD-WAN Ready", icon: Zap, x: "85%", y: "65%", delay: 1 },
];

const STATS = [
  { value: "500+", label: "Enterprises Served" },
  { value: "99.9%", label: "Network Uptime SLA" },
  { value: "10×", label: "Faster Deployments" },
  { value: "40%", label: "Cost Reduction" },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Network particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const COUNT = 60;

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.offsetWidth) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.offsetHeight) n.vy *= -1;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.3;
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(99,102,241,0.5)";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-white dark:bg-surface-dark" />
      <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark" />
      <div className="absolute inset-0 bg-grid" />

      {/* Network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60 dark:opacity-40"
        style={{ pointerEvents: "none" }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Floating tags */}
      {FLOATING_TAGS.map((tag) => {
        const Icon = tag.icon;
        return (
          <div
            key={tag.label}
            className="absolute hidden xl:flex items-center gap-2 glass glass-light px-3 py-2 rounded-xl shadow-card-light dark:shadow-card-dark animate-float"
            style={{
              left: tag.x,
              top: tag.y,
              animationDelay: `${tag.delay}s`,
            }}
          >
            <Icon size={14} className="text-brand-500" />
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {tag.label}
            </span>
          </div>
        );
      })}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-28 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 tag mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Next-Gen Network Intelligence Platform
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.05] mb-6">
          Intelligent Networks.{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient">Unshakeable Security.</span>
          <br className="hidden sm:block" />
          <span className="text-gray-700 dark:text-gray-300">Infinite Scale.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
          M&U Technologies delivers enterprise-grade{" "}
          <span className="text-brand-600 dark:text-brand-400 font-semibold">network automation</span>,{" "}
          <span className="text-accent-600 dark:text-accent-400 font-semibold">AI-powered operations</span>, and{" "}
          <span className="text-cyan-600 dark:text-cyan-400 font-semibold">zero-trust security</span>{" "}
          that transforms how enterprises operate and scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto justify-center">
            <span>Book a Free Consultation</span>
            <ArrowRight size={16} className="relative z-10" />
          </Link>
          <Link href="/solutions" className="btn-secondary text-base px-8 py-3.5 w-full sm:w-auto justify-center">
            <Play size={16} className="fill-current" />
            See How It Works
          </Link>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-200 dark:border-white/10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs text-gray-400">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-brand-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
