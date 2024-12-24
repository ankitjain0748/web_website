import React from 'react';
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import blog1 from "../image/blog3.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUserAlt, FaRegCalendarAlt } from 'react-icons/fa';

const BlogCard = () => {
  return (
    <div className="max-w-[1320px] m-auto pt-[100px] pb-[100px]">
      <div>
        <h2 className="text-[55px] text-white text-center font-[700] mb-[5px]">NIT Blog</h2>
        <div className="flex items-center gap-[10px] text-center justify-center mb-[60px] ">
          <Link className="flex items-center gap-[6px] text-white text-[17px] font-[600]">
            <IoMdHome /> Home
          </Link>
          <span className="text-white text-[17px]">NIT Solutions</span>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-[20px] mb-[40px]'>
        <div className='rounded-[10px]'>
          <div>
            <img className='max-w-[100%] rounded-t-[10px]' src={blog1} alt="" />
          </div>
          <div className='bg-[#254bd54d] rounded-b-[10px] p-[20px]'>
            <div className='flex items-center gap-[5px] mb-[8px]'>
              <h2 className='flex items-center gap-[8px] text-[18px] text-white'><FaRegBookmark className='text-[#fff] ' size={17} /> Web Development</h2>
              <h3 className='flex items-center gap-[8px] text-[18px] text-white'>30 Mar 2024</h3>
            </div>

            <div>
              <h2 className='flex items-center gap-[8px] text-[18px] text-white'><FaRegUser className='text-[#fff] ' size={17} /> Mukesh Kumawat</h2>
            </div>
            <h2 className='mb-[15px] mt-[25px]'>
              <Link to={'/'} className='block max-w-[98%] text-[25px] font-[600] leading-[28px] text-white truncate'>
                Elevating Blogging With Laravel: Building Dynam...
              </Link>
            </h2>
            <p className='text-white text-[18px] leading-[22px] mb-[15px]'>
              In the realm of web development, Laravel has emerged as a powerful and versatile framework, revered for its elegant syntax, robust features, and developer-friendly ecosystem. When it comes ...
            </p>
            <div>
              <Link className='text-[#09aff4] text-[18px] font-[600] flex items-center gap-[5px] capitalize'>
                read more
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className='rounded-[10px]'>
          <div>
            <img className='max-w-[100%] rounded-t-[10px]' src={blog1} alt="" />
          </div>
          <div className='bg-[#254bd54d] rounded-b-[10px] p-[20px]'>
            <div className='flex items-center gap-[5px] mb-[8px]'>
              <h2 className='flex items-center gap-[8px] text-[18px] text-white'><FaRegBookmark className='text-[#fff] ' size={17} /> Web Development</h2>
              <h3 className='flex items-center gap-[8px] text-[18px] text-white'>30 Mar 2024</h3>
            </div>

            <div>
              <h2 className='flex items-center gap-[8px] text-[18px] text-white'><FaRegUser className='text-[#fff] ' size={17} /> Mukesh Kumawat</h2>
            </div>
            <h2 className='mb-[15px] mt-[25px]'>
              <Link to={'/'} className='block max-w-[98%] text-[25px] font-[600] leading-[28px] text-white truncate'>
                Elevating Blogging With Laravel: Building Dynam...
              </Link>
            </h2>
            <p className='text-white text-[18px] leading-[22px] mb-[15px]'>
              In the realm of web development, Laravel has emerged as a powerful and versatile framework, revered for its elegant syntax, robust features, and developer-friendly ecosystem. When it comes ...
            </p>
            <div>
              <Link className='text-[#09aff4] text-[18px] font-[600] flex items-center gap-[5px] capitalize'>
                read more
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className='rounded-[10px]'>
          <div>
            <img className='max-w-[100%] rounded-t-[10px]' src={blog1} alt="" />
          </div>
          <div className='bg-[#254bd54d] rounded-b-[10px] p-[20px]'>
            <div className='flex items-center gap-[5px] mb-[8px]'>
              <h2 className='flex items-center gap-[8px] text-[18px] text-white'><FaRegBookmark className='text-[#fff] ' size={17} /> Web Development</h2>
              <h3 className='flex items-center gap-[8px] text-[18px] text-white'>30 Mar 2024</h3>
            </div>

            <div>
              <h2 className='flex items-center gap-[8px] text-[18px] text-white'><FaRegUser className='text-[#fff] ' size={17} /> Mukesh Kumawat</h2>
            </div>
            <h2 className='mb-[15px] mt-[25px]'>
              <Link to={'/'} className='block max-w-[98%] text-[25px] font-[600] leading-[28px] text-white truncate'>
                Elevating Blogging With Laravel: Building Dynam...
              </Link>
            </h2>
            <p className='text-white text-[18px] leading-[22px] mb-[15px]'>
              In the realm of web development, Laravel has emerged as a powerful and versatile framework, revered for its elegant syntax, robust features, and developer-friendly ecosystem. When it comes ...
            </p>
            <div>
              <Link className='text-[#09aff4] text-[18px] font-[600] flex items-center gap-[5px] capitalize'>
                read more
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};



export default BlogCard;
