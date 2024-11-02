import Link from "next/link";
import FAQs from "../home/faqs";



const ContactSalesForm = () => {

  return (
    <section className="bg-neutral lg:px-24 grid grid-cols-1 xl:grid-cols-2 xl:gap-14 pb-10">

      <section id="faqs" className="pt-10 px-5 flex flex-col order-2 xl:order-1">
        <header className="flex mb-5 lg:mb-12">
          <h2 className="text-2xl mx-auto lg:mx-0 font-semibold bg-gradient-to-r max-w-550 text-primary">Frequently Asked Questions</h2>
        </header>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-lg max-w-5xl mx-auto">
          <input type="checkbox" name="my-accordion-1" />
          <div className="collapse-title font-550 bg-white text-primary"> What is the purpose of Marlayer online academy? </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <p className="py-5 text-black text-sm md:text-lg font-light">Our academy helps teenagers, young adults, and working professionals become technologically literate. We offer beginner-friendly courses that teach essential computer skills, web development, and data analysis, empowering you to use technology effectively in daily life or work.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-lg max-w-5xl mx-auto">
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-550 bg-white text-primary">Who are your courses designed for?</div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <p className="py-5 text-black text-sm md:text-lg font-light">Our courses are perfect for individuals who have little to no experience using technology beyond basic entertainment, as well as professionals looking to catch up on how to use tech for office tasks.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-lg max-w-5xl mx-auto">
          <input type="checkbox" name="my-accordion-3" />
          <div className="collapse-title font-550 bg-white text-primary">Do I need any prior technical knowledge to enroll?
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <p className="py-5 text-black text-sm md:text-lg font-light">No prior technical knowledge is required! The courses are designed for complete beginners, with guidance tailored to help you develop your skills progressively.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-lg max-w-5xl mx-auto">
          <input type="checkbox" name="my-accordion-3" />
          <div className="collapse-title font-550 bg-white text-primary"> How are the courses delivered?</div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <p className="py-5 text-black text-sm md:text-lg font-light">We offer classes in different formats depending on your subscription plan:</p>
            <ul className=" list-disc list-inside flex flex-col gap-3 lg:gap-5 pl-3 md:pl-5">
              <li><strong>Standard Plan:</strong> Group classes with up to 12 participants via video conferencing (Google Meet, Skype).</li>
              <li><strong>Premium Plan:</strong> Group classes (up to 12 participants) and additional one-on-one sessions via video conferencing.</li>
              <li><strong>Platinum Plan:</strong> In-person classes and one-on-one sessions.</li>
            </ul>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200 mb-2 rounded-lg max-w-5xl mx-auto">
          <input type="checkbox" name="my-accordion-3" />
          <div className="collapse-title font-550 bg-white text-primary">Will I receive a certificate after completing a course?
          </div>
          <div className="collapse-content bg-white border-t border-t-primary">
            <p className="py-5 text-black text-sm md:text-lg font-light">Yes, all students who complete a course receive a digital certificate, which can be used to showcase your new skills on your resume or online profiles.
            </p>
          </div>
        </div>


        <div className="flex justify-center">
          <Link href="/learning/faqs" className="btn btn-link btn-lg text-primary rounded-lg px-10 mx-auto md:mx-0 mt-3" >View More </Link>
        </div>

      </section>


      <form className="xl:max-w-3xl bg-white md:-mt-12 xl:-mt-600 p-5 lg:p-10 xl:shadow-lg order-1 xl:order-2 h-auto"> 
        
        <div className=" grid grid-cols-2 gap-3 mt-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Firstname <span className="text-secondary font-bold">*</span></span>
            </div>
            <input type="text" placeholder="John" className="input input-bordered rounded-lg w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Lastname <span className="text-secondary font-bold">*</span></span>
            </div>
            <input type="text" placeholder="Doe" className="input input-bordered rounded-lg w-full" />
          </label>
        </div>

        <div className=" grid grid-cols-2 gap-3 mt-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Email <span className="text-secondary font-bold">*</span></span>
            </div>
            <input type="email" placeholder="johndoe@email.com" className="input input-bordered rounded-lg w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Role <span className="text-secondary font-bold">*</span></span>
            </div>
            <input type="text" placeholder="Director / Hr" className="input input-bordered rounded-lg w-full" />
          </label>
        </div>

        <div className=" grid grid-cols-2 gap-3 mt-5">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Company <span className="text-secondary font-bold">*</span></span>
            </div>
            <input type="text" placeholder="Alphabet Inc." className="input input-bordered rounded-lg w-full" />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Company Size <span className="text-secondary font-bold">*</span></span>
            </div>
            <select className="select select-bordered w-full rounded-lg">
              <option selected> Select company size</option>
              <option> 1- 20</option>
              <option>20 - 50</option>
              <option>50 - 100</option>
              <option>100 - 1000</option>
              <option>1000+</option>
            </select>
          </label>
        </div>

        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Phone Number</span>
          </div>
          <div className="flex gap-1">
            <select className="select select-bordered w-full max-w-28 rounded-lg">
              <option selected>+1</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <input type="text" placeholder="**********" className="input input-bordered rounded-lg w-full" />
          </div>
        </label>

        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Preferred Learning Format</span>
          </div>
          <select className="select select-bordered w-full rounded-lg">
            <option selected disabled>Select Learning Format</option>
            <option>Online</option>
            <option>Workshop</option>
            <option>Blended Learning</option>
          </select>
        </label>

        

        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Course</span>
          </div>
          <select className="select select-bordered w-full rounded-lg">
            <option selected disabled>Select Course</option>
            <option>Computer Basics</option>
            <option>Responsive Web Design</option>
          </select>
        </label>
        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Training Goals / Objectives</span>
          </div>
          <textarea className="textarea textarea-bordered rounded-lg" rows={3} placeholder="List Training Goals"></textarea>
        </label>

        <label className="form-control w-full mt-5">
          <div className="label">
            <span className="label-text font-semibold">Additional Information</span>
          </div>
          <textarea className="textarea textarea-bordered rounded-lg" rows={3} placeholder="What else would you like us to know"></textarea>
        </label>
        <p className="text-secondary text-sm mt-5">Fields marked with an asterisk (*) are required.</p>

        <div className="mt-7">
          <button className="btn btn-lg bg-primary text-white border-primary shadow-sm rounded-lg px-20">Submit</button>
        </div>

      </form>

    </section>
  )
}

export default ContactSalesForm;