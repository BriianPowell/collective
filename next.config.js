/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/src',
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
