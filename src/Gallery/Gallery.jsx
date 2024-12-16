import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Gallery() {
  const images = [
    "https://via.placeholder.com/300", // Replace these with your image URLs
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Image Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            {/* Image */}
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-68 object-cover rounded-lg shadow-md"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white text-xl hover:text-gray-300"
                  title="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-white text-xl hover:text-gray-300"
                  title="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-white text-xl hover:text-gray-300"
                  title="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
