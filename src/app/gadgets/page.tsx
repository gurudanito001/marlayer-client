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



export default function Home() {
    return(
        <div>
            <Suspense fallback={null}>
                <Navbar />
            </Suspense>
            <HeroSection/>
            <GadgetsProblem/>
            <GadgetsHowItWorks/>
            <GadgetsWhatIsIncluded/>
            <GadgetsSocialProof/>
            <GadgetsCatalogue/> 
            <GadgetsCTA/>
            <Footer/>
        </div>
    )
}