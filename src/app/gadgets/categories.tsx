'use client';

import React from 'react';

const categoryList = [
  {
    title: 'Laptops',
    image: '/images/laptop.png',
  },
  {
    title: 'Phones',
    image: '/images/phones.png',
  },
  {
    title: 'Accessories',
    image: '/images/accesories.png',
  },
];

const featuredProducts = [
  {
    title: 'Google Nest Cam Outdoor (wired, 2nd gen)',
    description: 'Outsmart the unknown with 2k and Gemini.',
    image: '/images/nestCam.png',
    gradient:
      'linear-gradient(to bottom, #E1E6E6 0%, #E7EBEB 60%, #EEF2F2 100%)',
  },
  {
    title: 'Google Nest Cam Indoor (wired, 3rd gen)',
    description: 'More insight inside with 2k and Gemini.',
    image: '/images/nestCam1.png',
    gradient:
      'linear-gradient(to bottom, #EDD7D8 0%, #F1DFE0 60%, #F7E8E9 100%)',
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <div className="w-full px-6 py-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
        Shop popular categories.
      </h2>

      {/* CATEGORY ICONS */}
      <div className="max-w-[800px] mx-auto grid grid-cols-3 gap-6 mb-16 text-center">
        {categoryList.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex justify-center items-center bg-gray-100 rounded-3xl w-full h-20 md:h-40 p-4 mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-sm">{item.title}</p>
          </div>
        ))}
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProducts.map((item, index) => (
          <div
            key={index}
            className="relative rounded-3xl p-10 h-[34rem] lg:h-[45rem] overflow-hidden flex flex-col items-center text-center"
            style={{ background: item.gradient }}
          >
            {/* Text Content */}
            <div className="">
              <h3 className="text-2xl lg:text-4xl max-w-sm">{item.title}</h3>
              <p className="text-sm mt-3">{item.description}</p>
              <button className="mt-5 text-sm border border-gray-800 rounded-full px-6 py-2 hover:bg-gray-100 transition">
                Learn more
              </button>
            </div>

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className={`absolute bottom-0 ${
                index === 0 ? 'left-0' : 'right-0'
              } w-[100%] object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;