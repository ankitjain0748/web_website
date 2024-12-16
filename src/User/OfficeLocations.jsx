import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function OfficeLocations() {
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

  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-white text-center mb-8">Our Offices Around the City</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-800"
          >
            <h2 className="text-2xl font-bold text-white mt-4 mb-4 ">{office.location}</h2>
            <p className="text-lg text-white mt-4 mb-4">
              {office.address}
            </p>
            <p className="text-lg text-white mt-4 mb-4">
              <FaEnvelope className="inline-block mr-2 text-red-500" />
              <a
                href={`mailto:${office.email}`}
                className="text-white hover:text-gray-400"
              >
                {office.email}
              </a>
            </p>
            <p className="text-lg text-white mt-4 mb-4">
              <FaPhoneAlt className="inline-block mr-2 text-blue-500" />
              <a href={`tel:${office.phone}`} className="text-white hover:text-gray-400">
                {office.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfficeLocations;
