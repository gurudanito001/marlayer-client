import HeroSection from "./heroSection";
import Syllabus from "./syllabus";
import Footer from "../../(home)/footer";
import { Metadata } from 'next';

// --- 1. Maximum SEO Metadata Configuration for the Course ---
export const metadata: Metadata = {
  title: 'Backend Development Course | Marlayer Academy',
  description: 'Master backend architecture in 12 weeks. Learn Node.js, Express, SQL/NoSQL databases, API development, and AI-assisted coding at Marlayer Academy.',
  keywords: [
    'Backend Development Course',
    'Learn Node.js',
    'Express.js Training',
    'API Development Bootcamp',
    'Database Design',
    'Learn Backend Coding',
    'Marlayer Academy',
    'Software Engineering Course',
    'AI-Assisted Development'
  ],
  authors: [{ name: 'Marlayer Academy' }],
  alternates: {
    canonical: 'https://marlayer.com/academy/courses/backend-development', // Replace with your actual URL
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marlayer.com/academy/courses/backend-development',
    siteName: 'Marlayer Academy',
    title: 'Backend Development & AI-Driven Architecture | Marlayer Academy',
    description: 'Go from absolute beginner to deploying secure, scalable APIs using Node.js, Express, and modern databases.',
    images: [
      {
        url: 'https://marlayer.com/images/backend-course-og.jpg', // Specific image for this course
        width: 1200,
        height: 630,
        alt: 'Backend Development Course at Marlayer Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backend Development Course | Marlayer Academy',
    description: 'Master Node.js, Express, and Database architecture in our 12-week intensive bootcamp.',
    images: ['https://marlayer.com/images/backend-course-og.jpg'],
  },
};

const BackendDevelopmentCourse = () => {

  // --- 2. JSON-LD Structured Data for a Specific Course ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Backend Development & AI-Driven Architecture",
    "description": "A 12-week intensive bootcamp teaching Node.js, Express, RESTful API architecture, databases (SQL & NoSQL), and secure deployment using AI-assisted coding tools.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Marlayer Academy",
      "sameAs": "https://marlayer.com/academy"
    },
    // Optional but highly recommended for Google's Course Carousel
    "coursePrerequisites": "Basic computer skills required. No prior coding experience necessary.",
    "educationalCredentialAwarded": "Certificate of Completion",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online", // Change to "onsite" or "blended" if applicable
      "courseWorkload": "PT6H" // 6 hours per week
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

export default BackendDevelopmentCourse;