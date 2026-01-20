/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' }
    ]
  },
  turbopack: {
    // Silence workspace root warnings by explicitly setting the root
    root: __dirname,
  },
};

module.exports = nextConfig;