import { FiArrowUpRight, FiCalendar, FiClock } from "react-icons/fi";
import { useState } from "react";
import port1 from "../assets/port1.avif";
import port2 from "../assets/port2.avif";
import port3 from "../assets/port3.avif";
import TextRevealSection from "./TextReveal";
export default function PortfolioSection() {
    
  // Array of portfolio/blog items
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
    }
  ];

  return (
    <section className="py-16 px-4 bg-white mt-12">
      <div className="container mx-auto max-w-6xl">
        {/* Headline Text */}
        <TextRevealSection
  content="Discover how Digital Innovation Studio can help transform your digital presence with our innovative solutions and creative expertise."
  buttonText="Learn More"
  className="text-xl px-6"
/>

        {/* Portfolio/Blog Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
  );
}