import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
function Contact() {

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
            <section className="bg-blue-50 dark:bg-slate-800" id="contact">

                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-[400px] w-full flex items-center justify-center">
                    <div className="max-w-sm px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xs sm:text-sm">
                            <span className="text-gray-200">Home</span> <span className="mx-2">›</span> NIT Solutions
                        </p>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                                Contact Us
                            </p>
                            <h2
                                className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                                dictumst
                            </p>
                        </div>
                    </div>


                    <div className="p-6 bg-blue-600">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 border-t-2 border-white">
                            {contacts.map((contact, index) => (
                                <div
                                    key={index}
                                    className="border border-blue-300 rounded-lg p-4  shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <p className="text-gray-800 font-bold text-[22px] border-b-2 border-white">
                                        {contact.address1}
                                    </p>
                                    <p className="text-gray-800 text-[15px] flex items-start mt-3 mb-3">
                                        <FaMapMarkerAlt className="text-green-600 mr-2 mt-1" /> {contact.address}
                                    </p>
                                    <p className="text-gray-600 flex items-center">
                                        <FaEnvelope className="text-red-600 mr-2 mt-3 mb-3" />
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="text-white hover:text-blue-800"
                                        >
                                            {contact.email}
                                        </a>
                                    </p>
                                    <p className="text-gray-600 flex items-center mt-3 mb-3">
                                        <FaPhoneAlt className="text-white mr-2" />
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="text-white hover:text-blue-800"
                                        >
                                            {contact.phone}
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4 text-center">Find Us on Google Maps</h2>
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
                                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                                        E-mail *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                                    Your Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows="4"
                                    className="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-start">
                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    Send Your Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;