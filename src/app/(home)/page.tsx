import NavBar from "./navbar";
import Footer from "./footer";
import HeroSection from "./heroSection";
import { Metadata } from 'next';
import MarlayerSoftware from "./marlayerSoftware";
import MarlayerAcademy from "./marlayerAcademy";
import MarlayerGadgets from "./marlayerGadgets";
import CallToAction from "./callToAction";
import ComingSoonModal from "../components/comingSoon";
import OurCoreValues from "./OurCoreValues";
import OurEcosystemHeader from "./OurEcosystemHeader";

// --- 1. Maximum SEO Metadata Configuration ---
export const metadata: Metadata = {
  title: 'Marlayer | Tech Academy, Software Solutions & Premium Gadgets',
  description: 'Marlayer is your all-in-one ecosystem for tech empowerment. Master coding at our Academy, we help youbuild scalable products with our Software Solutions, or shop premium tech gadgets.',
  keywords: [
    'Marlayer', 
    'Tech Academy', 
    'Learn to Code', 
    'Software Development Agency', 
    'Buy Laptops', 
    'Premium Gadgets', 
    'Web Development', 
    'Mobile App Development',
    'Tech Education'
  ],
  authors: [{ name: 'Marlayer' }],
  creator: 'Marlayer',
  publisher: 'Marlayer',
  alternates: {
    canonical: 'https://marlayer.com', // Replace with your actual live domain
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
    url: 'https://marlayer.com', // Replace with your actual live domain
    siteName: 'Marlayer',
    title: 'Marlayer | Tech Academy, Software Solutions & Premium Gadgets',
    description: 'Transform your ideas into reality. Master coding, build scalable products, or upgrade your tech gear with the Marlayer ecosystem.',
    images: [
      {
        url: 'https://marlayer.com/images/og-image.jpeg', // Create a 1200x630 sharing image
        width: 1200,
        height: 630,
        alt: 'Marlayer Tech Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marlayer | Tech Academy, Software Solutions & Premium Gadgets',
    description: 'Master coding, build scalable products, or upgrade your tech gear with the Marlayer ecosystem.',
    images: ['https://marlayer.com/images/og-image.jpeg'], // Same as OG image
    creator: '@marlayer', // Replace with your actual Twitter handle if you have one
  },
};

export default function Home() {
  const primaryColor = '#003C3C';

  // --- 2. JSON-LD Structured Data for Google Rich Snippets ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marlayer",
    "url": "https://marlayer.com",
    "logo": "https://marlayer.com/images/marlayer-logo.svg",
    "description": "Marlayer is an integrated tech ecosystem offering an educational Academy, custom Software Solutions, and premium Gadget sales.",
    "sameAs": [
      // Add your social media links here so Google links them to your brand
      "https://x.com/marlayer",
      "https://www.linkedin.com/company/marlayer",
      "https://www.instagram.com/marlayers/s/"
    ]
  };

  return (
    <main className="bg-white">
      {/* Injecting the Structured Data securely into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <OurEcosystemHeader />
      <MarlayerGadgets />
      <MarlayerSoftware />
      <MarlayerAcademy />
      <OurCoreValues />
      <CallToAction />
      <Footer />
    </main>
  );
}