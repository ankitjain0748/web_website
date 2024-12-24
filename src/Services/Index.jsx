import React from 'react';
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import ServiceCard from "../home/ServiceCard";
// import StudentCard from "../home/StudenCard";
import Testimonials from '../home/Testimonials';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLaptopCode, FaGraduationCap, FaCertificate } from 'react-icons/fa';



const ServicesSection = () => {
    return (
        <div>
            <div className="max-w-[1320px] m-auto pt-[100px]">
                <div>
                    <h2 className="text-[55px] text-white text-center font-[700] mb-[5px]">Services</h2>
                    <div className="flex items-center gap-[10px] text-center justify-center mb-[60px] ">
                        <Link className="flex items-center gap-[6px] text-white text-[17px] font-[600]">
                            <IoMdHome /> Home
                        </Link>
                        <span className="text-white text-[17px]">NIT Solutions</span>
                    </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap items-center gap-[15px] pb-[70px]">
                    <div className="w-[100%] lg:w-[55%]">
                        <h2 className="dots relative px-[10px] inline-flex mb-[10px] text-[#09aff4] text-[15px] md:text-[1rem] font-[600] uppercase">Services</h2>
                        <h2 className="text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] font-[500] text-white mb-[2px] capitalize">services we offer</h2>
                        <p className="text-white text-[1rem] pr-[20px] lg:pr-[120px]">It sounds like NIT Solutions is launching an educational platform in Chomu focused on teaching web design, web development, and app development. This could be an excellent opportunity for individuals interested in gaining skills in these areas, especially considering the increasing demand for professionals with expertise in web and app development. Providing a platform for learning these skills could potentially benefit both aspiring developers and the tech industry in Chaum by fostering a more skilled workforce and facilitating innovation in digital technology.  <Link to={"/"} className="text-[#09aff4]"> Click Registration</Link></p>
                    </div>
                    <div className="w-[100%] lg:w-[45%] flex items-center justify-start lg:justify-end">
                        <Link to={"/"} className="group inline-flex items-center gap-[10px] min-w-[180px] px-[35px] py-[15px] bg-[#09aff4] border-[2px] border-[#09aff4] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[500] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[transparent] border-[#09aff4] hover:text-[#09aff4] hover:transition-all">see all services <FaArrowRightLong className="group:hover:ms-[5px]" /></Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] row-gap-[15px] md:gap-[30px] md:row-gap-[40px]">
                    <div>
                        <ServiceCard />
                    </div>

                    <div>
                        <ServiceCard />
                    </div>

                    <div>
                        <ServiceCard />
                    </div>

                    <div>
                        <ServiceCard />
                    </div>

                    <div>
                        <ServiceCard />
                    </div>

                    <div>
                        <ServiceCard />
                    </div>
                </div>

                <div className='bg-[#060922] px-[10px] md:px-[40px] lg:px-[90px]'>
                    <div className='max-w-[1320px] mx-[auto] pt-[50px] lg:pt-[100px] pb-[20px] lg:pb-[100px]'>
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
        </div>
    );
};

export default ServicesSection;
