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
      title: "Introduction to Responsive Web Design",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "What is Responsive Web Design?",
        "Importance of responsive design in modern web development",
        "Difference between responsive, adaptive, and fluid design",
        "Understanding mobile-first design principles",
        "What is HTML?",
        "What is CSS?",
        "Setting up a basic HTML5 webpage with mobile-friendly meta tags",
        "Understanding HTML5 structure and semantic elements",
        "Understanding CSS3 properties for layout and styling",
        <><strong className="font-bold text-gray-900 mt-2 block">Exercises:</strong></>,
        "Creating a simple HTML5 layout with responsive meta tags",
        "Styling a webpage using basic CSS3"
      ]
    },
    {
      week: 2,
      title: "CSS Flexbox",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Introduction to Flexbox and its properties",
        "Creating flexible grids using Flexbox",
        "Horizontal and vertical alignment techniques with Flexbox",
        "Implementing responsive navigation menus with Flexbox"
      ]
    },
    {
      week: 3,
      title: "Exercises",
      overview: [
        "Build a multi-column layout using Flexbox",
        "More Practice on building web pages using HTML5 and CSS3"
      ]
    },
    {
      week: 4,
      title: "Media Queries and Breakpoints",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "CSS Media Queries: Syntax and usage",
        "Defining common breakpoints (mobile, tablet, desktop)",
        "Adjusting typography, layout, and elements for different screen sizes",
        <><strong className="font-bold text-gray-900 mt-2 block">Exercises:</strong></>,
        "Build a responsive web page with breakpoints for mobile, tablet, and desktop",
        "Experiment with different layouts using media queries"
      ]
    },
    {
      week: 5,
      title: "CSS Grid for Responsive Layouts",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Introduction to CSS Grid Layout",
        "Differences between Grid and Flexbox for layout",
        "Building responsive grid-based layouts with CSS Grid",
        "Combining Grid and Flexbox for complex responsive designs",
        <><strong className="font-bold text-gray-900 mt-2 block">Exercises:</strong></>,
        "Build a grid-based photo gallery that adapts to different screen sizes",
        "Combine Flexbox and Grid in a web layout"
      ]
    },
    {
      week: 6,
      title: "More practice.",
      overview: [
        "Practical sessions to reinforce learned concepts."
      ]
    },
    {
      week: 7,
      title: "Using Responsive CSS Frameworks (Bootstrap)",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Introduction to Bootstrap and responsive design frameworks",
        "Setting up a project with Bootstrap",
        "Creating responsive navigation, grids, and components with Bootstrap",
        "Customizing Bootstrap themes and components",
        <><strong className="font-bold text-gray-900 mt-2 block">Exercises:</strong></>,
        "Build a responsive website using Bootstrap framework",
        "Modify and customize Bootstrap components for a unique look"
      ]
    },
    {
      week: 8,
      title: "More Practice",
      overview: [
        "Practical sessions to reinforce learned concepts."
      ]
    },
    {
      week: 9,
      title: "Optimizing Images, Fonts, and Performance for Mobile",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Image optimization for responsive web design (srcset, sizes)",
        "Using responsive typography (viewport-based font scaling)",
        "Lazy loading images for performance optimization",
        <><strong className="font-bold text-gray-900 mt-2 block">Exercises:</strong></>,
        "Optimize images using srcset for different screen resolutions",
        "Implement lazy loading for media assets",
        "More Practice"
      ]
    },
    {
      week: 10,
      title: "Version Control (Git & Github) Fundamentals",
      overview: [
        <><strong className="font-bold text-gray-900">Introduction to Version Control and Git Basics:</strong></>,
        "What is Version Control and Why it is Important",
        "Introduction to Git and GitHub",
        "Installing Git and Setting Up GitHub Account",
        "Setting up user identity (git config)",
        "Configuring aliases",
        "Basic Git Workflow with VS Code",
        "Branching and Merging",
        <><strong className="font-bold text-gray-900 mt-2 block">Introduction to GitHub:</strong></>,
        "Understanding GitHub Repositories",
        "Creating and cloning a GitHub repository",
        "Pushing to a remote repository (git push)",
        "Setting up a GitHub Pages site",
        "Introduction to GitHub Pages",
        "Exercise"
      ]
    },
    {
      week: "Week 11 - 12",
      title: "Capstone Project",
      overview: [
        <><strong className="font-bold text-gray-900">Overview:</strong></>,
        "Build a fully responsive website from scratch using the skills acquired throughout the course. This project will include creating layouts, using media queries, Flexbox, CSS Grid, and responsive frameworks, as well as optimizing the site for performance and mobile devices.",
        <><strong className="font-bold text-gray-900 mt-2 block">Assessment Criteria:</strong></>,
        "Responsive design across multiple screen sizes",
        "Use of Flexbox, Grid, and/or Bootstrap framework",
        "Performance optimization techniques",
        "Overall design aesthetics and user experience"
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
              className={`w-full rounded-2xl transition-all duration-300 border ${isOpen
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

export default Syllabus