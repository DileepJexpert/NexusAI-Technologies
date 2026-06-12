import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://katixo.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    { path: "", priority: 1, changeFrequency: "daily" as const },
    { path: "/accounting-pos-software", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/careers", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/gst-guides", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/compare", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/integrations", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/help", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/docs", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/docs/authentication", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/invoices", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/items", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/customers", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/inventory", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/gst", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/purchase-bills", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/stock-counts", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/expenses", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/recurring-invoices", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/workflows", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/docs/errors", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/docs/changelog", priority: 0.6, changeFrequency: "weekly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const blogPaths = getAllPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPaths.map((s) => ({
      url: `${BASE_URL}${s.path}`,
      lastModified: now,
      changeFrequency: s.changeFrequency,
      priority: s.priority,
    })),
    ...blogPaths,
  ];
}
