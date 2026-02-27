import type { MetadataRoute } from "next";

const siteUrl = "https://nicolasp304.github.io/NicolasP304";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
