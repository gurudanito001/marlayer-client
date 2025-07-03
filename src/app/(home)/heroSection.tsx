"use client"

import React, { useRef, useState, useEffect } from 'react';
import Slider from '@ant-design/react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for a single slide's data
interface SlideData {
  imageClass: string;
  bgColorClass: string;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
  buttonColorClass: string;
  link: string;
}

// Custom Arrow/Play/Pause Button component for reusability
const ArrowButton = ({ onClick, children, ariaLabel }: { onClick?: () => void; children: React.ReactNode; ariaLabel: string }) => (
  <button
    onClick={onClick}
    className="btn btn-circle btn-sm bg-white bg-opacity-70 hover:bg-opacity-90 transition-all duration-300 shadow-md text-gray-800 mx-1"
    aria-label={ariaLabel}
  >
    {children}
  </button>
);

const HeroSection = () => {
  const sliderRef = useRef<Slider>(null); // Ref to control the slider
  const [isPlaying, setIsPlaying] = useState(true); // State to manage autoplay (play/pause)
  const [currentSlide, setCurrentSlide] = useState(0); // State to track current slide index

 
  // Data for each slide
  const slidesData: SlideData[] = [
    {
      imageClass: `bg-[url('/images/homepage/student-group.jpg')] bg-primary-2/20 bg-blend-darken`,
      bgColorClass: `bg-primary-2/30`, // Assuming 'primary' is defined in Tailwind config
      title: "Marlayer Academy",
      subTitle: "",
      description: "Dive into comprehensive courses from software development to basic computer usage. Our expert-led programs are designed to equip you with in-demand skills for tomorrow's digital world.",
      buttonText: "Explore Courses",
      buttonColorClass: "bg-primary border-primary",
      link: "#"
    },
    {
      imageClass: `bg-[url('/images/homepage/software-meeting.jpg')] bg-secondary/20 bg-blend-darken`,
      bgColorClass: `bg-secondary/30`, // Assuming 'neutral' is defined in Tailwind config
      title: "Marlayer Bespoke Software",
      subTitle: "",
      description: "Partner with Marlayer to bring your innovative ideas to life. Our agency specializes in building bespoke, high-quality tech products tailored to your organization's unique needs.",
      buttonText: "View Our Work",
      buttonColorClass: "bg-secondary border-secondary",
      link: "#" // Placeholder link
    },
    {
      imageClass: `bg-[url('/images/homepage/cloud-services.jpg')] bg-accent/20 bg-blend-darken`,
      bgColorClass: `bg-accent/30`, // Assuming 'secondary' is defined in Tailwind config
      title: "Marlayer Cloud Services",
      subTitle: "",
      description: "Experience easy-to-integrate cloud services, from robust Backend-as-a-Service to reliable blog hosting. Focus on building your product, we'll handle the infrastructure.",
      buttonText: "Discover Cloud",
      buttonColorClass: "bg-sky-800 border-sky-800",
      link: "#" // Placeholder link
    },
  ];

  // Toggle play/pause function
  const togglePlayPause = () => {
    if (sliderRef.current) {
      if (isPlaying) {
        sliderRef.current.slickPause();
      } else {
        sliderRef.current.slickPlay();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // react-slick settings
  const settings = {
    //dots: true, // Enable dots, but we'll render custom ones
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying, // Control autoplay based on state
    autoplaySpeed: 5000, // Adjusted for a slightly longer view time
    cssEase: "linear", // Smooth transition for fade
    pauseOnHover: false, // Pause autoplay on hover
    // Callback before slide changes to update currentSlide state
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
    
  };

  return (
    <section className="relative w-screen overflow-x-clip">
      {/* The Slider component now takes full height of its parent section */}
      <Slider ref={sliderRef} {...settings} className="h-screen max-h-[600px]">
        {slidesData.map((slide, index) => (
          // Each carousel item also takes full height of the slider
          <div key={index} className={`carousel-item h-screen max-h-[600px]`}>
            <div className="w-full h-full flex flex-col-reverse lg:flex-row">
              {/* Text Content Area */}
              <article className={`h-full w-full lg:w-1/2 ${slide.bgColorClass} flex flex-col lg:justify-center p-5 md:pl-10 lg:pl-14 xl:pl-20`}>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl text-gray-900 font-semibold mb-5 text-left">
                  {slide.title}
                </h3>
                <p className="text-gray-700 md:text-lg font-normal mb-7 max-w-xl text-left leading-snug">
                  {slide.description}
                </p>
                <a href={slide.link} className={`btn ${slide.buttonColorClass} text-white w-full max-w-40 mx-0`}>
                  {slide.buttonText}
                </a>
              </article>
              {/* Image Content Area */}
              <figure className={`h-full w-full lg:w-1/2 ${slide.imageClass} bg-no-repeat bg-cover bg-center`}>
              </figure>
            </div>
          </div>
        ))}
      </Slider>

      <div className="absolute mt-5 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-2 z-20 w-full max-w-lg gap-2 lg:gap-5">

        {/* Play/Pause Button */}
        <ArrowButton onClick={togglePlayPause} ariaLabel={isPlaying ? "Pause Autoplay" : "Play Autoplay"}>
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </ArrowButton>


        {/* Previous Arrow */}
        <ArrowButton onClick={() => sliderRef.current?.slickPrev()} ariaLabel="Previous Slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </ArrowButton>

        {/* Dots */}
        <button
          className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${0 === currentSlide ? 'scale-110' : 'bg-white bg-opacity-50 border border-primary'
            }`}
          style={{ backgroundColor: 0 === currentSlide ? "#000000" : undefined }}
          aria-label={`Go to slide ${0 + 1}`}
        ></button>
        <button
          className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${1 === currentSlide ? 'scale-110' : 'bg-white bg-opacity-50 border border-primary'
            }`}
          style={{ backgroundColor: 1 === currentSlide ? "#000000" : undefined }}
          aria-label={`Go to slide ${1 + 1}`}
        ></button>
        <button
          className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${2 === currentSlide ? 'scale-110' : 'bg-white bg-opacity-50 border border-primary'
            }`}
          style={{ backgroundColor: 2 === currentSlide ? "#000000" : undefined }}
          aria-label={`Go to slide ${2 + 1}`}
        ></button>


        {/* Next Arrow */}
        <ArrowButton onClick={() => sliderRef.current?.slickNext()} ariaLabel="Next Slide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </ArrowButton>
      </div>


    </section>
  );
};

export default HeroSection