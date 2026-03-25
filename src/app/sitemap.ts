import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mutechnologies.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/network-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/ai-integration`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/security`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/infrastructure`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/procurement`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/solutions`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
  ];
}
