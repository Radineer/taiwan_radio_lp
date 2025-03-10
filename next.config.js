/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/taiwan_radio_lp',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    }
    return config
  },
}

module.exports = nextConfig 