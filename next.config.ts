import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion']
  }
};

export default nextConfig;
