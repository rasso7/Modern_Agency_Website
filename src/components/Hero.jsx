import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import img1 from "../assets/1.avif";
import img2 from "../assets/2.avif";
import img3 from "../assets/3.avif";
import img4 from "../assets/4.avif";
import img5 from "../assets/5.avif";
import img6 from "../assets/6.avif";

gsap.registerPlugin(ScrollTrigger);

export default function New() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const textRevealRef = useRef(null);
  const wipeRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState('none');
  const [textVisible, setTextVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  const content = "Digital Innovation Studio is a forward-thinking agency that transforms ideas into immersive digital experiences. We specialize in creating innovative web solutions, captivating designs, and strategic digital transformations that help brands make a splash in the digital world.";

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setScrollY(currentScrollY);

        // Hide text when scrolled to the content sections
        if (currentScrollY > window.innerHeight * 1.5) {  // Reduced threshold
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

      // Set up the text reveal effect for the Try section
      if (sectionRef.current && textRevealRef.current && wipeRef.current) {
        gsap.set(wipeRef.current, {
          left: '0%',
          width: '200%'
        });
        
        gsap.to(wipeRef.current, {
          left: '100%',
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            scrub: 2,
          }
        });
      }

      return () => {
        window.removeEventListener('scroll', handleScroll);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <>
     
      <div className="bg-white text-black">
        {/* Fixed container for scrolling text */}
        <div
          ref={containerRef}
          className={`fixed top-0 left-0 w-full h-screen flex items-center z-10 pointer-events-none overflow-hidden ${!textVisible ? 'opacity-0' : 'opacity-100'}`}
          style={{ transition: 'opacity 0.5s ease-out' }}
        >
          <h1
            ref={textRef}
            className="font-dm text-7xl md:text-9xl lg:text-[296px] font-bold whitespace-nowrap ml-0"
            style={{ transform: "translateX(0px)" }}
          >
            Digital Innovation Studio
          </h1>
        </div>

        {/* Top row images */}
        <div className="absolute top-[40px] left-[300px] w-[250px] h-[300px] z-20">
          <img src={img1} alt="placeholder" className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-[120px] right-[220px] w-[166px] h-[252px] z-20">
          <img src={img2} alt="placeholder" className="w-full h-full object-cover" />
        </div>

        {/* Middle row images - larger size */}
        <div className="absolute top-[600px] left-[50px] w-[450px] h-[450px] z-20">
          <img src={img3} alt="placeholder" className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-[650px] right-[300px] w-[350px] h-[350px] z-20">
          <img src={img4} alt="placeholder" className="w-full h-full object-cover" />
        </div>

        {/* Bottom row images */}
        <div className="absolute top-[1150px] left-[250px] w-[400px] h-[300px] z-20">
          <img src={img5} alt="placeholder" className="w-full h-full object-cover" />
        </div>

        <div className="absolute top-[1200px] right-[150px] w-[320px] h-[380px] z-20">
          <img src={img6} alt="placeholder" className="w-full h-full object-cover" />
        </div>

        {/* Spacer for scrolling */}
        <div className="h-[200vh]"></div>

        {/* Try section with text reveal effect */}
       <section
  ref={sectionRef}
  className="min-h-screen flex flex-col items-center justify-center p-6 relative z-30 bg-white"
>
  <div className="max-w-3xl mx-auto">
    <div className="overflow-hidden relative text-center">
      <p
        ref={textRevealRef}
        className="text-3xl md:text-3xl font-bold leading-tight text-black transition-opacity duration-300"
      >
        {content}
      </p>

      <div
        ref={wipeRef}
        className="absolute top-0 bottom-0"
        style={{
          background:
            'linear-gradient(to left, white 75%, rgba(255,255,255,0) 100%)',
          height: '100%',
          zIndex: 40,
        }}
      ></div>
    </div>

  
  </div>
</section>

      </div>
    </>
  );
}