"use client"

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface SyllabusWeekProps {
  week: number | string;
  title: string;
  overview: (string | JSX.Element)[];
}

const SyllabusWeek: React.FC<SyllabusWeekProps> = ({ week, title, overview }) => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
          <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">{typeof week === 'number' ? `Week ${week}:` : `${week}:`}</strong> {title}
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>
          <ul className={`list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5 ${typeof week === 'number' ? 'lg:gap-5' : ''}`}>
            {overview.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
}

const Syllabus = () => {
  const [weekIndex, setWeekIndex] = useState(0)
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

  const syllabusData = [
    {
      week: 1,
      title: "Understanding the Web and the Backend",
      overview: [
        "Learn how the web works behind the scenes.",
        "Understand the relationship between clients, servers, and databases.",
        "AI will help visualize how data travels from the browser to the backend.",
        <><strong className="font-semibold">Outcome:</strong> You can explain what a backend does and how it powers websites.</>
      ]
    },
    {
      week: 2,
      title: "Introduction to JavaScript for Beginners",
      overview: [
        "Learn the basics of JavaScript — variables, data types, and simple functions.",
        "Use AI to generate and explain code examples.",
        <><strong className="font-semibold">Outcome:</strong> You can read and write basic JavaScript and understand what it does.</>
      ]
    },
    {
      week: 3,
      title: "Working with Logic and Data",
      overview: [
        "Learn how to use conditionals, loops, arrays, and objects in JavaScript.",
        "AI will help create small practice challenges and explain the logic step-by-step.",
        <><strong className="font-semibold">Outcome:</strong> You can store and process data in code confidently.</>
      ]
    },
    {
      week: 4,
      title: "Understanding Node.js and the Server",
      overview: [
        "Discover what Node.js is and why it’s used for backend development.",
        "Set up your first Node.js project and run a simple server (with AI guidance).",
        <><strong className="font-semibold">Outcome:</strong> You can start and stop a basic server on your computer.</>
      ]
    },
    {
      week: 5,
      title: "Building with Express",
      overview: [
        "Learn how Express makes server development easier.",
        "Create routes and send responses to the browser.",
        "AI will generate boilerplate code for you to customize.",
        <><strong className="font-semibold">Outcome:</strong> You can create and test simple API routes.</>
      ]
    },
    {
      week: 6,
      title: "Working with Data (CRUD Operations)",
      overview: [
        "Understand how to create, read, update, and delete data.",
        "Use a simple JSON file or in-memory storage to simulate a database.",
        "AI helps write CRUD route handlers and explain each step.",
        <><strong className="font-semibold">Outcome:</strong> You can build a small RESTful API with data operations.</>
      ]
    },
    {
      week: 7,
      title: "Introduction to Databases",
      overview: [
        "Learn what databases are and how they store information.",
        "Connect your app to a simple database like SQLite or MongoDB.",
        "AI assists in generating connection and query code.",
        <><strong className="font-semibold">Outcome:</strong> You can save and retrieve data from a database.</>
      ]
    },
    {
      week: 8,
      title: "Authentication Basics",
      overview: [
        "Understand user login, passwords, and tokens.",
        "Simulate a login process using JavaScript logic.",
        "AI helps explain security concepts and hashing examples.",
        <><strong className="font-semibold">Outcome:</strong> You understand how authentication works in a backend system.</>
      ]
    },
    {
      week: 9,
      title: "Error Handling and Debugging",
      overview: [
        "Learn how to handle errors and fix bugs using AI.",
        "Practice reading AI explanations to trace and correct issues.",
        <><strong className="font-semibold">Outcome:</strong> You can identify and fix simple backend problems confidently.</>
      ]
    },
    {
      week: 10,
      title: "Deploying Your Backend",
      overview: [
        "Learn how to put your project online using services like Render or Railway.",
        "AI will guide you through deployment commands and setup steps.",
        <><strong className="font-semibold">Outcome:</strong> You can deploy your API and share it publicly.</>
      ]
    },
    {
      week: 11,
      title: "Final Project — Building with AI Assistance",
      overview: [
        "Choose a small project like a notes app or task manager.",
        "Work with AI to generate, structure, and debug your backend code.",
        <><strong className="font-semibold">Outcome:</strong> You’ll have a working backend project built collaboratively with AI.</>
      ]
    },
    {
      week: 12,
      title: "Presentation and Reflection",
      overview: [
        "Present your project and explain how AI helped in the process.",
        "Reflect on what you learned about backend logic and problem-solving.",
        <><strong className="font-semibold">Outcome:</strong> You can confidently describe how backends work and how to use AI effectively in development.</>
      ]
    },
    {
      week: "Assessment",
      title: "",
      overview: [
        <><strong className="mr-3">Weekly Mini-Projects:</strong> Practical coding assignments to reinforce concepts (40%).</>,
        <><strong className="mr-3">Quizzes:</strong> Short quizzes to check understanding of key concepts (20%).</>,
        <><strong className="mr-3">Final Project:</strong> A complete backend application built with AI assistance (30%).</>,
        <><strong className="mr-3">Participation:</strong> Active engagement in discussions and project presentations (10%).</>
      ]
    }
  ];



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
      setWeekIndex(prevIndex => {
        if (prevIndex < syllabusData.length - 1) {
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

  const setCurrentWeek = (index: number) => {
    setWeekIndex(index);
    setSeconds(1);
    //backToTop();
  }


  return (
    <section className="mb-14">
      <header className="flex items-center mb-5">
        <h2 className="text-primary text-2xl font-semibold">Syllabus</h2>
        <div className="w-10 h-10 ml-4 playBtnContainer">
          <CircularProgressbar background={true} styles={{ trail: { stroke: "#ffffff" }, path: { stroke: "#45b39d" } }} value={seconds * 10} />
          <button onClick={handleClickPausePlayBtn} className="btn btn-sm btn-circle bg-primary text-white z-30 playBtn"> {status === "play" ? <PauseIcon className="w-5" /> : <PlayIcon className="w-5" />}</button>
        </div>
      </header>

      <SyllabusWeek {...syllabusData[weekIndex]} />

      <h2 className="text-primary text-2xl font-semibold mt-14">Time Table</h2>

      <section className="bg-white grid grid-cols-1 mt-5">

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 0 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 1:</strong> Understanding the Web and the Backend
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Learn how the web works behind the scenes, understand the relationship between clients, servers, and databases, and see how AI can visualize data travel.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can explain what a backend does and how it powers websites.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 1 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 2:</strong> Introduction to JavaScript for Beginners
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Learn the basics of JavaScript (variables, data types, functions) using AI to generate and explain code examples.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can read and write basic JavaScript and understand what it does.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 2 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 3:</strong> Working with Logic and Data
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Learn how to use conditionals, loops, arrays, and objects in JavaScript, with AI-driven practice challenges.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can store and process data in code confidently.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 3 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 4:</strong> Understanding Node.js and the Server
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Discover what Node.js is, why it’s used for backend development, and set up your first Node.js project with AI guidance.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can start and stop a basic server on your computer.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 4 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 5:</strong> Building with Express
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Learn how Express simplifies server development, create routes, and send responses, using AI to generate boilerplate code.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can create and test simple API routes.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 5 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 6:</strong> Working with Data (CRUD Operations)
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Understand how to create, read, update, and delete (CRUD) data using a simple JSON file or in-memory storage, with AI assistance for route handlers.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can build a small RESTful API with data operations.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 6 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 7:</strong> Introduction to Databases
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Learn what databases are, how they store information, and connect your app to a simple database like SQLite or MongoDB with AI-generated code.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can save and retrieve data from a database.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 7 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 8:</strong> Authentication Basics
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Understand user login, passwords, and tokens by simulating a login process, with AI explaining security concepts.</li>
              <li><strong className="font-semibold">Outcome:</strong> You understand how authentication works in a backend system.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 8 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 9:</strong> Error Handling and Debugging
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Learn how to handle errors and fix bugs using AI explanations to trace and correct issues.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can identify and fix simple backend problems confidently.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 9 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 10:</strong> Deploying Your Backend
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Learn how to put your project online using services like Render or Railway, with AI guiding you through deployment.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can deploy your API and share it publicly.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 10 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 11:</strong> Final Project — Building with AI Assistance
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Choose a small project and work with AI to generate, structure, and debug your backend code.</li>
              <li><strong className="font-semibold">Outcome:</strong> You’ll have a working backend project built collaboratively with AI.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 11 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 12:</strong> Presentation and Reflection
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li>Present your project, explain how AI helped, and reflect on what you learned about backend logic and problem-solving.</li>
              <li><strong className="font-semibold">Outcome:</strong> You can confidently describe how backends work and how to use AI effectively in development.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 12 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Assessment:</strong>
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
              <li><strong className="mr-3">Weekly Mini-Projects:</strong> Practical coding assignments to reinforce concepts (40%).</li>
              <li><strong className="mr-3">Quizzes:</strong> Short quizzes to check understanding of key concepts (20%).</li>
              <li><strong className="mr-3">Final Project:</strong> A complete backend application built with AI assistance (30%).</li>
              <li><strong className="mr-3">Participation:</strong> Active engagement in discussions and project presentations (10%).</li>
            </ul>
          </div>
        </div>
      </section>

    </section>
  )
}

export default Syllabus