'use client'

import React from 'react';
import Image from 'next/image';

const MarlayerGadgets: React.FC = () => {
    return (
        <section className="w-full py-16 px-6 bg-white">
            <div className="max-w-5xl mx-auto">

                <h3 className="text-sm md:text-lg font-bold mb-4 text-center" style={{ color: "#003C3C" }}>Marlayer Gadgets</h3>
                
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-12" style={{ color: "#003C3C" }}>
                    Gadgets for Work, Learning & Creativity
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden transition-shadow duration-300">
                        {/* Image Container */}
                        <div className="relative w-full h-64 bg-gray-100">
                            <Image
                                src="/images/gadget1.png"
                                alt="Laptops and Phones"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Content Container */}
                        <div className="p-8 flex flex-col flex-grow bg-white">
                            <h3 className="text-sm md:text-lg font-semibold text-primary mb-3">
                                Laptops, Phones and Tablets
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-700 mb-6 flex-grow">
                                Power your work and stay connected with our curated selection of laptops and smartphones. 
                                We handpick devices for performance, battery life, and reliability — from lightweight 
                                ultrabooks for remote work to powerful machines for creators and developers.
                            </p>
                            <a className="text-blue-600 font-medium hover:underline inline-block mt-auto" href="#">
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        {/* Image Container */}
                        <div className="relative w-full h-64 bg-gray-100">
                            <Image
                                src="/images/gadgets2.png"
                                alt="Accessories"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Content Container */}
                        <div className="p-8 flex flex-col flex-grow bg-white">
                            <h3 className="text-sm md:text-lg font-semibold text-primary mb-3">
                                Accessories
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-700 mb-6 flex-grow">
                                Complete your setup with accessories that make a real difference — fast chargers, 
                                power banks, headphones, webcams, keyboards, and creator gear. We focus on dependable 
                                brands so your devices perform at their best.
                            </p>
                            <a className="text-blue-600 font-medium hover:underline inline-block mt-auto" href="#">
                                Learn More
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MarlayerGadgets;