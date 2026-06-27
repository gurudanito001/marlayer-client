import type { Metadata } from "next";

import SoftwareNavbar from "../(home)/softwareNavbar";
import SoftwareFooter from "../(home)/softwareFooter";
import ProjectsHero from "./hero";
import ProjectsLogos from "./projectLogo";
import ProjectsList from "./projectsList";
import ProjectsImpact from "./impact";
import ProjectsExpertise from "./projectEnterprise";
import ProjectsCTA from "./projectCTA";

export const metadata: Metadata = {
  title: "Our Projects | Marlayer Portfolio",
  description:
    "Explore Marlayer's portfolio of software engineering projects. From fintech platforms and enterprise dashboards to e-commerce ecosystems and real-time applications, discover how we build scalable digital products.",

  keywords: [
    "Marlayer Portfolio",
    "Software Projects",
    "Case Studies",
    "Fintech Development",
    "Enterprise Software",
    "Custom Software",
    "Web Applications",
    "Mobile Applications",
    "Digital Products",
    "Next.js Projects",
    "React Projects",
    "Node.js Applications",
    "Software Engineering Portfolio",
    "Technology Solutions",
    "Marlayer",
  ],

  authors: [{ name: "Marlayer" }],
  creator: "Marlayer",
  publisher: "Marlayer",

  alternates: {
    canonical: "https://marlayer.com/software/projects",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marlayer.com/software/projects",
    siteName: "Marlayer",
    title: "Our Projects | Marlayer Portfolio",
    description:
      "Discover enterprise software, fintech platforms, logistics systems, and digital ecosystems engineered by Marlayer.",
    images: [
      {
        url: "/images/software.png",
        width: 1200,
        height: 630,
        alt: "Marlayer Software Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Marlayer Portfolio",
    description:
      "Explore software solutions built by Marlayer for businesses across multiple industries.",
    images: [
      "https://marlayer.com/images/projects-og-image.jpg",
    ],
    creator: "@marlayer",
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Marlayer Project Portfolio",
    url: "https://marlayer.com/software/projects",
    image: "https://marlayer.com/images/projects-og-image.jpg",
    description:
      "A showcase of enterprise software solutions engineered by Marlayer, including fintech platforms, multi-vendor marketplaces, logistics systems, wellness applications, and scalable digital products.",

    creator: {
      "@type": "Organization",
      name: "Marlayer",
      url: "https://marlayer.com",
      logo: "https://marlayer.com/images/marlayer-logo.svg",
    },

    about: [
      "Software Engineering",
      "Enterprise Applications",
      "Fintech",
      "Digital Transformation",
      "Web Development",
      "Mobile Development",
      "Cloud Architecture",
    ],

    workExample: [
      {
        "@type": "SoftwareApplication",
        name: "Pardomart Admin Infrastructure",
        applicationCategory: "BusinessApplication",
      },
      {
        "@type": "SoftwareApplication",
        name: "Peniga Secure Escrow Platform",
        applicationCategory: "FinanceApplication",
      },
      {
        "@type": "SoftwareApplication",
        name: "imusuGlobal Wellness Hub",
        applicationCategory: "BusinessApplication",
      },
      {
        "@type": "SoftwareApplication",
        name: "LooseApp Wellbeing Platform",
        applicationCategory: "CommunicationApplication",
      },
    ],
  };

  return (
    <main className="bg-[#0D2B1E] min-h-screen flex flex-col font-sans text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <SoftwareNavbar />
      <ProjectsHero />
      <ProjectsLogos />
      <ProjectsList />
      <ProjectsImpact />
      <ProjectsExpertise />
      <ProjectsCTA />
      <SoftwareFooter />
    </main>
  );
}