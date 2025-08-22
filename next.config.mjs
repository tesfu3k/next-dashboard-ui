/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "pbs.twimg.com" },
      { hostname: "gsauk.org" },
    ],
  },
};

export default nextConfig;
