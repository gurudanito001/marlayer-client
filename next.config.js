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
      },  
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Others config...,
};

module.exports = nextConfig;