/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'

  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales: ['tr-TR'],
      defaultLocale: 'tr-TR'
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    transpilePackages: ['next-mdx-remote'],
    eslint:{
      ignoreDuringBuilds: true
    }
  };

  const withMDX = createMDX({
    // Add markdown plugins here, as desired
  })
   
  // Merge MDX config with Next.js config
  export default withMDX(nextConfig)