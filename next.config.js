/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
      },
      images: {
        domains: ['images.unsplash.com', "images.pexels.com","www.tailwind-kit.com"],
      }
}

module.exports = nextConfig
