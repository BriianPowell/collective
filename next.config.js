/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
  swcMinify: true,
  loader: 'custom',
  loaderFile: './src/utils/ImageLoader.tsx',
}

module.exports = nextConfig
