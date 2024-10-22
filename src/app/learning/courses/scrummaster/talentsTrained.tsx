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
      <h3 className="text-xl xl:text-2xl font-550 text-primary px-5 xl:px-28 pb-7 md:pb-14 text-center">Scrum Master Talents We Trained</h3>


      <div className=" flex px-5 sm:px-12 lg:px-0 xl:px-44 pb-10 lg:pb-14 w-screen">
        <Slider {...settings} className="mx-auto lg:mx-0 w-full flex">

          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <figure className="h-72 w-72 bg-[url('/images/sandra.png')] bg-cover bg-center rounded-full mx-auto lg:mx-0 lg:ml-auto my-auto">
              </figure>
              <article className="flex flex-col w-full lg:max-w-550 my-auto mr-auto">
                <h4 className="text-xl lg:text-3xl mx-auto lg:mx-0 lg:mr-auto font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text">Sandra Alutu</h4>
                <div className="text-lg text-primary font-light text-center lg:text-left w-full">
                  <p className="w-full mt-8">Sandra Alutu, an experienced Agile expert and Scrum Master, has honed her skills for over 5 years at Quales Consulting and Naturalistas Lifestyle Cosmetics. She is dedicated to fostering a collaborative, self-organizing team environment while ensuring business goals are consistently met. Sandra excels in coaching, mentoring, and leading Agile ceremonies, driving her teams to frequently deliver value and achieve sprint goals.</p>
                </div>
              </article>
            </div>
          </div>


          {/* <div className="mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <figure className="h-72 w-72 bg-[url('/images/Jemima.png')] bg-cover bg-center rounded-full mx-auto lg:mx-0 lg:ml-auto my-auto">
              </figure>
              <article className="flex flex-col w-full lg:max-w-550 my-auto mr-auto">
                <h4 className="text-xl lg:text-3xl mx-auto lg:mx-0 lg:mr-auto font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text">Jemima Abutu</h4>
                <div className="text-lg text-primary font-light text-center lg:text-left w-full">
                  <p className="w-full mt-8 md:text-lg">Jemima masters in Human Resource Management and I currently work with IKEA. She wanted a career diversion in Tech because I felt it would make me globally relevant. Then, coincidentally, I stumbled on “Quales consulting” on a friend&apos;s WhatsApp Status and it seemed like the best way to combine natural talent and a career. In Summary, Quales consulting is the best option for you. As the Tutors are well knowledgeable, experienced and of course, willing to follow you at your learning pace. It was an amazing experience for me. </p>
                </div>
              </article>
            </div>
          </div> */}

        </Slider>
      </div>
    </div>
  )
}


export default TalentsTrained;