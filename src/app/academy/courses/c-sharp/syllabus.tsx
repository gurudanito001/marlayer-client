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
      title: ".NET Basics, Variables & Control Flow",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Understanding the .NET ecosystem and setting up Visual Studio.",
        "Strong typing: Variables and basic data types (int, string, bool, double).",
        "Branching logic: if/else, switch statements, and ternary operators.",
        "Looping constructs: for, foreach, and while loops.",
        <><strong className="font-semibold text-gray-900 mt-2 block">Outcome:</strong></>,
        "You can navigate Visual Studio, build console apps, and handle basic logic."
      ]
    },
    {
      week: 2,
      title: "Object-Oriented Programming (OOP) Mastery",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Creating Classes, instantiating Objects, and using Constructors.",
        "Understanding Fields vs Properties and Access Modifiers.",
        "Code reusability with Inheritance (base and derived classes).",
        "Method overriding, Polymorphism, and defining contracts with Interfaces.",
        <><strong className="font-semibold text-gray-900 mt-2 block">Mini-Project:</strong></>,
        "Design a Role-Playing Game (RPG) character system using OOP principles."
      ]
    },
    {
      week: 3,
      title: "Collections & LINQ",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Moving beyond basic arrays: working with Lists and Dictionaries.",
        "Understanding Generic collections (<T>).",
        "Introduction to LINQ (Language Integrated Query).",
        "Filtering, sorting, and transforming data collections seamlessly.",
        <><strong className="font-semibold text-gray-900 mt-2 block">Outcome:</strong></>,
        "You can efficiently store, query, and manipulate large amounts of data in memory."
      ]
    },
    {
      week: 4,
      title: "Exception Handling & File I/O",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Anticipating errors: Try, catch, and finally blocks.",
        "Creating and throwing custom exceptions.",
        "Interacting with the file system: reading and writing text/JSON files.",
        "Understanding asynchronous programming basics (async/await, Tasks).",
        <><strong className="font-semibold text-gray-900 mt-2 block">Mini-Project:</strong></>,
        "Build a local data logger that safely writes and retrieves records to a JSON file."
      ]
    },
    {
      week: 5,
      title: "Capstone Architecture & Business Logic",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Planning a robust C# application (Console App or simple Web API).",
        "Structuring the project using class libraries and separating concerns.",
        "Setting up Entity Models and basic data storage.",
        "Implementing the core business logic."
      ]
    },
    {
      week: 6,
      title: "Capstone Polish & Code Review",
      overview: [
        <><strong className="font-semibold text-gray-900">Overview:</strong></>,
        "Refactoring for clean code and applying DRY principles.",
        "Thoroughly testing edge cases and handling exceptions.",
        "Writing clean documentation and XML comments.",
        "Final project presentation and code review.",
        <><strong className="font-semibold text-gray-900 mt-2 block">Assessment Criteria:</strong></>,
        "Strong application of OOP principles, error-free execution, and scalable code architecture."
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