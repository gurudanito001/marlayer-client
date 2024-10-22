import Link from "next/link";


const CohortSignup = ()=>{
  return(
    <section className="bg-gray-black text-white px-5 lg:px-28 py-20 lg:py-36 flex flex-col md:flex-row mb-10">
      <article>
        <h2 className="font-550 text-2xl lg:text-4xl">Sign up for our next Cohort now</h2>
        <p className="font-light text-lg mt-5">Join the waitlist for our next Software Quality Assurance classes today </p>
      </article>
      <Link href="/learning/register-for-cohort" className="btn bg-blue-600 border-blue-600 text-white rounded-full px-8 mr-auto md:mr-0 md:ml-auto mt-8">Register for Course</Link>
    </section>
  )
}

export default CohortSignup