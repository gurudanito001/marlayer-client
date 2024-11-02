import Link from "next/link";
import Image from "next/image";

const JoinACohort = () => {

  return (
    <section id="studentDiscount" className="bg-accent2 border-t">

      <div className="grid grid-cols-1 lg:grid-cols-2">

      <figure className="hidden lg:block h-full bg-accent2 bg-blend-darken md:bg-[url('/images/join-a-cohort-2.jpg')] bg-cover bg-center bg-no-repeat">
      </figure>


        <article className="flex flex-col py-14 lg:py-28 px-5 xl:pl-28">
          <h1 className=" text-5xl lg:text-7xl font-extrabold mt-auto">Join the next cohort</h1>
          <p className=" text-lg md:text-xl font-550 mt-4">When you join the Marlayer Learning program, you become part of a community of high achievers.
          Here are some other benefits of learning from our program:
          </p>

          <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg lg:text-xl pl-4 md:pl-5 mt-5">
            <li>Learn from experienced tutors.</li>
            <li>Be part of a helpful and supportive community of learners</li>
            <li>Learn at a pace convenient for you and flexible to your circumstances</li>
            <li>Request for specialized one-on-one lectures </li>
            <li>Empower yourself with industry needed skills.</li>
          </ul>
          <div className="mt-7">
            <Link href="/learning/sign-up" className=" btn btn-lg bg-gray-950 text-white shadow-sm rounded-lg px-10">Register Now</Link>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default JoinACohort