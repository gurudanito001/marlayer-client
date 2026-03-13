"use client"

import { useState } from "react";

const Syllabus = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleWeek = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        "Discover what Node.js is and why it is used for backend development.",
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
        <><strong className="font-semibold">Outcome:</strong> You&apos;ll have a working backend project built collaboratively with AI.</>
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
      week: "Final Assessment",
      title: "",
      overview: [
        <><strong className="mr-3">Weekly Mini-Projects:</strong> Practical coding assignments to reinforce concepts (40%).</>,
        <><strong className="mr-3">Quizzes:</strong> Short quizzes to check understanding of key concepts (20%).</>,
        <><strong className="mr-3">Final Project:</strong> A complete backend application built with AI assistance (30%).</>,
        <><strong className="mr-3">Participation:</strong> Active engagement in discussions and project presentations (10%).</>
      ]
    }
  ];

  return (
    <section className="mb-14 max-w-6xl">
      <h2 className="text-primary text-3xl font-bold mb-8">Course Syllabus</h2>

      <div className="flex flex-col gap-4">
        {syllabusData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`w-full rounded-2xl transition-all duration-300 border ${
                isOpen
                  ? 'bg-white border-primary shadow-md'
                  : 'bg-white border-gray-200 hover:border-primary/50'
              }`}
            >
              <button
                onClick={() => toggleWeek(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg transition-colors ${isOpen ? 'font-bold text-[#45B1A0]' : 'font-medium text-gray-800'}`}>
                  {typeof item.week === 'number' ? `Week ${item.week}:` : `${item.week}:`} {item.title}
                </span>

                <div className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${isOpen ? 'bg-[#45B1A0]/10 text-[#45B1A0] rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  <ul className="list-disc list-outside flex flex-col gap-3 pl-5">
                    {item.overview.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Syllabus