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
      title: "Web Fundamentals & The Backend Ecosystem",
      overview: [
        "Understand the Client-Server model, HTTP protocols, and how the web functions behind the scenes.",
        "Introduction to APIs (Application Programming Interfaces) and RESTful architecture.",
        "Prompt Engineering 101: Using AI to break down and visualize complex system architectures.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can confidently explain backend concepts and use AI as a technical tutor to clarify advanced topics.</>
      ]
    },
    {
      week: 2,
      title: "Modern JavaScript for Backend Development",
      overview: [
        "Mastering ES6+ syntax: let/const, arrow functions, destructuring, and asynchronous programming (Promises & async/await).",
        "Introduction to the Node.js runtime and the V8 engine.",
        "Using AI to generate practice algorithms, refactor syntax, and explain asynchronous execution flows.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can write clean, modern JavaScript and leverage AI to accelerate your syntax mastery.</>
      ]
    },
    {
      week: 3,
      title: "Deep Dive into Node.js",
      overview: [
        "Working with the Node.js File System (fs), path modules, and understanding the Event Loop.",
        "Building a raw HTTP server from scratch without frameworks.",
        "AI-Assisted Debugging: Learning how to feed stack traces into AI to quickly identify and resolve Node.js errors.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You understand the core mechanics of a Node server and how to troubleshoot it efficiently.</>
      ]
    },
    {
      week: 4,
      title: "Building Scalable APIs with Express.js",
      overview: [
        "Setting up Express.js, handling routing, and understanding the request/response cycle.",
        "The power of Middleware: parsing JSON, handling CORS, and creating custom logger functions.",
        "Using AI to quickly scaffold Express boilerplate and generate custom middleware templates.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can spin up a fully functional, robust web server using the industry-standard Express framework.</>
      ]
    },
    {
      week: 5,
      title: "Database Design & SQL vs. NoSQL",
      overview: [
        "Relational vs. Non-Relational databases: When to use PostgreSQL vs. MongoDB.",
        "Data modeling, schema design, and defining relationships (One-to-Many, Many-to-Many).",
        "Using AI as a Database Architect to design optimal schemas and generate complex SQL queries or MongoDB aggregations.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can architect efficient databases for your products and use AI to write optimized queries.</>
      ]
    },
    {
      week: 6,
      title: "Data Management & CRUD Operations",
      overview: [
        "Connecting your Express application to a live database using ORMs/ODMs (like Mongoose or Prisma).",
        "Building out full CRUD (Create, Read, Update, Delete) RESTful endpoints.",
        "Leveraging AI to quickly generate mock data (seeding) to test your database connections.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can build APIs that persistently store, update, and retrieve data from a cloud database.</>
      ]
    },
    {
      week: 7,
      title: "Authentication, Authorization & Security",
      overview: [
        "Implementing secure user registration and login workflows.",
        "Understanding password hashing (bcrypt) and stateless authentication using JSON Web Tokens (JWT).",
        "Security Audits: Using AI to scan your code for common vulnerabilities (OWASP Top 10) and suggest security patches.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can securely manage users and protect sensitive API routes from unauthorized access.</>
      ]
    },
    {
      week: 8,
      title: "Advanced Backend Features",
      overview: [
        "Handling file uploads (images/documents) using Multer and cloud storage (AWS S3 / Cloudinary).",
        "Implementing pagination, sorting, and data filtering for large datasets.",
        "Asking AI for architectural advice on optimizing response times for heavy data requests.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can build enterprise-level features required by modern, data-heavy applications.</>
      ]
    },
    {
      week: 9,
      title: "Error Handling & Application Logging",
      overview: [
        "Building a centralized error-handling mechanism for your Express app.",
        "Implementing third-party logging tools to monitor application health in production.",
        "Using AI to decode cryptic server logs and write robust error-catching wrapper functions.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> Your application won't crash silently; you can catch, log, and resolve errors like a senior engineer.</>
      ]
    },
    {
      week: 10,
      title: "API Testing & Quality Assurance",
      overview: [
        "Introduction to automated testing using Jest and Supertest.",
        "Writing unit tests for individual functions and integration tests for API endpoints.",
        "AI-Driven Testing: Prompting AI to automatically generate comprehensive test suites and edge-cases for your routes.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You can ensure your product is bug-free and reliable before it reaches your users.</>
      ]
    },
    {
      week: 11,
      title: "Deployment, CI/CD, & Documentation",
      overview: [
        "Managing environment variables securely and preparing the app for production.",
        "Deploying the database and backend server using platforms like Render, Railway, or Heroku.",
        "Using AI to instantly generate professional API documentation (Swagger/OpenAPI) and Dockerfiles.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> Your backend is live on the internet, securely hosted, and professionally documented for frontend developers to use.</>
      ]
    },
    {
      week: 12,
      title: "Capstone Project & Portfolio Launch",
      overview: [
        "Architect and build a complete, portfolio-ready backend product from scratch.",
        "Utilize AI as your 'Senior Pair-Programmer' to unblock complex logic issues during the build.",
        "Project presentations, code reviews, and mock technical interviews.",
        <><strong className="font-semibold text-gray-900">Outcome:</strong> You graduate with a deployed, secure, and scalable backend product that proves your expertise to employers or investors.</>
      ]
    },
    {
      week: "Assessment",
      title: "Grading Breakdown",
      overview: [
        <><strong className="mr-3 text-gray-900">Weekly Mini-Projects:</strong> Practical API-building assignments to reinforce concepts (30%).</>,
        <><strong className="mr-3 text-gray-900">AI-Assisted Code Reviews:</strong> Submitting code for peer and instructor review focusing on security and efficiency (20%).</>,
        <><strong className="mr-3 text-gray-900">Capstone Project:</strong> A fully deployed, documented backend application (40%).</>,
        <><strong className="mr-3 text-gray-900">Participation:</strong> Active engagement in the Marlayer community and live Q&A sessions (10%).</>
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