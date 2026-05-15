import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://donlabs.ai/sitemap.xml",
    host: "https://donlabs.ai",
  };
}
