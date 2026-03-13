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
      title: "Introduction to Computers and Operating Systems",
      overview: [
        "Understanding hardware vs. software.",
        "Basic computer components and their functions (CPU, RAM, storage, etc.)",
        "Navigating the Windows/macOS interface.",
        "File management: Creating, saving, renaming, moving, and deleting files and folders."
      ]
    },
    {
      week: 2,
      title: "Internet and Email Basics",
      overview: [
        "How to connect to the internet.",
        "Web browsers and basic search techniques.",
        "Introduction to email: creating accounts, sending/receiving emails.",
        "Basic internet safety and security (passwords, phishing, malware)."
      ]
    },
    {
      week: 3,
      title: "Getting Started with Microsoft Word",
      overview: [
        "Overview of Microsoft Word interface (ribbon, toolbars).",
        "Creating, saving, and opening documents.",
        "Basic text formatting: fonts, styles, sizes, and colors.",
        "Paragraph alignment, line spacing, and indentation."
      ]
    },
    {
      week: 4,
      title: "Advanced Features in Word",
      overview: [
        "Working with images, tables, and charts.",
        "Inserting headers, footers, and page numbers",
        "Using templates, themes, and styles.",
        "Proofing tools: Spell check, grammar check, and word count.",
        "Printing and exporting documents to PDF."
      ]
    },
    {
      week: 5,
      title: "Introduction to Microsoft Excel",
      overview: [
        "Overview of Microsoft Excel interface (ribbon, sheets, cells).",
        "Entering and formatting data (numbers, text).",
        "Basic formulas and functions (SUM, AVERAGE, etc.)",
        "Creating and formatting simple charts and graphs."
      ]
    },
    {
      week: 6,
      title: "Advanced Excel Techniques",
      overview: [
        "Working with multiple worksheets.",
        "Conditional formatting and data validation",
        "Sorting and filtering data.",
        "Introduction to pivot tables and basic data analysis."
      ]
    },
    {
      week: 7,
      title: "Introduction to Microsoft PowerPoint",
      overview: [
        "Overview of Microsoft PowerPoint interface.",
        "Creating and saving presentations",
        "Adding slides and using slide layouts.",
        "Inserting and formatting text, images, and graphics."
      ]
    },
    {
      week: 8,
      title: "Enhancing PowerPoint Presentations",
      overview: [
        "Working with animations and slide transitions.",
        "Adding multimedia (videos, audio) to presentations",
        "Using themes, templates, and master slides.",
        "Delivering and printing presentations (handouts, speaker notes)."
      ]
    },
    {
      week: 9,
      title: "Introduction to Microsoft Outlook",
      overview: [
        "Overview of Microsoft Outlook interface",
        "Setting up and managing email accounts",
        "Sending, receiving, and organizing emails (folders, rules).",
        "Attaching files and images to emails."
      ]
    },
    {
      week: 10,
      title: "Using Outlook for Office Productivity",
      overview: [
        "Managing the calendar (scheduling meetings, setting reminders).",
        "Creating and managing contacts.",
        "Using tasks and to-do lists for time management.",
        "Understanding email etiquette and best practices."
      ]
    },
    {
      week: 11,
      title: "Integration and Collaboration Across Office Suite",
      overview: [
        "Copying and pasting data between Word, Excel, and PowerPoint.",
        "Embedding Excel charts in Word or PowerPoint",
        "Using Outlook with Word/Excel for emailing reports and presentations.",
        "Sharing documents through OneDrive or other cloud storage."
      ]
    },
    {
      week: 12,
      title: "Final Review and Hands-on Project",
      overview: [
        "Review of key topics from each module.",
        "Practical projects: Create a business letter in Word, Develop a budget spreadsheet in Excel, Prepare a presentation in PowerPoint, Manage emails and tasks in Outlook.",
        "Final assessment and feedback."
      ]
    },
    {
      week: "Assessment",
      title: "",
      overview: [
        <><strong className="mr-3">Quizzes:</strong>After each module (10% of final grade)</>,
        <><strong className="mr-3">Practical Assignments:</strong>Weekly assignments on Word, Excel, PowerPoint, and Outlook (40%)</>,
        <><strong className="mr-3">Final Project:</strong>An integrated office project (30%)</>,
        <><strong className="mr-3">Participation:</strong>Attendance and engagement in class activities (20%)</>
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