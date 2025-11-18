/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.dropbox.com'],
  },
  async redirects() {
    return [
      {
        source: '/offerings/adventure-sessions',
        destination: '/offerings/couples-films',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
