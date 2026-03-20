import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "diazconstructions.com",
      },
    ],
  },
};

export default nextConfig;
