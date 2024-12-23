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
    <section className="max-w-[1320px] mx-[auto] pt-[50px] px-[15px] pb-[60px]">
      <h1 className="text-[34px] text-white font-[500] text-center mb-8">Our Offices Around the City</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="h-[370px] px-[15px] py-[20px] flex flex-col items-start justify-start border-[1px] border-t-[4px] border-t-[#09AFF4] border-[#06426B] "
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
  );
}

export default OfficeLocations;
