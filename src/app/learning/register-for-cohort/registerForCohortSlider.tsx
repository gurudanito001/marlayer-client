"use client"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";




const RegisterForCohortSlider = () => {

  const images = [
    `bg-[url('/images/adaeze.png')]`,
    `bg-[url('/images/ibukunoluwa.png')]`,
    `bg-[url('/images/kosisochukwu.png')]`,
    `bg-[url('/images/patrick.png')]`
  ]

  

  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const listImages = ()=>{
    return images.map( (item: string, index) =>{
      return (
        <section key={item} className={`carousel-item ${images[index]} bg-cover bg-center bg-no-repeat h-screen`}>
          <div className="h-full bg-overlay flex items-center content-center">
          </div>
        </section> 
      )
    })
  }




  return (
    <section className="relative hidden xl:flex flex-col overflow-hidden max-h-screen">
        <article className="absolute top-1/2 z-10 w-full text-white mx-auto opacity-100 px-3 md:px-5">
          <h2 className="text-3xl font-550 lg:mx-14 my-auto text-center">Leverage Quales Talents<br/>to Seamlessly Ensure Project Success</h2>
        </article>

        <Slider {...settings} className="h-screen">
          {listImages()} 
        </Slider>
    </section>
  )
}

export default RegisterForCohortSlider;
