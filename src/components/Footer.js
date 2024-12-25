import { Link } from "react-router-dom";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import nitsky from "../image/nitsky.png";
function Footer() {
  return (
    <>
      <footer class="bg-[#060922]">
        <div class="max-w-[1320px] px-[15px] mx-auto p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div className="flex flex-wrap lg:flex-nowrap gap-[20px] lg:gap-[40px]">
              {/* First Column - Extra Space */}
              <div className="w-[100%] mb-[40px] lg:mb-[0] lg:w-[41%]">
                <Link to="https://flowbite.com/" className="flex items-center">
                  <img src={nitsky} className="max-w-[150px]" alt="Logo" /></Link>
                <div className="flex flex-col items-center justify-center text-white pt-[20px]">
                  <div className="">
                    <p className="text-lg mb-6 ">
                      Master the art of Mobile App through blend of design and technology under the guidance of our experienced trainers.
                    </p>
                    <form className="w-full">
                      <label htmlFor="email" className="block text-[15px] font-[500 uppercase] mb-2">
                        Subscribe to our news letter
                      </label>
                      <div className="flex items-center">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          className="flex-grow p-3 bg-[#ffffff59] rounded-l-[5px]  border-none hover:outline-none focus:outline-none "
                          required
                        />
                        <button
                          type="submit"
                          className="bg-[#09aff4] text-[16px] text-white text-[500] py-3 px-6 rounded-r-md"
                        >
                          Subscribe
                        </button>
                      </div>
                      <p className="text-sm mt-2 text-gray-300">
                        *We will not share your personal info.
                      </p>
                    </form>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="w-[100%] md:w-[25%] lg:w-[15%] flex flex-col items-start">
                <h2 className="mb-6 text-[20px] font-[500] text-white">
                  Useful Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  {/* NIT Introduction */}
                  <li className="group flex items-center justify-start gap-[10px]">
                    <FaArrowRight className=" text-[#09aff4] text-[12px]" />
                    <Link to="#" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      NIT Introduction
                    </Link>
                  </li>

                  {/* Google */}
                  <li className="group flex items-center justify-start gap-[10px]">
                    <FaArrowRight className=" text-[#09aff4] text-[12px]" />
                    <Link to="https://www.google.com" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      Google
                    </Link>
                  </li>

                  {/* Dribbble */}
                  <li className="group flex items-center justify-start gap-[10px]">
                    <FaArrowRight className=" text-[#09aff4] text-[12px]" />
                    <Link to="https://www.dribbble.com" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      Dribbble
                    </Link>
                  </li>

                  {/* LinkedIn */}
                  <li className="group flex items-center justify-start gap-[10px]">
                    <FaArrowRight className=" text-[#09aff4] text-[12px]" />
                    <Link to="https://www.linkedin.com" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      LinkedIn
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="w-[100%] md:w-[25%] lg:w-[15%] flex flex-col items-start">
                <h2 className="mb-6 text-[20px] font-[500] text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  {/* Registration */}
                  <li className="group flex items-center justify-start gap-[10px]">
                    <FaArrowRight className=" text-[#09aff4] text-[12px]" />
                    <Link to="#" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      Registration
                    </Link>
                  </li>

                  {/* About Us */}
                  <li className="group flex items-center justify-start gap-[10px]">
                    <FaArrowRight className=" text-[#09aff4] text-[12px]" />
                    <Link to="#" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      About Us
                    </Link>
                  </li>

                  {/* Services */}
                  <li className="group flex items-center justify-start gap-[10px]">
                    <FaArrowRight className=" text-[#09aff4] text-[12px]" />
                    <Link to="#" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      Services
                    </Link>
                  </li>

                  {/* Portfolio */}
                  <li className="group flex items-center justify-start gap-[10px]">
                    <FaArrowRight className=" text-[#09aff4] text-[12px]" />
                    <Link to="#" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Last Column - Extra Space */}

              <div className="w-[100%] md:w-[40%] lg:w-[25%] ">
                <h2 className="mb-6 text-[20px] font-[500] text-white">
                  Contact Information
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  {/* Email */}
                  <li className="flex gap-[10px] items-start">
                    <MdEmail className="text-[24px] text-[#09aff4]" />
                    <Link to="mailto:abhishek2kumawat@gmail.com" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      abhishek2kumawat@gmail.com
                    </Link>
                  </li>

                  {/* Location */}
                  <li className="flex gap-[10px] items-start text-white">
                    <MdLocationOn className="text-[35px] text-[#09aff4]" />

                    <p>Dholi mandi, Veer Hanuman Mandir ke piche (Chomu)</p>
                  </li>

                  {/* Phone */}
                  <li className="flex gap-[10px] items-start">
                    <MdPhone className="text-[24px] text-[#09aff4]" />
                    <Link to="tel:+919785653157" className=" transition group-hover:translate-x-0.5 text-white hover:none">
                      +91-9785653157
                    </Link>
                  </li>
                </ul>

                <div className="pt-[35px] flex justify-start items-center gap-[10px] ">
                  <div className="bg-[#09aff4] space-x-3 p-[8px]  text-white  rounded-md ">
                    <Link
                      to="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-200 text-xl"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="bg-[#09aff4] space-x-3 p-[8px]  text-white  rounded-md">

                    <Link
                      to="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-200 text-[20px]"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                  <div className="bg-[#09aff4] space-x-3 p-[8px]  text-white  rounded-md">
                    <Link
                      to="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-200 text-xl"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="bg-[#09aff4] space-x-3 p-[8px]  text-white  rounded-md ">

                    <Link
                      to="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-200 text-xl"
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </div>

              </div>
            </div>


          </div>



          <div className="pt-[50px] pb-[10px]  flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center text-sm">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
              <span className="text-white">© 2025 Created by:</span>
              <img src={nitsky} className="max-w-[150px]" alt="Logo" />
            </div>

            {/* Right Section */}
            <div className="space-x-4">
              <Link
                to="#"
                className="text-white hover:text-gray-200"
              >
                Terms of Use
              </Link>
              <span className="text-white">|</span>
              <Link
                to="#"
                className="text-white hover:text-gray-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;