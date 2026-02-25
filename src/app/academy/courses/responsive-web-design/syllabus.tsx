"use client"

import { useEffect, useRef, useState, useMemo } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Week1 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3" >
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
          <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 1:</strong> Introduction to Responsive Web Design
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg lg:text-xl pl-4 md:pl-5 mt-5">
            <li>What is Responsive Web Design?</li>
            <li>Importance of responsive design in modern web development</li>
            <li>Difference between responsive, adaptive, and fluid design</li>
            <li>Understanding mobile-first design principles</li>

            <li>What is HTML?</li>
            <li>What is CSS?</li>
            <li>Setting up a basic HTML5 webpage with mobile-friendly meta tags</li>
            <li>Understanding HTML5 structure and semantic elements</li>
            <li>Understanding CSS3 properties for layout and styling</li>
          </ul>

          <h4 className="font-bold mt-5">Exercises:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg lg:text-xl pl-4 md:pl-5 mt-5">
            <li>Creating a simple HTML5 layout with responsive meta tags</li>
            <li>Styling a webpage using basic CSS3</li>
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
          <strong className="mr-3">Week 2:</strong> CSS Flexbox
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>
          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Introduction to Flexbox and its properties</li>
            <li>Creating flexible grids using Flexbox</li>
            <li>Horizontal and vertical alignment techniques with Flexbox</li>
            <li>Implementing responsive navigation menus with Flexbox</li>
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
          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Build a multi-column layout using Flexbox</li>
            <li>More Practice on building web pages using HTML5 and CSS3</li>
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
          <strong className="mr-3">Week 4:</strong>Media Queries and Breakpoints
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>CSS Media Queries: Syntax and usage</li>
            <li>Defining common breakpoints (mobile, tablet, desktop) </li>
            <li>Adjusting typography, layout, and elements for different screen sizes</li>
          </ul>

          <h4 className="font-bold mt-5">Exercises:</h4>

          <ul className="list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Build a responsive web page with breakpoints for mobile, tablet, and desktop</li>
            <li>Experiment with different layouts using media queries</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week5 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 5:</strong>CSS Grid for Responsive Layouts
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Introduction to CSS Grid Layout</li>
            <li>Differences between Grid and Flexbox for layout</li>
            <li>Building responsive grid-based layouts with CSS Grid</li>
            <li>Combining Grid and Flexbox for complex responsive designs</li>
          </ul>

          <h4 className="font-bold mt-5">Exercises:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Build a grid-based photo gallery that adapts to different screen sizes</li>
            <li>Combine Flexbox and Grid in a web layout</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week6 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 6:</strong>More practice.
        </h6>
      </header>
    </ul>
  )
}

const Week7 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 7:</strong>Using Responsive CSS Frameworks (Bootstrap)
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Introduction to Bootstrap and responsive design frameworks</li>
            <li>Setting up a project with Bootstrap</li>
            <li>Creating responsive navigation, grids, and components with Bootstrap</li>
            <li>Customizing Bootstrap themes and components</li>
          </ul>

          <h4 className="font-bold mt-5">Exercises:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Build a responsive website using Bootstrap framework</li>
            <li>Modify and customize Bootstrap components for a unique look</li>
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
          <strong className="mr-3">Week 8:</strong> More Practice
        </h6>
      </header>
    </ul>
  )
}

const Week9 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 9:</strong> Optimizing Images, Fonts, and Performance for Mobile
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Image optimization for responsive web design (srcset, sizes)</li>
            <li>Using responsive typography (viewport-based font scaling)</li>
            <li>Lazy loading images for performance optimization</li>
          </ul>

          <h4 className="font-bold mt-5">Exercises:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Optimize images using srcset for different screen resolutions</li>
            <li>Implement lazy loading for media assets</li>
            <li>More Practice</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}


