import hero from "../assets/hero.avif";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const BoldIdeasHero = () => {
  // Create refs for each text section
  const containerRef = useRef(null);
  const straightRef = useRef(null);
  const toTheRef = useRef(null);
  const boldIdeasRef = useRef(null);
  const imageRef = useRef(null);
  
  // Track whether each section has been revealed
  const [straightRevealed, setStraightRevealed] = useState(false);
  const [toTheRevealed, setToTheRevealed] = useState(false);
  const [imageRevealed, setImageRevealed] = useState(false);
  const [boldIdeasRevealed, setBoldIdeasRevealed] = useState(false);
  
  // Handle scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if elements are in view and should be revealed
      if (straightRef.current) {
        const straightTop = straightRef.current.getBoundingClientRect().top;
        if (straightTop < windowHeight * 0.7 && !straightRevealed) {
          setStraightRevealed(true);
        }
      }
      
      if (toTheRef.current) {
        const toTheTop = toTheRef.current.getBoundingClientRect().top;
        if (toTheTop < windowHeight * 0.7 && !toTheRevealed) {
          setToTheRevealed(true);
          // Reveal image at the same time as "TO THE"
          setImageRevealed(true);
        }
      }
      
      if (boldIdeasRef.current) {
        const boldIdeasTop = boldIdeasRef.current.getBoundingClientRect().top;
        if (boldIdeasTop < windowHeight * 0.7 && !boldIdeasRevealed) {
          setBoldIdeasRevealed(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [straightRevealed, toTheRevealed, imageRevealed, boldIdeasRevealed]);
  
  // Animation variants
  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1] // Cubic bezier for smooth animation
      }
    }
  };
  
  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen w-full bg-white flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col space-y-4 md:space-y-6">
          {/* STRAIGHT */}
          <div ref={straightRef} className="overflow-hidden w-full">
            <motion.h1 
              className="text-6xl md:text-[190px] font-black leading-none whitespace-nowrap" 
              variants={textVariants}
              initial="hidden"
              animate={straightRevealed ? "visible" : "hidden"}
            >
              STRAIGHT
            </motion.h1>
          </div>
          
          {/* TO THE + IMAGE on same row */}
          <div className="flex flex-row items-center space-x-4">
            {/* TO THE */}
            <div ref={toTheRef} className="overflow-hidden">
              <motion.h1 
                className="text-6xl md:text-[190px] font-black leading-none" 
                variants={textVariants}
                initial="hidden"
                animate={toTheRevealed ? "visible" : "hidden"}
              >
                TO THE
              </motion.h1>
            </div>
            
            {/* Image */}
            <motion.div 
              ref={imageRef}
              className="ml-12 rounded-lg overflow-hidden w-32 md:w-64 lg:w-100 flex-shrink-0 h-40"
              variants={imageVariants}
              initial="hidden"
              animate={imageRevealed ? "visible" : "hidden"}
            >
              <img 
                src={hero}
                alt="Person with VR headset"
                className="w-full h-full object-cover"
                style={{
                  background: "#FF6600",
                }}
              />
            </motion.div>
          </div>
          
          {/* BOLD IDEAS */}
          <div ref={boldIdeasRef} className="overflow-hidden w-full">
            <motion.h1 
              className="text-6xl md:text-[190px] font-black leading-none whitespace-nowrap" 
              variants={textVariants}
              initial="hidden"
              animate={boldIdeasRevealed ? "visible" : "hidden"}
            >
              BOLD IDEAS
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoldIdeasHero;