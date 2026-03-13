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