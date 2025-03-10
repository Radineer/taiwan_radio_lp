/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/taiwan_radio_lp',
  assetPrefix: '/taiwan_radio_lp/',
  trailingSlash: true,
}

module.exports = nextConfig 