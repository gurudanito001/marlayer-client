import Link from "next/link";
import Image from "next/image";



const CoursePackages = ()=>{

  return (
    <section id="coursePackages" className="bg-white py-14 lg:py-28 px-5 xl:px-28 flex flex-col">
      <h3 className="text-2xl max-w-550 mb-5 font-semibold text-primary">Courses on Marlayer</h3>

      <p className="md:max-w-550 lg:max-w-4xl text-lg mb-10">Unlock your potential with our comprehensive courses! Whether you&apos;re pursuing a passion or advancing your career, our expertly designed programs offer valuable insights and skills.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  w-full rounded-3xl md:rounded-none">
        <Link href="/learning/courses/computer-basics" className=" flex flex-col p-3 border border-primary rounded-lg hover:shadow-xl max-w-md">
          <Image src="/images/computer-basics.jpg" className="mb-3 rounded-md" width={400} height={250} objectFit="contain" alt="computer basics" />  
          <h3 className="font-550 mb-3 leading-5"><span className="font-bold text-lg">Computer Basics:</span> <br/><span className="font-normal">How to use a computer in a corporate environment</span></h3>
          <span className="flex items-center text-sm"><Image src="/images/certificate-icon.png" className="mr-1 w-4 inline text-primary" width={100} height={100} alt="certificate icon" />  Includes Professional Certificate</span>
          <span className="italic text-secondary text-sm">8 weeks</span>
        </Link>

        <Link href="/learning" className="text-primary flex flex-col p-3 border border-primary rounded-lg hover:shadow-xl max-w-md">
          <Image src="/images/responsive-web-dev.jpg" className="mb-3 rounded-md" width={400} height={250} objectFit="contain" alt="computer basics" />  
          <h3 className="font-550 mb-3 leading-5"><span className="font-bold text-lg">Responsive Web Design:</span> <br/><span className="font-normal">How to build compelling web pages tailored for any device</span></h3>
          <span className="flex items-center text-sm"><Image src="/images/certificate-icon.png" className="mr-1 w-4 inline text-primary" width={100} height={100} alt="certificate icon" />  Includes Professional Certificate</span>
          <span className="italic text-secondary text-sm">12 weeks</span>
        </Link>

        {/* <article className="text-primary flex flex-col p-10">
          <Image src="/images/scrumMaster.svg" className="mx-auto w-24 h-24 mb-3" width={150} height={150} objectFit="contain" alt="Scrum Master Icon" />
          <h3 className="text-center text-xl font-550 text-primary mb-5 md:mb-7 px-5">SCRUM MASTERY</h3>
          <p className="max-w-md text-center mx-auto">Become a certified Scrum Master and lead agile teams to success. Learn the principles of Scrum, effective team management, and the strategies needed to drive project excellence in dynamic environments. </p>

          <div className="flex justify-center">
            <Link href="/learning/scrummaster" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >View Course</Link>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default CoursePackages;