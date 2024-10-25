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
          <strong className="mr-3">Week 1:</strong> Introduction to Computers and Operating Systems
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 lg:gap-5 text-lg lg:text-xl pl-4 md:pl-5 mt-5">
            <li>Understanding hardware vs. software.</li>
            <li>Basic computer components and their functions (CPU, RAM, storage, etc.) </li>
            <li>Navigating the Windows/macOS interface.</li>
            <li>File management: Creating, saving, renaming, moving, and deleting files and folders.</li>
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
          <strong className="mr-3">Week 2:</strong> Internet and Email Basics
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>
          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>How to connect to the internet.</li>
            <li>Web browsers and basic search techniques.</li>
            <li>Introduction to email: creating accounts, sending/receiving emails.</li>
            <li>Basic internet safety and security (passwords, phishing, malware).</li>
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
          <strong className="mr-3">Week 3:</strong> Getting Started with Microsoft Word
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>
          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Overview of Microsoft Word interface (ribbon, toolbars).</li>
            <li>Creating, saving, and opening documents.</li>
            <li>Basic text formatting: fonts, styles, sizes, and colors.</li>
            <li>Paragraph alignment, line spacing, and indentation.</li>
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
          <strong className="mr-3">Week 4:</strong>Advanced Features in Word
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Working with images, tables, and charts.</li>
            <li>Inserting headers, footers, and page numbers </li>
            <li>Using templates, themes, and styles.</li>
            <li>Proofing tools: Spell check, grammar check, and word count.</li>
            <li>Printing and exporting documents to PDF.</li>
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
          <strong className="mr-3">Week 5:</strong>Introduction to Microsoft Excel
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Overview of Microsoft Excel interface (ribbon, sheets, cells).</li>
            <li>Entering and formatting data (numbers, text).</li>
            <li>Basic formulas and functions (SUM, AVERAGE, etc.)</li>
            <li>Creating and formatting simple charts and graphs.</li>
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
          <strong className="mr-3">Week 6:</strong>Advanced Excel Techniques
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Working with multiple worksheets.</li>
            <li>Conditional formatting and data validation </li>
            <li>Sorting and filtering data.</li>
            <li>Introduction to pivot tables and basic data analysis.</li>
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
          <strong className="mr-3">Week 7:</strong>Introduction to Microsoft PowerPoint
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Overview of Microsoft PowerPoint interface.</li>
            <li>Creating and saving presentations </li>
            <li>Adding slides and using slide layouts.</li>
            <li>Inserting and formatting text, images, and graphics.</li>
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
          <strong className="mr-3">Week 8:</strong>Enhancing PowerPoint Presentations
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Working with animations and slide transitions.</li>
            <li>Adding multimedia (videos, audio) to presentations </li>
            <li>Using themes, templates, and master slides.</li>
            <li>Delivering and printing presentations (handouts, speaker notes).</li>
          </ul>
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
          <strong className="mr-3">Week 9:</strong>Introduction to Microsoft Outlook
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Overview of Microsoft Outlook interface</li>
            <li>Setting up and managing email accounts </li>
            <li>Sending, receiving, and organizing emails (folders, rules).</li>
            <li>Attaching files and images to emails.</li>
          </ul>
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
          <strong className="mr-3">Week 10:</strong>Using Outlook for Office Productivity
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Managing the calendar (scheduling meetings, setting reminders).</li>
            <li>Creating and managing contacts. </li>
            <li>Using tasks and to-do lists for time management.</li>
            <li>Understanding email etiquette and best practices.</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week11 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 11:</strong>Integration and Collaboration Across Office Suite
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li>Copying and pasting data between Word, Excel, and PowerPoint.</li>
            <li>Embedding Excel charts in Word or PowerPoint </li>
            <li>Using Outlook with Word/Excel for emailing reports and presentations.</li>
            <li>Sharing documents through OneDrive or other cloud storage.</li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

const Week12 = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Week 12:</strong>Final Review and Hands-on Project
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

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
      </li>
    </ul>
  )
}

