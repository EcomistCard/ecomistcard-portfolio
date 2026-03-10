/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local images from /public are served automatically; use remotePatterns only for external URLs.
    remotePatterns: [],
  },
};

module.exports = nextConfig;
