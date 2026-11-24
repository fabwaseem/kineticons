import type { NextConfig } from "next";

const config: NextConfig = {
  // every page is static (2,800+ icon pages included): the site deploys to any static host
  output: "export",
  // /icons/bell/index.html: clean URLs on any static host (GitHub Pages, S3, Netlify, Cloudflare)
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  // the packages are built from source in this repo
  transpilePackages: ["kineticons", "@kineticons/core"],
  experimental: { optimizePackageImports: ["kineticons", "@kineticons/core"] },
};

export default config;
