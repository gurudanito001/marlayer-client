
import HeroSection from "./heroSection";
import ContactSalesForm from "./contactSalesForm";
import Footer from "@/app/(home)/footer";
import NavBar from "../home/navbar";



const ContactSales = ()=>{

  return (
    <main className="bg-white">
      <NavBar darkTheme />
      <HeroSection />
      <ContactSalesForm />
      <Footer />
    </main>
  )
}

export default ContactSales