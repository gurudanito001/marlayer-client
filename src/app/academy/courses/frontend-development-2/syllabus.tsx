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
      title: "Core JavaScript & ES6+ Fundamentals",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Variables (let, const), data types, and operators.",
        "Control flow: conditionals (if/else, switch) and loops (for, while).",
        "Functions: Declarations, arrow functions, and scope.",
        "ES6+ Features: Destructuring, spread/rest operators, and template literals.",
        "Using AI to explain JavaScript logic and generate practice exercises.",
      ]
    },
    {
      week: 2,
      title: "Data Structures & The DOM",
      overview: [
        <><strong className="font-bold text-gray-900">Working with Data:</strong></>,
        "Arrays: Iteration (map, filter, reduce) and manipulation methods.",
        "Objects: Creation, accessing properties, and methods.",
        <><strong className="font-bold text-gray-900 mt-2 block">DOM Manipulation:</strong></>,
        "Understanding the Document Object Model (DOM) tree.",
        "Selecting, modifying, creating, and deleting HTML elements via JS.",
        "Event Listeners: Handling clicks, form submissions, and keyboard events.",
      ]
    },
    {
      week: 3,
      title: "Asynchronous JS & API Integration",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Understanding the Call Stack, Event Loop, and Asynchronous programming.",
        "Callbacks, Promises, and modern async/await syntax.",
        "Making HTTP requests using the Fetch API.",
        "Error handling using try/catch blocks.",
        "AI-Assisted Debugging: Using AI to trace network errors and fix async logic.",
      ]
    },
    {
      week: 4,
      title: "Introduction to React & Vite",
      overview: [
        <><strong className="font-bold text-gray-900">React Basics:</strong></>,
        "Why React? Understanding the Virtual DOM and component-based architecture.",
        "Setting up a modern, blazing-fast React project using Vite.",
        "Understanding JSX syntax and rules.",
        <><strong className="font-bold text-gray-900 mt-2 block">Components and Props:</strong></>,
        "Building reusable functional components.",
        "Passing data dynamically using Props.",
      ]
    },
    {
      week: 5,
      title: "React State & Interactive UIs",
      overview: [
        <><strong className="font-bold text-gray-900">State Management:</strong></>,
        "Introduction to React Hooks: Using useState to manage component state.",
        "Handling user interactions and updating UI dynamically.",
        <><strong className="font-bold text-gray-900 mt-2 block">Forms and Events:</strong></>,
        "Controlled vs. Uncontrolled components.",
        "Handling complex form submissions and validation in React.",
      ]
    },
    {
      week: 6,
      title: "Side Effects & Data Fetching in React",
      overview: [
        <><strong className="font-bold text-gray-900">The useEffect Hook:</strong></>,
        "Understanding the component lifecycle and side effects.",
        "Fetching data from external REST APIs inside React components.",
        "Managing loading states, empty states, and error handling.",
        "Asking AI to generate mock APIs and explain dependency arrays.",
      ]
    },
    {
      week: 7,
      title: "Routing & Single Page Applications (SPAs)",
      overview: [
        <><strong className="font-bold text-gray-900">React Router:</strong></>,
        "Setting up React Router for seamless, page-reload-free navigation.",
        "Implementing dynamic routes and extracting URL parameters.",
        "Creating nested routes and 404 Not Found pages.",
        <><strong className="font-bold text-gray-900 mt-2 block">Mini-Project:</strong></>,
        "Build a multi-page movie discovery app fetching data from a public API."
      ]
    },
    {
      week: 8,
      title: "Advanced State & Performance",
      overview: [
        <><strong className="font-bold text-gray-900">Global State Management:</strong></>,
        "Prop drilling vs. The Context API.",
        "Setting up global state for things like User Authentication or Dark Mode.",
        <><strong className="font-bold text-gray-900 mt-2 block">Advanced Hooks:</strong></>,
        "Using useReducer for complex state logic.",
        "Performance optimization basics: useMemo and useCallback.",
      ]
    },
    {
      week: 9,
      title: "Next.js & The Modern Frontend",
      overview: [
        <><strong className="font-bold text-gray-900">Introduction to Next.js:</strong></>,
        "Why the industry moved to Next.js (Server-Side Rendering vs. Client-Side Rendering).",
        "Setting up a Next.js app with the App Router.",
        "File-based routing and layout structures.",
        "Optimizing SEO and performance automatically.",
      ]
    },
    {
      week: 10,
      title: "Backend Integration & Authentication",
      overview: [
        <><strong className="font-bold text-gray-900">Connecting the Dots:</strong></>,
        "Connecting your React/Next.js frontend to a Backend (Node.js or Firebase/Supabase).",
        "Implementing user authentication workflows (Login, Register, Logout).",
        "Protecting private routes and managing user sessions.",
        "Using AI to quickly scaffold auth flows and securely handle tokens.",
      ]
    },
    {
      week: 11,
      title: "Capstone Project: Build with AI",
      overview: [
        <><strong className="font-bold text-gray-900">Full-Stack Implementation:</strong></>,
        "Plan and architect a feature-rich web application (e.g., E-commerce, Dashboard, or SaaS interface).",
        "Use AI as a pair-programmer to generate UI components, unblock complex logic, and write boilerplate code.",
        "Integrate all concepts: State, Routing, API fetching, and Global Context.",
      ]
    },
    {
      week: 12,
      title: "Deployment, Optimization & Career Prep",
      overview: [
        <><strong className="font-bold text-gray-900">Deployment:</strong></>,
        "Deploying React apps to Netlify and Next.js apps to Vercel.",
        "Environment variables and production builds.",
        <><strong className="font-bold text-gray-900 mt-2 block">Career Readiness:</strong></>,
        "Polishing your GitHub portfolio and writing solid README files.",
        "Frontend developer resume tips and preparing for technical interviews.",
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