import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import student from "../image/student.jpeg";

function StudentCard() {
    return (
        <div className="relative bg-[#254bd54d] rounded-[8px]">
            <div className="">
                <img className='max-w-[100%] rounded-t-[8px] ' src={student} alt="Event Management " />
            </div>
            <div className="flex flex-col gap-[8px] py-[15px] px-[10px] items-center rounded-b-[8px]">
                <h2 className="flex items-center gap-[10px] text-[0.85rem] text-white opacity-[0.75]"><FaRegUser /> Priyanshu saini</h2>
                <h3 className="text-[17px] font-[600] text-white capitalize">web development</h3>
            </div>
        </div>
    );
}

export default StudentCard;