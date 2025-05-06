import type { NextConfig } from 'next';

let nextConfig: NextConfig = {
  async redirects() {
    return [
      {
          source: '/acceptable-use',
          destination: '/legal/acceptable-use',
          permanent: true,
        },
        {
          source: '/data-security',
          destination: '/legal/data-security',
          permanent: true,
        },
        {
          source: '/privacy',
          destination: '/legal/privacy',
          permanent: true,
        },
        {
          source: '/terms',
          destination: '/legal/terms',
          permanent: true,
        },
      ];
  },
};

export default nextConfig;
