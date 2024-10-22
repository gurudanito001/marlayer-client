"use client"

import Image from "next/image"
import { UserIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from "../../about-us/customArrows";



const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  arrows: false,
};


const TalentsTrained = () => {

  return (
    <div className="bg-white">
      <h3 className="text-xl xl:text-2xl font-550 text-primary px-5 xl:px-28 pb-7 md:pb-14 text-center">QA Talents We Trained</h3>


      <div className=" flex px-5 sm:px-12 lg:px-0 xl:px-44 pb-10 lg:pb-14 w-screen">
        <Slider {...settings} className="mx-auto lg:mx-0 w-full flex">
          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <figure className="h-72 w-72 bg-[url('/images/blessing.png')] bg-cover bg-center rounded-full mx-auto lg:mx-0 lg:ml-auto my-auto">
              </figure>
              <article className="flex flex-col w-full lg:max-w-550 my-auto mr-auto">
                <h4 className="text-xl lg:text-3xl mx-auto lg:mx-0 lg:mr-auto font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text">Blessing Arigbe</h4>
                <div className="text-lg text-primary font-light text-center lg:text-left w-full">
                  <p className="w-full mt-8 md:text-lg">With over 4 years of experience in Quality Assurance Engineering, Blessing Arigbe brings her passion for delivering high-quality software solutions to every project. As a BSc Computer Science graduate with multiple certifications, she emphasizes collaboration, communication, and continuous improvement. Now with Sabi, she is helping connect African markets globally while embodying the excellence instilled through her QA training.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <figure className="h-72 w-72 bg-[url('/images/Akinbowale.png')] bg-cover bg-center rounded-full mx-auto lg:mx-0 lg:ml-auto my-auto">
              </figure>
              <article className="flex flex-col w-full lg:max-w-550 my-auto mr-auto">
                <h4 className="text-xl lg:text-3xl mx-auto lg:mx-0 lg:mr-auto font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text">Akinbowale Akin-Taylor</h4>
                <div className="text-lg text-primary font-light text-center lg:text-left w-full">
                  <p className="w-full mt-8">Akinbowale Akin-Taylor, a former Microsoft software engineer, gained valuable software testing experience from his time at Quales Consulting. His deep understanding of software development, combined with hands-on QA expertise, allows him to drive quality and efficiency in complex projects. Akinbowale&apos;s experience at Quales equipped him with the skills to ensure robust, high-performing software solutions, making him a versatile and results-driven engineer.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <figure className="h-72 w-72 bg-[url('/images/Ayomide.png')] bg-cover bg-center rounded-full mx-auto lg:mx-0 lg:ml-auto my-auto">
              </figure>
              <article className="flex flex-col w-full lg:max-w-550 my-auto mr-auto">
                <h4 className="text-xl lg:text-3xl mx-auto lg:mx-0 lg:mr-auto font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text">Ayomide Obanewa</h4>
                <div className="text-lg text-primary font-light text-center lg:text-left w-full">
                  <p className="w-full mt-8">Ayomide Obanewa transitioned from a background in Law to becoming a certified Quality Assurance Engineer through Quales Consulting. His passion for detail and problem-solving, honed through his legal training, has enabled him to excel in software testing. Ayomide&apos;s journey with Quales empowered him with the technical skills to ensure product quality, making him a testament to the power of cross-disciplinary growth.</p>
                </div>
              </article>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}


export default TalentsTrained;