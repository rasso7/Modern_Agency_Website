import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import img1 from "../assets/1.avif";
import img2 from "../assets/2.avif";
import img3 from "../assets/3.avif";
import img4 from "../assets/4.avif";
import img5 from "../assets/5.avif";
import img6 from "../assets/6.avif";


export default function ScrollTextEffect() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState('none');
  const [textVisible, setTextVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);

        // Hide text when scrolled to the content sections
        if (currentScrollY > window.innerHeight * 2) {
          setTextVisible(false);
        } else {
          setTextVisible(true);
        }

        if (currentScrollY > lastScrollY.current) {
          setDirection('down');
        } else if (currentScrollY < lastScrollY.current) {
          setDirection('up');
        }

        lastScrollY.current = currentScrollY;

        // Increased movement coefficient for faster scrolling
        const movement = currentScrollY * 0.12;

        if (textRef.current) {
          gsap.to(textRef.current, {
            x: currentScrollY > 0 ? -movement : movement,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    loadGSAP();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white text-black">
        {/* Fixed container for scrolling text */}
        <div
          ref={containerRef}
          className={`fixed top-0 left-0 w-full h-screen flex items-center z-10 pointer-events-none overflow-hidden ${!textVisible ? 'opacity-0' : 'opacity-100'}`}
          style={{ transition: 'opacity 0.5s ease-out' }}
        >
          <h1
            ref={textRef}
            className="text-7xl md:text-9xl lg:text-[296px] font-bold whitespace-nowrap ml-0"
            style={{ transform: "translateX(0px)" }}
          >
            Digital Innovation Studio
          </h1>
        </div>

        {/* Top row images */}
        <div className="absolute top-[40px] left-[300px] w-[250px] h-[300px] z-11">
          <img src={img1} alt="placeholder" className="w-full h-full object-cover " />
        </div>

        <div className="absolute top-[120px] right-[220px] w-[166px] h-[252px] z-11">
          <img src={img2} alt="placeholder" className="w-full h-full object-cover " />
        </div>

        {/* Middle row images - larger size */}
        <div className="absolute top-[600px] left-[50px] w-[450px] h-[450px]">
          <img src={img3} alt="placeholder" className="w-full h-full object-cover " />
        </div>

        <div className="absolute top-[650px] right-[300px] w-[350px] h-[350px]">
          <img src={img4} alt="placeholder" className="w-full h-full object-cover " />
        </div>

        {/* Bottom row images */}
        <div className="absolute top-[1150px] left-[250px] w-[400px] h-[300px]">
          <img src={img5} alt="placeholder" className="w-full h-full object-cover " />
        </div>

        <div className="absolute top-[1200px] right-[150px] w-[320px] h-[380px]">
          <img src={img6} alt="placeholder" className="w-full h-full object-cover " />
        </div>

        {/* Original spacer for scrolling */}
        
        <div className="h-[200vh]"></div>

        {/* Sections */}
        
     
       
        
      </div>
    
        
       
    </>
  );
}