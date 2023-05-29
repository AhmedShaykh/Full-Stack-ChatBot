/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['cdn2.rcstatic.com', 'res.cloudinary.com', 'blog.olx.com.pk'],
    }
};

module.exports = nextConfig;