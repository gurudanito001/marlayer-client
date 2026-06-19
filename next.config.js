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
      {
        protocol: 'https',
        hostname: 'nonsmanonline.com', // <--- This allows your specific image URLs!
      },
      {
        protocol: 'https',
        hostname: '*.gstatic.com', // <--- The asterisk (*) acts as a wildcard for all Google Image servers!
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'static.lenovo.com',
      },
    ],
  },
  // Others config...,
};

module.exports = nextConfig;