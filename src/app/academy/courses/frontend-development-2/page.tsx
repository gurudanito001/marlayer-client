
import HeroSection from "./heroSection";
import Link from "next/link";
import Syllabus from "./syllabus";
import ForEnterprises from "../../(home)/forSchools";
import Footer from "../../(home)/footer";



const ScrumMasteryCourse = ()=>{

  return (
    <main className="bg-white">
      <HeroSection />
      <section className="flex flex-col bg-white px-3 sm:px-5 xl:px-28 mt-10">
        <div className="breadcrumbs text-sm mb-10">
          <ul>
            <li><Link href="" className="text-primary text-sm lg:text-xl font-normal">Courses</Link></li>
            <li><Link href="" className="text-primary font-semibold text-sm lg:text-xl capitalize">JavaScript and React Development: Building Dynamic Web Applications
            </Link></li>
          </ul>
        </div>
        <Syllabus />
      </section>
      <ForEnterprises />
      <Footer />
    </main>
  )
}

export default ScrumMasteryCourse