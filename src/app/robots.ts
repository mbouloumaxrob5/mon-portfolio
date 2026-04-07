import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/*", "/admin/*", "/private/*"],
    },
    sitemap: "https://maxwellmboulou.dev/sitemap.xml",
    host: "https://maxwellmboulou.dev",
  };
}
