import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.myhoneymoon.travel",
        pathname: "/wp-content/uploads/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // WordPress URLs that changed shape in the rebuild.
      { source: "/ionian-island", destination: "/ionian-islands", permanent: true },
      { source: "/thematic-experiences", destination: "/experiences", permanent: true },
      { source: "/blog", destination: "/journal", permanent: true },
      { source: "/blog/:slug", destination: "/journal/:slug", permanent: true },
      {
        source: "/what-type-of-honeymooner-are-you-results",
        destination: "/what-type-of-honeymoon-planner-are-you",
        permanent: true,
      },
      // Island names that used to live only as region page chips.
      { source: "/santorini", destination: "/honeymoon/santorini", permanent: true },
      { source: "/mykonos", destination: "/honeymoon/mykonos", permanent: true },
      { source: "/corfu", destination: "/honeymoon/corfu", permanent: true },
      { source: "/athens", destination: "/honeymoon/athens", permanent: true },
      { source: "/crete-island", destination: "/crete", permanent: true },
    ];
  },
};

export default nextConfig;
