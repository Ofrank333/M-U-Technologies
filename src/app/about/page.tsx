import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Zap, Shield, Brain, Network, Award, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "M&U Technologies Co Inc — Our mission, expertise, leadership team, and the values that drive us to deliver next-generation network solutions.",
};

const TEAM = [
  { name: "Michael Usman", title: "Co-Founder & CEO", bio: "20+ years architecting enterprise networks for Fortune 500 companies. Former Cisco Distinguished Engineer.", initials: "MU", color: "bg-brand-500" },
  { name: "Dr. Amara Nwosu", title: "CTO & Head of AI", bio: "PhD Computer Science (MIT). Pioneer in AIOps and network intelligence. 45+ publications in network automation.", initials: "AN", color: "bg-accent-500" },
  { name: "James Okafor", title: "VP, Cybersecurity", bio: "Former NSA network analyst. Certified CISSP & CISM. Expert in Zero Trust and SASE implementation.", initials: "JO", color: "bg-cyan-500" },
  { name: "Sofia Reyes", title: "VP, Client Success", bio: "Led digital transformation initiatives at IBM and Dell. 15 years enterprise infrastructure consulting.", initials: "SR", color: "bg-emerald-500" },
  { name: "Daniel Park", title: "Head of Network Engineering", bio: "CCIE Routing & Switching. Expert in SD-WAN and intent-based networking at hyperscale.", initials: "DP", color: "bg-amber-500" },
  { name: "Priya Sharma", title: "Director, Procurement", bio: "10+ years strategic vendor management with Cisco Gold Partner and HPE Platinum Partner credentials.", initials: "PS", color: "bg-rose-500" },
];

const VALUES = [
  { icon: Target, title: "Mission-Driven", desc: "We exist to make enterprise-grade network intelligence accessible to every organization." },
  { icon: Eye, title: "Radical Transparency", desc: "No black boxes. We explain every decision and share every metric with our clients." },
  { icon: Zap, title: "Speed Without Compromise", desc: "We deploy faster than anyone in the industry—without cutting corners on quality or security." },
  { icon: Shield, title: "Security-First Culture", desc: "Security is not an afterthought. It is baked into every architecture, code line, and process." },
];

const MILESTONES = [
  { year: "2018", event: "Founded in Washington, DC with a mission to democratize network automation" },
  { year: "2019", event: "Launched first AIOps platform; secured Series A funding of $12M" },
  { year: "2020", event: "Reached 100 enterprise clients; expanded to EMEA markets" },
  { year: "2021", event: "Launched Zero Trust Security Practice; achieved Cisco Gold Partner status" },
  { year: "2022", event: "Series B: $45M; opened offices in London and Singapore" },
  { year: "2023", event: "Surpassed 500 clients across 30+ countries; launched M&U AI Platform v3" },
  { year: "2024", event: "Named Gartner Cool Vendor in Network Automation; 800+ employees globally" },
];

export default function AboutPage() {
  return (
    <div className="pt-nav">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-white dark:bg-surface-dark">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mx-auto mb-4">About M&U Technologies</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Built by Engineers,{" "}
            <span className="text-gradient">Driven by Purpose</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Since 2018, we&apos;ve been on a singular mission: make networks intelligent, secure, and self-managing—so your team can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
                  <Target size={20} className="text-brand-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                To empower enterprises, SMEs, and government organizations with intelligent, self-healing network infrastructure that eliminates operational complexity, fortifies security posture, and accelerates digital transformation at every scale.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe the network is the nervous system of the modern enterprise—and we&apos;re here to make sure it&apos;s always healthy, always learning, and always protecting.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <Eye size={20} className="text-accent-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                A world where every organization—regardless of size or budget—has access to the same network intelligence that powers the world&apos;s largest technology companies.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[{ icon: Users, label: "500+\nClients" }, { icon: Globe, label: "30+\nCountries" }, { icon: Award, label: "15+\nAwards" }].map(({ icon: Icon, label }) => (
                  <div key={label} className="text-center p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border">
                    <Icon size={20} className="text-brand-500 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white whitespace-pre-line">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              The Values That Drive Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-200 dark:border-surface-dark-border bg-gray-50 dark:bg-surface-dark-card card-hover">
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

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag mx-auto mb-4">Leadership Team</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              The Experts Behind the Platform
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Our leadership team brings decades of combined experience from Cisco, IBM, NSA, and leading research institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="p-6 rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border card-hover">
                <div className={`w-14 h-14 rounded-2xl ${member.color} flex items-center justify-center text-white font-bold text-lg mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-brand-600 dark:text-brand-400 font-medium mb-3">{member.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 to-accent-500" />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className="flex items-start gap-6 pl-4">
                  <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center ml-4">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-bold text-brand-600 dark:text-brand-400">{m.year}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Let our experts design a network transformation roadmap tailored to your organization.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5 inline-flex">
            <span>Book a Free Consultation</span>
            <ArrowRight size={16} className="relative z-10" />
          </Link>
        </div>
      </section>
    </div>
  );
}
