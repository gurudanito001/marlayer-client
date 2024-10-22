
import NavBar from "../home/navbar";
import Footer from "@/app/(home)/footer";
import Link from "next/link";


const LearningPlans = () => {

  return (
    <main className="bg-white">
      <NavBar />
      <section className="bg-white px-5 xl:px-28 mb-14">
        <header className="py-10">
          <h3 className="text-lg md:text-2xl text-center font-550 text-primary">Software Quality Assurance Engineering Learning Plans</h3>
        </header>


        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0 rounded-none lg:rounded-3xl overflow-clip w-full lg:border lg:border-primary">
            <article className="flex flex-col bg-white max-w-96 mx-auto lg:max-w-full lg:mx-0 rounded-3xl overflow-clip lg:rounded-none border border-primary lg:border-none">
              <header className="bg-primary py-5 lg:py-7 lg:border-r lg:border-white">
                <h3 className="text-center lg:text-lg font-normal mb-5 text-white">BASIC</h3>
                <h5 className="text-center text-3xl lg:text-5xl font-550 text-white">$250</h5>
              </header>

              <ul className="list-none text-center lg:text-lg font-550 gap-7 py-10 px-3 text-sm flex flex-col text-primary lg:border-r lg:border-primary h-full">
                <li>8-Week Intense Training on Manual and Automated Testing</li>
                <li>Admission to Quales Group with over 300+ software testers in organizations like Appzone, Interswitch, Microsoft etc.</li>
                <li>Placement Support</li>
              </ul>
            </article>

            <article className="flex flex-col bg-white max-w-96 mx-auto lg:max-w-full lg:mx-0 rounded-3xl overflow-clip lg:rounded-none border border-primary lg:border-none">
              <header className="bg-primary py-5 lg:py-7 lg:border-r lg:border-white">
                <h3 className="text-center lg:text-lg font-normal mb-5 text-white">STANDARD</h3>
                <h5 className="text-center text-3xl lg:text-5xl font-550 text-white">$500</h5>
              </header>

              <ul className="list-none text-center lg:text-lg font-550 gap-7 py-10 px-3 text-sm flex flex-col text-primary lg:border-r lg:border-primary h-full">
                <li>8-Week Intense Training on Manual and Automated Testing</li>
                <li>Admission to Quales Group with over 300+ software testers in organizations like Appzone, Interswitch, Microsoft etc.</li>
                <li>Placement Support</li>
                <li>Registration for the Certified Tester Foundation Level (CTFL) Exam</li>
              </ul>
            </article>

            <article className="flex flex-col bg-white max-w-96 mx-auto lg:max-w-full lg:mx-0 rounded-3xl overflow-clip lg:rounded-none border border-primary lg:border-none">
              <header className="bg-primary py-5 lg:py-7">
                <h3 className="text-center lg:text-lg font-normal mb-5 text-white">PREMIUM</h3>
                <h5 className="text-center text-3xl lg:text-5xl font-550 text-white">$750</h5>
              </header>

              <ul className="list-none text-center lg:text-lg font-550 gap-7 py-10 px-3 text-sm flex flex-col text-primary h-full">
                <li>8-Week Intense Training on Manual and Automated Testing</li>
                <li>Admission to Quales Group with over 300+ software testers in organizations like Appzone, Interswitch, Microsoft etc.</li>
                <li>Placement Support</li>
                <li>Registration for the Certified Tester Foundation Level (CTFL) Exam</li>
                <li>Three months internship with Quales</li>
              </ul>
            </article>
          </div>
          <div className="flex justify-center">
            <Link href="/learning/register-for-cohort" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-12" >Register for a Cohort</Link>
          </div>
        </div>




        <header className="py-10 mt-10">
          <h3 className="text-lg md:text-2xl text-center font-550 text-primary">Scrum Mastery Learning Plans</h3>
        </header>

        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 rounded-none lg:rounded-3xl overflow-clip w-full lg:border lg:border-primary">
            <article className="flex flex-col bg-white max-w-96 mx-auto lg:max-w-full lg:mx-0 rounded-3xl overflow-clip lg:rounded-none border border-primary lg:border-none">
              <header className="bg-primary py-5 lg:py-7 lg:border-r lg:border-white">
                <h3 className="text-center lg:text-lg font-normal mb-5 text-white">STANDARD</h3>
                <h5 className="text-center text-3xl lg:text-5xl font-550 text-white">$200</h5>
              </header>

              <ul className="list-none text-center lg:text-lg font-550 gap-7 py-10 px-3 text-sm flex flex-col text-primary lg:border-r lg:border-primary h-full">
                <li>5-Weeks Intense training including Case Studies, exam practice etc.</li>
                <li>Admission to Quales Group with over 300+ software testers in organizations like Appzone, Interswitch, Microsoft etc.</li>
                <li>Placement Support</li>
              </ul>
            </article>

            <article className="flex flex-col bg-white max-w-96 mx-auto lg:max-w-full lg:mx-0 rounded-3xl overflow-clip lg:rounded-none border border-primary lg:border-none">
              <header className="bg-primary py-5 lg:py-7 lg:border-r lg:border-white">
                <h3 className="text-center lg:text-lg font-normal mb-5 text-white">PREMIUM</h3>
                <h5 className="text-center text-3xl lg:text-5xl font-550 text-white">$276</h5>
              </header>

              <ul className="list-none text-center lg:text-lg font-550 gap-7 py-10 px-3 text-sm flex flex-col text-primary lg:border-r lg:border-primary h-full">
                <li>5-Weeks Intense training including Case Studies, exam practice etc.</li>
                <li>Admission to Quales Group with over 300+ software testers in organizations like Appzone, Interswitch, Microsoft etc.</li>
                <li>Placement Support</li>
                <li>Three(3) months internship with Quales Consulting</li>
              </ul>
            </article>

            <article className="flex flex-col bg-white max-w-96 mx-auto lg:max-w-full lg:mx-0 rounded-3xl overflow-clip lg:rounded-none border border-primary lg:border-none">
              <header className="bg-primary py-5 lg:py-7 lg:border-r lg:border-white">
                <h3 className="text-center lg:text-lg font-normal mb-5 text-white">GOLD</h3>
                <h5 className="text-center text-3xl lg:text-5xl font-550 text-white">$400</h5>
              </header>

              <ul className="list-none text-center lg:text-lg font-550 gap-7 py-10 px-3 text-sm flex flex-col text-primary lg:border-r lg:border-primary h-full">
                <li>5-Weeks Intense training including Case Studies, exam practice etc.</li>
                <li>Admission to Quales Group with over 300+ software testers in organizations like Appzone, Interswitch, Microsoft etc.</li>
                <li>Placement Support</li>
                <li>Registration for Scrum Master Pro Exam</li>
              </ul>
            </article>

            <article className="flex flex-col bg-white max-w-96 mx-auto lg:max-w-full lg:mx-0 rounded-3xl overflow-clip lg:rounded-none border border-primary lg:border-none">
              <header className="bg-primary py-5 lg:py-7">
                <h3 className="text-center lg:text-lg font-normal mb-5 text-white">PLATINUM</h3>
                <h5 className="text-center text-3xl lg:text-5xl font-550 text-white">$500</h5>
              </header>

              <ul className="list-none text-center lg:text-lg font-550 gap-7 py-10 px-3 text-sm flex flex-col text-primary h-full">
                <li>5-Weeks Intense training including Case Studies, exam practice etc.</li>
                <li>Admission to Quales Group with over 300+ software testers in organizations like Appzone, Interswitch, Microsoft etc.</li>
                <li>Placement Support</li>
                <li>Three(3) months internship with Quales Consulting</li>
                <li>Registration for Scrum Master Pro Exam</li>
              </ul>
            </article>
          </div>
          <div className="flex justify-center">
            <Link href="/learning/register-for-cohort" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-12" >Register for a Cohort</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default LearningPlans