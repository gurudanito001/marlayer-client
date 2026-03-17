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
      title: "Introduction to React Native & Expo Environment",
      overview: [
        "Learn how React Native bridges JavaScript to native iOS and Android components.",
        "Set up the development environment: Node.js, Expo CLI, and VS Code.",
        "Run your first “Hello World” application using the Expo Go app on your physical device.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can initialize a React Native project and run it on a mobile phone.</>
      ]
    },
    {
      week: 2,
      title: "Core Components & JSX Fundamentals",
      overview: [
        "Deep dive into React Native core components: View, Text, Image, and ScrollView.",
        "Understanding how JSX translates to native mobile elements.",
        "Using AI to quickly generate complex component hierarchies and explain rendering cycles.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can build custom, reusable UI components for mobile screens.</>
      ]
    },
    {
      week: 3,
      title: "Styling & Layouts with Flexbox",
      overview: [
        "Mastering the StyleSheet API in React Native.",
        "Applying Flexbox for mobile: understanding differences from web Flexbox (e.g., default column direction).",
        "Handling safe areas, notches, and diverse screen sizes adaptively.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can design visually appealing, responsive layouts for any device.</>
      ]
    },
    {
      week: 4,
      title: "User Interaction & Form Handling",
      overview: [
        "Handling touches with Button, TouchableOpacity, and Pressable.",
        "Capturing user input using TextInput and managing keyboard behaviors (KeyboardAvoidingView).",
        "Implementing form validation and error state management.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can create interactive forms and process user input securely.</>
      ]
    },
    {
      week: 5,
      title: "Navigation: Stacks and Tabs",
      overview: [
        "Installing and configuring React Navigation.",
        "Implementing Stack Navigation to move between deeply nested screens.",
        "Implementing Tab Navigation for main app dashboards.",
        "Passing data and parameters between screens.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can architect complex multi-screen navigation flows.</>
      ]
    },
    {
      week: 6,
      title: "Lists, FlatList & Performance",
      overview: [
        "Displaying large datasets efficiently using FlatList and SectionList.",
        "Implementing pull-to-refresh and infinite scrolling pagination.",
        "Using AI to generate mock datasets for list rendering practice.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can render dynamic, high-performance lists without lagging the app.</>
      ]
    },
    {
      week: 7,
      title: "State Management & The Context API",
      overview: [
        "Managing local state with hooks (useState, useEffect).",
        "Lifting state up vs. using the Context API for global state management.",
        "Structuring global themes (Dark/Light mode) and user session data.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can manage complex data across your entire application cleanly.</>
      ]
    },
    {
      week: 8,
      title: "Mid-Term Project: Multi-Screen App",
      overview: [
        "Build a multi-screen application (e.g., Recipe Book or To-Do list).",
        "Integrate Navigation, Context API, Forms, and FlatLists.",
        "Use AI as a pair programmer to scaffold routes and debug UI issues.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You have built your first complete, functional mobile application.</>
      ]
    },
    {
      week: 9,
      title: "Networking & External APIs",
      overview: [
        "Fetching data from RESTful APIs using fetch() or Axios.",
        "Managing asynchronous states: loading spinners, error boundaries, and empty states.",
        "Using AI to generate API request boilerplates and handle complex JSON responses.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can connect your mobile app to a live backend database.</>
      ]
    },
    {
      week: 10,
      title: "Local Storage & Offline Support",
      overview: [
        "Persisting user data locally using AsyncStorage.",
        "Building offline-first experiences: caching API responses.",
        "Using AI to write data serialization and retrieval logic securely.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can build apps that remember user data even when closed.</>
      ]
    },
    {
      week: 11,
      title: "Authentication Flows",
      overview: [
        "Building a secure login and registration flow.",
        "Managing authentication tokens (JWT) and persistent login sessions.",
        "Protecting application routes based on authentication state.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You understand how to secure mobile apps and manage user logins.</>
      ]
    },
    {
      week: 12,
      title: "Native Device Features",
      overview: [
        "Accessing device hardware using Expo SDK.",
        "Implementing the Camera, Image Picker, and Location/GPS services.",
        "Asking for user permissions gracefully.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can build apps that utilize the phone's native hardware capabilities.</>
      ]
    },
    {
      week: 13,
      title: "Animations & Gestures",
      overview: [
        "Introduction to the React Native Animated API.",
        "Creating smooth transitions, fade-ins, and loading skeletons to improve UX.",
        "Handling swipe gestures and drag-and-drop interactions.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can create polished, professional-feeling user interfaces.</>
      ]
    },
    {
      week: 14,
      title: "App Publishing & Deployment Preparation",
      overview: [
        "Configuring app icons, splash screens, and app metadata.",
        "Understanding Expo Application Services (EAS) for cloud building.",
        "Generating standalone APKs for Android and TestFlight builds for iOS.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can prepare a production-ready application for the app stores.</>
      ]
    },
    {
      week: "15-16",
      title: "Final Capstone Project",
      overview: [
        "Architect and build a complete, portfolio-ready mobile app from scratch (e.g., E-commerce, Fitness Tracker).",
        "Integrate external APIs, local storage, native features, and navigation.",
        "Utilize AI to debug complex issues and refactor code for performance.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You graduate with a fully functional, store-ready mobile application.</>
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