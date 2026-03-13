import Link from "next/link";
import Image from "next/image";

const StudentDiscount = () => {

  return (
    <section id="studentDiscount" className="bg-[#003C3C] relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-28 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="inline-block bg-[#9A3D1B] text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Limited Time Offer
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Student Savings: <br />
              <span className="text-[#45B1A0]">Unlock 50% Off</span> Your Learning Journey
            </h2>
            
            {/* <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Don&apos;t let budget hold you back. Verify your student status and get exclusive access to our premium courses for half the price. Valid until November 2024.
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-10">
              <Link 
                href="/academy/sign-up" 
                className="inline-flex justify-center items-center bg-[#45B1A0] hover:bg-[#3a9688] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Claim Discount
              </Link>
              <Link 
                href="/academy/faqs" 
                className="inline-flex justify-center items-center bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
               {/* Using fill with a parent aspect ratio container is often safer for responsive layouts than fixed width/height */}
               <div className="aspect-[4/3] relative">
                <Image 
                    src="/images/student.jpg" 
                    alt="Happy student learning on a laptop" 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
               </div>
               
               {/* Floating Badge */}
               <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-2xl shadow-lg max-w-[200px]">
                 <p className="text-[#003C3C] font-bold text-lg leading-none mb-1">50% OFF</p>
                 <p className="text-gray-500 text-xs">For all verified students worldwide.</p>
               </div>
            </div>
            
            {/* Decorative dots or pattern behind */}
            <div className="absolute -z-10 top-[-20px] right-[-20px] w-full h-full border-2 border-[#45B1A0]/30 rounded-3xl translate-x-4 translate-y-4"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default StudentDiscount