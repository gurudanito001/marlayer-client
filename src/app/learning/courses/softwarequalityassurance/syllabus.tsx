"use client"

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Module1 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3" >
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Module 1: Testing Fundamentals
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>
          <p className="font-light">
            This module introduces students to the basics of software testing, providing a comprehensive understanding of why testing is crucial in the software development process. The module emphasizes key principles and types of testing that are essential for ensuring the quality and reliability of software products.
          </p>

          <h4 className="font-550 mt-5">Objectives:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Understand the necessity of software testing.</li>
            <li className="font-light">Learn the Seven Testing Principles.</li>
            <li className="font-light">Explore the Test Process and the Psychology of Testing.</li>
            <li className="font-light">Gain an overview of the different types of software testing.</li>
          </ul>

          <h4 className="font-550 mt-5">Duration:</h4>
          <p className="font-light">
            Classes 1 & 2
          </p>

          <h4 className="font-550 mt-5">Leadership and Business Focus:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Stakeholder Management in an Agile Environment: Learn how to effectively manage relationships with key stakeholders in a dynamic Agile environment.</li>
            <li className="font-light">Becoming an Effective Consultant: Develop the skills needed to provide expert advice and guidance in software testing projects.</li>
          </ul>
        </div>
      </li>
    </ul>

  )
}

const Module2 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Module 2: Levels of Testing and Test Preparations
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>
          <p className="font-light">
            This module delves into the various levels and types of software testing, with practical examples and use cases. Students will also gain hands-on experience in test preparation, execution, and defect management using industry-standard tools.
          </p>

          <h4 className="font-550 mt-5">Objectives:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Understand the different levels and types of software testing.</li>
            <li className="font-light">Analyze business requirements and write effective test cases.</li>
            <li className="font-light">Learn how to execute tests and log defects.</li>
            <li className="font-light">Gain knowledge of the defect lifecycle.</li>
          </ul>

          <h4 className="font-550 mt-5">Duration:</h4>
          <p className="font-light">
            Classes 3,4 & 5
          </p>

          <h4 className="font-550 mt-5">Leadership and Business Focus:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Communicating Clearly as a Software Tester: Enhance your communication skills to effectively convey test results and collaborate with teams</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Module3 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Module 3: SDLC and STLC
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>
          <p className="font-light">
            This module covers the essential phases of the Software Development Lifecycle (SDLC) and the Software Testing Lifecycle (STLC), providing students with a structured approach to software testing within the broader context of software development.
          </p>

          <h4 className="font-550 mt-5">Objectives:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Learn the stages of the Software Development Lifecycle (SDLC).</li>
            <li className="font-light">Understand the phases of the Software Testing Lifecycle (STLC).</li>
          </ul>

          <h4 className="font-550 mt-5">Duration:</h4>
          <p className="font-light">
            Class 6
          </p>

          <h4 className="font-550 mt-5">Leadership and Business Focus:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Understanding the World of Work—Relevance in the Business of Technology: Gain insights into the professional landscape and the role of technology in driving business success.</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Module4 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Module 4: Manual and Automated API Test (Postman)
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>
          <p className="font-light">
            In this module, students will engage in hands-on testing of APIs, both manually and using automated testing tools like Postman. This module is designed to equip students with practical skills in API testing, which is a critical aspect of software quality assurance.
          </p>

          <h4 className="font-550 mt-5">Objectives:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Conduct manual API testing.</li>
            <li className="font-light">Utilize automated testing tools such as Postman and Rest Assured for API testing.</li>
          </ul>

          <h4 className="font-550 mt-5">Duration:</h4>
          <p className="font-light">
            Classes 7 & 8
          </p>

          <h4 className="font-550 mt-5">Leadership and Business Focus:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">CV Writing: Learn how to effectively present your skills and experience in a professional resume to stand out in the job market.</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Module5 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Module 5: Automated Test using Cypress
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>
          <p className="font-light">
            This module introduces students to the automated testing of web applications using Cypress. Through practical exercises, students will learn how to create and execute automated tests, enhancing their technical skills in software testing.
          </p>

          <h4 className="font-550 mt-5">Objectives:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Introduction to automated web application testing using Cypress.</li>
            <li className="font-light">Develop automated test scripts and execute them.</li>
          </ul>

          <h4 className="font-550 mt-5">Duration:</h4>
          <p className="font-light">
            Classes 9, 10 & 11
          </p>

          <h4 className="font-550 mt-5">Leadership and Business Focus:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Getting Ready for a Software Testing Career: Prepare for a successful career in software testing with guidance on job search strategies, interview preparation, and career development.</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Module6 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Module 6: Introduction to JavaScript & using a Cloud Repository
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>
          <p className="font-light">
            This module provides an introduction to JavaScript and its application in software testing. Students will also learn how to use cloud repositories, such as GitHub, to manage and share their automated test scripts.
          </p>

          <h4 className="font-550 mt-5">Objectives:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Learn the basics of JavaScript for test automation.</li>
            <li className="font-light">Gain practical experience in using cloud repositories like GitHub for script management.</li>
          </ul>

          <h4 className="font-550 mt-5">Duration:</h4>
          <p className="font-light">
            Class 12
          </p>
        </div>
      </li>
    </ul>
  )
}



