import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Home = () => {

    return (
        <div className="w-full bg-white">
            <Navbar />
            <section className="pt-24 lg:pt-32 pb-10 text-center px-4">
                <div className="max-w-5xl mx-auto">
                    <p className="text-sm md:text-lg text-gray-600 mb-4 font-medium">
                        One-Stop Solution For All Your Business Needs
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8 text-black">
                        Creating <span className="text-[#564AF7]">Softwares </span> 
                        & Digital Excellence
                    </h1>

                    
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-yellow-400 text-black font-bold py-2 lg:py-3 px-5 lg:px-8 rounded-full shadow-lg hover:bg-yellow-500 transition">
                            Explore Our Work
                        </button>
                        <div className="w-10 h-10 lg:w-16 lg:h-16 bg-[#564AF7] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-purple-700 transition">
                            <svg className="w-6 h-6 text-white pl-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

           
            <div className="relative w-full pb-20">

                {/*BLUE CARD */}
                <div className="relative mt-32 lg:mt-40 mx-auto max-w-[1400px] bg-[#564AF7] text-white rounded px-6 lg:px-20 pt-16 lg:pt-24 pb-20">

                    <div className="absolute -top-32 right-0 w-full max-w-[600px] flex justify-end">
                        <div className="relative w-full aspect-[16/7] rounded">
                            <Image
                                src="/images/homeHero.avif"
                                alt="Team Working"
                                fill
                                className="object-cover"
                                
                            />
                        </div>
                    </div>

                   
                    <div className="max-w-2xl mb-10 lg:mb-24 pt-20 lg:pt-32">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            Turning Your Ideas Into Cutting-edge Technologies
                        </h2>
                    </div>


                    <div className="flex flex-col w-full">

                        {/* ---------- 01: Software Design ---------- */}
                        <div className="flex items-center justify-between py-10">
                            <div className="flex items-center gap-2 lg:gap-6">
                                <span className="text-sm md:text-lg text-purple-200 font-light">01/</span>
                                <span className="text-sm md:text-lg font-bold">Software Design</span>
                            </div>

                            <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                                More Information
                            </span>
                        </div>

                        {/* 02: Software Development */}
                        <div className="py-14 border-t border-purple-300/40 w-full">

                            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

                                
                                <div className="flex flex-col max-w-lg">
                                    <div className="flex items-center gap-2 lg:gap-6 mb-6">
                                        <span className="text-sm md:text-lg text-purple-200 font-light">02/</span>
                                        <span className="text-sm md:text-lg font-bold">
                                            Software Development
                                        </span>
                                    </div>

                                    <div className="pl-14">
                                        <p className="text-purple-100 text-base leading-relaxed mb-10">
                                            We provide the best and most innovative software and mobile
                                            app development services, tailored to your specific business needs
                                            and requirements.
                                        </p>

                                        <button className="underline text-sm font-bold hover:text-yellow-400 transition mt-28">
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
                                            className="object-cover rounded shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
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
                        <div className="flex items-center justify-between py-10 border-t border-purple-300/40 w-full">
                            <div className="flex items-center gap-2 lg:gap-6">
                                <span className="text-sm md:text-lg text-purple-200 font-light">04/</span>
                                <span className="text-sm md:text-lg font-bold">
                                    Apps & Games Development
                                </span>
                            </div>

                            <span className="text-sm font-semibold underline underline-offset-4 decoration-purple-300 hover:decoration-white transition cursor-pointer whitespace-nowrap">
                                More Information
                            </span>
                        </div>

                    </div>
                </div>
            </div>


            <div className=" bg-white pb-20">

                <div className="w-[90%]  mx-auto mt-24 mb-16 text-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-2xl mx-auto text-center leading-tight">
                        <span className="text-blue-600">Powerful Software</span> At The Forefront Of Digital Excellence & Technology
                    </h1>
                </div>

                <div className="relative w-[90%] mx-auto -mb-24">
                    <div className="flex flex-col lg:flex-row items-end gap-6">

                        {/* IMAGE CONTAINER */}
                        <div className="w-full max-w-[1400px] mx-auto flex items-start">

                            <div className="relative w-full lg:w-[60%] aspect-[16/7] rounded">
                                <Image
                                    src="/images/forefrontImg1.webp"
                                    alt="Forefront"
                                    fill
                                    className="object-cover"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 lg:w-16 lg:h-16 bg-[#564AF7] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                                        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* ARROWS AREA */}
                            <div className="hidden lg:flex w-[25%] justify-center gap-4 mt-28">

                                {/* Left Arrow */}
                                <button className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-700 text-gray-400 hover:bg-gray-600 transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Right Arrow */}
                                <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[#564AF7] text-white hover:bg-purple-700 transition">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>




                <div className="w-[90%] max-w-[1400px] mx-auto bg-[#1C1B20] text-white rounded pt-40 lg:pt-48 pb-16">

                    <div className="px-6 lg:px-16">

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16">Latest Projects</h3>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-20">
                            <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                                <Image src="/images/lastestProjectImg1.webp" alt="Project 1" fill className="object-cover" />
                            </div>
                            <div className="">
                                <h4 className="text-sm md:text-lg font-bold mb-2 max-w-md">eCommerce Website Design For Fashion Brand</h4>
                                <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">— UI/UX & Dev</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                                    Our company was dedicated to building professional and 100% responsive eCommerce websites...
                                </p>
                                <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                    Explore Project
                                </button>
                            </div>
                        </div>

                       
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mb-28">
                            <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                                <Image src="/images/lastestProjectImg2.webp" alt="Project 2" fill className="object-cover" />
                            </div>
                            <div className="">
                                <h4 className="text-sm lg:text-lg font-bold mb-2 max-w-md">AI-Powered Software For Digital Recruitment</h4>
                                <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">— Development</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                                    We have recently created innovative, top-class AI-powered technology for digital recruitment...
                                </p>
                                <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                    Explore Project
                                </button>
                            </div>
                        </div>

                    </div>
                  

                    <div className="relative w-full aspect-[16/6] mb-20">
                        <Image
                            src="/images/lastestProjectImg3.jpg"
                            alt="Design Leading Software"
                            fill
                            className="object-cover"
                        />
                    </div>

                    
                    <div className="px-6 lg:px-16 text-center w-full max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                            Subscribe To Our Newsletter
                        </h3>
                        <p className="text-gray-400 mb-10 text-sm">
                            Stay in touch with our expert team and get updates on our latest
                            creations and projects.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center bg-[#27262D] rounded lg:rounded-full p-2 pl-6 border border-gray-700 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Email Address..."
                                className="flex-grow bg-transparent text-white focus:outline-none placeholder-gray-500 py-3 w-full"
                            />
                            <button className="bg-[#564AF7] text-white font-bold py-3 px-8 rounded-full w-full sm:w-auto mt-2 sm:mt-0">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;