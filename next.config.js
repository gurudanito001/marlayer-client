const nextConfig = {
  // Others config...,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '3diq1qcqsoxrajwb.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      }
    ],
  },
  // Others config...,
};

module.exports = nextConfig;