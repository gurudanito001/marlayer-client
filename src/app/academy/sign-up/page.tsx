import RegistrationPage from "./registration";
import { Metadata } from 'next';

// --- 1. Maximum SEO Metadata Configuration for the Sign-Up Page ---
export const metadata: Metadata = {
  title: 'Enroll Now | Marlayer Academy Registration',
  description: 'Ready to launch your tech career? Sign up for Marlayer Academy today and start learning modern web and mobile development from industry experts.',
  keywords: [
    'Marlayer Academy Registration',
    'Enroll in Coding Bootcamp',
    'Sign Up Tech Academy',
    'Apply for Coding Course',
    'Learn to Code Registration',
    'Tech Bootcamp Application'
  ],
  authors: [{ name: 'Marlayer Academy' }],
  alternates: {
    canonical: 'https://marlayer.com/academy/sign-up', // Replace with your actual URL
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marlayer.com/academy/sign-up',
    siteName: 'Marlayer Academy',
    title: 'Start Your Journey | Enroll at Marlayer Academy',
    description: 'Join Marlayer Academy today. Apply for our intensive courses in Frontend, Backend, and Mobile App Development.',
    images: [
      {
        url: 'https://marlayer.com/images/signup-og.jpg', // Specific image for registration (maybe a student working on a laptop)
        width: 1200,
        height: 630,
        alt: 'Enroll at Marlayer Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enroll Now | Marlayer Academy',
    description: 'Apply for our intensive coding courses and start building your future today.',
    images: ['https://marlayer.com/images/signup-og.jpg'],
  },
};

const AcademySignUp = () => {

  // --- 2. JSON-LD Structured Data for a Registration Page ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Marlayer Academy Enrollment Portal",
    "description": "The official registration and sign-up page for Marlayer Academy's tech courses.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Marlayer Academy",
      "sameAs": "https://marlayer.com/academy"
    },
    // This tells Google the primary purpose of this specific page is to complete an action
    "potentialAction": {
      "@type": "RegisterAction",
      "target": "https://marlayer.com/academy/sign-up"
    }
  };

  return (
    <main>
      {/* Injecting the Structured Data securely into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="">
        <RegistrationPage />
      </section>
    </main>
  );
}

export default AcademySignUp;