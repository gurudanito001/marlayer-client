import HeroSection from "./heroSection";
import Syllabus from "./syllabus";
import Footer from "../../(home)/footer";
import { Metadata } from 'next';

// --- 1. Maximum SEO Metadata Configuration for the Course ---
export const metadata: Metadata = {
  title: 'Computer Fundamentals & Office Training | Marlayer Academy',
  description: 'Go from absolute beginner to confident tech user in 6 weeks. Master essential computer skills, file management, and the Microsoft Office Suite (Word, Excel, PowerPoint).',
  keywords: [
    'Computer Basics Course',
    'Microsoft Office Training',
    'Learn Word and Excel',
    'Computer Literacy Class',
    'Beginner Tech Skills',
    'Microsoft PowerPoint Course',
    'Office Productivity Training',
    'Marlayer Academy'
  ],
  authors: [{ name: 'Marlayer Academy' }],
  alternates: {
    canonical: 'https://marlayer.com/academy/courses/computer-basics', // Replace with your actual URL
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marlayer.com/academy/courses/computer-basics',
    siteName: 'Marlayer Academy',
    title: 'Computer Fundamentals & Office Productivity | Marlayer Academy',
    description: 'Master essential computer skills, cloud collaboration, and the core Microsoft Office suite to excel in any modern workplace.',
    images: [
      {
        url: 'https://marlayer.com/images/computer-basics-og.jpg', // Specific image for this course
        width: 1200,
        height: 630,
        alt: 'Computer Fundamentals and Microsoft Office Training at Marlayer Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computer Fundamentals Course | Marlayer Academy',
    description: 'Master essential computer skills and the core Microsoft Office suite to excel in the workplace.',
    images: ['https://marlayer.com/images/computer-basics-og.jpg'],
  },
};

const ComputerBasics = () => {

  // --- 2. JSON-LD Structured Data for a Specific Course ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Computer Fundamentals & Office Productivity",
    "description": "A 6-week foundational course teaching absolute beginners how to navigate operating systems, manage files securely, and use Microsoft Word, Excel, PowerPoint, and Outlook effectively.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Marlayer Academy",
      "sameAs": "https://marlayer.com/academy"
    },
    // Triggers Google's Course Carousel Snippet
    "coursePrerequisites": "No prior computer experience required. Just a willingness to learn!",
    "educationalCredentialAwarded": "Certificate of Completion",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online", // Change to "onsite" or "blended" depending on your delivery method
      "courseWorkload": "PT5H" // Reflects the 4-6 hours per week commitment we established
    }
  };

  return (
    <main className="bg-white">
      {/* Injecting the Structured Data securely into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <HeroSection />
      <section className="flex flex-col bg-white px-3 sm:px-5 xl:px-28 mt-10">
        <Syllabus />
      </section>
      <Footer />
    </main>
  );
}

export default ComputerBasics;