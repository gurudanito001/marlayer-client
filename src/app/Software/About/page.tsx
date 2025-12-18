import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

const About = () => {

    return (
        <section>
            <Navbar />
            <div className="w-[90%] max-w-[1400px] mx-auto mt-24 mb-16 text-center">


                <div className="relative w-full max-w-[900px] h-[500px] mx-auto">
                    <Image
                        src="/images/aboutImg.jpg"
                        alt="Team Meeting"
                        fill
                        className="object-cover rounded"
                    />
                </div>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-3xl mx-auto mb-6 mt-20">
                    <span className="text-purple-600">Leading Company</span> In Creating Powerful Software & Technology
                </h1>


                <p className="text-gray-600 max-w-3xl mx-auto mb-20 text-sm md:text-lg">
                    Starting from small requests, we design and execute seamless development processes that
                    bring your digital ideas to life. We prioritize a user-centric approach to deliver
                    exceptional and sustainable technology solutions.
                </p>
            </div>


            <div className="w-full bg-white pb-20">


                <div className="relative w-[90%] max-w-[1400px] mx-auto -mb-24">
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


                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16">What We Offer</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mb-28">

                            {/* 1. Software Design */}
                            <div>
                                <h4 className="text-xl lg:text-2xl font-bold mb-2">Software Design</h4>
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg">
                                    Design expertise in UI/UX and powerful back-end architecture to create seamless, scalable software that drives technology forward.
                                </p>
                            </div>

                            {/* 2. Software Development */}
                            <div>
                                <h4 className="text-xl lg:text-2xl font-bold mb-2">Software Development</h4>
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg">
                                    Full-cycle software development, agile sprints, API services, and infrastructure setup using modern frameworks like React, Node, and Python.
                                </p>
                            </div>

                            {/* 3. Website Development */}
                            <div>
                                <h4 className="text-xl lg:text-2xl font-bold mb-2">Website Development</h4>
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg">
                                    Professional and 100% responsive eCommerce websites and custom business sites built for performance and modern online business trends.
                                </p>
                            </div>

                            {/* 4. Games Development */}
                            <div>
                                <h4 className="text-xl lg:text-2xl font-bold mb-2">Games Development</h4>
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg">
                                    Immersive game logic and stunning graphic creation, using engines like Unity and Unreal, for both mobile and PC environments.
                                </p>
                            </div>

                            {/* 5. SEO Optimization */}
                            <div>
                                <h4 className="text-xl lg:text-2xl font-bold mb-2">SEO Optimization</h4>
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-lg">
                                    Comprehensive on-page and technical SEO strategies that ensure maximum organic visibility and high-ranking search engine results.
                                </p>
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
                        <h3 className="text-xl md:text-4xl font-bold mb-4">
                            Subscribe To Our Newsletter
                        </h3>
                        <p className="text-gray-400 mb-10 text-sm">
                            Stay in touch with our expert team and get updates on our latest
                            creations and projects.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center bg-[#27262D] rounded md:rounded-full p-2 pl-6 shadow-lg border border-gray-700">
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
        </section>

    )
}

export default About;