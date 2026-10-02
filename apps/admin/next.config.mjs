/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['3000-' + (process.env.BASE44_PUBLIC_HOST_SUFFIX ?? '')],
  transpilePackages: [
    '@openride/api-client',
    '@openride/db',
    '@openride/realtime',
    '@openride/ui',
  ],
};

export default nextConfig;
