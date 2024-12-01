/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/MyPortfolio', 
  images: {
    unoptimized: true, // Ensures image paths work correctly
  },
};

module.exports = nextConfig;
