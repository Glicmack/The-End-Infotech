import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/site/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
