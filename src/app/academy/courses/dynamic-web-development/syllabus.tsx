"use client"

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Week1 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3" >
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
          <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 1:</strong>  Introduction to JavaScript
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>What is JavaScript?: Purpose, history, and use in web development.</li>
            <li>Setting Up Your Environment: Using the browser console, code editors (VS Code).</li>
            <li>Embedding JavaScript: Inline, internal, and external scripts in HTML.</li>
            <li>Variables and Data Types: let, const, var, data types (number, string, boolean, null, undefined, symbol).</li>
            <li>Operators: Arithmetic, assignment, comparison, logical, and conditional (? :) operators.</li>
            <li>Conditionals: if, else if, else, and switch.</li>
            <li>Loops: for, while, do...while, and for...of.</li>
            <li>Exercises</li>
          </ul>
        </div>
      </li>
    </ul>

  )
}

const Week2 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 2:</strong> Objects and Arrays
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Javascript Objects:</h4>
          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Javascript objects basics</li>
            <li>Object Creation: Different ways to create objects (object literals, Object() constructor, Object.create()).</li>
            <li>Properties and Methods: Understanding properties (key-value pairs) and methods (functions as values in objects).</li>
            <li>Accessing Properties: Dot notation (object.property) and bracket notation (object[&apos;property&apos;]).</li>
            <li>Object Manipulation: Adding properties, Updating properties, Deleting properties.</li>
            <li>Object Methods: Object.keys(), Object.values().</li>
          </ul>

          <h4 className="font-bold mt-5">Javascript Arrays:</h4>
          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Javascript arrays basics</li>
            <li>Array creation, manipulation (push, pop, shift, unshift etc...)</li>
            <li>Array Iteration: for, forEach, for...of</li>
            <li>Searching and Filtering Arrays</li>
            <li>Other Array methods</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week3 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 3:</strong> Exercises:
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>
          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5">
            <li>Build an application that makes use of arrays and objects</li>
          </ul>

          <h4 className="font-bold mt-4">Possible Options:</h4>
          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Todo List</li>
            <li>Contact Book</li>
            <li>Flashcard App</li>
            <li>Budget Tracker</li>
            <li>Recipe App</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week4 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 4:</strong> DOM Manipulation
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Introduction to the Document Object Model (DOM): Understanding the DOM tree.</li>
            <li>Selecting Elements: Using getElementById, querySelector, and querySelectorAll. </li>
            <li>Modifying Elements: Changing text content, styles, attributes, and adding/removing classes.</li>

            <li>Creating and Deleting Elements.</li>
            <li>Events: Event listeners, types of events (click, mouseover, keyUp, etc.), and event propagation (bubbling vs. capturing).</li>
            <li>Exercises</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week5and6 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 5 and 6:</strong>JavaScript in the Browser
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">

          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Browser APIs: window, document, console, alert, confirm, prompt.</li>
            <li>Working with Forms: Accessing form data, form validation.</li>
            <li>Timers: setTimeout, setInterval, and clearing them.</li>
            <li>Exercises</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week7 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 7:</strong>Advanced JavaScript and ES6+ Features
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Modern JavaScript (ES6+):</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Spread and rest operators.</li>
            <li>Template literals</li>
            <li>Modules in JavaScript: import and export.</li>
            <li>NPM and Packages: Installing and using external libraries with npm.</li>
            <li>Local Storage vs Session Storage</li>
            <li>Exercises</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week8 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 8:</strong>Advanced JavaScript and ES6+ Features II
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          
          <h4 className="font-bold">Asynchronous JavaScript:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Introduction to callbacks, Promises, and async/await.</li>
            <li>Making API requests with Fetch.</li>
          </ul>

          <h4 className="font-bold mt-5">Error Handling and Debugging:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Using try, catch for error handling.</li>
          </ul>

          <h4 className="font-bold mt-5">Project: Build an app using the Fetch API.</h4>
        </div>
      </li>
    </ul>
  )
}

