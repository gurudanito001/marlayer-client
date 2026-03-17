import HeroSection from "./heroSection";
import Syllabus from "./syllabus";
import Footer from "../../(home)/footer";
import { Metadata } from 'next';

// --- 1. Maximum SEO Metadata Configuration for the Course ---
export const metadata: Metadata = {
  title: 'Frontend Development Part 1: UI & Responsiveness | Marlayer Academy',
  description: 'Learn to build stunning, fast, and fully responsive websites from scratch. Master HTML, CSS, Tailwind, and cutting-edge AI tools in 8 weeks.',
  keywords: [
    'Frontend Development Course',
    'Learn HTML and CSS',
    'Tailwind CSS Tutorial',
    'Responsive Web Design Bootcamp',
    'Figma to Code',
    'Learn Frontend Coding',
    'Beginner Web Development',
    'Marlayer Academy'
  ],
  authors: [{ name: 'Marlayer Academy' }],
  alternates: {
    canonical: 'https://marlayer.com/academy/courses/frontend-development-1', // Replace with your actual URL
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marlayer.com/academy/courses/frontend-development-1',
    siteName: 'Marlayer Academy',
    title: 'Frontend Development 1: UI & Responsiveness | Marlayer Academy',
    description: 'Master HTML, CSS, Tailwind, and cutting-edge AI tools to translate beautiful designs into clean, production-ready code.',
    images: [
      {
        url: 'https://marlayer.com/images/frontend-1-og.png', // Specific image for this course
        width: 1200,
        height: 630,
        alt: 'Frontend Development Part 1 Course at Marlayer Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Development Part 1 | Marlayer Academy',
    description: 'Learn to build stunning, fast, and fully responsive websites from scratch in our 8-week intensive.',
    images: ['https://marlayer.com/images/frontend-1-og.png'],
  },
};

const FrontendDevelopmentPart1 = () => {

  // --- 2. JSON-LD Structured Data for a Specific Course ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Frontend Development 1: UI & Responsiveness",
    "description": "An 8-week intensive bootcamp teaching HTML5, CSS3, Flexbox, CSS Grid, Tailwind CSS, daisyUI, and AI-powered Figma-to-code workflows.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Marlayer Academy",
      "sameAs": "https://marlayer.com/academy"
    },
    // Triggers Google's Course Carousel Snippet
    "coursePrerequisites": "Basic computer skills. No coding experience needed!",
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

export default FrontendDevelopmentPart1;