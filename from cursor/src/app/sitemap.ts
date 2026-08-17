import type { MetadataRoute } from "next";
import { FUTURE_ROUTES, SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...FUTURE_ROUTES.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
