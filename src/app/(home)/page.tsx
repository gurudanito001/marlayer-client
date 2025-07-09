
import NavBar from "./navbar";
import Footer from "./footer";
import HeroSection from "./heroSection";
import { Metadata } from 'next';
import CloudServicesSection from "./cloudSection";
import BespokeSoftware from "./bespokeSoftware";
import MarlayerAcademy from "./marlayerAcademy";
import CallToAction from "./callToAction";
import ComingSoonModal from "../components/comingSoon";

export const metadata: Metadata = {
  title: 'Home | Marlayer',
  description: '',
};


export default function Home() {
  const primaryColor = '#003C3C';
  return (
    <main className="bg-white">
      <NavBar />
        <HeroSection />
        <BespokeSoftware />
        <MarlayerAcademy />
        <CloudServicesSection />
        <CallToAction />
        
      <Footer />
      
    </main>
  );
}
