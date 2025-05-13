// App.js - Everything in one file
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import projects from './data';
// Image imports

// Card Component
const Card = ({ i, title, description, src, tags, color, progress, totalCards }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // Image animation remains the same
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  
  // Map scroll progress to card movement
  // Start with cards staggered and end with complete overlap
  const cardProgress = useTransform(
    progress, 
    // Map scroll progress from 0 to 1
    [i / (totalCards + 1), 1], 
    // To card positions from initial offset to final overlap
    [0, 1]
  );
  
  // Calculate Y position based on cardProgress
  // As cardProgress goes from 0 to 1, cards move to overlap
  const yPos = useTransform(
    cardProgress,
    [0, 1],
    [i * 50, 0] // Initial offset to final overlap
  );
   const isEven = i % 2 === 0;

  return (
     <div className="h-screen flex items-center justify-center sticky top-0 w-full px-5 box-border">
      <motion.div
        style={{ 
          translateY: yPos,
          zIndex: 100 - i
        }}
        className="flex flex-col relative -top-1/4 h-[600px] w-[90vw] max-w-[1600px]"
      >
        <div className="flex h-full w-full lg:flex-row flex-col">
          {/* Logo/Image side */}
          <div className={`lg:w-1/2 w-full lg:h-full h-[300px] ${isEven ? 'lg:order-1' : 'lg:order-2'} order-1 bg-white flex items-center justify-center`}>
            <div className="w-3/4 h-3/4 flex items-center justify-center">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                style={{ scale: imageScale }}
              >
                <img
                  src={src}
                  alt="Strategy logo"
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Text content side */}
          <div className={`lg:w-1/2 w-full h-full flex flex-col justify-center p-10 ${isEven ? 'lg:order-2' : 'lg:order-1'} order-2 bg-black text-white`}>
            <h2 className="text-7xl mb-8 font-bold tracking-wider">{title}</h2>
            <div className="flex flex-col gap-5">
              <p className="text-xl leading-8">
                {description}
              </p>
              {tags && (
                <div className="flex flex-wrap gap-3 mt-8">
                  {tags.map((tag, index) => (
                    <span key={index} className="bg-zinc-800 px-5 py-3 rounded-md text-white text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Main App Component
function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="main">
      {projects.map((project, i) => {
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            totalCards={projects.length}
          />
        );
      })}
    </main>
  );
}

export default Services;