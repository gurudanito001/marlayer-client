import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

const Services = () => {
    return (
        <div>
            <Navbar />

            <div className="relative mt-32 lg:mt-40 mx-auto max-w-[1400px] bg-[#564AF7] text-white rounded px-6 lg:px-20 pt-16 lg:pt-24 pb-32">
                <div className="max-w-2xl mb-16 lg:mb-24">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left">
                        Get the best, cost-effective digital services for your software.
                    </h2>
                </div>

                <div className="flex flex-col">
                    {/* 01: Software Design*/}
                    <div className="flex items-center justify-between py-10">
                        <div className="flex items-center gap-2 lg:gap-6">
                            <span className="text-sm md:text-lg text-purple-200 font-light">01/</span>
                            <span className="text-sm md:text-lg font-bold">Software Design</span>
                        </div>

                        <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                            More Information
                        </span>
                    </div>

                    {/* ---------- 02: Software Development ---------- */}
                    <div className="flex items-center justify-between py-10 border-t border-purple-300/40 w-full">
                        <div className="flex items-center gap-2 lg:gap-6">
                            <span className="text-sm md:text-lg text-purple-200 font-light">02/</span>
                            <span className="text-sm md:text-lg font-bold">Software Development</span>
                        </div>

                        <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                            More Information
                        </span>
                    </div>

                    {/* ---------- 03: Website Development ---------- */}
                    <div className="flex items-center justify-between py-10 border-t border-purple-300/40 w-full">
                        <div className="flex items-center gap-2 lg:gap-6">
                            <span className="text-sm md:text-lg text-purple-200 font-light">03/</span>
                            <span className="text-sm md:text-lg font-bold">Website Development</span>
                        </div>

                        <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                            More Information
                        </span>
                    </div>

                    {/* ---------- 04: Apps & Games Development ---------- */}
                    <div className="py-14 border-t border-purple-300/40 w-full">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                           
                            <div className="flex flex-col max-w-lg">
                                <div className="flex items-center gap-2 lg:gap-6 mb-6">
                                    <span className="text-sm md:text-lg text-purple-200 font-light">
                                        04/
                                    </span>
                                    <span className="text-sm md:text-lg font-bold">
                                        Apps and Games Development
                                    </span>
                                </div>

                                <div className="pl-14">
                                    <p className="text-purple-100 text-base leading-relaxed mb-10">
                                        We provide the best and most innovative software and mobile
                                        app development services, tailored to your specific business
                                        needs and requirements.
                                    </p>

                                    <button className="underline text-sm font-bold hover:text-yellow-400 transition mt-0 lg:mt-28">
                                        Let's Work Together
                                    </button>
                                </div>
                            </div>

                           
                            <div className="relative w-full lg:w-auto flex justify-end mt-6 lg:mt-0">
                                <div className="relative w-[300px] h-[400px]">
                                    <Image
                                        src="/images/homeHero2.jpg"
                                        alt="Mobile App"
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------- 05, 06, 07, 08 ---------- */}
                    <div className="flex items-center justify-between py-10 border-t border-purple-300/40 w-full">
                        <div className="flex items-center gap-2 lg:gap-6">
                            <span className="text-sm md:text-lg text-purple-200 font-light">05/</span>
                            <span className="text-sm md:text-lg font-bold">Software Design</span>
                        </div>
                        <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                            More Information
                        </span>
                    </div>

                    <div className="flex items-center justify-between py-10 border-t border-purple-300/40 w-full">
                        <div className="flex items-center gap-2 lg:gap-6">
                            <span className="text-sm md:text-lg text-purple-200 font-light">06/</span>
                            <span className="text-sm md:text-lg font-bold">Software Development</span>
                        </div>
                        <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                            More Information
                        </span>
                    </div>

                    <div className="flex items-center justify-between py-10 border-t border-purple-300/40 w-full">
                        <div className="flex items-center gap-2 lg:gap-6">
                            <span className="text-sm md:text-lg text-purple-200 font-light">07/</span>
                            <span className="text-sm md:text-lg font-bold">Website Development</span>
                        </div>
                        <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                            More Information
                        </span>
                    </div>

                    {/* 08/  */}
                    <div className="flex items-center justify-between py-10 border-t border-purple-300/40 w-full">
                        <div className="flex items-center gap-2 lg:gap-6">
                            <span className="text-sm md:text-lg text-purple-200 font-light">08/</span>
                            <span className="text-sm md:text-lg font-bold">
                                Apps and Games Development
                            </span>
                        </div>
                        <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                            More Information
                        </span>
                    </div>
                </div>
            </div>


            <div className="relative mx-auto max-w-[1400px] bg-[#1A1A1D] text-white rounded pb-32">

                <div className="relative w-full aspect-[16/6] rounded mb-24 -mt-24">
                    <Image
                        src="/images/lastestProjectImg3.jpg"
                        alt="Design Leading Software"
                        fill
                        className="object-cover"
                    />
                </div>


                <div className="px-6 lg:px-20">
                    <div className="text-center w-full max-w-3xl mx-auto">
                        <h3 className="text-xl lg:text-4xl font-bold mb-4">
                            Subscribe To Our Newsletter
                        </h3>
                        <p className="text-white mb-10 text-sm">
                            Stay in touch with our expert team and get updates on our latest
                            creations and projects from our agency newsletter.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center bg-[#27262D] rounded lg:rounded-full p-2 pl-6 shadow-lg border border-gray-700 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Email Address..."
                                className="flex-grow bg-transparent text-white focus:outline-none placeholder-gray-500 py-3 w-full"
                            />
                            <button className="bg-[#564AF7] text-white font-bold py-3 px-8 rounded-full hover:bg-purple-600 transition w-full sm:w-auto mt-2 sm:mt-0">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Services;