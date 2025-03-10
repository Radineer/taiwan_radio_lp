/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/taiwan_radio_lp',
    assetPrefix: '/taiwan_radio_lp/',
  } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig 