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
    domains: ['thahab.com', 'api.detaylarhome.com'], // اسم النطاق فقط
  },
};

export default nextConfig;
