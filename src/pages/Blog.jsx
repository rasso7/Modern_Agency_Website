import React, { useRef } from 'react';
import img2 from "../assets/2.avif";
import { FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";
import port1 from "../assets/port1.avif";
import port2 from "../assets/port2.avif";
import port3 from "../assets/port3.avif";
import port4 from "../assets/port4.avif";
import port5 from "../assets/port5.avif";
import port6 from "../assets/port6.avif";

const portfolioItems = [
  {
    id: 1,
    image: port1,
    alt: "Laptop with Digital Studio logo",
    date: "October 1, 2023",
    readTime: "5min read",
    title: "Understanding Content Management"
  },
  {
    id: 2,
    image: port2,
    alt: "Business cards and package mockup",
    date: "October 3, 2023",
    readTime: "3min read",
    title: "SEO Strategies for 2024"
  },
  {
    id: 3,
    image: port3,
    alt: "Craft box mockup",
    date: "October 6, 2023",
    readTime: "3min read",
    title: "Content Marketing Strategies"
  },
  {
    id: 4,
    image: port4,
    alt: "Craft box mockup",
    date: "October 4, 2023",
    readTime: "5min read",
    title: "Social Media Marketing Tips"
  }, 
  {
    id: 5,
    image: port5,
    alt: "Craft box mockup",
    date: "October 8, 2023",
    readTime: "5min read",
    title: "Building an Online Community"
  },
  {
    id: 6,
    image: port6,
    alt: "Craft box mockup",
    date: "October 2, 2023",
    readTime: "4min read",
    title: "Best Practices for Blogging"
  }
];

const Blog = () => {
  const containerRef = useRef(null);

  return (
    <div className="font-sans relative" ref={containerRef}>
      {/* Fixed BLOG section that stays in center of viewport */}
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
        <section className="flex justify-center items-center">
          <h1 className="text-8xl md:text-[280px] font-bold">BLOG</h1>
          <div className="absolute top-[80px] right-8 w-60 h-60 pointer-events-auto">
            <img src={img2} alt="Scroll Down Note" className="w-full h-full object-contain" />
          </div>
        </section>
      </div>
      
      {/* The actual content that will scroll over the fixed section */}
      <div className="relative">
        {/* First section - transparent to show the fixed BLOG text */}
        <div className="h-screen w-full"></div>
        
        {/* Blog content section with white background to overlap fixed section */}
        <div className="relative bg-white w-full">
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
              {/* Portfolio/Blog Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItems.map((item) => (
                  <div key={item.id} className="rounded-lg overflow-hidden bg-gray-50">
                    <div className="relative h-64 md:h-72 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover"
                      />
                      <button className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md">
                        <FiArrowUpRight size={20} />
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <div className="flex items-center mr-4">
                          <FiCalendar className="mr-1" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center">
                          <FiClock className="mr-1" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog;