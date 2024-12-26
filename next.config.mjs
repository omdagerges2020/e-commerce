/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
      },
    ];
  },
  images: {
    // domains: ['192.168.1.117','https://thahab.com/cdn/','thahab.com'],
    domains: ['192.168.1.117', process.env.NEXT_PUBLIC_IMAGE_DOMAIN, 'thahab.com'],

  },
};

export default nextConfig;
