import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://donlabs.ai/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://donlabs.ai/privacy",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://donlabs.ai/terms",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
