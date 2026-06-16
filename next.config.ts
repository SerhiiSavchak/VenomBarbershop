import type { NextConfig } from "next";

/**
 * Never add `turbopack: { root: "/vercel/share/v0-project" }` from Vercel v0 templates.
 * Locally, Turbopack panics with: Invalid distDirRoot ".next" (outside projectPath).
 */
const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80, 85, 90, 92],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
