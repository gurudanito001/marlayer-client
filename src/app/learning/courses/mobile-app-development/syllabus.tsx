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
      title: "Understanding Mobile Apps",
      overview: [
        "Learn how mobile apps work and what React Native does.",
        "AI helps compare native vs hybrid apps and explain how one codebase runs on Android and iOS.",
        <><strong className="font-semibold">Outcome:</strong> You understand what React Native is and how mobile apps function.</>
      ]
    },
    {
      week: 2,
      title: "Setting Up the Development Environment",
      overview: [
        "Install Node.js, Expo, and VS Code.",
        "Run your first “Hello World” app using Expo Go.",
        "AI assists with installation and troubleshooting errors.",
        <><strong className="font-semibold">Outcome:</strong> You can run and test a basic app on your phone or emulator.</>
      ]
    },
    {
      week: 3,
      title: "JavaScript for Beginners",
      overview: [
        "Learn JavaScript basics — variables, data types, and functions.",
        "AI generates examples and quizzes to reinforce learning.",
        <><strong className="font-semibold">Outcome:</strong> You can write and understand basic JavaScript code.</>
      ]
    },
    {
      week: 4,
      title: "React Fundamentals",
      overview: [
        "Understand components, props, and JSX.",
        "AI helps generate simple UI components and explain how they render.",
        <><strong className="font-semibold">Outcome:</strong> You can create reusable components and understand how React builds the UI.</>
      ]
    },
    {
      week: 5,
      title: "Styling and Layout",
      overview: [
        "Learn Flexbox, colors, and spacing in React Native.",
        "AI helps create and customize screen designs.",
        <><strong className="font-semibold">Outcome:</strong> You can design visually appealing layouts.</>
      ]
    },
    {
      week: 6,
      title: "Navigation Between Screens",
      overview: [
        "Install React Navigation and set up stack and tab navigation.",
        "AI assists with navigation configuration.",
        <><strong className="font-semibold">Outcome:</strong> You can move between multiple screens in your app.</>
      ]
    },
    {
      week: 7,
      title: "User Interaction",
      overview: [
        "Learn how to handle button presses, inputs, and forms.",
        "AI helps build small interactive examples.",
        <><strong className="font-semibold">Outcome:</strong> You can capture and process user input.</>
      ]
    },
    {
      week: 8,
      title: "Mini Project — Multi-Screen App",
      overview: [
        "Build a small 2–3 screen app (e.g., Recipe or Notes app).",
        "AI helps scaffold routes and layouts.",
        <><strong className="font-semibold">Outcome:</strong> You’ve built your first multi-screen mobile app.</>
      ]
    },
    {
      week: 9,
      title: "State and Props Deep Dive",
      overview: [
        "Learn how data moves between components using useState and props.",
        "AI assists in explaining state flow and debugging data issues.",
        <><strong className="font-semibold">Outcome:</strong> You can manage data across screens confidently.</>
      ]
    },
    {
      week: 10,
      title: "Lists and FlatList",
      overview: [
        "Display lists of data using FlatList.",
        "AI helps you structure sample data and list items.",
        <><strong className="font-semibold">Outcome:</strong> You can render dynamic lists of data in your app.</>
      ]
    },
    {
      week: 11,
      title: "Fetching Data from APIs",
      overview: [
        "Learn how to connect your app to a backend.",
        "Use fetch() to retrieve data and display it.",
        "AI helps create API calls and error handling.",
        <><strong className="font-semibold">Outcome:</strong> You can integrate external data into your app.</>
      ]
    },
    {
      week: 12,
      title: "Local Data Storage",
      overview: [
        "Learn how to save data locally using AsyncStorage.",
        "AI helps you implement saving and retrieving user data.",
        <><strong className="font-semibold">Outcome:</strong> You can build apps that remember user data.</>
      ]
    },
    { week: 13, title: "Authentication Basics", overview: ["Simulate login and signup screens.", "AI explains authentication flow and helps design mock user logic.", <><strong className="font-semibold">Outcome:</strong> You understand how login systems work in apps.</>] },
    { week: 14, title: "Context API", overview: ["Use Context to manage app-wide state like user sessions.", "AI helps refactor multiple screens to use shared state.", <><strong className="font-semibold">Outcome:</strong> You can manage global app data cleanly.</>] },
    { week: 15, title: "Forms and Validation", overview: ["Build forms with validation for login or registration.", "AI generates validation functions and examples.", <><strong className="font-semibold">Outcome:</strong> You can handle user input securely and effectively.</>] },
    { week: 16, title: "Project — User-Based App", overview: ["Build a simple user-based app (e.g., To-do app with login).", "AI helps plan structure, generate code, and debug.", <><strong className="font-semibold">Outcome:</strong> You complete a functional user-based project.</>] },
    { week: 17, title: "Using Device Features", overview: ["Learn to use camera, image picker, or location.", "AI helps integrate and troubleshoot native APIs.", <><strong className="font-semibold">Outcome:</strong> You can access device capabilities in your app.</>] },
    { week: 18, title: "Animations and Transitions", overview: ["Add basic animations to improve UX.", "AI assists in writing animation code and transitions.", <><strong className="font-semibold">Outcome:</strong> You can create smooth and interactive interfaces.</>] },
    { week: 19, title: "Performance and Debugging", overview: ["Learn techniques to optimize and debug apps.", "AI helps identify performance bottlenecks.", <><strong className="font-semibold">Outcome:</strong> You can analyze and improve your app’s performance.</>] },
    { week: 20, title: "Testing", overview: ["Learn how to test components and screens.", "AI helps generate basic test cases and explain testing tools.", <><strong className="font-semibold">Outcome:</strong> You understand how to test app functionality.</>] },
    { week: 21, title: "Preparing for Deployment", overview: ["Learn how to build your app for Android and iOS using Expo.", "AI guides you through generating builds and managing assets.", <><strong className="font-semibold">Outcome:</strong> You can prepare a production-ready app.</>] },
    { week: "22-24", title: "Final Capstone Project", overview: ["Choose a simple app idea (e.g., Expense Tracker, Journal, or Fitness Tracker).", "AI helps plan, generate, and refine the project code.", "You’ll integrate navigation, data, and local storage.", <><strong className="font-semibold">Outcome:</strong> You complete and present a working mobile app built with AI assistance.</>] }
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
        {syllabusData.map((item, index) => (
          <div key={index} className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
            <input type="checkbox" name="my-accordion-1" />
            <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === index ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
              <strong className="mr-3">{typeof item.week === 'number' ? `Week ${item.week}:` : item.week === 'Assessment' ? `${item.week}:` : `Weeks ${item.week}:`}</strong> {item.title}
            </div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg pl-4 md:pl-5 mt-5">
                {item.overview.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

    </section>
  )
}

export default Syllabus