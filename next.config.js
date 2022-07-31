/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    forceSwcTransforms: true,
    images: {
      allowFutureImage: true,
    },
  }
}

module.exports = nextConfig