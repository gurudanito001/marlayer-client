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
      title: "Computer Fundamentals & The Internet",
      overview: [
        "Understanding hardware, software, and basic computer components.",
        "Navigating the operating system and mastering file management (creating, saving, moving folders).",
        "Web browsers, effective search techniques, and setting up email accounts.",
        "Basic internet safety: managing passwords, avoiding phishing, and identifying malware."
      ]
    },
    {
      week: 2,
      title: "Document Creation with Microsoft Word",
      overview: [
        "Overview of the Microsoft Word interface and ribbon toolbars.",
        "Formatting mastery: fonts, alignment, line spacing, and styles.",
        "Working with visual elements: inserting images, tables, and charts.",
        "Professional touches: headers, footers, proofing tools, and exporting to PDF."
      ]
    },
    {
      week: 3,
      title: "Data Management with Microsoft Excel",
      overview: [
        "Navigating spreadsheets: workbooks, sheets, rows, and cells.",
        "Entering data and utilizing basic formulas (SUM, AVERAGE, COUNT).",
        "Visualizing data by creating and formatting simple charts and graphs.",
        "Organizing information using sorting, filtering, and basic conditional formatting."
      ]
    },
    {
      week: 4,
      title: "Engaging Presentations with PowerPoint",
      overview: [
        "Setting up presentations, adding slides, and using master layouts.",
        "Inserting and formatting text, images, and multimedia (audio/video).",
        "Keeping audiences engaged with slide transitions and custom animations.",
        "Best practices for delivering presentations and printing speaker notes."
      ]
    },
    {
      week: 5,
      title: "Professional Communication & Cloud Integration",
      overview: [
        "Mastering Microsoft Outlook: organizing emails, setting rules, and calendar management.",
        "Task management, scheduling meetings, and professional email etiquette.",
        "Integration: Embedding Excel charts into Word or PowerPoint seamlessly.",
        "Cloud collaboration: Saving, sharing, and co-editing documents using OneDrive/Google Drive."
      ]
    },
    {
      week: 6,
      title: "Hands-on Capstone Project & Review",
      overview: [
        "Comprehensive review of the Microsoft Office Suite workflow.",
        "Capstone Execution Part 1: Develop a budget spreadsheet (Excel) and draft a business proposal (Word).",
        "Capstone Execution Part 2: Summarize findings in a presentation (PowerPoint) and schedule a mock review meeting (Outlook).",
        "Final assessment, instructor feedback, and certificate issuance."
      ]
    },
    {
      week: "Assessment",
      title: "Grading Breakdown",
      overview: [
        <><strong className="mr-3">Weekly Quizzes:</strong> Short reviews after each module (10% of final grade)</>,
        <><strong className="mr-3">Practical Assignments:</strong> Hands-on tasks for Word, Excel, PowerPoint, and Outlook (40%)</>,
        <><strong className="mr-3">Capstone Project:</strong> An integrated office workflow project demonstrating all skills (30%)</>,
        <><strong className="mr-3">Participation:</strong> Attendance and engagement in class/community activities (20%)</>
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