const Week9 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 9:</strong> Introduction to React
        </h6>
      </header>

      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">React Basics:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Setting up a React project with Create React App.</li>
            <li>Setting up a React project with Vite.</li>
            <li>Understanding JSX and the component-based architecture.</li>
          </ul>

          <h4 className="font-bold mt-5">Components and Props:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Building functional components and passing props.</li>
          </ul>

          <h4 className="font-bold mt-5">Exercise</h4>
        </div>
      </li>
    </ul>
  )
}

const Week10 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 10:</strong> React State Management
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">State Management:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Using useState to manage component state.</li>
            <li>Updating state and handling user interactions.</li>
          </ul>

          <h4 className="font-bold mt-5">React Events and Forms:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Handling events in React and managing forms.</li>
          </ul>

          <h4 className="font-bold mt-5">Exercises</h4>
        </div>
      </li>
    </ul>
  )
}

const Week11 = ()=>{
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 11:</strong>React Router
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">React Router Basics:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Setting up React Router for single-page applications.</li>
            <li>Routing between pages and components.</li>
          </ul>

          <h4 className="font-bold mt-4">Component Lifecycle and Side Effects</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Using useEffect for side effects and data fetching.</li>
          </ul>

          <h4 className="font-bold mt-4">Project</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Create a single-page React app with basic routing and interactive components.</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week12and13 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 12 and 13:</strong>Advanced React Concepts
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Hooks and Advanced State Management:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Understanding custom hooks.</li>
            <li>Intro to useReducer for more complex state management.</li>
          </ul>

          <h4 className="font-bold mt-4">Context API for Global State:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Using React Context for shared state.</li>
          </ul>

          <h4 className="font-bold mt-4">Advanced React Router:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Nested routes and route parameters.</li>
          </ul>

          <h4 className="font-bold mt-4">Project:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Build a feature-rich React application, such as a blog or e-commerce site, with dynamic routing and global state.</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week14and15 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 14 and 15:</strong>Project Work & Deployment
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Full-Stack Project:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Front-end integration with back-end APIs (optional REST API or Firebase)..</li>
          </ul>

          <h4 className="font-bold mt-5">Deployment and Optimization</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Building and optimizing for production</li>
            <li>Deployment strategies: hosting on platforms like Netlify, Vercel, or GitHub Pages.</li>
          </ul>

          <h4 className="font-bold mt-5">Project:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
            <li>Complete and deploy the capstone project.</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week16 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 16:</strong>Course Wrap-Up and Career Preparation
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Resume tips for front-end developers</h4>
        </div>
      </li>
    </ul>
  )
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

  const weeks = [
    <Week1 key="week1" />,
    <Week2 key="week2" />,
    <Week3 key="week3" />,
    <Week4 key="week4" />,
    <Week5and6 key="week5and6" />,
    <Week7 key="week7" />,
    <Week8 key="week8" />,
    <Week9 key="week9" />,
    <Week10 key="week10" />,
    <Week11 key="week11" />,
    <Week12and13 key="week12and13" />,
    <Week14and15 key="week14and15" />,
    <Week16 key="week16" />
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
      setWeekIndex(prevIndex => {
        if (prevIndex < weeks.length - 1) {
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

      {weeks[weekIndex]}

      <h2 className="text-primary text-2xl font-semibold mt-14">Time Table</h2>

      <section className="bg-white grid grid-cols-1 mt-5">

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 0 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 1:</strong> Introduction to JavaScript
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>What is JavaScript?: Purpose, history, and use in web development.</li>
              <li>Setting Up Your Environment: Using the browser console, code editors (VS Code).</li>
              <li>Embedding JavaScript: Inline, internal, and external scripts in HTML.</li>
              <li>Variables and Data Types: let, const, var, data types (number, string, boolean, null, undefined, symbol).</li>
              <li>Operators: Arithmetic, assignment, comparison, logical, and conditional (? :) operators.</li>
              <li>Conditionals: if, else if, else, and switch.</li>
              <li>Loops: for, while, do...while, and for...of.</li>
              <li>Exercises</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 1 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 2:</strong> Objects and Arrays
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Javascript Objects:</h4>
            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Javascript objects basics</li>
              <li>Object Creation: Different ways to create objects (object literals, Object() constructor, Object.create()).</li>
              <li>Properties and Methods: Understanding properties (key-value pairs) and methods (functions as values in objects).</li>
              <li>Accessing Properties: Dot notation (object.property) and bracket notation (object[&apos;property&apos;]).</li>
              <li>Object Manipulation: Adding properties, Updating properties, Deleting properties.</li>
              <li>Object Methods: Object.keys(), Object.values().</li>
            </ul>

            <h4 className="font-bold mt-5">Javascript Arrays:</h4>
            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Javascript arrays basics</li>
              <li>Array creation, manipulation (push, pop, shift, unshift etc...)</li>
              <li>Array Iteration: for, forEach, for...of</li>
              <li>Searching and Filtering Arrays</li>
              <li>Other Array methods</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 2 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 3:</strong> Exercises
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Build an application that makes use of arrays and objects</li>
            </ul>

            <h4 className="font-bold mt-4">Possible Options:</h4>
            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Todo List</li>
              <li>Contact Book</li>
              <li>Flashcard App</li>
              <li>Budget Tracker</li>
              <li>Recipe App</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 3 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 4:</strong>DOM Manipulation
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Introduction to the Document Object Model (DOM): Understanding the DOM tree.</li>
              <li>Selecting Elements: Using getElementById, querySelector, and querySelectorAll. </li>
              <li>Modifying Elements: Changing text content, styles, attributes, and adding/removing classes.</li>

              <li>Creating and Deleting Elements.</li>
              <li>Events: Event listeners, types of events (click, mouseover, keyUp, etc.), and event propagation (bubbling vs. capturing).</li>
              <li>Exercises</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 4 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 5 and 6:</strong>JavaScript in the Browser
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Browser APIs: window, document, console, alert, confirm, prompt.</li>
              <li>Working with Forms: Accessing form data, form validation.</li>
              <li>Timers: setTimeout, setInterval, and clearing them.</li>
              <li>Exercises</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 5 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 7:</strong>Advanced JavaScript and ES6+ Features
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Modern JavaScript (ES6+):</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Spread and rest operators.</li>
              <li>Template literals</li>
              <li>Modules in JavaScript: import and export.</li>
              <li>NPM and Packages: Installing and using external libraries with npm.</li>
              <li>Local Storage vs Session Storage</li>
              <li>Exercises</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 6 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 8:</strong>Advanced JavaScript and ES6+ Features II
          </div>

          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Asynchronous JavaScript:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Introduction to callbacks, Promises, and async/await.</li>
              <li>Making API requests with Fetch.</li>
            </ul>

            <h4 className="font-bold mt-5">Error Handling and Debugging:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Using try, catch for error handling.</li>
            </ul>

            <h4 className="font-bold mt-5">Project: Build an app using the Fetch API.</h4>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 7 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 9:</strong>Introduction to React
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">React Basics:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Setting up a React project with Create React App.</li>
              <li>Setting up a React project with Vite.</li>
              <li>Understanding JSX and the component-based architecture.</li>
            </ul>

            <h4 className="font-bold mt-5">Components and Props:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Building functional components and passing props.</li>
            </ul>

            <h4 className="font-bold mt-5">Exercise</h4>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 8 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 10:</strong> React State Management
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">State Management:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Using useState to manage component state.</li>
              <li>Updating state and handling user interactions.</li>
            </ul>

            <h4 className="font-bold mt-5">React Events and Forms:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Handling events in React and managing forms.</li>
            </ul>

            <h4 className="font-bold mt-5">Exercises</h4>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 9 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 11:</strong>React Router
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">React Router Basics:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Setting up React Router for single-page applications.</li>
              <li>Routing between pages and components.</li>
            </ul>

            <h4 className="font-bold mt-4">Component Lifecycle and Side Effects</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Using useEffect for side effects and data fetching.</li>
            </ul>

            <h4 className="font-bold mt-4">Project</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Create a single-page React app with basic routing and interactive components.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 10 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 12 and 13:</strong>Advanced React Concepts
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Hooks and Advanced State Management:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Understanding custom hooks.</li>
              <li>Intro to useReducer for more complex state management.</li>
            </ul>

            <h4 className="font-bold mt-4">Context API for Global State:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Using React Context for shared state.</li>
            </ul>

            <h4 className="font-bold mt-4">Advanced React Router:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Nested routes and route parameters.</li>
            </ul>

            <h4 className="font-bold mt-4">Project:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Build a feature-rich React application, such as a blog or e-commerce site, with dynamic routing and global state.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 11 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 14 - 15:</strong>Project Work & Deployment
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Full-Stack Project:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Front-end integration with back-end APIs (optional REST API or Firebase)..</li>
            </ul>

            <h4 className="font-bold mt-5">Deployment and Optimization</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Building and optimizing for production</li>
              <li>Deployment strategies: hosting on platforms like Netlify, Vercel, or GitHub Pages.</li>
            </ul>

            <h4 className="font-bold mt-5">Project:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-2">
              <li>Complete and deploy the capstone project.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 12 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 16:</strong> Course Wrap-Up and Career Preparation
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-5">Resume tips for front-end developers</h4>
          </div>
        </div>

        {/* <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 10 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 11:</strong>Integration and Collaboration Across Office Suite
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-5">
              <li>Copying and pasting data between Word, Excel, and PowerPoint.</li>
              <li>Embedding Excel charts in Word or PowerPoint </li>
              <li>Using Outlook with Word/Excel for emailing reports and presentations.</li>
              <li>Sharing documents through OneDrive or other cloud storage.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 11 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 12:</strong>Final Review and Hands-on Project
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-5">
              <li>Review of key topics from each module.</li>
              <li>Practical projects: </li>

              <ul className="list-disc list-outside flex flex-col gap-1 lg:gap-5 text-lg lg:text-xl pl-4 md:pl-5">
                <li>Create a business letter in Word.</li>
                <li>Develop a budget spreadsheet in Excel.</li>
                <li>Prepare a presentation in PowerPoint.</li>
                <li>Manage emails and tasks in Outlook.</li>
              </ul>

              <li>Final assessment and feedback.</li>
            </ul>
          </div>
        </div>


        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 12 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Assessment:</strong>
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-1 text-lg pl-4 md:pl-5 mt-5">
              <li><strong className="mr-3">Quizzes:</strong>After each module (10% of final grade)</li>
              <li><strong className="mr-3">Practical Assignments:</strong>Weekly assignments on Word, Excel, PowerPoint, and Outlook (40%)</li>
              <li><strong className="mr-3">Final Project:</strong>An integrated office project (30%)</li>
              <li><strong className="mr-3">Participation:</strong>Attendance and engagement in class activities (20%)</li>
            </ul>
          </div>
        </div> */}


























        {/* <div onClick={() => setCurrentWeek(1)} className={`${weekIndex === 1 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Week 2</h5>
          <p className="mt-2 xl:text-lg">The Agile Manifesto</p>
        </div>

        <div onClick={() => setCurrentWeek(2)} className={`${weekIndex === 2 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Week 3</h5>
          <p className="mt-2 xl:text-lg">Scrum Tools and Applications</p>
        </div>

        <div onClick={() => setCurrentWeek(3)} className={`${weekIndex === 3 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Week 4</h5>
          <p className="mt-2 xl:text-lg">Case Studies</p>
        </div>

        <div onClick={() => setCurrentWeek(4)} className={`${weekIndex === 4 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Week 5</h5>
          <p className="mt-2 xl:text-lg">Practical Applications and Mock Exam</p>
        </div> */}

      </section>

    </section>
  )
}

export default Syllabus