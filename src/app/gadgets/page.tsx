import Navbar from "./navbar";
import HeroSection from "./hero";
import UpdatesSection from "./updates";
import WhyBuySection from "./whyBuy";
import Footer from "./footer";
import GadgetsProblem from "./gadgetsProblem";
import GadgetsHowItWorks from "./gadgetHowItWorks";
import GadgetsWhatIsIncluded from "./gadgetsWhatIsIncluded";
import GadgetsSocialProof from "./gadgetsSocialProof";
import GadgetsCatalogue from "./gadgetsCatalogue";
import GadgetsCTA from "./gadgetsCta";



export default function Home() {
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <GadgetsProblem/>
            <GadgetsHowItWorks/>
            <GadgetsWhatIsIncluded/>
            <GadgetsSocialProof/>
            <GadgetsCatalogue/> 
            <GadgetsCTA/>
            {/* <UpdatesSection/>
            <WhyBuySection/> */}
            <Footer/>
        </div>
    )
}