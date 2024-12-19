import { Link } from "react-router-dom";
import { FaRegFileCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
function ServiceCard() {
    return (
        <div className="relative serviceBx min-h-[290px] flex flex-col justify-start items-start gap-[5px] border-solid border-[2px] border-[#09aff459] rounded-[10px] p-[30px] group">
            <div className="mb-[20px]">
                <FaRegFileCode size={50} className="text-[#09aff4] group-hover:text-[#fff]" />
            </div>
            {/* <GoCodeSquare /> */}
            <h2 className="text-[1.5rem] font-[600] mb-[5px] text-white">DCA</h2>
            <p className="text-[1.1rem] opacity-[.85] font-[600] mb-[15px] text-white">These titles are designed to be informative and SEO-friendly, making them appealing for...</p>
            <div className="">
                <Link to={"/"} className="flex items-center gap-[10px] text-[#09aff4] font-[600] text-[18px] group-hover:text-[#fff]">
                    Read More <FaArrowRightLong size={25} className="text-[#09aff] group-hover:text-[#fff]" />
                </Link>
            </div>
        </div>
    );
}

export default ServiceCard;