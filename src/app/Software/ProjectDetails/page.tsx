import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

const Projects = () => {
    return (
        <div>
            <Navbar />

            <div>

                <h1 className="text-xl lg:text-5xl text-center font-bold mt-10">Project Details</h1>

                <div className=" max-w-[1400px] mx-auto bg-[#1C1B20] text-white pt-20 pb-24 px-6 lg:px-16 rounded mt-20">


                    <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] md:aspect-[16/6] rounded mb-8">
                        <Image
                            src="/images/projectDetailsHero.jpg"
                            alt="AI-Powered Software"
                            fill
                            className="object-cover"
                        />
                    </div>


                    <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                        <div>
                            <h4 className="lg:text-3xl text-xl font-bold mb-2">
                                AI-Powered Software For Digital Recruitment
                            </h4>


                            <p className="text-white text-sm mb-6">
                                <span className="text-gray-500">by</span> TechBox PRO
                            </p>


                            <p className="text-gray-400  leading-relaxed max-w-4xl">
                                We have recently created innovative, top-class AI-powered technology
                                for the purpose of digital recruitment for this company fast hire.
                                Our aim is to implement and establish their digital needs for the
                                purpose of faster hiring and effective employee acquisition.
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row items-center gap-10 mb-16">


                        <div className="w-full md:w-1/2">
                            <h5 className="text-xl lg:text-2xl font-bold mb-4 max-w-sm">
                                Recruitment With AI For Startup Businesses
                            </h5>
                            <p className="text-gray-400 leading-relaxed max-w-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>


                        <div className="relative w-full md:w-1/2 aspect-video rounded">
                            <Image
                                src="/images/projectDetailsImg2.jpg"
                                alt="Mobile Phone Recruitment App"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row items-center gap-10 mb-28">
                        <div>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-4xl">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                            </p>


                            <a
                                href="#"
                                className="text-white text-sm font-semibold border-b border-white hover:text-[#564AF7] hover:border-[#564AF7] transition duration-300"
                            >
                                Let's Work Together
                            </a>
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
    )
}

export default Projects;