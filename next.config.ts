import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lockfiles exist further up the tree (the parent project and the home
  // directory), so pin the workspace root or Turbopack picks the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Placeholder art until real photography lands.
    remotePatterns: [{ protocol: "https", hostname: "placehold.co" }],
  },
};

export default nextConfig;
