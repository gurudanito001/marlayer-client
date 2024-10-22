"use client"

import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Week1 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3" >
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Week 1: Agile Methodology
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>

          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">What is Agile Methodology</li>
            <li className="font-light">Brief History of Agile Methodology</li>
            <li className="font-light">What would Agile Methodology look like?</li>
            <li className="font-light">Agile Values</li>
            <li className="font-light">The 12 Agile Principles</li>
            <li className="font-light">Benefits of the Agile Development Methodology</li>
            <li className="font-light">Real-life Scenarios and Case Studies</li>
            <li className="font-light">Why is it called Scrum</li>
            <li className="font-light">Scrum overview</li>
            <li className="font-light">What is Scrum</li>
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
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Week 2: The Agile Manifesto
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Scrum Principles and Practices</li>
            <li className="font-light">Scrum Roles:</li>
            <li className="font-light">Role of Scrum Master</li>
            <li className="font-light">Role of Product Owner</li>
            <li className="font-light">Role of Development Team</li>
            <li className="font-light">The Scrum Events in the Scrum Processes</li>
            <li className="font-light">Scrum Events</li>
            <li className="font-light">Artifacts of Scrum</li>
            <li className="font-light">Product Backlog</li>
            <li className="font-light">Sprint Backlog</li>
            <li className="font-light">Increment</li>
            <li className="font-light">Artifacts Execution</li>
            <li className="font-light">Sprint Execution</li>
            <li className="font-light">Scrum Values</li>
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
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Week 3: Scrum Tools and Application
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>
          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Jira</li>
            <li className="font-light">Introduction to Jira and Azure</li>
            <li className="font-light">Differences between Jira and Azure</li>
            <li className="font-light">Backlog Management and Agile Boards</li>
            <li className="font-light">Backlog Activities</li>
            <li className="font-light">Product Backlog</li>
            <li className="font-light">Sprint Backlog</li>
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
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Week 4: Case Studies
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-550">Overview:</h4>

          <ul className="font-light list-disc text-primary marker:text-green list-outside pl-6">
            <li className="font-light">Scrum Master&apos;s Role in Agile Transformation</li>
            <li className="font-light">Agile Manifesto</li>
            <li className="font-light">Examples of Agile</li>
            <li className="font-light">Advantages of the Scrum Methodology</li>
            <li className="font-light">Disadvantages of the Scrum Methodology</li>
            <li className="font-light">Coaching and Facilitation Techniques</li>
            <li className="font-light">Scrum Master as a Servant Leader</li>
            <li className="font-light">Principle Application and Case Studies</li>
            <li className="font-light">Exam Overview and Tips</li>
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
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 flex items-center">
          <div>
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          </div>
          Week 5: Practical Applications and Mock Exam
        </h6>
      </header>
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
    <Week5 key="week5" />,
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

      {weeks[weekIndex]}

      <h2 className="text-primary text-2xl font-semibold mt-14">Time Table</h2>

      <section className="bg-white grid grid-cols-1 md:grid-cols-2 mt-5 gap-7">

        <div onClick={() => setCurrentWeek(0)} className={`${weekIndex === 0 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
          <h5 className="font-550 xl:text-xl">Week 1</h5>
          <p className="mt-2 xl:text-lg">Agile Methodology</p>
        </div>

        <div onClick={() => setCurrentWeek(1)} className={`${weekIndex === 1 ? "bg-primary text-white" : "bg-neutral2 text-primary"} py-3 px-5 xl:py-5 xl:px-9 rounded-2xl xl:rounded-3xl shadow-md cursor-pointer`}>
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
        </div>

      </section>

    </section>
  )
}

export default Syllabus