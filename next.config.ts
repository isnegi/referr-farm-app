import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for S3 hosting
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Compression for better performance (works with static export)
  compress: true,
};

export default nextConfig;
