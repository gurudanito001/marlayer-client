
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


const HeroSection = () => {

  return (
    <section className="flex flex-col py-14 lg:py-14 px-3 lg:px-14 xl:px-28 bg-primary text-white mb-8">
      <div className="max-w-7xl">
        <h2 className="text-4xl lg:text-7xl font-semibold mb-3 p-0">Dynamic Web Development</h2>
        <p className="text-lg font-light mt-5 mb-4">
          This hands-on course provides an in-depth introduction to JavaScript, the foundation of modern web development, and React, the popular JavaScript library for building interactive user interfaces. Students will start with the essentials of JavaScript, focusing on its syntax, data structures, and core programming concepts. Through a series of practical exercises, they&apos;ll develop strong programming fundamentals, including functions, asynchronous programming, and working with APIs.
        </p>

        <p className="text-lg font-light mt-5 mb-5">
          Once students are comfortable with JavaScript, the course will transition into React, where they&apos;ll learn to build powerful, scalable, and dynamic front-end applications. Key React topics will include state management, component-based architecture, hooks, and the context API. Students will also learn to integrate third-party libraries, manage application state effectively, and optimize for performance.
        </p>
        <h4 className="font-550 text-xl mb-3">Course Objectives:</h4>
        <ul className=" list-none list-outside flex flex-col gap-1 text-lg mb-5">
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Write efficient, modular JavaScript code and understand core programming principles.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Build dynamic web applications with React, using components, state, and hooks.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Fetch and integrate data from external APIs to create interactive applications.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Manage application state effectively and create scalable codebases.
          </li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Deploy their applications and understand best practices for modern web development.
          </li>
        </ul>

        <h4 className="font-550 text-xl mb-2">Prerequisites:</h4>
        <p className="text-lg font-light mb-4">
          Basic knowledge of HTML and CSS is recommended. No prior programming experience is necessary, although familiarity with basic coding concepts will be beneficial.
          This course is ideal for those looking to build a strong foundation in JavaScript and React, and create professional, interactive web applications.
        </p>
        <div className="mt-10">
          <Link href="/academy/sign-up" className=" btn btn-lg bg-secondary text-white rounded-lg px-10">Enroll Now</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection