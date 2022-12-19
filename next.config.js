/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/',
  experimental: {
    runtime: 'experimental-edge',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
