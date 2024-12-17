import { Link } from "react-router-dom";
import { FaRegFileCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
function ServiceCard() {
    return (
        <div className="min-h-[290px] flex flex-col justify-center items-center gap-[25px] border border-[#09aff459] rounded-[10px] p-[20px]">
           <FaRegFileCode />
           <h2 className="text-[1.5rem] font-[600] mb-[15px] text-white">1DCA</h2>
           <p className="text-[1.1rem] opacity-[.85] font-[600] mb-[15px] text-white">These titles are designed to be informative and SEO-friendly, making them appealing for...</p>
           <div className="">
           <Link to={"/"}>
                Read More <FaArrowRightLong />
            </Link>
           </div>
        </div>
    );
}

export default ServiceCard;