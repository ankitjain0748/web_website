import { Link } from "react-router-dom";
import webdeve from "../image/webdeve.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";









function Protfoil3() {
    return (
        <div className="max-w-[1320px] px-[15px] m-auto pt-[50px] md:pt-[60px] lg:pt-[100px]">
            <div>
                <h2 className="text-[25px] md:text-[45px] lg:text-[55px] text-white text-center font-[700] mb-[30px] md:mb-[50px] lg:mb-[150px]">Students Performance</h2>

                <div className="mb-[40px] md:mb-[60px] lg:mb-[100px]">

                    <h3 className="text-white text-[20px] font-[600] mb-[30px]">Students Performance</h3>
                    <div className="flex flex-wrap lg:flex-nowrap justify-between gap-[40px]">
                        <div className="w-[100%] lg:w-[70%]">
                            <div>
                                <div className="text-[13px] md:text-[16px] lg:text-[20px]  text-[500] text-[#61e907] mb-[1.5rem]">
                                    <div className="flex gap-[15px] justify-between items-center font-[600] pb-[0.5rem]">
                                        <div className="capitalize">Priyanshu saini</div>

                                        <div className="capitalize">Good</div>

                                        <div className="capitalize">60%</div>
                                    </div>
                                    <div className="relative bg-[#61e907] w-[100%] h-[0.25rem] opacity-[0.75] rounded overflow-hidden">
                                        <div className="absolute bottom-[0] left-[0] bg-[#09aff4] h-[0.25rem] rounded-[0] transition w-[50%]"></div>
                                    </div>
                                </div>

                                <div className="text-[13px] md:text-[16px] lg:text-[20px]  text-[500] text-[#61e907] mb-[1.5rem]">
                                    <div className="flex gap-[15px] justify-between items-center font-[600] pb-[0.5rem]">
                                        <div className="capitalize">Mahendra Kumar saini</div>

                                        <div className="capitalize">mahendra Aap off jada lete ho</div>

                                        <div className="capitalize">30%</div>
                                    </div>
                                    <div className="relative bg-[#61e907] w-[100%] h-[0.25rem] opacity-[0.75] rounded overflow-hidden">
                                        <div className="absolute bottom-[0] left-[0] bg-[#09aff4] h-[0.25rem] rounded-[0] transition w-[30%]"></div>
                                    </div>
                                </div>




                                <div className="text-[13px] md:text-[16px] lg:text-[20px]  text-[500] text-[#61e907] mb-[1.5rem]">
                                    <div className="flex gap-[15px] justify-between items-center font-[600] pb-[0.5rem]">
                                        <div className="capitalize">Subhash Chand Yadav</div>

                                        <div className="capitalize">Subhash, you are taking time to work.</div>

                                        <div className="capitalize">40%</div>
                                    </div>
                                    <div className="relative bg-[#61e907] w-[100%] h-[0.25rem] opacity-[0.75] rounded overflow-hidden">
                                        <div className="absolute bottom-[0] left-[0] bg-[#09aff4] h-[0.25rem] rounded-[0] transition w-[40%]"></div>
                                    </div>
                                </div>



                                <div className="text-[13px] md:text-[16px] lg:text-[20px]  text-[500] text-[#f1f505] mb-[1.5rem]">
                                    <div className="flex gap-[15px] justify-between items-center font-[600] pb-[0.5rem]">
                                        <div className="capitalize">Chetan prajapati</div>

                                        <div className="capitalize">chetan aap time pr work complete nahi kar rahe</div>

                                        <div className="capitalize">50%</div>
                                    </div>
                                    <div className="relative bg-[#61e907] w-[100%] h-[0.25rem] opacity-[0.75] rounded overflow-hidden">
                                        <div className="absolute bottom-[0] left-[0] bg-[#09aff4] h-[0.25rem] rounded-[0] transition w-[50%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="w-[100%] lg:w-[30%] text-white">
                            <div className="flex flex-col gap-[0] bg-[#000531]">
                                <div className="">
                                    <img src={webdeve} alt="" />
                                </div>
                                <div className="bg-[#000531] pt-[40px] pb-[40px]">
                                    <h2 className="text-[#fff] text-[22px] md:text-[25px] lg:text-[30px] font-[500] mb-[40px] text-center">Performance</h2>
                                    <div className="flex items-center justify-center gap-[15px]">
                                        <Link to="/" className="bg-[#09aff4] px-[11px] py-[12px] rounded-[4px] transition  hover:translate-y-[-10px] hover:bg-[#fff] hover:text-[#000] duration-700"><FaFacebookF /></Link>
                                        <Link to="/" className="bg-[#09aff4] px-[11px] py-[12px] rounded-[4px] transition  hover:translate-y-[-10px] hover:bg-[#fff] hover:text-[#000] duration-700"><FaYoutube /></Link>
                                        <Link to="/" className="bg-[#09aff4] px-[11px] py-[12px] rounded-[4px] transition  hover:translate-y-[-10px] hover:bg-[#fff] hover:text-[#000] duration-700"><FaInstagram /></Link>
                                        <Link to="/" className="bg-[#09aff4] px-[11px] py-[12px] rounded-[4px] transition  hover:translate-y-[-10px] hover:bg-[#fff] hover:text-[#000] duration-700"><FaTwitter /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Protfoil3;