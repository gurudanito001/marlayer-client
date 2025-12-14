import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const ContactPage = () => {
    
    
    const NewsletterSection = () => (
        <div className="w-[90%] max-w-[1400px] mx-auto bg-[#1C1B20] text-white py-20 relative"> 
            <div className="mx-auto px-6 lg:px-10">
                <div className="text-center pt-10">
                    <h3 className="text-xl lg:text-4xl font-bold mb-4">
                        Subscribe To Our Newsletter
                    </h3>
                    <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm">
                        Stay in touch with our expert team from here at EleTech PRO and learn about all our latest creations and projects from our regular newsletter.
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
    );

    return (
        <div className=" bg-white">
            <Navbar />

            
            <section className="bg-[#564AF7] w-[90%] max-w-[1400px] mx-auto text-white pt-24 pb-16 lg:pt-36 lg:pb-24 mt-20">
                <div className="max-w-4xl mx-auto px-6">
                    
                   
                    <h1 className="text-xl lg:text-6xl font-extrabold text-center mb-16">
                        Have Any Project In Mind?
                    </h1>

                    <form className="space-y-8">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                className="bg-transparent border-b border-purple-300/50 p-3 placeholder-purple-300 focus:outline-none focus:border-white transition"
                                required
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="bg-transparent border-b border-purple-300/50 p-3 placeholder-purple-300 focus:outline-none focus:border-white transition"
                                required
                            />
                        </div>

                       
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="bg-transparent border-b border-purple-300/50 p-3 placeholder-purple-300 focus:outline-none focus:border-white transition"
                                required
                            />
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="bg-transparent border-b border-purple-300/50 p-3 placeholder-purple-300 focus:outline-none focus:border-white transition"
                                required
                            />
                        </div>

                       
                        <div>
                            <textarea 
                                placeholder="Message" 
                                rows={3}
                                className="bg-transparent border-b border-purple-300/50 p-3 w-full placeholder-purple-300 focus:outline-none focus:border-white transition resize-none"
                                required
                            ></textarea>
                        </div>

                       
                        <div className="pt-8 text-center">
                            <button 
                                type="submit"
                                className="border border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-[#564AF7] transition duration-300"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            
           
            <NewsletterSection />

            <Footer />
        </div>
    );
}

export default ContactPage;