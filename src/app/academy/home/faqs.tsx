import Link from "next/link"

const FAQs = () => {

  return (
    <section id="faqs" className="bg-white py-14 lg:py-28 px-5 xl:px-28 flex flex-col">
      <header className="flex mb-5 lg:mb-12">
        <h2 className="text-2xl mx-auto font-semibold bg-gradient-to-r max-w-550 text-primary">Frequently Asked Questions</h2>
      </header>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
        <input type="checkbox" name="my-accordion-1" />
        <div className="collapse-title md:text-lg font-semibold bg-white text-primary"> What is the purpose of your online academy? </div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-black text-sm md:text-lg font-light">Our academy helps teenagers, young adults, and working professionals become technologically literate. We offer beginner-friendly courses that teach essential computer skills, web development, and data analysis, empowering you to use technology effectively in daily life or work.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title md:text-lg font-semibold bg-white text-primary">Who are your courses designed for?</div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-black text-sm md:text-lg font-light">Our courses are perfect for individuals who have little to no experience using technology beyond basic entertainment, as well as professionals looking to catch up on how to use tech for office tasks.
          </p>
        </div>
      </div>
      
      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title md:text-lg font-semibold bg-white text-primary">Do I need any prior technical knowledge to enroll?
        </div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-black text-sm md:text-lg font-light">No prior technical knowledge is required! The courses are designed for complete beginners, with guidance tailored to help you develop your skills progressively.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title md:text-lg font-semibold bg-white text-primary"> How are the courses delivered?</div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-black text-sm md:text-lg font-light">We offer classes in different formats depending on your subscription plan:</p>
          <ul className=" list-disc list-inside flex flex-col gap-3 lg:gap-5 pl-3 md:pl-5">
            <li><strong>Standard Plan:</strong> Group classes with up to 12 participants via video conferencing (Google Meet, Skype).</li>
            <li><strong>Premium Plan:</strong> Group classes (up to 12 participants) and additional one-on-one sessions via video conferencing.</li>
            <li><strong>Platinum Plan:</strong> In-person classes and one-on-one sessions.</li>
          </ul>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title md:text-lg font-semibold bg-white text-primary">Will I receive a certificate after completing a course?
        </div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-black text-sm md:text-lg font-light">Yes, all students who complete a course receive a digital certificate, which can be used to showcase your new skills on your resume or online profiles.
          </p>
        </div>
      </div>


      <div className="flex justify-center">
        <Link href="/academy/faqs" className="btn btn-link btn-lg text-primary rounded-lg px-10 mx-auto md:mx-0 mt-8" >View More </Link>
      </div>

    </section>
  )
}

export default FAQs