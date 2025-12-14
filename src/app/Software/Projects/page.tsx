import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Link from "next/link";




const Projects = () => {
    return (
        <div>
            <Navbar />

            <div className="">

                <div className=" max-w-[1400px] mx-auto bg-[#1C1B20] text-white pt-28 pb-24 px-6 lg:px-16 rounded mt-20">


                    <h3 className="text-xl lg:text-5xl font-bold mb-16">Latest Projects</h3>


                    <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">


                        <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                            <Image
                                src="/images/lastestProjectImg1.webp"
                                alt="Ecommerce Website"
                                fill
                                className="object-cover"
                            />
                        </div>


                        <div className="max-w-sm ">
                            <h4 className="text-2xl font-bold mb-2">
                                eCommerce Website Design For Fashion Brand
                            </h4>
                            <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">
                                — UI/UX & Dev
                            </p>

                            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                                Our company was dedicated to building professional and 100%
                                responsive eCommerce websites for the newest online business trends...
                            </p>

                            <Link href="/Software/ProjectDetails"> <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                Explore Project
                            </button>
                            </Link>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">


                        <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                            <Image
                                src="/images/eCommerce3.png"
                                alt="AI Software"
                                fill
                                className="object-cover"
                            />
                        </div>


                        <div className=" max-w-sm">
                            <h4 className="text-2xl font-bold mb-2">
                                eCommerce Website Design For Fashion Brand
                            </h4>
                            <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">
                                — UI/UX & Dev
                            </p>

                            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                                Our company was dedicated to building professional and 100%
                                responsive eCommerce websites for the newest online business trends...
                            </p>

                            <Link href="/Software/ProjectDetails"> <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                Explore Project
                            </button>
                            </Link>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">


                        <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                            <Image
                                src="/images/eCommerce3.png"
                                alt="AI Software"
                                fill
                                className="object-cover"
                            />
                        </div>


                        <div className=" max-w-sm">
                            <h4 className="text-2xl font-bold mb-2">
                                AI-Powered Software For Digital Recruitment
                            </h4>
                            <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">
                                — Development
                            </p>

                            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                                We have recently created innovative, top-class AI-powered technology
                                for the purpose of digital recruitment for this company fast hire...
                            </p>

                            <Link href="/Software/ProjectDetails"> <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                Explore Project
                            </button>
                            </Link>
                        </div>
                    </div>


                    <div className="-mx-6 lg:-mx-16 relative aspect-[16/6] rounded mb-24">
                        <Image
                            src="/images/lastestProjectImg3.jpg"
                            alt="Design Leading Software"
                            fill
                            className="object-cover"
                        />
                    </div>


                    <div className="text-center w-full max-w-3xl mx-auto">
                        <h3 className="text-xl lg:text-4xl font-extrabold mb-4">
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
    )
}



export default Projects;