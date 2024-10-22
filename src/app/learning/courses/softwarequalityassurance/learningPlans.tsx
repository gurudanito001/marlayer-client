


const LearningPlans = () =>{

  return( 
    <section className="mx-auto lg:mx-0 w-full h-auto flex flex-col bg-primary text-white py-14">

      <h2 className="text-center text-xl md:text-2xl font-550 mb-3">Our Learning Plans</h2>
      <p className="max-w-4xl text-center mx-auto md:max-w-550 lg:max-w-full px-5">Explore flexible learning plans designed to fit your schedule and career goals in Software Testing.</p>


      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 px-5 xl:px-28 gap-10 md:gap-3 lg:gap-10 py-10 w-full">
          <article className="text-white flex flex-col p-5 lg:p-7 border-2 border-white rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
            <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-white">Basic</h3>

            <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
              <li>8-Week Intense Training on Manual and Automated Testing </li>
              <li>Admission to Quales Group with over 300+ Software Testers  </li>
              <li>Placement Support</li>
            </ul>
          </article>

          <article className="text-white flex flex-col p-5 lg:p-7 border-2 border-white rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
            <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-white">Standard</h3>

            <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
              <li>8-Week Intense Training on Manual and Automated Testing </li>
              <li>Admission to Quales Group with over 300+ Software Testers  </li>
              <li>Placement Support</li>
              <li>Mentorship</li>
              <li>Registration for CTFL exam</li>
            </ul>
          </article>

          <article className="text-white flex flex-col p-5 lg:p-7 border-2 border-white rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
            <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-white">Premium</h3>

            <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
              <li>8-Week Intense Training on Manual and Automated Testing </li>
              <li>Admission to Quales Group with over 300+ Software Testers  </li>
              <li>Placement Support</li>
              <li>Mentorship</li>
              <li>Registration for CTFL exam</li>
              <li>Internship</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default LearningPlans;