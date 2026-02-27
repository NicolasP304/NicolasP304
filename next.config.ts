import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserPageRepo = repo.endsWith(".github.io");
const basePath = isGitHubActions && repo && !isUserPageRepo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"]
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/
});

export default withMDX(nextConfig);
