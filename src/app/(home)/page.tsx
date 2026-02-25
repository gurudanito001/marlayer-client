
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

export const metadata: Metadata = {
  title: 'Home | Marlayer',
  description: '',
};


export default function Home() {
  const primaryColor = '#003C3C';
  return (
    <main className="bg-white">
      {/* <NavBar /> */}
        <HeroSection />
        <OurEcosystemHeader />
        <MarlayerGadgets/>
        <MarlayerSoftware />
        <MarlayerAcademy />
        <OurCoreValues />
        <CallToAction />
        
        
      <Footer />
      
    </main>
  );
}
