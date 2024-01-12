/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.stefantopalovic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