const Assessment = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
      <header className="flex">
        <h6 className="text-primary relative -ml-2 text-lg sm:text-xl font-550 items-center">
            <span className="inline-block w-4 h-4 mr-2 lg:mr-6 rounded-full bg-primary"></span>
          <strong className="mr-3">Assessment:</strong>
        </h6>
      </header>
      <li className="border-l border-dashed border-l-primary flex flex-row items-start px-3 xl:px-10 pt-4">
        <div className="timeline-start mb-5 text-primary">
          <h4 className="font-semibold">Overview:</h4>

          <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
            <li><strong className="mr-3">Quizzes:</strong>After each module (10% of final grade)</li>
            <li><strong className="mr-3">Practical Assignments:</strong>Weekly assignments on Word, Excel, PowerPoint, and Outlook (40%)</li>
            <li><strong className="mr-3">Final Project:</strong>An integrated office project (30%)</li>
            <li><strong className="mr-3">Participation:</strong>Attendance and engagement in class activities (20%)</li>
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

  const weeks = [
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
    <Week11 key="week11" />,
    <Week12 key="week12" />,
    <Assessment key="assessment" />,
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
            <strong className="mr-3">Week 1:</strong> Introduction to Computers and Operating Systems
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Understanding hardware vs. software.</li>
              <li>Basic computer components and their functions (CPU, RAM, storage, etc.) </li>
              <li>Navigating the Windows/macOS interface.</li>
              <li>File management: Creating, saving, renaming, moving, and deleting files and folders.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 1 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 2:</strong> Internet and Email Basics
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>How to connect to the internet.</li>
              <li>Web browsers and basic search techniques.</li>
              <li>Introduction to email: creating accounts, sending/receiving emails.</li>
              <li>Basic internet safety and security (passwords, phishing, malware).</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 2 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 3:</strong> Getting Started with Microsoft Word
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Overview of Microsoft Word interface (ribbon, toolbars).</li>
              <li>Creating, saving, and opening documents.</li>
              <li>Basic text formatting: fonts, styles, sizes, and colors.</li>
              <li>Paragraph alignment, line spacing, and indentation.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 3 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 4:</strong>Advanced Features in Word
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Working with images, tables, and charts.</li>
              <li>Inserting headers, footers, and page numbers </li>
              <li>Using templates, themes, and styles.</li>
              <li>Proofing tools: Spell check, grammar check, and word count.</li>
              <li>Printing and exporting documents to PDF.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 4 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 5:</strong>Introduction to Microsoft Excel
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Overview of Microsoft Excel interface (ribbon, sheets, cells).</li>
              <li>Entering and formatting data (numbers, text).</li>
              <li>Basic formulas and functions (SUM, AVERAGE, etc.)</li>
              <li>Creating and formatting simple charts and graphs.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 5 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 6:</strong>Advanced Excel Techniques
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Working with multiple worksheets.</li>
              <li>Conditional formatting and data validation </li>
              <li>Sorting and filtering data.</li>
              <li>Introduction to pivot tables and basic data analysis.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 6 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 7:</strong>Introduction to Microsoft PowerPoint
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Overview of Microsoft PowerPoint interface.</li>
              <li>Creating and saving presentations </li>
              <li>Adding slides and using slide layouts.</li>
              <li>Inserting and formatting text, images, and graphics.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 7 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 8:</strong>Enhancing PowerPoint Presentations
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Working with animations and slide transitions.</li>
              <li>Adding multimedia (videos, audio) to presentations </li>
              <li>Using themes, templates, and master slides.</li>
              <li>Delivering and printing presentations (handouts, speaker notes).</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 8 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 9:</strong>Introduction to Microsoft Outlook
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Overview of Microsoft Outlook interface</li>
              <li>Setting up and managing email accounts </li>
              <li>Sending, receiving, and organizing emails (folders, rules).</li>
              <li>Attaching files and images to emails.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
          <input type="checkbox" name="my-accordion-1" />
          <div className={`collapse-title md:text-lg font-semibold  ${weekIndex === 9 ? "bg-primary text-white" : "bg-neutral text-primary"}`}>
            <strong className="mr-3">Week 10:</strong>Using Outlook for Office Productivity
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <ul className=" list-disc list-outside flex flex-col gap-3 text-lg pl-4 md:pl-5 mt-5">
              <li>Managing the calendar (scheduling meetings, setting reminders).</li>
              <li>Creating and managing contacts. </li>
              <li>Using tasks and to-do lists for time management.</li>
              <li>Understanding email etiquette and best practices.</li>
            </ul>
          </div>
        </div>

        <div className={`collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl`}>
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
        </div>


























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