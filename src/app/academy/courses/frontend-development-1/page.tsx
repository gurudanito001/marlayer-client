
import HeroSection from "./heroSection";
import Link from "next/link";
import Syllabus from "./syllabus";
import ForEnterprises from "../../(home)/forSchools";
import Footer from "../../(home)/footer";



const ResponsiveWebDesignCourse = ()=>{

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

export default ResponsiveWebDesignCourse