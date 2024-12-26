import React from 'react';
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import ServiceCard from "../Main/ServiceCard";
import Accordion from "../components/Accordian";
// import StudentCard from "../home/StudenCard";
import Testimonials from '../Main/Testimonials';
import { FaArrowRightLong } from "react-icons/fa6";
import SwiperComponent from "../Main/SwiperComponent";
import StudentCard from "../Main/StudenCard";

const Protfoilo2 = () => {
    return (
        <div>
            <div className="max-w-[1320px] px-[15px] m-auto pt-[100px]">
                <div>
                    <h2 className="text-[55px] text-white text-center font-[700] mb-[5px]">NIT Students</h2>
                    <div className="flex items-center gap-[10px] text-center justify-center mb-[60px] ">
                        <Link className="flex items-center gap-[6px] text-white text-[17px] font-[600]">
                            <IoMdHome /> Home
                        </Link>
                        <span className="text-white text-[17px]">NIT Solutions</span>
                    </div>
                </div>
                <div className="mb-[40px] md:mb-[60px] lg:mb-[100px]">
              
                <div className="grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 gap-[15px] mg:gap-[20px] lg:gap-[25px]">
                    <div>
                        <StudentCard />
                    </div>

                    <div>
                        <StudentCard />
                    </div>

                    <div>
                        <StudentCard />
                    </div>

                    <div>
                        <StudentCard />
                    </div>
                </div>
            </div>
            </div>
        </div>

    );
};

export default Protfoilo2;
