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
          <span className="italic text-secondary text-sm">8 - 12 weeks</span>
        </Link>

        <Link href="/learning/courses/responsive-web-design" className="text-primary flex flex-col p-3 border border-primary rounded-lg hover:shadow-xl max-w-md">
          <Image src="/images/responsive-web-dev.jpg" className="mb-3 rounded-md" width={400} height={250} objectFit="contain" alt="computer basics" />  
          <h3 className="font-550 mb-3 leading-5"><span className="font-bold text-lg">Responsive Web Design:</span> <br/><span className="font-normal">How to build compelling web pages tailored for any device</span></h3>
          <span className="flex items-center text-sm"><Image src="/images/certificate-icon.png" className="mr-1 w-4 inline text-primary" width={100} height={100} alt="certificate icon" />  Includes Professional Certificate</span>
          <span className="italic text-secondary text-sm">12 weeks</span>
        </Link>

        <Link href="/learning/courses/dynamic-web-development" className="text-primary flex flex-col p-3 border border-primary rounded-lg hover:shadow-xl max-w-md">
          <Image src="/images/dynamic-web-developer.jpg" className="mb-3 rounded-md" width={400} height={250} objectFit="contain" alt="computer basics" />  
          <h3 className="font-550 mb-3 leading-5"><span className="font-bold text-lg">Dynamic Web Development:</span> <br/><span className="font-normal">Use powerful frontend frameworks to develop web applications</span></h3>
          <span className="flex items-center text-sm"><Image src="/images/certificate-icon.png" className="mr-1 w-4 inline text-primary" width={100} height={100} alt="certificate icon" />  Includes Professional Certificate</span>
          <span className="italic text-secondary text-sm">16 weeks</span>
        </Link>

      </div>
    </section>
  )
}

export default CoursePackages;