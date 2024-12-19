import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

  const sliderRef = useRef(null); // Reference to the Slider component

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button onClick={onClick} type="button" className="slick-arrow slick-prev">
        {/* SVG icon for next button */}
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" transform="matrix(-1 0 0 1 48.5 0.160278)" fill="#008F70" />
          <path d="M12.1464 24.5138C11.9512 24.3186 11.9512 24.002 12.1464 23.8067L15.3284 20.6247C15.5237 20.4295 15.8403 20.4295 16.0355 20.6247C16.2308 20.82 16.2308 21.1366 16.0355 21.3319L13.2071 24.1603L16.0355 26.9887C16.2308 27.184 16.2308 27.5006 16.0355 27.6958C15.8403 27.8911 15.5237 27.8911 15.3284 27.6958L12.1464 24.5138ZM36.5 24.6603H12.5V23.6603H36.5V24.6603Z" fill="white" />
        </svg>
      </button>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button type="button" onClick={onClick} className="slick-arrow slick-next">
        {/* SVG icon for previous button */}
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24.5" cy="24.1603" r="24" fill="#008F70" />
          <path d="M36.8536 24.5138C37.0488 24.3186 37.0488 24.002 36.8536 23.8067L33.6716 20.6247C33.4763 20.4295 33.1597 20.4295 32.9645 20.6247C32.7692 20.82 32.7692 21.1366 32.9645 21.3319L35.7929 24.1603L32.9645 26.9887C32.7692 27.184 32.7692 27.5006 32.9645 27.6958C33.1597 27.8911 33.4763 27.8911 33.6716 27.6958L36.8536 24.5138ZM12.5 24.6603H36.5V23.6603H12.5V24.6603Z" fill="white" />
        </svg>
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };

  const testimonials = [
    {
      quote: "I’ve been part of tennis leagues for years, but TennisKhelo really takes things to another level...",
      name: "Sahil Mittal",
      role: "Player",
      image: "https://storage.googleapis.com/tennis-khelo.appspot.com/documents/d90346f1-6bc4-4734-9db8-02eb93ca6f41/img-e562553c-2e19-4fb9-a9de-e61c97129ba8.jpg"
    },
    {
      quote: "What I love about TennisKhelo is how simple it is to stay organized...",
      name: "Gourav Choudhary",
      role: "Player",
      image: "https://storage.googleapis.com/tennis-khelo.appspot.com/documents/9bec390d-c747-48c8-b48f-5cb20aab3997/img-3d95c76f-fe7f-4c5c-aa10-c507d7725af2.jpg"
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="relative py-12">
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <p className="text-[16px] lg:text-[20px] font-poppins italic font-[400] leading-[24px] lg:leading-[30px] text-[#FFFFFF] opacity-80 tracking-[-0.035em] mt-3">
              {testimonial.quote}
            </p>
            <h2 className="mt-3 text-center text-uppercase font-oswald text-[28px] font-semibold">
              {testimonial.name}
            </h2>
            <p className="text-gray-400 font-poppins">{testimonial.role}</p>
          </div>
        ))}
      </Slider>

      {/* Custom navigation buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
        <button
          className="swiper-button-prev bg-gray-300 text-black py-2 px-4 rounded-full hover:bg-gray-400"
          onClick={() => sliderRef.current.slickPrev()} // Link to the previous slide
        >
          Previous
        </button>
        <button
          className="swiper-button-next bg-gray-300 text-black py-2 px-4 rounded-full hover:bg-gray-400"
          onClick={() => sliderRef.current.slickNext()} // Link to the next slide
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
