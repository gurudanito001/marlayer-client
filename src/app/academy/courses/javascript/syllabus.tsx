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
      title: "Fundamentals, Data Types & Control Flow",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Introduction to JavaScript variables (let, const), scope, and primitive data types.",
        "Branching logic: if/else statements and switch cases.",
        "Repeating actions: for, while, and do-while loops.",
        "Writing reusable code with functions and arrow functions.",
        <><strong className="font-semibold text-gray-900 mt-2 block">Outcome:</strong></>,
        "You can write basic scripts, handle logic, and understand how JS stores and mutates data."
      ]
    },
    {
      week: 2,
      title: "DOM Manipulation & Event Handling",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Connecting JS to HTML: The Document Object Model (DOM).",
        "Selecting elements using querySelector and modifying styles/classes dynamically.",
        "Making the web interactive: Event listeners (clicks, inputs, form submissions).",
        <><strong className="font-semibold text-gray-900 mt-2 block">Mini-Project:</strong></>,
        "Build a dynamic To-Do list app where users can add, cross off, and delete items."
      ]
    },
    {
      week: 3,
      title: "Advanced Data Structures: Arrays & Objects",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Storing lists of data with Arrays and accessing their elements.",
        "Powerful array methods: map(), filter(), reduce(), and forEach().",
        "Storing structured data with Objects (key-value pairs).",
        "Object destructuring, the spread operator, and JSON basics.",
        <><strong className="font-semibold text-gray-900 mt-2 block">Outcome:</strong></>,
        "You can manipulate, filter, and transform complex datasets efficiently."
      ]
    },
    {
      week: 4,
      title: "Asynchronous JavaScript & APIs",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Understanding the Event Loop and synchronous vs asynchronous code.",
        "The modern way to handle async operations: Promises and async/await.",
        "Talking to servers: Fetching data from external REST APIs using Fetch.",
        <><strong className="font-semibold text-gray-900 mt-2 block">Mini-Project:</strong></>,
        "Build a Weather Dashboard that fetches and displays live data from a real weather API."
      ]
    },
    {
      week: 5,
      title: "Modern ES6+ & Capstone Architecture",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Modern syntax: template literals, default parameters, and modules (import/export).",
        "Graceful degradation: Try, catch, and finally blocks for error handling.",
        "Project scoping: Planning the features for your final data-driven web app.",
        "Setting up the file structure, modules, and Git repository."
      ]
    },
    {
      week: 6,
      title: "Capstone Final Polish & Launch",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Writing the core JavaScript logic and integrating necessary APIs.",
        "Handling edge cases, loading states, and API errors.",
        "Deploying the final web application live using Vercel or Netlify.",
        <><strong className="font-semibold text-gray-900 mt-2 block">Assessment Criteria:</strong></>,
        "Clean logic, successful API integration, and a fully functional live deployment."
      ]
    }
  ];

  return (
    <section className="mb-14 max-w-6xl font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Course Syllabus</h2>

      <div className="flex flex-col gap-4">
        {syllabusData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`w-full rounded-2xl transition-all duration-300 border ${isOpen
                  ? 'bg-white border-primary shadow-md'
                  : 'bg-white border-gray-200 hover:border-primary/50'
                }`}
            >
              <button
                onClick={() => toggleWeek(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg transition-colors ${isOpen ? 'text-[#45B1A0]' : 'text-gray-800'}`}>
                  <span className="font-normal opacity-70 mr-2 tracking-wide text-sm">
                    {typeof item.week === 'number' ? `Week ${item.week}:` : `${item.week}:`}
                  </span>
                  <span className={isOpen ? 'font-bold' : 'font-semibold'}>
                    {item.title}
                  </span>
                </span>
                <div className={`flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${isOpen ? 'bg-[#45B1A0]/10 text-[#45B1A0] rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
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

export default Syllabus;