import { useState } from 'react';

export default function MarqueeSection() {
  const [isHovered, setIsHovered] = useState(false);

  // The content to be displayed in the marquee
  const content = "LET'S CHAT — WORK WITH US —";
  
  // Create an array of repeated content to ensure the marquee effect is continuous
  const repeatedContent = Array(10).fill(content);

  return (
    <div
      className={`w-full py-4 transition-colors duration-300 ease-in-out overflow-hidden relative z-20 ${isHovered ? 'bg-white' : 'bg-black'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ boxShadow: '0 0 0 100vmax currentColor', clipPath: 'inset(0 -100vmax)' }}
    >
      {/* This is the actual marquee container */}
      <div className="relative flex overflow-x-hidden">
        {/* First copy of the content */}
        <div className="animate-marquee whitespace-nowrap flex">
          {repeatedContent.map((text, index) => (
            <span
              key={`first-${index}`}
              className={`font-bold mx-4 transition-colors duration-300 ease-in-out ${isHovered ? 'text-black' : 'text-white'}`}
            >
              {text}
            </span>
          ))}
        </div>

        {/* Second copy of the content for seamless looping */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
          {repeatedContent.map((text, index) => (
            <span
              key={`second-${index}`}
              className={`text-7xl font-bold mx-4 transition-colors duration-300 ease-in-out ${isHovered ? 'text-black' : 'text-white'}`}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Custom animations and styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee {
          animation: marquee 115s linear infinite;
          font-size: 280px;
        }
        
        .animate-marquee2 {
          animation: marquee2 115s linear infinite;
          font-size: 280px;
        }
      `}</style>
    </div>
  );
}