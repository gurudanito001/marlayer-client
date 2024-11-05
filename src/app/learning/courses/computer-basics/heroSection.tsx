
import Footer from "@/app/(home)/footer";
import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


const HeroSection = () => {

  return (
    <section className="flex flex-col py-14 lg:py-24 px-3 lg:px-14 xl:px-28 bg-primary text-white mb-8">
      <div className="max-w-4xl">
        <h2 className="text-4xl lg:text-7xl font-semibold mb-3 p-0">Computer Fundamentals and Microsoft Office Training
        </h2>
        <p className="text-xl font-light mt-5 mb-4">
          This course introduces students to essential computer skills and teaches them how to use the core Microsoft Office applications. Students will gain hands-on experience in creating documents, spreadsheets, presentations, and managing emails, which are vital for everyday office tasks.
        </p>
        <h4 className="font-550 text-xl mb-3">Course Objectives:</h4>
        <ul className=" list-none list-outside flex flex-col gap-3 lg:gap-5 text-lg">
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Understand basic computer operations and file management.</li>


          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Navigate the Windows or macOS operating system.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" /> Use Microsoft Office applications (Word, Excel, PowerPoint, Outlook) effectively.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Create, format, and edit documents, spreadsheets, and presentations.</li>
          <li className="flex items-center"> <CheckIcon className="w-5 text-secondary mr-3" />Use email, calendar, and contacts efficiently in Microsoft Outlook.</li>
        </ul>
        <div className="mt-7">
          <Link href="/learning/sign-up" className=" btn btn-lg bg-secondary text-white rounded-lg px-10">Enroll Now</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection