/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async rewrites() {
    // Proxies /api/* to the Django backend in development so the browser
    // never needs CORS for same-origin-looking requests. In production,
    // NEXT_PUBLIC_API_BASE_URL is used directly instead (see lib/axios.js).
    return [
      {
        source: "/backend-api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
