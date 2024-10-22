"use client"


import Link from "next/link";
import Image from "next/image";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from "../../about-us/customArrows";
import { useState } from "react";





const LearningPlans = () => {

  const [currentPackage, setCurrentPackage] = useState("Scrum Learning Package");

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow onClick={()=>{}} additionalClasses="invisible" id="learningPlanPrevArrow" />,
    nextArrow: <CustomNextArrow onClick={()=>{}} additionalClasses="invisible" id="learningPlanNextArrow"/>,
    arrows: true,
    afterChange: ()=>{
      console.log("carousel was swipped")
        setCurrentPackage( (prevState) => {
          if(prevState === "Scrum Learning Package"){
            return "QA Learning Package"
          }else{
            return "Scrum Learning Package"
          }
        })
    }
  };

  const changePackage = () =>{
    if(document){
      let nextArrow = document.getElementById("learningPlanNextArrow");
      nextArrow?.click();
    }
  }


  return (
    <section id="learningPlans" className="bg-white flex flex-col items-center py-28">
      <h2 className="text-center text-xl md:text-2xl font-550 mb-3 text-primary">Our Learning Plans</h2>
      <p className="text-primary max-w-4xl text-center mx-auto md:max-w-550 lg:max-w-full px-5 mb-5">Explore flexible learning plans tailored to suit your career goals. </p>

      <div className="flex px-5 xl:px-14 -mt-28 md:-mt-24 mb-10 lg:-mt-20 lg:mb-0 w-full">
        <button onClick={changePackage} className="btn btn-sm lg:btn-md bg-primary text-white text-xs md:text-sm rounded-full px-2 lg:px-9 ml-auto"> <Image src="/images/switch-icon.svg" alt="switch icon" width={15} height={15} /> <span className=" hidden lg:inline">{currentPackage}</span></button>
      </div>


      <div className="flex pb-10 lg:pb-14 w-screen">
        <Slider {...settings} className="mx-auto lg:mx-0 w-full h-auto flex">
          <div className="mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 px-5 md:px-14 gap-10 md:gap-5 py-10 md:mt-14 w-full">
              <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
                <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Standard</h3>

                <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
                  <li>5-Weeks Intense training</li>
                  <li>Case Studies</li>
                  <li>Exam Practice </li>
                  <li>Admission into the Quales Community</li>
                </ul>
              </article>

              <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
                <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Premium</h3>

                <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
                  <li>5-Weeks Intense training</li>
                  <li>Case Studies</li>
                  <li>Exam Practice </li>
                  <li>Admission into the Quales Community</li>
                  <li>Internship</li>
                </ul>
              </article>

              <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
                <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Gold</h3>

                <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
                  <li>5-Weeks Intense training</li>
                  <li>Case Studies</li>
                  <li>Exam Practice </li>
                  <li>Admission into the Quales Community</li>
                  <li>Registration for Exam</li>
                  <li>Employment Support</li>
                </ul>
              </article>

              <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
                <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Platinum</h3>

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

          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 px-5 xl:px-28 gap-10 md:gap-3 lg:gap-10 py-10 md:mt-14 w-full">
              <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
                <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Basic</h3>

                <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
                  <li>8-Week Intense Training on Manual and Automated Testing </li>
                  <li>Admission to Quales Group with over 300+ Software Testers  </li>
                  <li>Placement Support</li>
                </ul>
              </article>

              <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
                <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Standard</h3>

                <ul className=" list-disc list-outside gap-4 text-sm font-light flex flex-col px-3">
                  <li>8-Week Intense Training on Manual and Automated Testing </li>
                  <li>Admission to Quales Group with over 300+ Software Testers  </li>
                  <li>Placement Support</li>
                  <li>Mentorship</li>
                  <li>Registration for CTFL exam</li>
                </ul>
              </article>

              <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
                <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Premium</h3>

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
        </Slider>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 px-5 lg:px-20 xl:px-28 gap-10 md:gap-3 lg:gap-10 py-10 md:mt-14 w-full">
        <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
          <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Basic</h3>

          <ul className=" list-disc list-inside gap-4 text-sm font-light flex flex-col">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>
        </article>

        <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
          <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Standard</h3>

          <ul className=" list-disc list-inside gap-4 text-sm font-light flex flex-col">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>
        </article>

        <article className="text-primary flex flex-col p-5 lg:p-7 border-2 border-primary rounded-3xl max-w-96 mx-auto md:max-w-full md:mx-0">
          <h3 className="text-left text-2xl md:text-3xl font-550 mb-5 text-primary">Premium</h3>

          <ul className=" list-disc list-inside gap-4 text-sm font-light flex flex-col">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
          </ul>
        </article>
      </div> */}

      <div className={`flex justify-center ${currentPackage === "QA Learning Package" && "-mt-64 xl:-mt-0"}`}>
        <Link href="/learning/learningplans" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0" >View More</Link>
      </div>
    </section>
  )
}

export default LearningPlans