import HeroSection from "./heroSection";
import Syllabus from "./syllabus";
import Footer from "../../(home)/footer";
import { Metadata } from 'next';

// --- 1. Maximum SEO Metadata Configuration for the Course ---
export const metadata: Metadata = {
  title: 'Frontend Development Part 2: React & Next.js | Marlayer Academy',
  description: 'Elevate your frontend skills in 12 weeks. Master modern JavaScript (ES6+), React, Hooks, Context API, and Next.js to build dynamic, production-ready web applications.',
  keywords: [
    'React Development Course',
    'Learn JavaScript Online',
    'Next.js Bootcamp',
    'Advanced Frontend Coding',
    'React Hooks Training',
    'JavaScript ES6 Tutorial',
    'Frontend Web Development',
    'Marlayer Academy'
  ],
  authors: [{ name: 'Marlayer Academy' }],
  alternates: {
    canonical: 'https://marlayer.com/academy/courses/frontend-development-2', // Replace with your actual URL
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marlayer.com/academy/courses/frontend-development-2',
    siteName: 'Marlayer Academy',
    title: 'Frontend Development 2: JavaScript, React & Next.js',
    description: 'Master modern JavaScript, build highly interactive user interfaces with React, and step into the future of web development using Next.js and AI-assisted coding.',
    images: [
      {
        url: 'https://marlayer.com/images/frontend-1-og.png', // Specific image for this course
        width: 1200,
        height: 630,
        alt: 'Frontend Development Part 2 Course featuring React and Next.js',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React & Next.js Course | Marlayer Academy',
    description: 'Master modern JavaScript and build highly interactive user interfaces with React and Next.js in 12 weeks.',
    images: ['https://marlayer.com/images/frontend-1-og.png'],
  },
};

const FrontendDevelopmentPart2 = () => {

  // --- 2. JSON-LD Structured Data for a Specific Course ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Frontend Development 2: JavaScript, React & Next.js",
    "description": "A 12-week intensive course teaching modern JavaScript (ES6+), interactive UI development with React and Vite, complex state management, and full-stack integration using Next.js.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Marlayer Academy",
      "sameAs": "https://marlayer.com/academy"
    },
    // Triggers Google's Course Carousel Snippet
    "coursePrerequisites": "Basic HTML/CSS knowledge required (Frontend 1 recommended).",
    "educationalCredentialAwarded": "Certificate of Completion",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online", // Change to "onsite" or "blended" if applicable
      "courseWorkload": "PT6H" // Reflects ~6 hours of commitment per week
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

export default FrontendDevelopmentPart2;