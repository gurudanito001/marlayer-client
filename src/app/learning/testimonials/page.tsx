
import NavBar from "../home/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/(home)/footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


const AlumniTestimonials = () => {

  return (
    <>
      <main className="bg-white">
        <NavBar />
        <section className="bg-white px-5 xl:px-28">
          <header className="mt-10">
            <h2 className="text-center text-lg md:text-xl font-semibold mb-3 text-primary">Testimonials</h2>
            <p className="text-sm md:text-lg text-center text-primary max-w-5xl mx-auto font-light">
              See what our successful graduates and clients have to say about their experience with Quales Academy. Their stories highlight the impact of our training and services on their careers and businesses.
            </p>
          </header>

          <div className="mt-14">
            <article className="flex flex-col lg:flex-row-reverse items-start gap-5 lg:gap-10 text-primary md:border-b pb-14 mb-10">
              <figure className="min-w-80 mx-auto flex">
                <Image src="/images/blessing.png" className="w-52 lg:w-full mx-auto" alt="Blessing Image" width={400} height={400} />
              </figure>

              <div>
                <h3 className="lg:mt-14 text-xl lg:text-2xl font-semibold mb-3 md:mb-5 text-left border-b border-b-primary">Blessing Arigbe - Sabi</h3>
                <p className="font-light text-sm md:text-lg ">I wasn&apos;t sure what I wanted to do, but when Quales came to my school back then and told us about Software Testing, I was like, Wow, there&apos;s actually a skill I can learn without having a background in programming. I picked up, and what they told me about the whole software testing and how it was easy was actually what it was compared to other training.
                </p>
                <div className="mt-5 lg:mt-14 text-primary text-right text-lg lg:text-xl font-550">Cohort 3</div>
              </div>
            </article>

            <article className="flex flex-col lg:flex-row items-start gap-5 lg:gap-10 text-primary md:border-b pb-14 mb-10">
              <figure className="min-w-80 mx-auto flex">
                <Image src="/images/Adaeze-round.png" className="w-52 lg:w-full mx-auto" alt="Adaexe Image" width={400} height={400} />
              </figure>

              <div>
                <h3 className="lg:mt-14 text-xl md:text-2xl font-semibold mb-3 md:mb-5 text-left border-b border-b-primary">Adaeze Atusiuba - Fincra</h3>
                <p className="font-light text-sm md:text-lg ">My experience at Quales was the best. Initially was sceptical about trying because people say they&apos;ll do something and they don&apos;t, but it&apos;s the fact that what Quales tells you is what you will get. So, if they tell you that they will teach you, make you the best, and further you in your career path, you will get that!
                </p>
                <div className="mt-5 lg:mt-14 text-primary text-right text-lg lg:text-xl font-550">Cohort 2</div>
              </div>
            </article>

            <article className="flex flex-col lg:flex-row-reverse items-start gap-5 lg:gap-10 text-primary md:border-b pb-14 mb-10">
              <figure className="min-w-80 mx-auto flex">
                <Image src="/images/Ayomide.png" className="w-52 lg:w-full mx-auto" alt="Ayomide Image" width={400} height={400} />
              </figure>

              <div>
                <h3 className="lg:mt-14 text-xl lg:text-2xl font-semibold mb-3 md:mb-5 text-left border-b border-b-primary">Ayomide Obanewa - AAER LAW</h3>
                <p className="font-light text-sm md:text-lg ">Learning automation testing was one of the most memorable moments at Quales. It was very impressive, especially with the fact that I came from a non-tech background (in Law), having to learn the codes, javascript and more, seeing how simplified by the trainer and right now I got a placement at a Crypto exchange company.
                </p>
                <div className="mt-5 lg:mt-14 text-primary text-right text-lg lg:text-xl font-550">Cohort 15</div>
              </div>
            </article>

            <article className="flex flex-col lg:flex-row items-start gap-5 lg:gap-10 text-primary md:border-b pb-14 mb-10">
              <figure className="min-w-80 mx-auto flex">
                <Image src="/images/Akinbowale.png" className="w-52 lg:w-full mx-auto" alt="Akinbowale Image" width={400} height={400} />
              </figure>

              <div>
                <h3 className="lg:mt-14 text-xl md:text-2xl font-semibold mb-3 md:mb-5 text-left border-b border-b-primary">Akinbowale Akin-Taylor - Microsoft</h3>
                <p className="font-light text-sm md:text-lg ">During the program, it was very interactive, with the very experienced teachers that we had - we had a very good relationship with them and it was easy to learn in that scenario, and I think that sets Quales apart from other institutions. I am currently a Software Engineer who started off as a Software Tester and I think going through that route makes you a better engineer.
                </p>
                <div className="mt-5 lg:mt-14 text-primary text-right text-lg lg:text-xl font-550">Cohort 2</div>
              </div>
            </article>

            <article className="flex flex-col lg:flex-row-reverse items-start gap-5 lg:gap-10 text-primary md:border-b pb-14 mb-10">
              <figure className="min-w-80 mx-auto flex">
                <Image src="/images/Bashir-round.png" className="w-52 lg:w-full mx-auto" alt="Bashir Image" width={400} height={400} />
              </figure>

              <div>
                <h3 className="lg:mt-14 text-xl md:text-2xl font-semibold mb-3 md:mb-5 text-left border-b border-b-primary">Bashir Alatishe - Interswitch</h3>
                <p className="font-light text-sm md:text-lg ">It&apos;s been a wonderful experience with Quales. After the training and examination with Quales, they always make sure that they keep in touch with their Alumni, even my first job as a Software tester was through Quales, after which I got my job with Interswitch.
                </p>
                <div className="mt-5 lg:mt-14 text-primary text-right text-lg lg:text-xl font-550">Cohort 2</div>
              </div>
            </article>
          </div>
        </section>

        <section className="flex flex-col md:flex-row my-10 lg:my-16 px-5 bg-neutral py-14 lg:py-20 gap-10">

          {/* <video controls poster="/images/video-banner.svg" className="md:max-w-80 mx-auto md:mx-0 md:ml-auto lg:max-w-md xl:max-w-lg">
        <source src="https://youtu.be/LneTNLalyjM" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

          <iframe className="w-full md:max-w-80 mx-auto md:mx-0 md:ml-auto lg:max-w-550 xl:max-w-lg" height={300} src="https://www.youtube.com/embed/LneTNLalyjM?si=pYKUPjROuzozZ9BN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <iframe className="w-full md:max-w-80 mx-auto md:mx-0 md:mr-auto lg:max-w-550 xl:max-w-lg" height={300} src="https://www.youtube.com/embed/Um1jiJSdTRo?si=-Gu2G-X9PmfumwB3" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          {/* <video controls poster="/images/video-banner.svg" className="md:max-w-80 mx-auto md:mx-0 md:mr-auto lg:max-w-md xl:max-w-lg">
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video> */}

        </section>

        <div className="flex">
          <div className="join items-center mx-auto mt-8 mb-12 gap-3">
            <button className=" btn btn-xs bg-white border border-primary text-primary shadow-none px-1 mr-5"> <ChevronLeftIcon className="w-4" /> </button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white border-b-primary border-b-2 px-1">1</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">2</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">3</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">4</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">5</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">......</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">10</button>
            <button className=" btn btn-xs bg-white border border-primary text-primary shadow-none px-1 ml-5"> <ChevronRightIcon className="w-4" /> </button>
          </div>
        </div>

        <section className="bg-section-blue text-section-red px-5 lg:px-28 py-20 lg:py-36 flex flex-col md:flex-row mb-10">
          <article>
            <h2 className="font-550 text-2xl lg:text-4xl">Sign up for our next Cohort now</h2>
            <p className="font-light text-lg mt-5">Join the waitlist for our next Software Quality Assurance Engineering / Scrum Mastery classes today  </p>
          </article>
          <Link href="/learning/register-for-cohort" className="btn bg-gray-900 text-white rounded-full px-8 mr-auto md:mr-0 md:ml-auto mt-8">Register for Course</Link>
        </section>


      </main>

      <Footer showScrumMasterLink={true} />
    </>
  )
}

export default AlumniTestimonials