const Syllabus = () => {
  const [moduleIndex, setModuleIndex] = useState(0)
  const [seconds, setSeconds] = useState(1);
  const [status, setStatus] = useState("play");
  let interval: any = useRef();

  const pauseSecondsCounter = () => {
    clearInterval(interval.current)
    setStatus("pause");
  }

  const continueSecondsCounter = () => {
    setStatus("play");
  }

  const handleClickPausePlayBtn = () => {
    if (status === "play") {
      pauseSecondsCounter()
    } else {
      continueSecondsCounter()
    }
  }

  const modules = [
    <Module1 key="module1" />,
    <Module2 key="module2" />,
    <Module3 key="module3" />,
    <Module4 key="module4" />,
    <Module5 key="module5" />,
    <Module6 key="module6" />
  ]



  useEffect(() => {
    if (status === "play") {
      interval.current = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 10) {
            return 0
          } else {
            return prevSeconds + 1
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, [status]);

  useEffect(() => {
    if (seconds === 0) {
      setModuleIndex(prevIndex => {
        if (prevIndex < modules.length - 1) {
          return prevIndex + 1
        } else {
          return 0
        }
      })
    }
  }, [seconds])

  const backToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  const setCurrentModule = (index: number) => {
    setModuleIndex(index);
    setSeconds(1);
    backToTop();
  }


  return (
    <section className="mb-14">
      <header className="flex items-center mb-5">
        <h2 className="text-primary text-2xl font-semibold">Syllabus</h2>
        <div className="w-10 h-10 ml-4 playBtnContainer">
          <CircularProgressbar value={seconds * 10} />
          <button onClick={handleClickPausePlayBtn} className="btn btn-sm btn-circle bg-primary text-white z-30 playBtn"> {status === "play" ? <PauseIcon className="w-5" /> : <PlayIcon className="w-5" />}</button>
        </div>
      </header>

      {modules[moduleIndex]}

      <h2 className="text-primary text-2xl font-semibold mt-14">Time Table</h2>

      <section className="bg-white grid grid-cols-1 md:grid-cols-2 mt-5 gap-7">

        <div onClick={() => setCurrentModule(0)} className={`${moduleIndex === 0 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Module 1</h5>
          <p className="mt-2 xl:text-lg">Testing Fundamentals</p>
        </div>

        <div onClick={() => setCurrentModule(1)} className={`${moduleIndex === 1 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Module 2</h5>
          <p className="mt-2 xl:text-lg">Levels of Testing and Test Preparation</p>
        </div>

        <div onClick={() => setCurrentModule(2)} className={`${moduleIndex === 2 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Module 3</h5>
          <p className="mt-2 xl:text-lg">SDLC and STLC</p>
        </div>

        <div onClick={() => setCurrentModule(3)} className={`${moduleIndex === 3 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Module 4</h5>
          <p className="mt-2 xl:text-lg">Manual and Automated API Test (Postman)</p>
        </div>

        <div onClick={() => setCurrentModule(4)} className={`${moduleIndex === 4 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Module 5</h5>
          <p className="mt-2 xl:text-lg">Automated Test using Cypress</p>
        </div>

        <div onClick={() => setCurrentModule(5)} className={`${moduleIndex === 5 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Module 6</h5>
          <p className="mt-2 xl:text-lg">Introduction to JavaScript & Using a Cloud Repository</p>
        </div>

      </section>

    </section>
  )
}

export default Syllabus