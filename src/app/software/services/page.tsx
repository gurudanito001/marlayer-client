import type { Metadata } from "next";

import SoftwareNavbar from "../(home)/softwareNavbar";
import SoftwareFooter from "../(home)/softwareFooter";
import ServicesHero from "./servicesHero";
import ServicesList from "./servicesList";
import WhyChooseMarlayer from "./whyChooseUs";
import ProcessSection from "./process";
import ServicesTestimonials from "./testimonials";

export const metadata: Metadata = {
  title: "Software Development Services | Marlayer",
  description:
    "Marlayer builds secure, scalable, and high-performance software solutions. From web and mobile applications to enterprise systems, cloud architecture, UI/UX design, and digital transformation.",

  keywords: [
    "Software Development Company",
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Enterprise Software",
    "Cloud Architecture",
    "System Architecture",
    "UI UX Design",
    "API Integration",
    "Software Engineering",
    "Next.js Development",
    "React Development",
    "Business Software",
    "Marlayer",
    "Technology Solutions",
    "Digital Transformation",
  ],

  authors: [{ name: "Marlayer" }],
  creator: "Marlayer",
  publisher: "Marlayer",

  alternates: {
    canonical: "https://marlayer.com/software/services",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marlayer.com/software/services",
    siteName: "Marlayer",
    title: "Software Development Services | Marlayer",
    description:
      "We architect, build, and scale enterprise-grade software products including web applications, mobile apps, cloud infrastructure, and custom business solutions.",
    images: [
      {
        url: "/images/software.png",
        width: 1200,
        height: 630,
        alt: "Marlayer Software Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | Marlayer",
    description:
      "Enterprise software solutions built for growth. Web, mobile, cloud, and custom business platforms.",
    images: [
      "https://marlayer.com/images/software-services-og.jpg",
    ],
    creator: "@marlayer",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Marlayer",
    url: "https://marlayer.com/software/services",
    logo: "https://marlayer.com/images/marlayer-logo.svg",
    image: "https://marlayer.com/images/software-services-og.jpg",
    description:
      "Marlayer provides enterprise software development services, including web applications, mobile apps, cloud infrastructure, UI/UX design, and scalable digital platforms.",

    serviceType: [
      "Software Development",
      "Web Development",
      "Mobile App Development",
      "System Architecture",
      "Cloud Solutions",
      "UI/UX Design",
      "API Integration",
      "Enterprise Software",
    ],

    sameAs: [
      "https://x.com/marlayer",
      "https://www.linkedin.com/company/marlayer",
      "https://www.instagram.com/marlayer",
    ],

    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "System Architecture",
          },
        },
      ],
    },
  };

  return (
    <main className="bg-[#0D2B1E] min-h-screen flex flex-col font-sans text-white selection:bg-[#45B1A0] selection:text-[#0D2B1E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <SoftwareNavbar />
      <ServicesHero />
      <ServicesList />
      <WhyChooseMarlayer />
      <ProcessSection />
      <ServicesTestimonials />
      <SoftwareFooter />
    </main>
  );
}