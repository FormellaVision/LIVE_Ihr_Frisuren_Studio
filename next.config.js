/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
    domains: ['images.pexels.com', 'images.unsplash.com', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dqkld61zu/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Legacy URL redirects
      {
        source: '/preise',
        destination: '/leistungen',
        permanent: true,
      },
      {
        source: '/schnellkontakt',
        destination: '/kontakt',
        permanent: true,
      },
      // /areas/* → /einzugsgebiet/* (301) — lokal + Netlify
      {
        source: '/areas/hamm',
        destination: '/friseur-hamburg-hamm',
        permanent: true,
      },
      {
        source: '/areas/borgfelde',
        destination: '/einzugsgebiet/borgfelde',
        permanent: true,
      },
      {
        source: '/areas/horn',
        destination: '/einzugsgebiet/horn',
        permanent: true,
      },
      {
        source: '/areas/hamburg-mitte',
        destination: '/einzugsgebiet/hamburg-mitte',
        permanent: true,
      },
      {
        source: '/areas/:splat*',
        destination: '/einzugsgebiet/:splat*',
        permanent: true,
      },
      // /einzugsgebiet/hamm → /friseur-hamburg-hamm (301)
      {
        source: '/einzugsgebiet/hamm',
        destination: '/friseur-hamburg-hamm',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/marzena.html',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, noarchive' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
