
import NavBar from "../home/navbar";
import Footer from "../footer";
import Pricing from "./pricing";
import { CheckIcon } from "@heroicons/react/24/solid";
import FAQs from "../home/faqs";
import ForEnterprises from "../home/forEnterprises";


const LearningPlans = () => {

  return (
    <main className="bg-white">
      <NavBar darkTheme />
      <section className="flex flex-col py-14 lg:py-24 px-5 lg:px-14 xl:px-28 bg-primary text-white mb-8">
        <div className="max-w-4xl">
          <h2 className="text-4xl lg:text-7xl font-semibold mb-3 p-0">Learning Plans</h2>
          <p className="text-xl font-light mt-5 mb-4">
            Choose from a variety of plans that offer access to premium courses, resources, and community support. Whether you&apos;re a student, a professional, or a lifelong learner, we have the perfect plan to help you achieve your goals.
          </p>
        </div>
      </section>


          <Pricing />
          <FAQs />
          <ForEnterprises />
      <Footer />
    </main>
  )
}

export default LearningPlans