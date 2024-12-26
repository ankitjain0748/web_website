import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Contact() {

    const offices = [
        {
            location: 'Chomu',
            address: 'Dholi Mandi, Veer Hanuman Mandir Ke Piche (Chomu 303702)',
            email: 'abhikumawat8122000@gmail.com',
            phone: '+91-9785653157',
        },
        {
            location: 'Jaipur',
            address: 'Rajat Path, Sector 5, Mansarovar, Jaipur, Rajasthan 302020',
            email: 'abhishekkumawat072@gmail.com',
            phone: '+91-9785653157',
        },
        {
            location: 'Chomu',
            address: 'Dholi Mandi, Veer Hanuman Mandir Ke Piche (Chomu 303702)',
            email: 'amitkumawat.1992@gmail.com',
            phone: '+91-8619697889',
        },
    ];

    const contacts = [
        {
            address1: "Chomu",
            address: "Data",

            email: 'abhikumawat8122000@gmail.com',
            phone: '+91-9785653157',
        },
        {
            address1: "Chomu",
            address: "Data",
            email: 'abhishekkumawat072@gmail.com',
            phone: '+91-9785653157',
        },
        {
            address1: "Chomu",
            address: "Data",
            email: 'amitkumawat.1992@gmail.com',
            phone: '+91-8619697889',
        },
    ];

    return (

        <>

            <div className="max-w-[1320px] m-auto pt-[100px] pb-[100px]">
                <h2 className="text-[55px] text-white text-center font-[700] mb-[5px]">Contact Us</h2>
                <div className="flex items-center gap-[10px] text-center justify-center mb-[60px] ">
                    <Link className="flex items-center gap-[6px] text-white text-[17px] font-[600]">
                        <IoMdHome /> Home
                    </Link>
                    <span className="text-white text-[17px]">NIT Solutions</span>
                </div>

                <section className="max-w-[1320px] mx-[auto] pt-[50px] px-[15px] pb-[60px]">
                    <h1 className="text-[34px] text-white font-[500] text-center mb-8">Our Offices Around the City</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[20px]">
                        {offices.map((office, index) => (
                            <div
                                key={index}
                                className="h-[100%] lg:h-[370px] px-[15px] py-[20px] flex flex-col items-start justify-start border-[1px] border-t-[4px] border-t-[#09AFF4] border-[#06426B] "
                            >
                                <h2 className="relative pb-[10px] text-2xl font-bold text-white mt-4 mb-4 ">{office.location} <span className='w-[65px] absolute bottom-[0] left-[0] block  border-b-[2px] border-[#09aff4]'></span> </h2>
                                <p className="text-[19px] text-[#BEBFC5] font-[600] mt-4 mb-4">
                                    {office.address}
                                </p>
                                <div className="flex items-center justify-center gap-[13px] text-lg text-white mt-4 mb-4">
                                    <div className='w-[45px] h-[45px] bg-[#062242] flex items-center justify-center rounded-[4px] text-center'>
                                        <FaEnvelope className="inline-block text-[#09aff4]" />
                                    </div>
                                    <div className='flex flex-col items-start justify-start'>
                                        <div className='text-[#09aff4] text-[20px] font-[500]'>
                                            Email:
                                        </div>
                                        <a
                                            href={`mailto:${office.email}`}
                                            className="text-white hover:text-gray-400 break-words"
                                        >
                                            {office.email}
                                        </a>
                                    </div>

                                </div>


                                <div className="flex items-center justify-center gap-[13px] text-lg text-white mt-4 mb-4">
                                    <div className='w-[45px] h-[45px] bg-[#062242] flex items-center justify-center rounded-[4px] text-center'>
                                        <FaPhoneAlt className="inline-block text-[#09aff4]" />
                                    </div>
                                    <div className='flex flex-col items-start justify-start'>
                                        <div className='text-[#09aff4] text-[20px] font-[500]'>
                                            Phone:
                                        </div>
                                        <a href={`tel:${office.phone}`} className="text-white hover:text-gray-400">
                                            {office.phone}
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                <div className="p-4">
                        <h2 className="text-[34px] text-white font-[500] text-center mb-8">Find Us on Google Maps</h2>
                        <div className="relative overflow-hidden rounded-lg shadow-lg">
                            <iframe
                                title="Google Maps Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0734018536795!2d75.77563401512704!3d26.922070083113455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db31264c658c5%3A0xd8d95bdbf20677eb!2sChomu%2C%20Rajasthan%20303702!5e0!3m2!1sen!2sin!4v1698327318607!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="p-6 ">
                        <h2 className="text-2xl font-bold mb-4 text-center">Have any questions? Let us answer them</h2>
                        <form className="space-y-4">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium text-white">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-white hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-white">
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-white hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-lg font-medium text-white">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-white hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-[50px]">
                                <label htmlFor="message" className="block text-lg font-medium text-white">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows="4"
                                    className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-white hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="group inline-flex items-center justify-center gap-[10px] min-w-[140px] px-[15px] py-[15px] bg-[#09aff4] border-[2px] border-[#09aff4] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[500] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[transparent] border-[#09aff4] hover:text-[#09aff4] hover:transition-all"
                                >
                                    Send Your Message
                                </button>
                            </div>
                        </form>
                    </div>

            </div>


           
        </>
    );
}

export default Contact;