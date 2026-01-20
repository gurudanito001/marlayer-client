import Link from "next/link";
import Image from "next/image";

const ForEnterprises = () => {

  return (
    <section id="studentDiscount" className="bg-neutral">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        <article className="flex flex-col py-14 lg:py-28 px-5 xl:pl-28">
          <h2 className="text-lg md:text-2xl font-semibold text-secondary border-b mb-5">For Enterprises</h2>
          <h3 className=" text-3xl md:text-5xl lg:text-6xl font-extrabold mt-auto text-primary">Empower Your Workforce with Customized Learning</h3>
          <Image src="/images/for-enterprises.jpg" className="lg:hidden mb-3 rounded-md w-full max-w-600 my-5" width={400} height={250} objectFit="contain" alt="computer basics" />  
          <p className=" text-sm md:text-xl font-550 mt-4 text-primary"> Enhance your team&apos;s skills with our tailored training solutions, designed to boost productivity, collaboration, and innovation within your organization.
          </p>

          <div className="mt-7">
            <Link href="/learning/contact-sales" className="btn bt-md md:btn-lg bg-secondary text-white shadow-sm rounded-lg px-6 md:px-10">Contact Sales Team</Link>
          </div>
        </article>

        <figure className="hidden lg:block h-full bg-neutral bg-blend-darken md:bg-[url('/images/for-enterprises.jpg')] bg-cover bg-center bg-no-repeat">
        </figure>
        
      </div>
    </section>
  )
}

export default ForEnterprises