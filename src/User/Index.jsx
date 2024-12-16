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
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-2xl  text-white font-bold text-center mb-8">Registration Open</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name, Mobile, Address Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 "
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-lg font-medium text-white">
              Mobile *
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 "
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-lg font-medium text-white">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 "
              required
            />
          </div>
        </div>

        {/* Email, Category, Gender Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 "
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-lg font-medium text-white">
              Select Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 "
              required
            >
              <option value="">Select Category</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>
          <div>
            <label htmlFor="gender" className="block text-lg font-medium text-white">
              Gender *
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full p-4 border border-gray-300 "
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-sky-500	 text-white text-[18px] rounded-md py-4 px-4  hover:bg-sky-600"
          >
            Submit
          </button>
        </div>
      </form>
      <OfficeLocations />
    </section>
  );
}

export default RegistrationForm;
