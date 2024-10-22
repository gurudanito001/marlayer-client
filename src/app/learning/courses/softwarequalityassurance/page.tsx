
import NavBar from "../../home/navbar";
import Link from "next/link";
import Footer from "@/app/(home)/footer";
import Syllabus from "./syllabus";
import LearningPlans from "./learningPlans";
import Testimonials from "./testimonials";
import CohortSignup from "./cohortSignup";


const QualityAssuranceCourse = () => {

  return (
    <main className="bg-white">
      <NavBar />
      <section className="flex flex-col bg-white px-3 sm:px-5 xl:px-28 mt-10">
        <div className="breadcrumbs text-sm mb-10">
          <ul>
            <li><Link href="" className="text-primary text-sm lg:text-xl font-normal">Course Packages</Link></li>
            <li><Link href="" className="text-primary font-semibold text-sm lg:text-xl capitalize">Software Quality Assurance</Link></li>
          </ul>
        </div>
        <Syllabus />
      </section>
      <LearningPlans />
      <Testimonials showButton={false} />
      <CohortSignup />
      <Footer showScrumMasterLink={true} />
    </main>
  )
}

export default QualityAssuranceCourse