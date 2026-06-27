// app/software/page.tsx
// Marlayer Software Solutions — Main Landing Page
// 9 sections assembled in conversion order

import { Metadata } from "next";
import SoftwareHero from "./softwareHero";
import SoftwareAudienceSelector from "./softwareAudienceSelector";
import SoftwareWhatWeBuild from "./softwareWhatWeBuild";
import SoftwareHowWeWork from "./softwareHowWeWork";
import SoftwareWhyMarlayer from "./softwareWhyMarlayer";
import SoftwareSocialProof from "./softwareSocialProof";
import SoftwareTechStack from "./softwareTechStack";
import SoftwareFAQ from "./softwareFaq";
import SoftwareCTA from "./softwareCta";
import SoftwareFooter from "./softwareFooter";
import SoftwareNavbar from "./softwareNavbar";

// --- 1. Maximum SEO Metadata Configuration for Software ---
export const metadata: Metadata = {
  title: "Software Solutions | Marlayer — Systems That Scale",
  description:
    "Marlayer builds software for growing businesses competing globally and enterprises solving niche problems. Custom web apps, mobile apps, dashboards, API integrations, and enterprise platforms.",
  keywords: [
    "software development agency Nigeria",
    "custom software development Lagos",
    "web app development Nigeria",
    "enterprise software Nigeria",
    "SME website development Lagos",
    "software company Nigeria",
    "build web application Nigeria",
    "custom platform development",
  ],
  authors: [{ name: 'Marlayer Software' }],
  creator: 'Marlayer',
  publisher: 'Marlayer',
  alternates: {
    canonical: 'https://www.marlayer.com/software',
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
    title: "Marlayer Software Solutions — We Build Systems, Not Just Code",
    description:
      "From SMEs competing globally to enterprises solving niche problems — Marlayer builds the software systems that make it happen.",
    url: "https://www.marlayer.com/software",
    siteName: "Marlayer",
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/images/software.png',
        width: 1200,
        height: 630,
        alt: 'Marlayer Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marlayer Software Solutions | Systems That Scale',
    description: 'Custom web apps, mobile apps, dashboards, API integrations, and enterprise platforms.',
    images: ['https://www.marlayer.com/images/software-og-image.jpg'], 
    creator: '@marlayer', 
  },
};

export default function SoftwarePage() {
  
  // --- 2. JSON-LD Structured Data for Professional Services 
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Marlayer Software Solutions",
    "url": "https://www.marlayer.com/software",
    "logo": "https://www.marlayer.com/images/marlayer-logo.svg",
    "description": "Marlayer builds software for growing businesses competing globally and enterprises solving niche problems. Custom web apps, mobile apps, and enterprise platforms.",
    "sameAs": [
      "https://x.com/marlayer",
      "https://www.linkedin.com/company/marlayer",
      "https://www.instagram.com/marlayers/s"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Application Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Software Solutions & API Integrations"
          }
        }
      ]
    }
  };

  return (
    <main className="bg-[#0D2B1E]">
      {/* Injecting the Structured Data securely into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/*
        CONVERSION FLOW:
        1. Hero          — Hook them. Speak to the outcome, not the service.
        2. Audience      — Let them self-identify. Route them to their specific journey.
        3. What We Build — Show capability depth. Frame around outcomes.
        4. How We Work   — Remove fear of process. Show clarity and accountability.
        5. Why Marlayer  — Address every objection about software agencies.
        6. Social Proof  — Validate with results, not claims.
        7. Tech Stack    — Build technical credibility. Especially for enterprise buyers.
        8. FAQ           — Kill the last objections. Excellent for SEO + AI search.
        9. CTA           — Convert. Low friction. Multiple entry points.
      */}
      <SoftwareNavbar />
      <SoftwareHero />
      <SoftwareAudienceSelector />
      <SoftwareWhatWeBuild />
      <SoftwareHowWeWork />
      <SoftwareWhyMarlayer />
      <SoftwareSocialProof />
      <SoftwareTechStack />
      <SoftwareFAQ />
      <SoftwareCTA />
      <SoftwareFooter />
    </main>
  );
}