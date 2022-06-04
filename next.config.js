/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = withPWA({
  pwa: {
    dest: "public",
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["localhost", "drinkit.onrender.com"],
  },
});

module.exports = nextConfig;
