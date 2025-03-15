/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  basePath: '/taiwan_radio_lp',
  images: {
    unoptimized: true,
    path: '/taiwan_radio_lp/_next/image'
  },
  assetPrefix: '/taiwan_radio_lp/',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  }
}

module.exports = nextConfig 