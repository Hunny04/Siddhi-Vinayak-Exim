import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/models/:path*",
        headers: [{ key: "Content-Type", value: "model/gltf-binary" }],
      },
    ];
  },
  /* config options here */
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
