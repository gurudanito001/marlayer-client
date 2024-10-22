import Link from "next/link";
import Image from "next/image";

const Testimonials = ({showButton = true}: {showButton?: boolean}) => {

  return (
    <section id="testimonials" className="bg-white px-5 xl:px-28 py-14">
      <header className="flex">
        <h2 className="text-xl md:text-2xl mx-auto font-550 bg-gradient-to-r max-w-550 text-primary mb-5">Testimonials</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=" flex flex-col items-center xl:items-end">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              My experience at Quales was the best. Initially I was sceptical about trying because people says they’ll do something and they don’t, but it’s the fact that what Quales tells you is what you will get. So, if they tell you that they will teach you, make you the best, and further you in your career path, you will get that!
            </p>
            <h5 className="text-primary mt-7 text-center font-550">Adaeze Atusuba</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort 2</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
              <Image
                src={`/images/Adaeze-min.png`}
                className=" w-full h-full rounded-full"
                style={{ objectFit: "cover" }}
                alt="Seamfix Logo"
                width={96}
                height={96}
              />
            </figure>
            
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              It&apos;s been a wonderful experience with Quales. After the training and examination with Quales, they always make sure that they keep in touch with their Alumni, even my first job as a Software tester was through Quales, after which I got my job with Interswitch.
            </p>
            <h5 className="text-primary mt-7 md:mt-auto text-center font-550">Bashiru Alatishe</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort 2</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
              <Image
                src={`/images/Bashir-min.jpg`}
                className=" w-full h-full rounded-full"
                style={{ objectFit: "cover" }}
                alt="Seamfix Logo"
                width={96}
                height={96}
              />
            </figure>
          </div>
        </div>

        <div className=" flex flex-col items-center xl:items-start">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              Learning automation testing was one of the most memorable moments at Quales. It was very impressive, especially with the fact that I came from a non-tech background (in Law), having to learn the codes, javascript and more, seeing how simplified by the trainer and right now I got a placement at a Crypto exchange company.
            </p>
            <h5 className="text-primary mt-7 md:mt-auto text-center font-550">Ayomide Obanewa</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort 15</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
              <Image
                src={`/images/Ayomide-min.jpg`}
                className=" w-full h-full rounded-full"
                style={{ objectFit: "cover" }}
                alt="Seamfix Logo"
                width={96}
                height={96}
              />
            </figure>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials