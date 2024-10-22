


const LearningPlans = () => {

  return (
    <section className="mx-auto lg:mx-0 w-full h-auto flex flex-col bg-primary text-white py-14">

      <h2 className="text-center text-xl md:text-2xl font-550 mb-3">Our Learning Plans</h2>
      <p className="max-w-4xl text-center mx-auto md:max-w-550 lg:max-w-full px-5">Explore flexible learning plans designed to fit your schedule and career goals in Scrum Mastery.</p>


      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 px-5 md:px-14 gap-10 md:gap-5 py-10 md:mt-14 w-full">
          <article className="text-white flex flex-col p-5 lg:p-7 border-2 border-white rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
            <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-white">Standard</h3>

            <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
              <li>5-Weeks Intense training</li>
              <li>Case Studies</li>
              <li>Exam Practice </li>
              <li>Admission into the Quales Community</li>
            </ul>
          </article>

          <article className="text-white flex flex-col p-5 lg:p-7 border-2 border-white rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
            <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-white">Premium</h3>

            <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
              <li>5-Weeks Intense training</li>
              <li>Case Studies</li>
              <li>Exam Practice </li>
              <li>Admission into the Quales Community</li>
              <li>Internship</li>
            </ul>
          </article>

          <article className="text-white flex flex-col p-5 lg:p-7 border-2 border-white rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
            <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-white">Gold</h3>

            <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
              <li>5-Weeks Intense training</li>
              <li>Case Studies</li>
              <li>Exam Practice </li>
              <li>Admission into the Quales Community</li>
              <li>Registration for Exam</li>
              <li>Employment Support</li>
            </ul>
          </article>

          <article className="text-white flex flex-col p-5 lg:p-7 border-2 border-white rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
            <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-white">Platinum</h3>

            <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
              <li>5-Weeks Intense training</li>
              <li>Case Studies</li>
              <li>Exam Practice </li>
              <li>Admission into the Quales Community</li>
              <li>Internship</li>
              <li>Registration for Exam</li>
              <li>Employment Support</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default LearningPlans;