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
      title: "Introduction to JavaScript",
      overview: [
        "What is JavaScript?: Purpose, history, and use in web development.",
        "Setting Up Your Environment: Using the browser console, code editors (VS Code).",
        "Embedding JavaScript: Inline, internal, and external scripts in HTML.",
        "Variables and Data Types: let, const, var, data types (number, string, boolean, null, undefined, symbol).",
        "Operators: Arithmetic, assignment, comparison, logical, and conditional (? :) operators.",
        "Conditionals: if, else if, else, and switch.",
        "Loops: for, while, do...while, and for...of.",
        "Exercises"
      ]
    },
    {
      week: 2,
      title: "Objects and Arrays",
      overview: [
        <><strong className="font-bold text-gray-900">Javascript Objects:</strong></>,
        "Javascript objects basics",
        "Object Creation: Different ways to create objects (object literals, Object() constructor, Object.create()).",
        "Properties and Methods: Understanding properties (key-value pairs) and methods (functions as values in objects).",
        "Accessing Properties: Dot notation (object.property) and bracket notation (object['property']).",
        "Object Manipulation: Adding properties, Updating properties, Deleting properties.",
        "Object Methods: Object.keys(), Object.values().",
        <><strong className="font-bold text-gray-900 mt-2 block">Javascript Arrays:</strong></>,
        "Javascript arrays basics",
        "Array creation, manipulation (push, pop, shift, unshift etc...)",
        "Array Iteration: for, forEach, for...of",
        "Searching and Filtering Arrays",
        "Other Array methods"
      ]
    },
    {
      week: 3,
      title: "Exercises",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Build an application that makes use of arrays and objects",
        <><strong className="font-bold text-gray-900 mt-2 block">Possible Options:</strong></>,
        "Todo List",
        "Contact Book",
        "Flashcard App",
        "Budget Tracker",
        "Recipe App"
      ]
    },
    {
      week: 4,
      title: "DOM Manipulation",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Introduction to the Document Object Model (DOM): Understanding the DOM tree.",
        "Selecting Elements: Using getElementById, querySelector, and querySelectorAll.",
        "Modifying Elements: Changing text content, styles, attributes, and adding/removing classes.",
        "Creating and Deleting Elements.",
        "Events: Event listeners, types of events (click, mouseover, keyUp, etc.), and event propagation (bubbling vs. capturing).",
        "Exercises"
      ]
    },
    {
      week: "5 and 6",
      title: "JavaScript in the Browser",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Browser APIs: window, document, console, alert, confirm, prompt.",
        "Working with Forms: Accessing form data, form validation.",
        "Timers: setTimeout, setInterval, and clearing them.",
        "Exercises"
      ]
    },
    {
      week: 7,
      title: "Advanced JavaScript and ES6+ Features",
      overview: [
        <><strong className="font-bold text-gray-900">Modern JavaScript (ES6+):</strong></>,
        "Spread and rest operators.",
        "Template literals",
        "Modules in JavaScript: import and export.",
        "NPM and Packages: Installing and using external libraries with npm.",
        "Local Storage vs Session Storage",
        "Exercises"
      ]
    },
    {
      week: 8,
      title: "Advanced JavaScript and ES6+ Features II",
      overview: [
        <><strong className="font-bold text-gray-900">Asynchronous JavaScript:</strong></>,
        "Introduction to callbacks, Promises, and async/await.",
        "Making API requests with Fetch.",
        <><strong className="font-bold text-gray-900 mt-2 block">Error Handling and Debugging:</strong></>,
        "Using try, catch for error handling.",
        <><strong className="font-bold text-gray-900 mt-2 block">Project:</strong> Build an app using the Fetch API.</>
      ]
    },
    {
      week: 9,
      title: "Introduction to React",
      overview: [
        <><strong className="font-bold text-gray-900">React Basics:</strong></>,
        "Setting up a React project with Create React App.",
        "Setting up a React project with Vite.",
        "Understanding JSX and the component-based architecture.",
        <><strong className="font-bold text-gray-900 mt-2 block">Components and Props:</strong></>,
        "Building functional components and passing props.",
        "Exercise"
      ]
    },
    {
      week: 10,
      title: "React State Management",
      overview: [
        <><strong className="font-bold text-gray-900">State Management:</strong></>,
        "Using useState to manage component state.",
        "Updating state and handling user interactions.",
        <><strong className="font-bold text-gray-900 mt-2 block">React Events and Forms:</strong></>,
        "Handling events in React and managing forms.",
        "Exercises"
      ]
    },
    {
      week: 11,
      title: "React Router",
      overview: [
        <><strong className="font-bold text-gray-900">React Router Basics:</strong></>,
        "Setting up React Router for single-page applications.",
        "Routing between pages and components.",
        <><strong className="font-bold text-gray-900 mt-2 block">Component Lifecycle and Side Effects:</strong></>,
        "Using useEffect for side effects and data fetching.",
        <><strong className="font-bold text-gray-900 mt-2 block">Project:</strong></>,
        "Create a single-page React app with basic routing and interactive components."
      ]
    },
    {
      week: "12 and 13",
      title: "Advanced React Concepts",
      overview: [
        <><strong className="font-bold text-gray-900">Hooks and Advanced State Management:</strong></>,
        "Understanding custom hooks.",
        "Intro to useReducer for more complex state management.",
        <><strong className="font-bold text-gray-900 mt-2 block">Context API for Global State:</strong></>,
        "Using React Context for shared state.",
        <><strong className="font-bold text-gray-900 mt-2 block">Advanced React Router:</strong></>,
        "Nested routes and route parameters.",
        <><strong className="font-bold text-gray-900 mt-2 block">Project:</strong></>,
        "Build a feature-rich React application, such as a blog or e-commerce site, with dynamic routing and global state."
      ]
    },
    {
      week: "14 and 15",
      title: "Project Work & Deployment",
      overview: [
        <><strong className="font-bold text-gray-900">Full-Stack Project:</strong></>,
        "Front-end integration with back-end APIs (optional REST API or Firebase).",
        <><strong className="font-bold text-gray-900 mt-2 block">Deployment and Optimization:</strong></>,
        "Building and optimizing for production",
        "Deployment strategies: hosting on platforms like Netlify, Vercel, or GitHub Pages.",
        <><strong className="font-bold text-gray-900 mt-2 block">Project:</strong></>,
        "Complete and deploy the capstone project."
      ]
    },
    {
      week: 16,
      title: "Course Wrap-Up and Career Preparation",
      overview: [
        "Resume tips for front-end developers"
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