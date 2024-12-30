import React from 'react';
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import blog1 from "../image/blog3.jpg";
import laravel from "../image/laravel.jpg";
import blogdetailbanner from "../image/blogdetailbanner.png";
import { FaArrowRight } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaUserAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";

const BlogDetail = () => {
  return (
    <div className="max-w-[1320px] px-[15px] m-auto pt-[100px] pb-[100px]">
   
      {/* Blog Detail */}
      <div className="max-w-[1080px] px-[15px] m-auto pt-[100px] pb-[100px]">
        <div className='flex items-center gap-[25px] mb-[15px]'>
          <div className='text-[18px] font-[600] leading-[18px] text-[#fff] uppercase'>Share post:</div>
          <Link className='text-[22px] text-[#fff]'>
            <FaFacebookF />
          </Link>

          <Link className='text-[22px] text-[#fff]'>
            <FaYoutube />
          </Link>

          <Link className='text-[22px] text-[#fff]'>
            <FaInstagram />
          </Link>

          <Link className='text-[22px] text-[#fff]'>
            <FaTwitter />
          </Link>
        </div>
        <h2 className='text-[25px] leading-[28px] text-[#fff] mb-[20px]'>Certainly! Here's an example of an introduction to PHP:</h2>
        <div className='mb-[15px]'>
          <img src={blogdetailbanner} alt="img" className='rounded-[10px] max-w-[100%] w-[100%]' />
        </div>
        <div className='px-[40px] py-[50px]'>
          <div className='flex items-center gap-[15px] mb-[50px]'>
            <div className='flex items-center gap-[8px] text-[15px] text-[#fff]'>
              <FaListAlt size={16} className="text-[#fff] " /> legal info
            </div>

            <div className='flex items-center gap-[8px] text-[15px] text-[#fff]'>
              <FaRegUser size={16} className="text-[#fff] " /> Abhi kumawat
            </div>

            <div className='flex items-center gap-[8px] text-[15px] text-[#fff]'>
              <FaClockRotateLeft size={16} className="text-[#fff] " /> 13 Feb 2024
            </div>
          </div>

          <div className='text-[#fff] text-[15px] leading-[20px] mb-[15px]'>
            <p>
              Introduction to PHP which stands for Hypertext Preprocessor, is a widely used server-side scripting language designed specifically for web development. It is an open-source language, which means it is freely available for anyone to use and modify, making it a popular choice for both beginners and experienced developers alike.
            </p>
          </div>
          <h2 className='mb-[15px] text-[20px] font-[600] text-[#fff]'>What is PHP Used For?</h2>
          <div className='text-[#fff] text-[15px] leading-[20px] mb-[15px]'>
            <p>
              PHP is primarily used for creating dynamic web pages and web applications. It allows developers to embed PHP code directly into HTML, making it easy to mix dynamic content generation with static HTML content.
            </p>
          </div>

          <h2 className='mb-[15px] text-[20px] font-[600] text-[#fff]'>Key Features of PHP:</h2>

          <div className='flex gap-[5px] mb-[15px] text-[#fff] text-[18px] leading-[22px] text-[400]'><span>1.</span>
            <div className=''>
              <strong>Ease of Use:</strong> PHP syntax is similar to C and Java, making it relatively easy to learn for those familiar with programming concepts. Additionally, its integration with HTML simplifies the process of creating dynamic web pages.
            </div>
          </div>

          <div className='flex gap-[5px] mb-[15px] text-[#fff] text-[18px] leading-[22px] text-[400]'><span>2.</span>
            <div className=''>
              <strong>Ease of Use:</strong> PHP syntax is similar to C and Java, making it relatively easy to learn for those familiar with programming concepts. Additionally, its integration with HTML simplifies the process of creating dynamic web pages.
            </div>
          </div>

          <div className='flex gap-[5px] mb-[15px] text-[#fff] text-[18px] leading-[22px] text-[400]'><span>3.</span>
            <div className=''>
              <strong>Ease of Use:</strong> PHP syntax is similar to C and Java, making it relatively easy to learn for those familiar with programming concepts. Additionally, its integration with HTML simplifies the process of creating dynamic web pages.
            </div>
          </div>

          <h2 className='mb-[15px] text-[20px] font-[600] text-[#fff]'>Elevating Blogging With Laravel: Building Dynamic And Secure Content Platforms</h2>
          <div className=' gap-[18px] text-[#fff] text-[15px] leading-[20px] mb-[15px]'>
            <p className=''><img src={laravel} alt="img" className='float-right max-w-[480px] rounded-[15px] mx-[8px] my-[8px]' />
              In the realm of web development, Laravel has emerged as a powerful and versatile framework, revered for its elegant syntax, robust features, and developer-friendly ecosystem. When it comes ....

              In the realm of web development, Laravel has emerged as a powerful and versatile framework, revered for its elegant syntax, robust features, and developer-friendly ecosystem. When it comes to crafting dynamic and secure blog platforms, Laravel shines as a top choice, offering developers a plethora of tools and functionalities to streamline the content creation process. Let's delve into how Laravel is transforming the landscape of blogging by empowering developers to build feature-rich, secure, and scalable blog applications.

              1.Rapid Development with MVC Architecture: Laravel follows the Model-View-Controller (MVC) architectural pattern, providing developers with a structured framework for building scalable and maintainable applications. The separation of concerns offered by MVC allows developers to focus on specific aspects of the blog application, such as business logic, presentation, and data manipulation, thereby accelerating the development process and ensuring code reusability.<br /><br />

              2.Robust Authentication and Authorization: Security is paramount in the world of blogging, and Laravel offers robust authentication and authorization mechanisms out of the box. With Laravel's built-in authentication scaffolding, developers can quickly implement features such as user registration, login, password reset, and access control, safeguarding the blog platform against unauthorized access and malicious attacks.<br /><br />

              3.Eloquent ORM for Database Management: Laravel's Eloquent ORM (Object-Relational Mapping) simplifies database management by providing an intuitive and expressive syntax for interacting with databases. Developers can define relationships between database tables using Eloquent's eloquent syntax, making it easy to query and manipulate data within the blog application. Eloquent's powerful features, such as eager loading, polymorphic relationships, and query scopes, empower developers to efficiently manage blog content and optimize database performance.<br /><br />

              4.Blade Templating Engine for Dynamic UI: Laravel's Blade templating engine offers a simple yet powerful way to create dynamic and reusable UI components within the blog application. With Blade, developers can write clean and concise template files that incorporate dynamic data, conditional logic, and partials, resulting in a seamless and responsive user experience. Blade's inheritance, sections, and layouts enable developers to design flexible and maintainable UI layouts for the blog platform, enhancing readability and code organization.
              <br /><br />
              5.Laravel Mix for Asset Compilation and Optimization: Managing frontend assets such as CSS, JavaScript, and image files is a breeze with Laravel Mix. Laravel Mix provides a fluent and expressive API for defining asset compilation and optimization workflows, allowing developers to leverage modern frontend tools like Sass, Less, and Babel with ease. By compiling and minifying assets, Laravel Mix enhances the performance and loading speed of the blog application, delivering a smooth and immersive browsing experience for users.
              <br /><br />
              * In conclusion, Laravel empowers developers to build dynamic, secure, and scalable blog platforms with ease. From rapid development with MVC architecture to robust authentication and authorization, seamless database management with Eloquent ORM, dynamic UI creation with Blade templating engine, and asset compilation and optimization with Laravel Mix, Laravel offers a comprehensive toolkit for crafting modern and feature-rich blog applications. As the demand for dynamic and engaging content platforms continues to grow, Laravel remains a steadfast companion for developers seeking to elevate the blogging experience for audiences worldwide.  </p>


          </div>

          <div className='flex flex-col items-start gap-[5px] border-l-[4px] border-l-[#09aff4] bg-[#254bd54d] px-[40px] py-[80px] mt-[50px] mb-[50px]'>
            <div className=' text-[25px] text-[#fff] italic font-[600] relative'>
              <div className='absolute top-[-30px] left-[-20px]'>
                <FaQuoteRight size={100} className='text-[#09aff426]' />
              </div>
              <div className='z-[1]'>
                Elevating Blogging With Laravel: Building Dynamic And Secure Content Platforms</div>
            </div>
            <div className='flex gap-[5px] text-[18px] text-[#fff]'>
              <FaRegUser size={18} className='text-[15px] text-white' /> Sandeep saini
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};



export default BlogDetail;
