import React, { useRef } from 'react';
import DigitalAgencyPage from '../components/DigitalAgencyPage';
import img2 from "../assets/2.avif";

const About = () => {
  const containerRef = useRef(null);

  return (
    <div className="font-sans relative" ref={containerRef}>
      {/* Fixed ABOUT section that stays in center of viewport */}
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
        <section className="flex justify-center items-center">
          <h1 className="text-8xl md:text-[280px] font-bold">ABOUT</h1>
          <div className="absolute top-[80px] right-8 w-60 h-60 pointer-events-auto">
            <img src={img2} alt="Scroll Down Note" className="w-full h-full object-contain" />
          </div>
        </section>
      </div>
      
      {/* The actual content that will scroll over the fixed section */}
      <div className="relative">
        {/* First section - transparent to show the fixed ABOUT text */}
        <div className="h-screen w-full"></div>
        
        {/* About content section with white background to overlap fixed section */}
        <div className="relative bg-white w-full">
          <DigitalAgencyPage />
        </div>
      </div>
    </div>
  );
};

export default About;