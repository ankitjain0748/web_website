import React, { useEffect, useRef } from 'react';
import Herosec from "./Herosec";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";
import StudentCard from "./StudenCard";
import { MdOutlineLightbulb } from "react-icons/md";
import trusted from "../image/3.png";
import choseimg from "../image/1.png";
import { TbTargetArrow } from "react-icons/tb";
import { IoRibbon } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import SwiperComponent from "./SwiperComponent";
// import ParticleBackground from "./ParticleBackground";
import VanillaTilt from 'vanilla-tilt';
import Testimonials from './Testimonials';

function Page() {

    const tiltRef = useRef(null);
    const tiltRef2 = useRef(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 25, // Maximum tilt angle
                speed: 400, // Speed of the tilt animation

            });
        }

        if (tiltRef2.current) {
            VanillaTilt.init(tiltRef2.current, {
                max: 25, // Maximum tilt angle
                speed: 400, // Speed of the tilt animation

            });
        }


    }, []);
    return (<>

        <Herosec />
        <div className="max-w-[1320px] mx-[auto] px-[15px] pt-[50px] pb-[50px] md:pt-[70px] md:pb-[70px] lg:pt-[100px] lg:pb-[100px]">
            <div className="mb-[30px] md:mb-[50px]">
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
            </div>

            <div className="mb-[30px] md:mb-[50px]">
                <div className="flex flex-wrap lg:flex-nowrap items-center gap-[15px] pb-[70px]">
                    <div className="w-[100%] lg:w-[54%]">
                        <h2 className="dots relative px-[10px] inline-flex mt-[30px] mb-[10px] text-[#09aff4] text-[15px] md:text-[1rem] font-[600] uppercase">Services</h2>
                        <h2 className="text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] font-[500] text-white mb-[2px] capitalize">COURSE STRUCTURE</h2>
                        <p className="text-white text-[1rem] pr-[120px]">NIT Solutions,IN Front-End Development
                            Kickstart your career in just 3 months and secure a job before you pay</p>
                    </div>
                    <div className="w-[100%] lg:w-[45%] inline-flex  items-center justify-start lg:justify-end ">
                        <Link to={"/"} className="group inline-flex items-center gap-[10px] min-w-[180px] px-[35px] py-[15px] bg-[#09aff4] border-[2px] border-[#09aff4] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[500] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[transparent] border-[#09aff4] hover:text-[#09aff4] hover:transition-all">see all services <FaArrowRightLong className="group:hover:ms-[5px]" /></Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] lg:gap-[30px] row-gap-[30px] lg:row-gap-[40px]">
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
            </div>

            <div className="flex items-center flex-wrap lg:flex-nowrap gap-[40px]">
                <div className="w-[100%] lg:w-[50%]">
                    <h2 className="dots relative px-[10px] inline-flex mt-[30px] mb-[10px] text-[#09aff4] text-[15px] text-[1rem] font-[600] uppercase">about Us</h2>

                    <h3 className="mb-[40px] text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.7rem] md:leading-[2.5rem] lg:leading-[2.9rem] font-[500]   font-[500] pr-[10px] lg:pr-[50px] xl:pr-[100px]  capitalize text-white">trusted by worldwide Students since <span className="relative  text-[#09aff4]">2020.
                        <span className="absolute top-[20px] lg:top-[40px] right-[0] curveLine"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                            <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7" stroke="#09aff4"></path>
                        </svg></span></span></h3>

                    <p className="text-[1.1rem] opacity-[0.75] text-white pr-[4px] md:pr-[60px] lg:pr-[120px] mb-[20px] md:mb-[80px] lg:mb-[50px]">At NIT Solutions, We have expert trainers sharing their rich experience in FullStack Web Development Process</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[20px] lg:gap-[20px] xl:gap-[50px]">
                        <div className="group flex items-start gap-[10px] xl:gap-[20px]">
                            <div className="w-[20%] flex items-center justify-center w-[40px] md:-w-[60px] h-[40px] md:h-[60px] bg-[#09aff440]  rounded-[5px] group-hover:bg-[#09aff4] group-hover:text-[#09aff4] transition-all group-hover:transition-all grop-hover:mt-[-5px] mt-[10px] md:mt-[0px]">
                                <IoRibbon size={30} className="text-[#09aff4] group-hover:text-[#fff]" />
                            </div>
                            <div className="w-[80%]">
                                <h2 className="text-[1.5rem] font-[500] text-white">Learn From Experts</h2>
                                <p className="text-[1rem] font-[400] text-white opacity-[0.75]">At NIT Solutions, We have expert trainers sharing their rich experience in FullStack Web Development Process</p>
                            </div>
                        </div>

                        <div className="group flex items-start  gap-[10px] xl:gap-[20px]">
                            <div className="w-[20%] flex items-center justify-center w-[40px] md:-w-[60px] h-[40px] md:h-[60px] bg-[#09aff440]  rounded-[5px] group-hover:bg-[#09aff4] group-hover:text-[#09aff4] transition-all group-hover:transition-all grop-hover:mt-[-5px] mt-[10px] md:mt-[0px]">
                                <IoRibbon size={30} className="text-[#09aff4] group-hover:text-[#fff]" />
                            </div>
                            <div className="w-[80%]">
                                <h2 className="text-[1.5rem] font-[500] text-white">Assignment</h2>
                                <p className="text-[1rem] font-[400] text-white opacity-[0.75]">The entire training session is based on theories, practical projects & assignments. We also emphasize bringing many industry guest trainers.</p>
                            </div>
                        </div>



                        <div className="group flex items-start  gap-[10px] xl:gap-[20px]">
                            <div className="w-[20%] flex items-center justify-center w-[40px] md:-w-[60px] h-[40px] md:h-[60px] bg-[#09aff440]  rounded-[5px] group-hover:bg-[#09aff4] group-hover:text-[#09aff4] transition-all group-hover:transition-all grop-hover:mt-[-5px] mt-[10px] md:mt-[0px]">
                                <IoRibbon size={30} className="text-[#09aff4] group-hover:text-[#fff]" />
                            </div>
                            <div className="w-[80%]">
                                <h2 className="text-[1.5rem] font-[500] text-white">Practical Training</h2>
                                <p className="text-[1rem] font-[400] text-white opacity-[0.75]">At NIT Solutions, We boast about our sate-of-the-art labs equipped with all necessary hardware & software.</p>
                            </div>
                        </div>
                        <div className="group flex items-start  gap-[10px] xl:gap-[20px]">
                            <div className="w-[20%] flex items-center justify-center w-[40px] md:-w-[60px] h-[40px] md:h-[60px] bg-[#09aff440]  rounded-[5px] group-hover:bg-[#09aff4] group-hover:text-[#09aff4] transition-all group-hover:transition-all grop-hover:mt-[-5px] mt-[10px] md:mt-[0px]">
                                <IoRibbon size={30} className="text-[#09aff4] group-hover:text-[#fff]" />
                            </div>
                            <div className="w-[80%]">
                                <h2 className="text-[1.5rem] font-[500] text-white">24/7 support</h2>
                                <p className="text-[1rem] font-[400] text-white opacity-[0.75]">We provide technical support round the clock through our expert technical team members.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[80px]">
                        <Link to={"/"} className="group inline-flex items-center gap-[10px] min-w-[180px] px-[35px] py-[15px] bg-[#09aff4] border-[2px] border-[#09aff4] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[500] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[transparent] border-[#09aff4] hover:text-[#09aff4] hover:transition-all">Get in touch </Link>
                    </div>
                </div>
                <div ref={tiltRef2} className="text-center tilt-box w-[100%] lg:w-[50%]">
                    <img className='max-w-[80%] lg:max-w-[100%] m-auto' src={trusted} alt="Event Management " />
                </div>

                {/* <div className="w-[50%]" data-tilt>
                    <img className='' src={trusted} alt="Event Management " />
                </div> */}


            </div>

            <div className="flex items-center flex-col-reverse lg:flex-row flex-wrap lg:flex-nowrap gap-[40px] mt-[40px] md:mt-[60px] lg:mt-[100px]">


                <div ref={tiltRef} className="tilt-box w-[100%] lg:w-[50%] ">
                    <img className='max-w-[80%] lg:max-w-[100%] m-auto' src={choseimg} alt="Event Management " />
                </div>

                <div className="w-[100%] lg:w-[50%]">
                    <h2 className="dots relative px-[10px] inline-flex mt-[30px] mb-[10px] text-[#09aff4] text-[15px] text-[1rem] font-[600] uppercase">why choose us</h2>

                    <h3 className="mb-[20px] md:mb-[40px] text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.6rem] md:leading-[2.5rem] lg:leading-[2.9rem] font-[500] leading-[65px] pr-[10px] capitalize text-white">Our students love <span className="relative  text-[#09aff4]">working</span> with us </h3>

                    <p className="text-[1.1rem] opacity-[0.75] text-white pr-[10px] md:pr-[120px] mb-[50px]">WHAT ARE THE BENEFITS OF BEING A FULL STACK DEVELOPER?</p>

                    <div className="mb-[20px] md:mb-[50px]">
                        <div className="flex items-start gap-[10px] lg:gap-[20px] mb-[20px] lg:mb-[40px] xl:mb-[60px]">
                            <div className="text-[1.8rem] md:text-[2rem] lg:text-[3rem] text-[#09aff4] font-[700]">01.</div>
                            <div className="">
                                <h2 className="mb-[5px] text-[1.5rem] font-[500] text-white capitalize">Free Demo Class</h2>
                                <p className="text-[1rem] font-[400] text-white">Trained more than 1,000 students Since 500.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-[10px] lg:gap-[20px] mb-[20px] lg:mb-[40px] xl:mb-[60px]">
                            <div className="text-[1.8rem] md:text-[2rem] lg:text-[3rem] text-[#09aff4] font-[700]">02.</div>
                            <div className="">
                                <h2 className="mb-[5px] text-[1.5rem] font-[500] text-white capitalize">uniqe solutions</h2>
                                <p className="text-[1rem] font-[400] text-white">Specialties: WordPress, Magento, PHP, Custom Design, HTML5, CSS3, Graphic Design, SEO, SMM, PPC, Code Ignitor, WooCommerce, E-Commerce Development, Hosting, ...</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-[10px] lg:gap-[20px] mb-[20px] lg:mb-[40px] xl:mb-[60px]">
                            <div className="text-[1.8rem] md:text-[2rem] lg:text-[3rem] text-[#09aff4] font-[700]">03.</div>
                            <div className="">
                                <h2 className="mb-[5px] text-[1.5rem] font-[500] text-white capitalize">powerful strategies</h2>
                                <p className="text-[1rem] font-[400] text-white">trusted by over 500 Students around the City</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[20px] md:mt-[80px]">
                        <Link to={"/"} className="group inline-flex items-center gap-[10px] min-w-[180px] px-[35px] py-[15px] bg-[#09aff4] border-[2px] border-[#09aff4] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[500] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[transparent] border-[#09aff4] hover:text-[#09aff4] hover:transition-all">Get in touch </Link>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[15px] mt-[50px] md:mt-[100px] lg:mt-[200px] mb-[40px] md:mb-[50px] lg:mb-[150px]">
                <div className="flex flex-col items-center justify-center border-[1px] border-t-[4px] border-[#09aff4] rounded-[10px] h-[230px]">
                    <MdOutlineLightbulb className="text-[#09aff4]" size={50} />
                    <h2 className="mt-[5px] mb-[5px] text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white font-[600]">2000+</h2>
                    <h3 className="text-[1.25rem] text-white font-[400] capitalize">Students</h3>
                </div>


                <div className="flex flex-col items-center justify-center border-[1px] border-t-[4px] border-[#09aff4] rounded-[10px] h-[230px]">
                    <MdChat className="text-[#09aff4]" size={50} />
                    <h2 className="mt-[5px] mb-[5px] text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white font-[600]">1500+</h2>
                    <h3 className="text-[1.25rem] text-white font-[400] capitalize">company jobs</h3>
                </div>

                <div className="flex flex-col items-center justify-center border-[1px] border-t-[4px] border-[#09aff4] rounded-[10px] h-[230px]">
                    <FaUser className="text-[#09aff4]" size={50} />
                    <h2 className="mt-[5px] mb-[5px] text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white font-[600]">1600+</h2>
                    <h3 className="text-[1.25rem] text-white font-[400] capitalize">happy Students</h3>
                </div>

                <div className="flex flex-col items-center justify-center border-[1px] border-t-[4px] border-[#09aff4] rounded-[10px] h-[230px]">
                    <TbTargetArrow className="text-[#09aff4]" size={50} />
                    <h2 className="mt-[5px] mb-[5px] text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white font-[600]">3+</h2>
                    <h3 className="text-[1.25rem] text-white font-[400] capitalize">years Of exprience</h3>
                </div>
            </div>

            <div className="mb-[40px] md:mb-[60px] lg:mb-[100px]">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-[15px] pb-[40px] lg:pb-[70px]">
                    <div className="w-[100%] md:w-[55%]">
                        <h2 className="dots relative px-[10px] inline-flex mt-[30px] mb-[10px] text-[#09aff4] text-[15px] text-[1rem] font-[600] uppercase">Profile</h2>
                        <h2 className="text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.7rem] md:leading-[2.5rem] lg:leading-[2.9rem] font-[500] text-white mb-[2px] capitalize">NIT Students</h2>

                    </div>
                    <div className="w-[100%] md:w-[45%] flex items-center justify-start md:justify-end">
                        <Link to={"/"} className="group inline-flex items-center gap-[10px] min-w-[180px] px-[35px] py-[15px] bg-[#09aff4] border-[2px] border-[#09aff4] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[500] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[transparent] border-[#09aff4] hover:text-[#09aff4] hover:transition-all">see all post <FaArrowRightLong className="group:hover:ms-[5px]" /></Link>
                    </div>
                </div>
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


            <div className="mb-[40px] md:mb-[60px] lg:mb-[100px]">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-[15px] pb-[40px] lg:pb-[70px]">
                    <div className="w-[100%] md:w-[55%]">
                        <h2 className="dots relative px-[10px] inline-flex mt-[30px] mb-[10px] text-[#09aff4] text-[15px] text-[1rem] font-[600] uppercase">Profile</h2>
                        <h2 className="text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.7rem] md:leading-[2.5rem] lg:leading-[2.9rem] font-[500] text-white mb-[2px] capitalize">Placements Students</h2>

                    </div>
                    <div className="w-[100%] md:w-[45%] flex items-center justify-start md:justify-end">
                        <Link to={"/"} className="group inline-flex items-center gap-[10px] min-w-[180px] px-[35px] py-[15px] bg-[#09aff4] border-[2px] border-[#09aff4] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[500] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[transparent] border-[#09aff4] hover:text-[#09aff4] hover:transition-all">see all post <FaArrowRightLong className="group:hover:ms-[5px]" /></Link>
                    </div>
                </div>
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

        <div className='bg-[#09aff4] px-[20px] md:px-[40px] lg:px-[90px]'>
            <div className='max-w-[1320px] mx-[auto] pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px]'>
                <h2 className='text-[1.45rem] md:text-[1.75rem] text-[#fff] text-center mb-[40px] lg:mb-[60px] font-[500]'>TOP PLACEMENTS IN</h2>
                <div>
                    <SwiperComponent />
                </div>
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


    </>);
}

export default Page;