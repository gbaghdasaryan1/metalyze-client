import type { NextConfig } from 'next';
import { hostname } from 'os';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        protocol: 'http',
        port: '5050',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
