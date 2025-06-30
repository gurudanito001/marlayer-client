
import Image from "next/image";
import { ArrowLongRightIcon, ArrowLongDownIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, UserPlusIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

const HowToEnroll =()=>{

  return(
    <section id="howToEnroll" className=" bg-white py-14 lg:py-28 px-5 xl:px-28">
      <h2 className="text-center text-2xl font-semibold text-primary">Begin Your Learning Journey</h2>

      <div className="flex flex-col mt-14">
        <div className="flex flex-col md:flex-row md:gap-3 justify-center w-full">

          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-gray-50 p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:ml-auto rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-full">
              <CheckCircleIcon className="text-primary h-10 md:h-14" />
            </span>
            <h6 className="text-black mt-4 text-center font-semibold text-lg">Choose Course</h6>
            <p className="text-gray-800 mt-3 text-center text-sm"> Start by exploring our courses we offer, including QA Engineering and Scrum Mastery. </p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-8 inline md:hidden" />
          </div>



          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-gray-100 p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-full">
              <UserPlusIcon className="text-primary h-10 md:h-14" />
            </span>
            <h6 className="text-black mt-4 text-center font-semibold text-lg">Register</h6>
            <p className="text-gray-800 mt-3 text-center text-sm">Go to the registration page, fill all required information and proceed to make payment. </p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-8 inline md:hidden" />
          </div>



          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-gray-200 p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:mr-auto rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-white rounded-full">
              <ArrowRightStartOnRectangleIcon className="text-primary h-10 md:h-14" />
            </span>
            <h6 className="text-black mt-4 text-center font-semibold text-lg">Start Learning</h6>
            <p className="text-gray-800 mt-3 text-center text-sm">Login to access the student dashboard. Explore and get updated learning content. </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default HowToEnroll