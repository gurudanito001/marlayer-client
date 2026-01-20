import Navbar from "./navbar";
import HeroSection from "./hero";
import GoogleStore from "./googleStore";
import GadgetDisplay from "./gadgetDisplay";
import CategoriesSection from "./categories";
import UpdatesSection from "./updates";
import WhyBuySection from "./whyBuy";
import Footer from "./footer";



export default function Home() {
    return(
        <div>
            <Navbar/>
            <HeroSection/>
            <GoogleStore/>
            <GadgetDisplay/>
            <CategoriesSection/>
            <UpdatesSection/>
            <WhyBuySection/>
            <Footer/>
        </div>
    )
}