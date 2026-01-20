
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


const HeroSection = () => {

  return (
    <section className="flex flex-col py-14 lg:py-24 px-3 lg:px-14 xl:px-28 bg-primary text-white mb-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl lg:text-7xl font-semibold mb-3 p-0">Backend Development for Beginners
        </h2>
        <p className="text-xl font-light mt-5 mb-4">
          This course introduces beginners to backend development using JavaScript. You’ll learn how the web works behind the scenes — how servers, databases, and APIs connect to power real applications. With the help of AI tools, you’ll write, understand, and debug backend code faster, even with no prior programming experience.
        </p>
        <h4 className="font-550 text-xl mb-3">Course Objectives:</h4>
        <ul className=" list-none list-outside flex flex-col gap-3 lg:gap-5 text-lg mb-5">
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Understand how web servers and APIs work.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Learn the basics of JavaScript for backend development.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Build and test simple backend applications.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Use AI to generate, explain, and debug code.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Deploy a small backend project online.</li>
        </ul>

        <h4 className="font-550 text-xl mb-2">Prerequisites:</h4>
        <p className="text-lg font-light mb-4">
          No programming experience required. You only need a laptop, internet access, and curiosity to learn. Familiarity with basic computer use is enough — everything else will be guided step-by-step with AI assistance.
        </p>

        <div className="mt-10">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiNN8Y4g7MpvCxE8jGdHfgMvaXOkIehmuDVR9exZI8u7_Kcw/viewform" className=" btn btn-lg bg-secondary text-white rounded-lg px-10">Enroll Now</a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection