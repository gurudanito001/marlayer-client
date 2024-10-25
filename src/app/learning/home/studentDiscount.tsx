import Link from "next/link";
import Image from "next/image";

const StudentDiscount = () => {

  return (
    <section id="studentDiscount" className="bg-primary text-white py-14 lg:py-28 px-5 xl:px-28">

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <article className="flex flex-col lg:pb-20">
          <h1 className=" text-5xl md:text-7xl font-extrabold mt-auto">Student Savings:</h1>
          <h1 className=" text-4xl md:text-5xl font-semibold">Enjoy special discounts</h1>
          <h1 className=" text-4xl md:text-5xl font-semibold">for students today!</h1>
          <Image src="/images/student.jpg" className="lg:hidden mb-3 rounded-md w-full max-w-600 my-5" width={400} height={250} objectFit="contain" alt="computer basics" />  
          <p className=" text-xl md:text-2xl mt-7 max-w-2xl text-white font-normal">We offer up to 50% discount for students. Offer lasts till November 2024</p>

          <div className="mt-5">
          <button className=" btn btn-lg bg-secondary text-white border-primary shadow-sm rounded-lg px-10">Register Now</button>
        </div>
        </article>

        <figure className=" hidden lg:block">
          <Image src="/images/student.jpg" className="mx-auto mb-3 rounded-md w-full max-w-600" width={400} height={250} objectFit="contain" alt="computer basics" />  
        </figure>
      </div>
    </section>
  )
}

export default StudentDiscount