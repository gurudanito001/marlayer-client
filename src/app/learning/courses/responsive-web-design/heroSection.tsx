
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


const HeroSection = () => {

  return (
    <section className="flex flex-col py-14 lg:py-14 px-3 lg:px-14 xl:px-28 bg-primary text-white mb-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl lg:text-7xl font-semibold mb-3 p-0">Responsive Web Design
        </h2>
        <p className="text-lg font-light mt-5 mb-4">
          This course teaches students how to build websites that are functional, aesthetically pleasing, and optimized for multiple screen sizes. Students will learn the principles of responsive design, the technical tools to implement it, and how to ensure that websites provide a seamless experience on different devices, including desktops, tablets, and smartphones.
        </p>
        <h4 className="font-550 text-xl mb-3">Course Objectives:</h4>
        <ul className=" list-none list-outside flex flex-col gap-1 text-lg mb-4">
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Understand the fundamentals of responsive web design.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Utilize HTML, CSS to create responsive layouts.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Implement CSS media queries for different screen sizes.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Use responsive frameworks like Bootstrap.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Optimize images and assets for better performance on mobile devices.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Design fluid and flexible layouts using grid and flexbox techniques.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Test and debug responsive designs across multiple devices.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Create a fully responsive website from scratch as a final project.</li>
        </ul>

        <h4 className="font-550 text-xl mb-2">Prerequisites:</h4>
        <p className="text-lg font-light mb-4">
          Basic computer skills is necessary. No prior programming experience is necessary. Familiarity with the how to browse the internet will be beneficial.
          This course is ideal for those looking to build beautiful and functional websites.
        </p>
        <div className="mt-10">
          <Link href="/learning/sign-up" className=" btn btn-lg bg-secondary text-white rounded-lg px-10">Enroll Now</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection