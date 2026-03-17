import Navbar from "@/app/components/Navbar";
import Footer from "@/app/(home)/footer";
import Image from "next/image";
import Link from "next/link";




const Projects = () => {
    return (
        <div>
            <Navbar />

            <div className="">

                <div className=" max-w-[1400px] mx-auto bg-[#1C1B20] text-white pt-28 pb-24 px-6 lg:px-16 rounded mt-20 mb-20">


                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-16">Latest Projects</h3>


                    <div className="flex flex-col lg:flex-row items-start gap-10 mb-20">


                        <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                            <Image
                                src="/images/padomart.png"
                                alt="Ecommerce Website"
                                fill
                                className="object-cover"
                            />
                        </div>


                        <div className="">
                            <h4 className="text-sm md:text-lg font-bold mb-2 max-w-md">
                               Mobile App Development for Pardomart
                            </h4>
                            <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">
                                — Mobile Development
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                                Pardomart is a multi-vendor on-demand marketplace application developed for a client in the U.S.A that mirrors the functionality of Instacart, connecting customers with local vendors for fast and reliable product delivery. The platform consists of three dedicated mobile applications — one for customers to browse and order, one for vendors to manage inventory and sales, and one for delivery partners to handle real-time order fulfillment — all working seamlessly together to power a complete digital commerce ecosystem.
                            </p>

                            <Link href="/software/ProjectDetails"> <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300"> 
                                Explore Project
                                </button>
                            </Link>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row items-start gap-10 mb-20">


                        <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                            <Image
                                src="/images/peniga.png"
                                alt="AI Software"
                                fill
                                className="object-cover"
                            />
                        </div>


                        <div className="">
                            <h4 className="text-sm md:text-lg font-bold mb-2 max-w-md">
                                Web App Development for Peniga
                            </h4>
                            <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">
                                — Web Development
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                                Peniga is a trusted online escrow platform designed to make buying and selling safe and secure. It allows users to enter into binding agreements and hold funds in escrow until the terms of a transaction are fully met — protecting both buyers and sellers from fraud and ensuring smooth completion of trades. With features like secure fund handling, contract enforcement, and 24/7 support, Peniga helps users confidently trade a wide range of goods and services online.
                            </p>

                            <Link href="/software/ProjectDetails"> <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                Explore Project
                                </button>
                            </Link>
                        </div>
                    </div>


                    <div className="flex flex-col lg:flex-row items-start gap-10 mb-20">


                        <div className="relative w-full lg:w-[35%] aspect-[4/3] rounded">
                            <Image
                                src="/images/looseapp.png"
                                alt="AI Software"
                                fill
                                className="object-cover"
                            />
                        </div>


                        <div className="">
                            <h4 className="text-sm md:text-lg font-bold mb-2 max-w-md">
                                Backend Infrastructure Development for LooseApp
                            </h4>
                            <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">
                                — Backend Development
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
                               LooseApp is a social wellbeing app that connects users with empathetic listeners, offering a safe and supportive space to share thoughts and feelings on any topic. Whether you need to vent or simply want someone to listen, the app enables users to chat and communicate with trained listeners for emotional support and meaningful conversation
                            </p>

                            <Link href="/software/ProjectDetails"> <button className="px-8 py-3 rounded-full border border-gray-600 text-sm font-semibold hover:bg-white hover:text-black transition duration-300">
                                Explore Project
                                </button>
                            </Link>
                        </div>
                    </div>


                    <div className="-mx-6 lg:-mx-16 relative aspect-[16/6] rounded mb-24">
                        <Image
                            src="/images/projectimg.jpg"
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
                            <button className="bg-[#45B1A0] text-white font-bold py-3 px-8 rounded-full transition w-full sm:w-auto mt-2 sm:mt-0">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}



export default Projects;