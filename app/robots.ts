import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";

const BASE_URL = brand.siteUrl;

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
