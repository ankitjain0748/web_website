import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick-theme.css";
import testimonial from "../image/testimonial.jpeg";
const Testimonials = () => {

  const sliderRef = useRef(null); // Reference to the Slider component


  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const testimonials = [
    {
      quote: "I’ve been part of tennis leagues for years, but TennisKhelo really takes things to another level...",
      name: "Mukesh Kumawat",
      role: "Founder",
      image: testimonial,
    },
    {
      quote: "What I love about TennisKhelo is how simple it is to stay organized...",
      name: "Gourav Choudhary",
      role: "Co Founder",
      image: testimonial,
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="relative py-4 md:py-8 lg:py-12">
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className='w-[100px] h-[100px] m-[auto] '>
              <img src={testimonial.image} alt={`Slide ${index + 1}`} className="w-[70px] h-[70px] border-[3px] border-[#09aff4] rounded-[100px]" />
            </div>
            <div className='max-w-[100%] md:max-w-[400px] lg:max-w-[500px] text-center m-auto italic mb-[50px]'>
              <p className="text-[1.2rem] leading-[1.4rem] md:text-[1.5rem] md:leading-[1.7rem] text-center text-white  italic" >
                {testimonial.quote}
              </p>
            </div>
            <h2 className="text-[1.1rem] leading-[1.1rem] md:text-[1.5rem] md:leading-[1.7rem] text-center text-white ">
              {testimonial.name}
            </h2>
            <p className="text-[1rem] text-center text-white leading-[1.1]">{testimonial.role}</p>
          </div>
        ))}
      </Slider>

      {/* Custom navigation buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
        <button
          className="testimobtn flex items-center justify-center w-[45px] h-[45px] swiper-button-next bg-[#ffffff40] hover:bg-[#09aff4]"
          onClick={() => sliderRef.current.slickPrev()} // Link to the previous slide
        >
          <FaAngleLeft className='text-white' />
        </button>
        <button
          className="testimobtn flex items-center justify-center w-[45px] h-[45px] swiper-button-next bg-[#ffffff40] hover:bg-[#09aff4]"
          onClick={() => sliderRef.current.slickNext()} // Link to the next slide
        >
          <FaAngleRight className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
