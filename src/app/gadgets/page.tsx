import { Metadata } from "next";
import Navbar from "./gadgetsNavbar";
import HeroSection from "./gadgetsHero";
import Footer from "./gadgetsFooter";
import GadgetsProblem from "./gadgetsProblem";
import GadgetsHowItWorks from "./gadgetHowItWorks";
import GadgetsWhatIsIncluded from "./gadgetsWhatIsIncluded";
import GadgetsSocialProof from "./gadgetsSocialProof";
import GadgetsCatalogue from "./gadgetsCatalogue";
import GadgetsCTA from "./gadgetsCta";
import { Suspense } from "react";

// --- 1. Maximum SEO Metadata Configuration for Gadgets ---
export const metadata: Metadata = {
  title: "Marlayer Gadgets | Enterprise Hardware & Flagship Devices",
  description:
    "Procure premium enterprise-grade hardware, flagship smartphones, and high-performance laptops. Built for local ecosystems and high-uptime execution environments.",
  keywords: [
    "buy enterprise laptops Nigeria",
    "buy flagship phones Lagos",
    "Marlayer gadgets",
    "tech procurement Nigeria",
    "business laptops Lagos",
    "buy MacBook Pro Nigeria",
    "buy iPhone Lagos",
    "tech accessories Nigeria",
    "premium electronics store",
  ],
  authors: [{ name: "Marlayer Gadgets" }],
  creator: "Marlayer",
  publisher: "Marlayer",
  alternates: {
    canonical: "https://www.marlayer.com/gadgets",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Marlayer Gadgets | Enterprise Hardware & Flagship Devices",
    description:
      "Procure premium enterprise-grade hardware, flagship smartphones, and high-performance laptops. Built for local ecosystems and high-uptime execution environments.",
    url: "https://www.marlayer.com/gadgets",
    siteName: "Marlayer",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/gadgets.avif",
        width: 1200,
        height: 630,
        alt: "Marlayer Gadgets Inventory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marlayer Gadgets | Enterprise Hardware",
    description:
      "Procure premium enterprise-grade hardware, flagship smartphones, and high-performance laptops.",
    images: ["https://www.marlayer.com/images/gadgets-og-image.jpg"],
    creator: "@marlayer",
  },
};

export default function Home() {
  
  // --- 2. JSON-LD Structured Data for an Electronics Store ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: "Marlayer Gadgets",
    url: "https://www.marlayer.com/gadgets",
    logo: "https://www.marlayer.com/images/marlayer-logo.svg",
    description:
      "Premium procurement hub for enterprise-grade hardware, flagship smartphones, high-performance laptops, and workspace accessories.",
    sameAs: [
      "https://x.com/marlayer",
      "https://www.linkedin.com/company/marlayer",
      "https://www.instagram.com/marlayers/s",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hardware and Gadgets",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Phones & Communications Devices",
            category: "Smartphones",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Laptops & High-Performance Workstations",
            category: "Laptops",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Workspace Accessories & Peripherals",
            category: "Accessories",
          },
        },
      ],
    },
  };

  return (
    <div>
      {/* Injecting the Structured Data securely into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <HeroSection />
      <GadgetsProblem />
      <GadgetsHowItWorks />
      <GadgetsWhatIsIncluded />
      <GadgetsSocialProof />
      <GadgetsCatalogue />
      <GadgetsCTA />
      <Footer />
    </div>
  );
}