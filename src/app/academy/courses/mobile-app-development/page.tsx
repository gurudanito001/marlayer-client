import HeroSection from "./heroSection";
import Syllabus from "./syllabus";
import Footer from "../../(home)/footer";
import { Metadata } from 'next';

// --- 1. Maximum SEO Metadata Configuration for the Course ---
export const metadata: Metadata = {
  title: 'Mobile App Development with React Native | Marlayer Academy',
  description: 'Take your JavaScript skills to mobile. Build, architect, and deploy native iOS and Android applications in 16 weeks using React Native and Expo.',
  keywords: [
    'React Native Course',
    'Mobile App Development Bootcamp',
    'Learn React Native Online',
    'iOS App Development',
    'Android App Development',
    'Cross-Platform Mobile Apps',
    'Expo Tutorial',
    'Marlayer Academy'
  ],
  authors: [{ name: 'Marlayer Academy' }],
  alternates: {
    canonical: 'https://marlayer.com/academy/courses/mobile-app-development', // Replace with your actual URL
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marlayer.com/academy/courses/mobile-app-development',
    siteName: 'Marlayer Academy',
    title: 'Mobile App Development with React Native | Marlayer Academy',
    description: 'Learn how to architect, build, and deploy natively rendering iOS and Android applications using React Native, Expo, and AI-assisted tools.',
    images: [
      {
        url: 'https://marlayer.com/images/mobile-app-og.jpg', // Specific image for this course
        width: 1200,
        height: 630,
        alt: 'Mobile App Development with React Native at Marlayer Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React Native Mobile App Course | Marlayer Academy',
    description: 'Build native iOS and Android apps from scratch in our 16-week intensive mobile development bootcamp.',
    images: ['https://marlayer.com/images/mobile-app-og.jpg'],
  },
};

const MobileAppDevelopmentCourse = () => {

  // --- 2. JSON-LD Structured Data for a Specific Course ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Mobile App Development With React Native",
    "description": "A 16-week intensive course teaching cross-platform mobile development for iOS and Android using React Native, Expo, native device capabilities, and AI-assisted workflows.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Marlayer Academy",
      "sameAs": "https://marlayer.com/academy"
    },
    // Triggers Google's Course Carousel Snippet
    "coursePrerequisites": "Solid grasp of modern JavaScript required (Frontend 1 & 2 recommended).",
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

export default MobileAppDevelopmentCourse;