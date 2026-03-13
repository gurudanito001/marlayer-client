import React from 'react';
// In a real Next.js project, you would likely use the next/image component for optimization:
// import Image from 'next/image';

export default function AboutUs() {
  const stats = [
    {
      title: '50+ years',
      description: 'of shaping architectural landscapes',
    },
    {
      title: '100+ Projects',
      description: 'successfully delivered with excellence',
    },
    {
      title: '20+ Awards',
      description: 'won, underscoring our dedication to innovative',
    },
    {
      title: '99% Success',
      description: 'reflects our client-centric approach.',
    },
  ];

  return (
    <section className="bg-[#f8f9fc] py-16 px-6 sm:py-24 lg:px-8 font-sans">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Text and Stats */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-gray-400 mb-2">
            About us
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B1134] leading-tight mb-6">
            Our Architectural <br className="hidden sm:block" />
            Journey
          </h2>
          <p className="text-base text-gray-500 mb-10 max-w-lg leading-relaxed">
            Founded with a belief in the transformative power of architecture, VerdeVista Design Group traces its roots back to a small team with big dreams.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((stat, index) => (
              <div key={index} className="border-t-2 border-yellow-200 pt-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1134] mb-2">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-snug pr-4">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-sm">
          {/* Note: Swap out standard <img> for Next.js <Image> in production for better performance */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Team collaborating around a whiteboard"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}