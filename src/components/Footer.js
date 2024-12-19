import { Link } from "react-router-dom";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer class="bg-blue-950 text-black dark:bg-blue-800">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-6">
              {/* First Column - Extra Space */}
              <div className="mb-6 md:mb-0 md:pl-6">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    Flowbite
                  </span>
                </a>
                <div className="flex flex-col items-center justify-center text-white p-6">
                  <div className="text-center max-w-lg">
                    <p className="text-lg mb-6 ">
                      Learn through a perfect blend of design and technology under the guidance of our experienced trainers.
                    </p>
                    <form className="w-full">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Subscribe to our newsletter
                      </label>
                      <div className="flex items-center">
                        <input
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          className="flex-grow p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          required
                        />
                        <button
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-r-md"
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
              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Useful Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  {/* NIT Introduction */}
                  <li className="flex items-center justify-center gap-4">
                    <FaArrowRight className="text-gray-400 text-lg" />
                    <a href="#" className="hover:underline">
                      NIT Introduction
                    </a>
                  </li>

                  {/* Google */}
                  <li className="flex items-center justify-center gap-4">
                    <FaArrowRight className="text-gray-400 text-lg" />
                    <a href="https://www.google.com" className="hover:underline">
                      Google
                    </a>
                  </li>

                  {/* Dribbble */}
                  <li className="flex items-center justify-center gap-4">
                    <FaArrowRight className="text-gray-400 text-lg" />
                    <a href="https://www.dribbble.com" className="hover:underline">
                      Dribbble
                    </a>
                  </li>

                  {/* LinkedIn */}
                  <li className="flex items-center justify-center gap-4">
                    <FaArrowRight className="text-gray-400 text-lg" />
                    <a href="https://www.linkedin.com" className="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white text-center">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  {/* Registration */}
                  <li className="flex items-center justify-center gap-4">
                    <FaArrowRight className="text-gray-400 text-lg" />
                    <a href="#" className="hover:underline">
                      Registration
                    </a>
                  </li>

                  {/* About Us */}
                  <li className="flex items-center justify-center gap-4">
                    <FaArrowRight className="text-gray-400 text-lg" />
                    <a href="#" className="hover:underline">
                      About Us
                    </a>
                  </li>

                  {/* Services */}
                  <li className="flex items-center justify-center gap-4">
                    <FaArrowRight className="text-gray-400 text-lg" />
                    <a href="#" className="hover:underline">
                      Services
                    </a>
                  </li>

                  {/* Portfolio */}
                  <li className="flex items-center justify-center gap-4">
                    <FaArrowRight className="text-gray-400 text-lg" />
                    <a href="#" className="hover:underline">
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>

              {/* Last Column - Extra Space */}

              <div className="md:pr-6">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                  Contact Information
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  {/* Email */}
                  <li className="flex items-center">
                    <MdEmail className="text-xl mr-3 text-blue-600" />
                    <a href="mailto:abhishek2kumawat@gmail.com" className="hover:underline">
                      abhishek2kumawat@gmail.com
                    </a>
                  </li>

                  {/* Location */}
                  <li className="flex items-center">
                    <MdLocationOn className="text-xl mr-3 text-green-600" />
                    Dholi mandi, Veer Hanuman Mandir ke piche (Chomu)
                  </li>

                  {/* Phone */}
                  <li className="flex items-center">
                    <MdPhone className="text-xl mr-3 text-red-600" />
                    <a href="tel:+919785653157" className="hover:underline">
                      +91-9785653157
                    </a>
                  </li>
                </ul>
              </div>
            </div>


          </div>

          <div className="p-6 flex justify-end items-center space-x-6 ">
            <div className="bg-blue-600 space-x-6 p-4  text-white  rounded-md ">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-xl"
              >
                <FaFacebookF />
              </a>
            </div>
            <div className="bg-blue-600 space-x-6 p-4  text-white   rounded-md">

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-xl"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="bg-blue-600 space-x-6  p-4  text-white   rounded-md">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-xl"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="bg-blue-600 space-x-6 p-4  text-white  rounded-md ">

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-xl"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-400 py-4 px-6 flex justify-between items-center text-sm">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
              <span>© 2023 Created by:</span>
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Logo"
                className="h-5"
              />
            </div>

            {/* Right Section */}
            <div className="space-x-4">
              <a
                href="#"
                className="hover:text-gray-200"
              >
                Terms of Use
              </a>
              <span>|</span>
              <a
                href="#"
                className="hover:text-gray-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;