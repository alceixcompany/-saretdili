import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep old URLs usable while the TİD design is reviewed.
  async redirects() {
    return [
      {
        source: "/dillerimiz/:path*",
        destination: "/hizmetlerimiz",
        permanent: false,
      },
      {
        source: "/hizmet-bolgelerimiz/:path*",
        destination: "/hizmetlerimiz",
        permanent: false,
      },
      {
        source: "/galeri/:path*",
        destination: "/hakkimizda",
        permanent: false,
      },
    ];
  },
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  // iframe'ler için güvenlik ayarları
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
