
import { CheckIcon } from "@heroicons/react/24/solid";
import ContactSalesForm from "./contactSalesForm";


const HeroSection = () => {

  return (
    <section className="pt-14 lg:pt-24 px-3 lg:px-14 xl:px-28 bg-primary text-white grid grid-cols-1 xl:grid-cols-2">
      <div className="pb-10 xl:pr-10">
        <h2 className="text-4xl lg:text-6xl font-semibold mb-3 p-0">Contact our sales team
        </h2>
        <p className="text-lg md:text-xl font-light mt-5 mb-4">
          If you have questions about our learning plans or you need custom features that fit the needs of your organization.
        </p>
        <h4 className="font-550 text-lg md:text-xl mb-3">We can help with:</h4>
        <ul className=" list-none list-outside flex flex-col gap-3 lg:gap-5 md:text-lg">
          <li className="flex items-center font-light"> <CheckIcon className="w-5 text-secondary mr-3" /> <span><strong>Custom Course Durations:</strong> Contact us if you want a customized course duration. We can lengthen or shorten the course duration on demand. </span></li>

          <li className="flex items-center font-light"> <CheckIcon className="w-5 text-secondary mr-3" /> <span><strong>Blended Learning Solutions:</strong> A combination of online courses and in-person training to enhance learning experiences.</span></li>

          <li className="flex items-center font-light"> <CheckIcon className="w-5 text-secondary mr-3" /> <span><strong>Custom Course Development:</strong> Tailor-made courses designed to meet specific organizational needs and objectives.</span></li>
          <li className="flex items-center font-light"> <CheckIcon className="w-5 text-secondary mr-3" /> <span><strong>Employee Onboarding Programs:</strong> Streamlined training modules to help new hires get up to speed quickly.</span></li>
          
          <li className="flex items-center font-light"> <CheckIcon className="w-5 text-secondary mr-3" /> <span><strong>Certification and Compliance Training:</strong> Courses that ensure employees meet industry standards and regulatory requirements.</span></li>
          
        </ul>
      </div>



      <ContactSalesForm />
    </section>
  )
}

export default HeroSection