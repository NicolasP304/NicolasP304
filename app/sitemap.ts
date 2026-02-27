import type { MetadataRoute } from "next";
import { portfolioProjects } from "../lib/projects";

const siteUrl = "https://nicolasp304.github.io/NicolasP304";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/projects/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  const projectRoutes: MetadataRoute.Sitemap = portfolioProjects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  return [...staticRoutes, ...projectRoutes];
}
