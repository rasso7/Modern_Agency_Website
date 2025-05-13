import React from 'react';
import pic from "../assets/img_1.jpeg";
import pic2 from "../assets/elegance.jpeg"
import pic3 from "../assets/bombay.jpeg"
const Feature = () => {
  return (
    <div className="w-full h-full  bg-gray-100">
      <div className="p-8 w-full h-[550px]">
        <div className="relative w-full h-full group overflow-hidden rounded-lg">
          <img
            src={pic}
            alt="Feature Cover"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Glassy Gradient Text Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-md text-white font-bold text-xl">
            LANDLITE
          </div>

          {/* Gray Transparent Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-60 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
       <div className="p-8 w-full h-[550px]">
        <div className="relative w-full h-full group overflow-hidden rounded-lg">
          <img
            src={pic2}
            alt="Feature Cover"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Glassy Gradient Text Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-md text-white font-bold text-xl">
            ELEGANCE
          </div>

          {/* Gray Transparent Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-60 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
      <div className="p-8 w-full h-[550px]">
        <div className="relative w-full h-full group overflow-hidden rounded-lg">
          <img
            src={pic3}
            alt="Feature Cover"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Glassy Gradient Text Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-md text-white font-bold text-xl">
            BOMBAY ROYAL
          </div>

          {/* Gray Transparent Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-60 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
