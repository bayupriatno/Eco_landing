const withNextIntl = require("next-intl/plugin")("./i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net", "images.unsplash.com"], // tambah domain lain kalau perlu
  },
};

module.exports = withNextIntl(nextConfig);