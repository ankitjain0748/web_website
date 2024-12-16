import React from 'react';
import { FaLaptopCode, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const ServiceCard = ({ title, description }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-md mb-4">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
};

const ServicesSection = () => {
    return (
        <>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side - Brief description */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-white mb-4">Services We Offer</h2>
                        <p className="text-lg text-white mb-4">
                            It sounds like NIT Solutions is launching an educational platform in Chomu focused on teaching web design, web development, and app development. This could be an excellent opportunity for individuals interested in gaining skills in these areas, especially considering the increasing demand for professionals with expertise in web and app development. Providing a platform for learning these skills could potentially benefit both aspiring developers and the tech industry in Chomu by fostering a more skilled workforce and facilitating innovation in digital technology.
                        </p>
                        <a
                            href="#"
                            className="text-blue-500 font-semibold hover:underline"
                        >
                            Click Registration
                        </a>
                    </div>

                    {/* Right side - List of services */}
                    <div className="space-y-4 text-center">
                        <a
                            href="#"
                            className="bg-blue-500 px-4 py-2 text-white font-semibold hover:underline inline-block"
                        >
                            See All Services
                        </a>
                    </div>

                </div>
            </div>
            <div className="container mx-auto px-4 my-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-black hover:text-white transition duration-300">
                        <div className="flex justify-start mb-4">
                            <FaLaptopCode className="text-3xl text-blue-600" />
                        </div>
                        <h5 className="text-xl font-semibold mb-2">DCA</h5>
                        <p className="text-gray-700 mb-4">
                            These titles are designed to be informative and SEO-friendly, making them appealing for...
                        </p>
                        <a href="#" className="text-blue-600 hover:text-white">Read More</a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-black hover:text-white transition duration-300">
                        <div className="flex justify-start mb-4">
                            <FaGraduationCap className="text-3xl text-blue-600" />
                        </div>
                        <h5 className="text-xl font-semibold mb-2">O Level</h5>
                        <p className="text-gray-700 mb-4">
                            "O Level" is a certification course in the field of Information Technology (IT) offered...
                        </p>
                        <a href="#" className="text-blue-600 hover:text-white">Read More</a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-black hover:text-white transition duration-300">
                        <div className="flex justify-start mb-4">
                            <FaCertificate className="text-3xl text-blue-600" />
                        </div>
                        <h5 className="text-xl font-semibold mb-2">PGDCA</h5>
                        <p className="text-gray-700 mb-4">
                            The Post Graduate Diploma in Computer Applications (PGDCA) is a one-year postgraduate d...
                        </p>
                        <a href="#" className="text-blue-600 hover:text-white">Read More</a>
                    </div>
                </div>
            </div>
            <section className="contact-us section-padding text-white mt-8 mb-4">
                <div className="container text-center">
                    <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
                    <p className="text-lg  mb-2">Get in touch with us</p>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis id atque dignissimos repellat quae ullam.
                    </p>
                </div>
            </section>



        </>
    );
};

export default ServicesSection;
