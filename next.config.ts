import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/band-quiz" : "",
  assetPrefix: isProd ? "/band-quiz/" : "",
  images: {
    unoptimized: true,
  },
  // This ensures all files and routes are exported
  trailingSlash: true,
};

export default nextConfig;
