import HeroSection from './heroSection';
import ContactFormSection from './contactForm';
import ContactServices from './ourServices';
import FaqSection from './faq';
import Footer from '../(home)/footer';
import CtaSection from './bookMeeting';
import { Metadata } from 'next';

// --- 1. Maximum SEO Metadata Configuration for the Contact Page ---
export const metadata: Metadata = {
  title: 'Contact Us | Marlayer Tech Ecosystem',
  description: 'Get in touch with Marlayer. Whether you want to enroll in our Tech Academy, need custom software solutions, or want to purchase premium gadgets, we are here to help.',
  keywords: [
    'Contact Marlayer',
    'Tech Academy Support',
    'Hire Software Agency Lagos',
    'Tech Gadget Sales Nigeria',
    'Software Consultation',
    'Marlayer Customer Service',
    'Book a Tech Meeting',
    'Web Development Agency Contact'
  ],
  authors: [{ name: 'Marlayer' }],
  alternates: {
    canonical: 'https://marlayer.com/contact', // Replace with your actual live URL
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marlayer.com/contact',
    siteName: 'Marlayer',
    title: 'Let’s Build Something Great | Contact Marlayer',
    description: 'Reach out to enroll in the Academy, request a software consultation, or inquire about our premium gadgets.',
    images: [
      {
        url: 'https://marlayer.com/images/contact-og.jpg', // Create a specific 1200x630 sharing image
        width: 1200,
        height: 630,
        alt: 'Contact Marlayer Tech Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Marlayer | Let’s Talk Tech',
    description: 'Enroll in the Academy, request a software consultation, or inquire about our premium gadgets.',
    images: ['https://marlayer.com/images/contact-og.jpg'],
  },
};

export default function Contact() {

  // --- 2. JSON-LD Structured Data for a Contact Page ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Marlayer",
    "description": "Official contact page for Marlayer Tech Academy, Software Solutions, and Gadgets.",
    "url": "https://marlayer.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Marlayer",
      "sameAs": [
        "https://twitter.com/marlayer",
        "https://www.linkedin.com/company/marlayer",
        "https://www.instagram.com/marlayers/s"
      ],
      // This tells Google exactly how to categorize your customer service and where you operate
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service and Sales",
        "areaServed": ["Lagos", "NG"], 
        "availableLanguage": "English",
        // Uncomment and add your actual support email or phone number if you want it indexed by Google
        // "email": "info@marlayer.com",
        // "telephone": "+234-XXX-XXX-XXXX" 
      }
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
      <ContactFormSection />
      <ContactServices />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}