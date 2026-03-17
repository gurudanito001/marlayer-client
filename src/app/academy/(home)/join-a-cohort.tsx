import Link from "next/link";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const JoinACohort = () => {
  const benefits = [
    "Learn from experienced tutors.",
    "Be part of a helpful and supportive community of learners.",
    "Learn at a pace convenient for you and flexible to your circumstances.",
    "Request for specialized one-on-one lectures.",
    "Empower yourself with industry needed skills."
  ];

  return (
    <section id="joinCohort" className="bg-primary/55 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[300px] md:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image 
                src="/images/join-a-cohort-2.jpg" 
                alt="Students learning together" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 text-white">
                 <p className="font-bold text-xl">Community First</p>
                 <p className="text-sm text-gray-200">Join over 1,000+ graduates</p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-white/5 rounded-3xl"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Join the next <span className="text-[#45B1A0]">cohort</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When you join the Marlayer Learning program, you become part of a community of high achievers. 
              We don&apos;t just teach; we mentor you towards success.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-[#45B1A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/academy/sign-up" 
                className="inline-flex justify-center items-center bg-[#45B1A0] hover:bg-[#369b8b] text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Register Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default JoinACohort