import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const COMPANY = {
  name: "M&U Technologies Co Inc",
  shortName: "M&U Technologies",
  tagline: "Intelligent Networks. Unshakeable Security. Infinite Scale.",
  description:
    "M&U Technologies Co Inc delivers enterprise-grade network automation, AI integration, and cybersecurity solutions that transform how organizations operate, scale, and compete.",
  email: "info@mutechnologies.com",
  phone: "+1 (800) MU-TECH-1",
  address: "1 Innovation Drive, Suite 500, Washington, DC 20001",
  linkedin: "https://linkedin.com/company/mutechnologies",
  twitter: "https://twitter.com/MUTechnologies",
  founded: "2018",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Network Automation", href: "/services/network-automation", icon: "Network" },
      { label: "AI Integration", href: "/services/ai-integration", icon: "Brain" },
      { label: "Network Security", href: "/services/security", icon: "Shield" },
      { label: "IT Infrastructure", href: "/services/infrastructure", icon: "Server" },
      { label: "IT Procurement", href: "/services/procurement", icon: "Package" },
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
