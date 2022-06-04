/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["localhost", "drinkit.onrender.com"],
  },
};

module.exports = nextConfig;
