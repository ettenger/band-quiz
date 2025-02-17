import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // If you're deploying to a subdirectory (like GitHub Pages)
  basePath: "/band-quiz",
  assetPrefix: "/band-quiz/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
