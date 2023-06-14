/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn2.rcstatic.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig;