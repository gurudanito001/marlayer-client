import HeroSection from "./heroSection";
import CoursePackages from "./course-packages";
import FAQs from "./faqs";
import Footer from "./footer"
import { Metadata } from 'next';
import VideoSection from "./intro-video";
import TestimonialsSection from "./testimonials";
import TutorsSlider from "./ourTutors";
 
// --- 1. Maximum SEO Metadata Configuration for the Academy ---
export const metadata: Metadata = {
  title: 'Marlayer Academy | Master Coding & Build Real Tech Products',
  description: 'Go from absolute beginner to professional developer. Join Marlayer Academy for intensive, hands-on courses in Frontend, Backend, and Mobile App Development.',
  keywords: [
    'Marlayer Academy',
    'Coding Bootcamp',
    'Learn to Code',
    'Frontend Development Course',
    'Backend Development Course',
    'Mobile App Development',
    'React Native Training',
    'Next.js Tutorials',
    'Node.js Bootcamp',
    'Tailwind CSS',
    'Tech Skills',
    'Software Engineering Course'
  ],
  authors: [{ name: 'Marlayer Academy' }],
  creator: 'Marlayer',
  publisher: 'Marlayer',
  alternates: {
    canonical: 'https://marlayer.com/academy', // Replace with your actual live URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marlayer.com/academy',
    siteName: 'Marlayer Academy',
    title: 'Marlayer Academy | Master Coding & Build Real Tech Products',
    description: 'Learn modern web and mobile development. Master React, Next.js, Node.js, and React Native to launch your tech career.',
    images: [
      {
        url: 'https://marlayer.com/images/academy-og-image.jpg', // Create a specific 1200x630 sharing image for the academy
        width: 1200,
        height: 630,
        alt: 'Marlayer Academy Coding Bootcamp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marlayer Academy | Learn to Code',
    description: 'Master modern web and mobile development to launch your tech career.',
    images: ['https://marlayer.com/images/academy-og-image.jpg'], 
    creator: '@marlayer', 
  },
};

export default function Home() {
  
  // --- 2. JSON-LD Structured Data for Educational Organizations ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Marlayer Academy",
    "url": "https://marlayer.com/academy",
    "logo": "https://marlayer.com/images/marlayer-logo.svg",
    "description": "An intensive tech academy providing hands-on training in computer fundamentals, frontend development, backend architecture, and mobile app creation.",
    "sameAs": [
      "https://x.com/marlayer",
      "https://www.linkedin.com/company/marlayer",
      "https://www.instagram.com/marlayers/s"
    ],
    // Optional: You can specify the type of courses offered
    "makesOffer": [
      {
        "@type": "Course",
        "name": "Frontend Development",
        "description": "Learn HTML, CSS, Tailwind, React, and Next.js."
      },
      {
        "@type": "Course",
        "name": "Backend Development",
        "description": "Master Node.js, Express, databases, and API architecture."
      },
      {
        "@type": "Course",
        "name": "Mobile App Development",
        "description": "Build cross-platform mobile apps with React Native."
      }
    ]
  };

  return (
    <main>
      {/* Injecting the Structured Data securely into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <HeroSection />
      <VideoSection />
      <CoursePackages />
      <TestimonialsSection />
      <TutorsSlider />
      <FAQs />
      <Footer />
    </main>
  );
}
