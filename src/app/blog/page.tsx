import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description: "Expert analysis and actionable insights on network automation, AI operations, cybersecurity, and IT infrastructure trends.",
};

const POSTS = [
  {
    slug: "zero-trust-implementation-guide",
    title: "The Enterprise Guide to Zero Trust: From Architecture to Implementation",
    excerpt: "Zero Trust is no longer optional. This comprehensive guide walks through designing and deploying a Zero Trust architecture that actually works for complex enterprise environments.",
    category: "Security",
    readTime: "12 min read",
    date: "March 18, 2026",
    featured: true,
    color: "from-cyan-500 to-cyan-700",
  },
  {
    slug: "aiops-roi-calculation",
    title: "Calculating the True ROI of AIOps: A Framework for IT Leaders",
    excerpt: "Most AIOps ROI calculations miss 60% of the value. We break down the full cost-benefit analysis including hidden operational savings, risk reduction, and strategic benefits.",
    category: "AI Integration",
    readTime: "8 min read",
    date: "March 10, 2026",
    featured: false,
    color: "from-accent-500 to-accent-700",
  },
  {
    slug: "ansible-sdwan-automation",
    title: "Automating SD-WAN at Scale with Ansible: Lessons from 200+ Sites",
    excerpt: "After deploying SD-WAN automation across 200+ sites for a major financial institution, we share the playbook patterns, pitfalls, and performance wins.",
    category: "Network Automation",
    readTime: "10 min read",
    date: "March 3, 2026",
    featured: false,
    color: "from-brand-500 to-brand-700",
  },
  {
    slug: "sase-enterprise-deployment",
    title: "SASE in 2026: What Enterprises Need to Know Before Deploying",
    excerpt: "Secure Access Service Edge is maturing rapidly. We examine the leading platforms, deployment models, and how to avoid the most common enterprise SASE mistakes.",
    category: "Security",
    readTime: "9 min read",
    date: "February 24, 2026",
    featured: false,
    color: "from-cyan-500 to-cyan-700",
  },
  {
    slug: "network-as-code-best-practices",
    title: "Network as Code Best Practices: Building a NetDevOps Culture",
    excerpt: "Transitioning from CLI-based operations to a true Network as Code practice requires more than tooling. Here's how to transform your team's culture and workflow.",
    category: "Network Automation",
    readTime: "7 min read",
    date: "February 15, 2026",
    featured: false,
    color: "from-brand-500 to-brand-700",
  },
  {
    slug: "predictive-capacity-planning",
    title: "How AI-Driven Capacity Planning Saved Us From 3 Major Outages",
    excerpt: "Real data from our M&U AI Platform showing how predictive analytics identified three impending capacity-related outages weeks before they would have occurred.",
    category: "AI Integration",
    readTime: "6 min read",
    date: "February 5, 2026",
    featured: false,
    color: "from-accent-500 to-accent-700",
  },
];

const CATEGORIES = ["All", "Network Automation", "AI Integration", "Security", "Infrastructure", "Procurement"];

export default function BlogPage() {
  const featured = POSTS.find((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

  return (
    <div className="pt-nav">
      <section className="relative py-16 bg-white dark:bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-hero-light dark:bg-hero-dark pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mx-auto mb-4">Insights & Analysis</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Ahead with{" "}
            <span className="text-gradient">Expert Insights</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep-dive articles, technical guides, and strategic analysis from M&U&apos;s network and security experts.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-surface-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                  c === "All"
                    ? "bg-brand-500 text-white border-brand-500"
                    : "bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <div className="mb-8 rounded-3xl overflow-hidden bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border card-hover">
              <div className="flex flex-col lg:flex-row">
                <div className={`lg:w-72 xl:w-96 bg-gradient-to-br ${featured.color} flex items-center justify-center p-12 min-h-48`}>
                  <div className="text-white text-center">
                    <div className="text-6xl font-black opacity-30">01</div>
                    <div className="text-sm font-bold mt-2 opacity-80">Featured</div>
                  </div>
                </div>
                <div className="flex-1 p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="tag">{featured.category}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">{featured.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{featured.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{featured.excerpt}</p>
                  <Link href={`/blog/${featured.slug}`} className="btn-primary text-sm inline-flex">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="relative z-10" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-surface-dark-border overflow-hidden card-hover"
              >
                <div className={`h-3 bg-gradient-to-r ${post.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1">
                      <Tag size={11} /> {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1 ml-auto">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">{post.excerpt}</p>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
