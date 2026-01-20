
import NavBar from "../home/navbar";
import Footer from "../footer";


const Faq = () => {

  return (
    <>
      <main className="bg-white">
        <NavBar darkTheme={true} />
        <section className="flex flex-col py-14 lg:py-24 px-3 lg:px-14 xl:px-28 bg-primary text-white mb-8">
          <div className="max-w-4xl">
            <h2 className="text-5xl lg:text-7xl font-semibold mb-3 p-0">Frequently Asked Questions </h2>
            <p className="text-lg md:text-xl font-light mt-5">Welcome to our FAQ page! Here, you&apos;ll find answers to some of the most common questions about our learning platform. Feel free to reach out to support if you have any additional questions! </p>
            <div className="mt-7">
            <button className=" btn md:btn-lg text-md bg-secondary text-white rounded-lg">Contact Support</button>
          </div>
          </div>
        </section>

        <section className="py-20 flex flex-col px-3 lg:px-14 xl:px-28">
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
            <input type="checkbox" name="my-accordion-4" />
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
            <input type="checkbox" name="my-accordion-5" />
            <div className="collapse-title md:text-lg font-semibold bg-white text-primary">Will I receive a certificate after completing a course?
            </div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-black text-sm md:text-lg font-light">Yes, all students who complete a course receive a digital certificate, which can be used to showcase your new skills on your resume or online profiles.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
            <input type="checkbox" name="my-accordion-6" />
            <div className="collapse-title md:text-lg font-semibold bg-white text-primary">What are your subscription plans?
            </div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-black text-sm md:text-lg font-light">We offer three subscription plans—Standard, Premium, and Platinum—all available on a monthly basis. Each plan provides varying levels of support, with the Standard plan offering group sessions, the Premium plan adding one-on-one video sessions, and the Platinum plan offering in-person training.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
            <input type="checkbox" name="my-accordion-6" />
            <div className="collapse-title md:text-lg font-semibold bg-white text-primary"> Do you offer any discounts for students?
            </div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-black text-sm md:text-lg font-light">Yes! We offer special price discounts for students on all courses. To qualify, you must provide a credible student ID for verification when enrolling.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
            <input type="checkbox" name="my-accordion-6" />
            <div className="collapse-title md:text-lg font-semibold bg-white text-primary"> Can I upgrade my subscription plan during the course?
            </div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-black text-sm md:text-lg font-light">Yes, you can upgrade your subscription at any point if you feel you need more personalized support or in-person training.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
            <input type="checkbox" name="my-accordion-6" />
            <div className="collapse-title md:text-lg font-semibold bg-white text-primary"> How do I pay for the courses?
            </div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-black text-sm md:text-lg font-light">We accept multiple payment methods, including credit card and bank transfers. You can select your preferred option during checkout.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-xl max-w-5xl mx-auto">
            <input type="checkbox" name="my-accordion-6" />
            <div className="collapse-title md:text-lg font-semibold bg-white text-primary"> Are there any other discounts or promotions available?
            </div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-black text-sm md:text-lg font-light">Besides student discounts, we frequently offer promotions during special events. Keep an eye on our website or subscribe to our newsletter for updates.
              </p>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}

export default Faq