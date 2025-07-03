import NavBar from "./navbar";
import Footer from "./footer";
import HeroSection from "./heroSection";
import { Metadata } from 'next';
import CloudServicesSection from "./cloudSection";
import BespokeSoftware from "./bespokeSoftware";
import MarlayerAcademy from "./marlayerAcademy";
import CallToAction from "./callToAction";

export const metadata: Metadata = {
  title: 'Home | Marlayer',
  description: '',
};


export default function Home() {
  const primaryColor = '#003C3C';
  return (
    <main className="bg-white">
      <NavBar />
      <div className="min-h-screen bg-gray-50 font-inter text-gray-800 antialiased">
        <HeroSection />
        <BespokeSoftware />
        <MarlayerAcademy />
        <CloudServicesSection />
        <CallToAction />
      </div>
      <Footer />
    </main>
  );
}
