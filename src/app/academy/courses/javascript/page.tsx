
import HeroSection from "./heroSection";
import Syllabus from "./syllabus";
import Footer from "../../(home)/footer";



const JavaScript = ()=>{

  return (
    <main className="bg-white">
      <HeroSection />
      <section className="flex flex-col bg-white px-3 sm:px-5 xl:px-28 mt-10">
        
        <Syllabus />
      </section>
      {/* <ForEnterprises /> */}
      <Footer />
    </main>
  )
}

export default JavaScript