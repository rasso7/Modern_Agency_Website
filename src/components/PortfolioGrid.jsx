import { useState } from 'react';
import pic from "../assets/img_1.jpeg";
import pic2 from "../assets/elegance.jpeg"
import pic3 from "../assets/bombay.jpeg"
import pic4 from "../assets/maha.png"
export default function PortfolioGrid() {
  const portfolioItems = [
    {
      id: 1,
      title: "LANDLITE",
      category: "Interior designe, Development",
      year: "2025",
      bgImage: pic,
      buttonText: "VISIT SITE",
      overlayColor: "bg-gray-500/30"
    },
    {
      id: 2,
      title: "ELEGANCE",
      category: "Bags & Accessories, Development",
      year: "2024",
      bgImage: pic2,
      buttonText: "VISIT SITE",
      overlayColor: "bg-black/40"
    },
    {
      id: 3,
      title: "BOMBAY ROYAL",
      category: "Clothing, Development",
      year: "2024",
      bgImage: pic3,
      buttonText: "VISIT SITE",
      overlayColor: "bg-green-800/30"
    },
    {
      id: 4,
      title: "MAHASHARMAN",
      category: "Healthcare, Development",
      year: "2025",
      bgImage: pic4,
      buttonText: "VIEW PROJECT",
      overlayColor: "bg-gray-300/50"
    }
  ];

  return (
    <div className="w-full p-8 px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="relative w-full aspect-square overflow-hidden group"
            style={{ 
              backgroundImage: `url(${item.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay */}
            <div className={`absolute inset-0 ${item.overlayColor}`}></div>
            
            {/* Top left category text */}
            <div className="absolute top-6 left-6 text-white text-sm font-bold z-10">
              {item.category}
            </div>
            
            {/* Top right year */}
            <div className="absolute top-6 right-6 text-white text-sm font-light z-10">
              {item.year}
            </div>
            
        
            
            {/* Center title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold z-10">
              {item.title}
            </div>
            
            {/* Button */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-6 transition-colors duration-300">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}