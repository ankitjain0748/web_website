import React from 'react';
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import ServiceCard from "../Main/ServiceCard";
import Accordion from "../components/Accordian";
// import StudentCard from "../home/StudenCard";
import Testimonials from '../Main/Testimonials';
import { FaArrowRightLong } from "react-icons/fa6";
import SwiperComponent from "../Main/SwiperComponent";


const Services2 = () => {
    return (
        <div>
            <div className="max-w-[1320px] px-[15px] m-auto pt-[100px]">
                <div>
                    <h2 className="text-[55px] text-white text-center font-[700] mb-[5px]">Pricing Plans</h2>
                    <div className="flex items-center gap-[10px] text-center justify-center mb-[60px] ">
                        <Link className="flex items-center gap-[6px] text-white text-[17px] font-[600]">
                            <IoMdHome /> Home
                        </Link>
                        <span className="text-white text-[17px]">NIT Solutions</span>
                    </div>
                </div>


                <div className='bg-[#060922] px-[10px] md:px-[40px] lg:px-[90px]'>
                    <div className='max-w-[1320px] px-[15px] mx-[auto] pt-[50px] lg:pt-[100px] pb-[20px] lg:pb-[100px]'>
                        <div className='text-center'>

                            <h2 className="dots relative px-[10px] inline-flex mt-[30px] mb-[5px] text-[#09aff4] text-[15px] text-[1rem] font-[600] uppercase text-center justify-center">Testimonials</h2>
                        </div>

                        <h2 className="text-[1.5rem] md:text-[2.0rem] lg:text-[2.5rem] font-[500] text-white mb-[2px] capitalize text-center">NIT testmonials</h2>

                        <div>
                            <Testimonials />
                        </div>
                    </div>
                </div>
                </div>

                <div className='bg-[#09aff4] px-[20px] md:px-[40px] lg:px-[90px]'>
                    <div className='max-w-[1320px] px-[15px] mx-[auto] pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px]'>
                        <h2 className='text-[1.45rem] md:text-[1.75rem] text-[#fff] text-center mb-[40px] lg:mb-[60px] font-[500]'>TOP PLACEMENTS IN</h2>
                        <div>
                            <SwiperComponent />
                        </div>
                    </div>
                </div>



                <div className='bg-[#060922] px-[10px] md:px-[40px] lg:px-[90px]'>
                    <div className='max-w-[1320px] px-[15px] mx-[auto] pt-[50px] lg:pt-[100px] pb-[20px] lg:pb-[100px]'>
                        <div className='text-center'>

                            <h2 className="dots relative px-[10px] inline-flex mt-[30px] mb-[5px] text-[#09aff4] text-[15px] text-[1rem] font-[600] uppercase text-center justify-center">contact us</h2>
                        </div>

                        <h2 className="text-[1.5rem] md:text-[2.0rem] lg:text-[2.5rem] font-[500] text-white mb-[2px] capitalize text-center">get in totch with us</h2>

                        <div>
                            <p className='text-center text-[17px] text-[#fff] px-[2px] md: px-[20px] lg: px-[200px]'>To register for web design, web development, or app development services with NIT Solutions,
                                you should follow these steps:</p>

                            <div className='text-center mt-[20px]'>
                                <Link to={"/"} className="inline-block min-w-[180px] px-[2.25rem] py-[0.85rem] border-[2px] border-[#fff] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[700] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[#09aff4] hover:text-[#fff] hover:transition-all">contact us</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
      
    );
};

export default Services2;
