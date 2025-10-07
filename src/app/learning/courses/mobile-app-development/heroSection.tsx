
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


const HeroSection = () => {

  return (
    <section className="flex flex-col py-14 lg:py-24 px-3 lg:px-14 xl:px-28 bg-primary text-white mb-8">
      <div className="max-w-5xl">
        <h2 className="text-4xl lg:text-7xl font-semibold mb-3 p-0">Mobile App Development with React Native
        </h2>
        <p className="text-xl font-light mt-5 mb-4">
          This course introduces beginners to mobile app development using React Native — the framework used to build apps for Android and iOS with JavaScript. You’ll learn how apps work, how screens connect, and how to manage data and state. With the help of AI, you’ll build real mobile apps faster, understand every step, and gain confidence as a developer.
        </p>
        <h4 className="font-550 text-xl mb-3">Course Objectives:</h4>
        <ul className=" list-none list-outside flex flex-col gap-3 lg:gap-5 text-lg mb-5">
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Understand how mobile apps are structured and how React Native works.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Learn the basics of JavaScript and React for app development.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Design and build functional mobile apps with navigation and data.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Use AI to generate, explain, and debug code.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Publish a simple mobile app by the end of the course.</li>
        </ul>

        <h4 className="font-550 text-xl mb-2">Prerequisites:</h4>
        <p className="text-lg font-light mb-4">
          No programming experience required. You only need a laptop, internet connection, and interest in mobile apps. Basic computer skills are enough — all coding and setup steps will be guided with AI assistance.
        </p>

        <div className="mt-10">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiNN8Y4g7MpvCxE8jGdHfgMvaXOkIehmuDVR9exZI8u7_Kcw/viewform" className=" btn btn-lg bg-secondary text-white rounded-lg px-10">Enroll Now</a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection