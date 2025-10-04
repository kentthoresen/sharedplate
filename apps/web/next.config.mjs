/**
 * Next.js configuration for the Love of Food web application.
 * We enable strict mode to surface React issues early and expose
 * experimental appDir features that pair well with NextAuth.
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
};

export default nextConfig;
