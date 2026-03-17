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
      title: "HTML, CSS & Responsive Design Fundamentals",
      overview: [
        <><strong className="font-semibold text-white">Overview:</strong></>,
        "Understanding how the web works: HTML5 structure and semantic elements.",
        "CSS3 fundamentals: selectors, the box model, and basic styling.",
        "The core concepts of Responsive Web Design (RWD) and mobile-first principles.",
        "Using AI to explain CSS properties and generate semantic HTML structures.",
        <><strong className="font-semibold text-white mt-2 block">Outcome:</strong></>,
        "You can build and style a well-structured, mobile-friendly webpage from scratch."
      ]
    },
    {
      week: 2,
      title: "Layout Mastery: CSS Flexbox & Grid",
      overview: [
        <><strong className="font-semibold text-white">Overview:</strong></>,
        "Mastering 1D layouts with Flexbox: alignment, distribution, and wrapping.",
        "Mastering 2D layouts with CSS Grid: rows, columns, tracks, and gaps.",
        "Grid vs. Flexbox: Knowing exactly when to use which (and how to combine them).",
        <><strong className="font-semibold text-white mt-2 block">Mini-Project:</strong></>,
        "Build a responsive bento-box style portfolio gallery using both Flexbox and Grid."
      ]
    },
    {
      week: 3,
      title: "Modern UI Frameworks: Tailwind CSS & daisyUI",
      overview: [
        <><strong className="font-semibold text-white">Overview:</strong></>,
        "Shifting paradigms: Introduction to utility-first CSS with Tailwind.",
        "Rapid prototyping: Building layouts instantly without writing custom CSS files.",
        "Supercharging Tailwind by adding the daisyUI component library.",
        "Building complex UI elements (modals, drawers, accords) instantly.",
        <><strong className="font-semibold text-white mt-2 block">Mini-Project:</strong></>,
        "Build a modern SaaS pricing page using Tailwind utility classes and daisyUI."
      ]
    },
    {
      week: 4,
      title: "AI-Powered Workflows & Figma to Code",
      overview: [
        <><strong className="font-semibold text-white">Overview:</strong></>,
        "Bridging the gap between Design and Development.",
        "Using AI-powered Figma-to-code plugins (like Anima, Locofy, or Builder.io).",
        "Prompting AI models (like Gemini) to convert UI screenshots into functional Tailwind code.",
        "Cleaning up and refactoring AI-generated UI code for production.",
        <><strong className="font-semibold text-white mt-2 block">Outcome:</strong></>,
        "You can radically speed up your frontend workflow by leveraging AI design-to-code tools."
      ]
    },
    {
      week: 5,
      title: "Web Performance & Asset Optimization",
      overview: [
        <><strong className="font-semibold text-white">Overview:</strong></>,
        "The importance of Core Web Vitals and load times.",
        "Image optimization techniques (formats, srcset, and sizes attributes).",
        "Implementing lazy loading for images and media.",
        "Optimizing web font loading to prevent layout shifts.",
        <><strong className="font-semibold text-white mt-2 block">Outcome:</strong></>,
        "Your web pages will load blazingly fast on both 5G and slow 3G mobile networks."
      ]
    },
    {
      week: 6,
      title: "Version Control (Git/GitHub) & Deployment",
      overview: [
        <><strong className="font-semibold text-white">Overview:</strong></>,
        "Why professional teams rely on Version Control.",
        "Basic Git workflow: init, add, commit, push, and pull.",
        "Setting up a repository on GitHub.",
        "Hosting sites for free with GitHub Pages or Vercel.",
        <><strong className="font-semibold text-white mt-2 block">Outcome:</strong></>,
        "You can manage your codebase like a pro and deploy projects live to the internet."
      ]
    },
    {
      week: 7,
      title: "Capstone Part 1: Architecture & UI Build",
      overview: [
        <><strong className="font-semibold text-white">Overview:</strong></>,
        "Project scoping: Designing the UI/UX for your final responsive website.",
        "Setting up the project repository, Tailwind configuration, and folder structure.",
        "Using AI to brainstorm layouts and generate starter boilerplates.",
        "Building the mobile-first foundations of your application."
      ]
    },
    {
      week: 8,
      title: "Capstone Part 2: Final Polish & Launch",
      overview: [
        <><strong className="font-semibold text-white">Overview:</strong></>,
        "Fleshing out a fully responsive, multi-page website from scratch.",
        "Integrating Flexbox, Grid, and Tailwind CSS seamlessly.",
        "Testing across real mobile and desktop environments.",
        "Deploying the final product live to the web and submitting for review.",
        <><strong className="font-semibold text-white mt-2 block">Assessment Criteria:</strong></>,
        "Flawless responsiveness, semantic code, and successful live deployment."
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