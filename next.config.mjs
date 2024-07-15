/** @type {import('next').NextConfig} */

const rewrites = async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.CMS_URI}/api/:path*`
    },
    {
      source: '/content/public/:path*',
      destination: `${process.env.CMS_URI}/uploads/:path*`
    }
  ];

  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    rewrites,
    i18n: {
      locales: ['tr-TR'],
      defaultLocale: 'tr-TR'
    }
  };

  export default nextConfig;