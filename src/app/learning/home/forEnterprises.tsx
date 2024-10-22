import Link from "next/link";
import Image from "next/image";

const ForEnterprises = () => {

  return (
    <section id="studentDiscount" className="bg-neutral">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        <article className="flex flex-col py-14 lg:py-28 px-5 lg:pl-20 lg:pr-10">
          <h2 className="text-2xl font-bold text-secondary border-b mb-5">For Enterprises</h2>
          <h3 className=" text-5xl lg:text-7xl font-extrabold mt-auto text-primary">Empower Your Workforce with Customized Learning</h3>
          <p className=" text-lg md:text-xl font-550 mt-4 text-primary"> Enhance your team&apos;s skills with our tailored training solutions, designed to boost productivity, collaboration, and innovation within your organization.
          </p>

          <div className="mt-7">
            <button className=" btn md:btn-lg text-md bg-secondary text-white shadow-sm rounded-lg">Contact Sales Team</button>
          </div>
        </article>

        <figure className="hidden lg:block h-full bg-neutral bg-blend-darken md:bg-[url('/images/for-enterprises.jpg')] bg-cover bg-center bg-no-repeat">
        </figure>
        
      </div>
    </section>
  )
}

export default ForEnterprises