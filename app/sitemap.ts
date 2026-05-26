import type { MetadataRoute } from "next";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://katixo.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    { path: "", priority: 1, changeFrequency: "daily" as const },
    { path: "/accounting-pos-software", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticPaths.map((s) => ({
      url: `${BASE_URL}${s.path}`,
      lastModified: now,
      changeFrequency: s.changeFrequency,
      priority: s.priority,
    })),
  ];
}
