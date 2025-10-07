
import NavBar from "../../home/navbar";
import HeroSection from "./heroSection";
import Link from "next/link";
import Syllabus from "./syllabus";
import Pricing from "../../plans/pricing";
import ForEnterprises from "../../home/forEnterprises";
import Footer from "../../footer";



const MobileAppDevelopmentCourse = ()=>{

  return (
    <main className="bg-white">
      <NavBar darkTheme />
      <HeroSection />
      <section className="flex flex-col bg-white px-3 sm:px-5 xl:px-28 mt-10">
        <div className="breadcrumbs text-sm mb-10">
          <ul>
            <li><Link href="" className="text-primary text-sm lg:text-xl font-normal">Courses</Link></li>
            <li><Link href="" className="text-primary font-semibold text-sm lg:text-xl capitalize">Mobile App Development with React Native & AI Assistance</Link></li>
          </ul>
        </div>
        <Syllabus />
      </section>
      <Pricing standard={70} premium={80} platinum={90} />
      <ForEnterprises />
      <Footer showqalink={true} />
    </main>
  )
}

export default MobileAppDevelopmentCourse