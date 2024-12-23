import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import student from "../image/student.jpeg";

function StudentCard() {
    return (
        <div className="relative group bg-[#254bd54d] rounded-[8px]">
            <div className="relative overflow-hidden rounded-[8px] ">
                <img className='group-hover:scale-[1.1] transition duration-700 ease-in-out max-w-[100%] rounded-t-[8px] ' src={student} alt="Event Management " />
            </div>
            <div className="flex flex-col gap-[8px] py-[15px] px-[10px] items-center rounded-b-[8px]">
                <h2 className="flex items-center gap-[10px] text-[0.85rem] text-white opacity-[0.75]"><FaRegUser className="text-[09aff4]" /> Priyanshu saini</h2>
                <h3 className="text-[17px] font-[600] text-white capitalize">web development</h3>
            </div>
        </div>
    );
}

export default StudentCard;