import { useState } from "react";
import OfficeLocations from "./OfficeLocations";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    email: "",
    category: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <section className="max-w-[1320px] mx-[auto] pt-[50px] px-[15px]">
      <h1 className="text-[34px] text-white font-[500] text-center mb-8">Registration Open</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name, Mobile, Address Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">
              Name <sup className="text-[#f00000]">*</sup>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-white 
              hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-lg font-medium text-white">
              Mobile <sup className="text-[#f00000]">*</sup>
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-white 
              hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1 "
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium text-white">
              Address <sup className="text-[#f00000]">*</sup>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-white 
              hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1"
              required
            />
          </div>
        </div>

        {/* Email, Category, Gender Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">
              E-Mail <sup className="text-[#f00000]">*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-white 
              hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-lg font-medium text-white">
              Select Category <sup className="text-[#f00000]">*</sup>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-[#45475A] bg-transparent text-[15px] text-[#fff] 
              hover:border-[#09aff4]  focus:border-[#09aff4] focus:outline-1"
              required
            >
              <option className="text-[#000]" value="">Select Category</option>
              <option className="text-[#000]" value="M">DCA</option>
              <option className="text-[#000]" value="F">O Level</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="block text-lg font-medium text-white">
              Gender <sup className="text-[#f00000]">*</sup>
            </label>
            <div className="mt-[10px]">
              <div>
                <label className="flex items-center gap-[5px] text-white text-[18px] font-[600]">
                  <input type="radio" id="Gender" name="Gender" />
                  M
                </label>
              </div>
              <div>
                <label className="flex items-center gap-[5px] text-white text-[18px] font-[600]">
                  <input type="radio" id="Gender" name="Gender"/>
                  F
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-[10px] min-w-[140px] px-[15px] py-[15px] bg-[#09aff4] border-[2px] border-[#09aff4] rounded-tr-[15px] rounded-bl-[15px] text-[1.15rem] font-[500] text-[#fff] leading-[20px] capitalize text-center transition-all hover:bg-[transparent] border-[#09aff4] hover:text-[#09aff4] hover:transition-all"
          >Submit</button>
        </div>
      </form>
      <OfficeLocations />
    </section>
  );
}

export default RegistrationForm;
