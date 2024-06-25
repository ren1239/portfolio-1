/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "tearaway.co.nz",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
