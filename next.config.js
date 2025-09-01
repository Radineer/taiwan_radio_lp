/** @type {import('next').NextConfig} */
const path = require('path')

const isGhPages = process.env.GITHUB_PAGES === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    }
    return config
  }
}

if (isGhPages) {
  nextConfig.output = 'export'
  nextConfig.basePath = '/taiwan_radio_lp'
  nextConfig.assetPrefix = '/taiwan_radio_lp/'
  nextConfig.images = {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  }
}

module.exports = nextConfig