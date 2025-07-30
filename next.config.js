const withNextIntl = require("next-intl/plugin")("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true, // Jika butuh Server Actions
  },
  images: {
    domains: ["cdn.jsdelivr.net", "images.unsplash.com"], // sesuaikan jika pakai gambar eksternal
  },
};

module.exports = withNextIntl(nextConfig);