const Week10 = ()=>{
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 10:</strong>Version Control (Git & Github) Fundamentals
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Introduction to Version Control and Git Basics:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>What is Version Control and Why it is Important</li>
            <li>Introduction to Git and GitHub</li>
            <li>Installing Git and Setting Up GitHub Account</li>
            <li>Setting up user identity (git config)</li>
            <li>Configuring aliases</li>
            <li>Basic Git Workflow with VS Code</li>
            <li>Branching and Merging</li>
          </ul>

          <h4 className="font-bold mt-4">Introduction to GitHub</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Understanding GitHub Repositories</li>
            <li>Creating and cloning a GitHub repository</li>
            <li>Pushing to a remote repository (git push)</li>
            <li>Setting up a GitHub Pages site</li>
            <li>Introduction to GitHub Pages</li>
            <li>Exercise</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week11and12 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 10 - 11:</strong>Capstone Project
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-bold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Build a fully responsive website from scratch using the skills acquired throughout the course. This project will include creating layouts, using media queries, Flexbox, CSS Grid, and responsive frameworks, as well as optimizing the site for performance and mobile devices.</li>
          </ul>

          <h4 className="font-bold">Assessment Criteria:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Responsive design across multiple screen sizes</li>
            <li>Use of Flexbox, Grid, and/or Bootstrap framework</li>
            <li>Performance optimization techniques</li>
            <li>Overall design aesthetics and user experience</li>
          </ul>
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

  const weeks = useMemo(() => [
    <Week1 key="week1" />,
    <Week2 key="week2" />,
    <Week3 key="week3" />,
    <Week4 key="week4" />,
    <Week5 key="week5" />,
    <Week6 key="week6" />,
    <Week7 key="week7" />,
    <Week8 key="week8" />,
    <Week9 key="week9" />,
    <Week10 key="week10" />,
    <Week11and12 key="week11and12" />
  ], []);



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
  }, [seconds, weeks])

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
            <strong className="mr-3">Week 1:</strong> Introduction to Responsive Web Design
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg lg:text-xl pl-4 md:pl-5 mt-5">
              <li>What is Responsive Web Design?</li>
              <li>Importance of responsive design in modern web development</li>
              <li>Difference between responsive, adaptive, and fluid design</li>
              <li>Understanding mobile-first design principles</li>

              <li>What is HTML?</li>
              <li>What is CSS?</li>
              <li>Setting up a basic HTML5 webpage with mobile-friendly meta tags</li>
              <li>Understanding HTML5 structure and semantic elements</li>
              <li>Understanding CSS3 properties for layout and styling</li>
            </ul>

            <h4 className="font-bold mt-5">Exercises:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg lg:text-xl pl-4 md:pl-5 mt-5">
              <li>Creating a simple HTML5 layout with responsive meta tags</li>
              <li>Styling a webpage using basic CSS3</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 1 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 2:</strong> CSS Flexbox
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Overview:</h4>
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Introduction to Flexbox and its properties</li>
              <li>Creating flexible grids using Flexbox</li>
              <li>Horizontal and vertical alignment techniques with Flexbox</li>
              <li>Implementing responsive navigation menus with Flexbox</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 2 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 3:</strong> Exercises
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Build a multi-column layout using Flexbox</li>
              <li>More Practice on building web pages using HTML5 and CSS3</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 3 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 4:</strong>Media Queries and Breakpoints
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>CSS Media Queries: Syntax and usage</li>
              <li>Defining common breakpoints (mobile, tablet, desktop) </li>
              <li>Adjusting typography, layout, and elements for different screen sizes</li>
            </ul>

            <h4 className="font-bold mt-5">Exercises:</h4>

            <ul className="list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Build a responsive web page with breakpoints for mobile, tablet, and desktop</li>
              <li>Experiment with different layouts using media queries</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 4 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 5:</strong>CSS Grid for Responsive Layouts
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Introduction to CSS Grid Layout</li>
              <li>Differences between Grid and Flexbox for layout</li>
              <li>Building responsive grid-based layouts with CSS Grid</li>
              <li>Combining Grid and Flexbox for complex responsive designs</li>
            </ul>

            <h4 className="font-bold mt-5">Exercises:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Build a grid-based photo gallery that adapts to different screen sizes</li>
              <li>Combine Flexbox and Grid in a web layout</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 5 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 6:</strong>More practice.
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 6 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 7:</strong>Using Responsive CSS Frameworks (Bootstrap)
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Introduction to Bootstrap and responsive design frameworks</li>
              <li>Setting up a project with Bootstrap</li>
              <li>Creating responsive navigation, grids, and components with Bootstrap</li>
              <li>Customizing Bootstrap themes and components</li>
            </ul>

            <h4 className="font-bold mt-5">Exercises:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Build a responsive website using Bootstrap framework</li>
              <li>Modify and customize Bootstrap components for a unique look</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 7 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 8:</strong>More Practice
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 8 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 9:</strong>Optimizing Images, Fonts, and Performance for Mobile
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Image optimization for responsive web design (srcset, sizes)</li>
              <li>Using responsive typography (viewport-based font scaling)</li>
              <li>Lazy loading images for performance optimization</li>
            </ul>

            <h4 className="font-bold mt-4">Exercises:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Optimize images using srcset for different screen resolutions</li>
              <li>Implement lazy loading for media assets</li>
              <li>More Practice</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 9 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 10:</strong>Version Control (Git & Github) Fundamentals
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Introduction to Version Control and Git Basics:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>What is Version Control and Why it is Important</li>
              <li>Introduction to Git and GitHub</li>
              <li>Installing Git and Setting Up GitHub Account</li>
              <li>Setting up user identity (git config)</li>
              <li>Configuring aliases</li>
              <li>Basic Git Workflow with VS Code</li>
              <li>Branching and Merging</li>
            </ul>

            <h4 className="font-bold mt-4">Introduction to GitHub</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Understanding GitHub Repositories</li>
              <li>Creating and cloning a GitHub repository</li>
              <li>Pushing to a remote repository (git push)</li>
              <li>Setting up a GitHub Pages site</li>
              <li>Introduction to GitHub Pages</li>
              <li>Exercise</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 10 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 11 - 12:</strong>Capstone Project
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <h4 className="font-bold mt-4">Overview:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Build a fully responsive website from scratch using the skills acquired throughout the course. This project will include creating layouts, using media queries, Flexbox, CSS Grid, and responsive frameworks, as well as optimizing the site for performance and mobile devices.</li>
            </ul>

            <h4 className="font-bold mt-5">Assessment Criteria:</h4>

            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Responsive design across multiple screen sizes</li>
              <li>Use of Flexbox, Grid, and/or Bootstrap framework</li>
              <li>Performance optimization techniques</li>
              <li>Overall design aesthetics and user experience</li>
            </ul>
          </div>
        </div>

        {/* <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 10 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 11:</strong>Integration and Collaboration Across Office Suite
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
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
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Review of key topics from each module.</li>
              <li>Practical projects: </li>

              <ul className="list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg lg:text-xl pl-4 md:pl-5">
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
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
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