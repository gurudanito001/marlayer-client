// app/software/sme/page.tsx
// Marlayer — For Growing Businesses
// Plain language. Outcome-first. Zero jargon.

import SoftwareNavbar from "../(home)/softwareNavbar";
import SoftwareFooter from "../(home)/softwareFooter";
import SMEHero from "./smeHero"
import SMEGap from "./smeGap";
import SMEWhatWeDo from "./smeWhatWeDo";
import SMEProcess from "./smeProcess";
import SMETransformation from "./smeTransformation";
import SMESocialProof from "./smeSocialProof";
import SMECTA from "./smeCta";

export const metadata = {
  title: "Grow Your Business Online | Marlayer Software for SMEs",
  description:
    "Marlayer builds websites, brand systems, and automations for growing businesses that want to attract global clients and operate like a serious company. No tech knowledge needed.",
  keywords: [
    "website for small business Nigeria",
    "professional website Lagos",
    "how to attract clients online Nigeria",
    "business website design Lagos",
    "digital presence for SME Nigeria",
    "grow business online Nigeria",
    "website that generates leads Nigeria",
  ],
  openGraph: {
    title: "Your business is serious. Your online presence should say so. | Marlayer",
    description:
      "Marlayer builds the websites, systems, and tools that help growing businesses attract global clients and operate professionally.",
    url: "https://www.marlayer.com/software/sme",
    siteName: "Marlayer",
    type: "website",
  },
};

export default function SMEPage() {
  return (
    <>
      {/* <SoftwareNavbar /> */}
      <main className="bg-[#0D2B1E]">
        {/*
          CONVERSION FLOW:
          1. Hero           — Names the exact frustration. Speaks to outcome.
          2. Gap            — 4 situations they've lived through. Recognition moment.
          3. What We Do     — 4 specific services, sold by outcome, plain English.
          4. Process        — 4 steps. What they do. What we leave them with.
          5. Transformation — Before vs after. Sells the life change.
          6. Social Proof   — SME testimonials + results + FAQ.
          7. CTA            — Warm, low-friction. One clear action.
        */}
        <SoftwareNavbar />
        <SMEHero />
        <SMEGap />
        <SMEWhatWeDo />
        <SMEProcess />
        <SMETransformation />
        <SMESocialProof />
        <SMECTA />
        <SoftwareFooter />
      </main>
      {/* <SoftwareFooter /> */}
    </>
  );
}