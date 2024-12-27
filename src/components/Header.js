import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../image/logo.png"
import { IoCloseSharp } from "react-icons/io5";
import toast from 'react-hot-toast';
import { IoMdLogOut } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
export default function Header() {
    const navigate = useNavigate()
    const token = localStorage && localStorage?.getItem("token")
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    function handlelogout() {
        localStorage.removeItem('token')
        navigate('/')
        toast.success("Logout Successfully ")
    }
    return (
        <div className='relative flex items-center justify-between max-w-[1320px] m-auto px-[15px] py-[25px] z-[9]'>
            <Link to={"/"}>
                <img className='max-w-[150px]' src={logo} alt="Event Management " />
            </Link>
            {/* desktop */}
            <div className='hidden lg:flex items-center gap-[10px] z-[5] group'>
                <ul className='  lg:relative flex lg:flex-row items-center gap-[36px] md:gap-[20px] lg:gap-[36px] font-manrope text-[1rem] font-[400] text-white'>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/sing_up"}>Registration</Link>
                    </li>
                    <li>
                        <Link to={"/about_us"}>about us
                        </Link>
                    </li>
                    <li>
                        <Link to={"/services"}>services
                        </Link>
                    </li>
                    <li>
                        <Link to={"/services2"}>services 2
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={"/protfolio"}>portfolio
                        </Link>
                    </li>

                    <li>
                        <Link to={"/portfoli2"}>portfolio 2
                        </Link>
                    </li>

                    <li>
                        <Link to={"/portfoli3"}>portfolio 3
                        </Link>
                    </li>

                    

                    <li>
                        <Link to={"/blog"}>blog
                        </Link>
                    </li>

                    <li>
                        <Link to={"/contact"}>contact us
                        </Link>
                    </li>

                    <li>
                        <Link to={"/gallery"}>Gallery
                        </Link>
                    </li>
                </ul>

            </div>

            <div className="">
                <button className='text-white'>
                    <IoSearch size={30} />
                    
                </button>
            </div>

            <div className={`flex lg:hidden ${menuOpen ? 'hidden' : ''}`}>
                <button
                    type="button"
                    className="absolute right-[15px] top-[30px] z-[1] inline-flex items-center justify-center rounded-[3px] w-[48px] h-[45px] bg-[#09acf4] text-white hover:bg-[#EB3465] focus:bg-[#EB3465] focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                    <IoMdMenu size={30} />
                </button>
            </div>

            {/* Close Button */}
            <div className={`lg:hidden  ${menuOpen ? 'block' : 'hidden'}`}>
                <button
                    type="button"
                    className="absolute right-[15px] top-[30px] z-[1] inline-flex items-center justify-center rounded-[3px] w-[48px] h-[45px] bg-[#09acf4] text-white hover:bg-[#EB3465] focus:bg-[#EB3465] focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                >
                   
                    <IoCloseSharp size={25} />

                </button>

                {/* Mobile Menu */}
                <div id="mobile-menu " className='absolute top-[20px] right-[15px] 11h-full pt-[60px] '>
                    <ul className="relative bg-[#222] capitalize	 w-[250px] z-[9] h-full flex flex-col gap-[15px] font-manrope font-[600] text-[15px] md:text-[18px] lg:text-[20px] text-white px-[20px] pt-[20px] pb-[30px] rounded-[5px] ">
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/sing_up"}>Registration</Link>
                        </li>
                        <li>
                            <Link to={"/about_us"}>about us
                            </Link>
                        </li>
                        <li>
                            <Link to={"/services"}>services
                            </Link>
                        </li>
                        <li>
                            <Link to={"/protfolio"}>portfolio
                            </Link>
                        </li>

                        <li>
                            <Link to={"/blog"}>blog
                            </Link>
                        </li>

                        <li>
                            <Link to={"/contact"}>contact us
                            </Link>
                        </li>

                        <li>
                            <Link to={"/gallery"}>Gallery
                            </Link>
                        </li>
                        <li>
                            {token ? (
                                <button onClick={handlelogout} className="block w-full bg-red-700 hover:bg-red-500  font-manrope font-[700] text-[14px] px-[20px] py-[10px] text-white rounded-[5px] text-center"
                                >
                                    <IoMdLogOut size={20} />
                                </button>
                            ) : (
                                <Link to={"/start"} className="block w-full bg-[#FFFFFF14] hover:bg-[#FFFFFF25] font-manrope font-[700] text-[14px] px-[20px] py-[10px] text-white rounded-[5px] text-center"
                                >Log In</Link>
                            )}
                        </li>
                        <li>
                            <Link
                                to={"/askquestion"}
                                className="block w-full bg-[#EB3465] hover:bg-[#fb3a6e] font-manrope font-[700] text-[14px] px-[20px] py-[10px] text-white rounded-[5px] text-center"
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}