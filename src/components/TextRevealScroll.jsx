import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextRevealScroll() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  
  // Single paragraph text content
  const content = "Digital Innovation Studio is a forward-thinking agency that transforms ideas into immersive digital experiences. We specialize in creating innovative web solutions, captivating designs, and strategic digital transformations that help brands make a splash in the digital world.";
  
  // Split content into individual characters for granular control
  const characters = content.split('');

  useEffect(() => {
    if (textContainerRef.current) {
      // Get all character spans
      const chars = textContainerRef.current.querySelectorAll('.char');
      
      // Set initial state - all characters with opacity 0
      gsap.set(chars, { opacity: 0 });
      
      // Create a timeline for the reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          scrub: 2,
          toggleActions: 'play none none reverse',
        }
      });
      
      // Add characters to the timeline with staggered opacity animation
      // This creates a wave-like effect from left to right
      tl.to(chars, {
        opacity: 1,
        duration: 0.5,
        stagger: {
          each: 0.02,  // Time between each character's animation
          from: "start", // Start from the beginning (left)
          ease: "power1.inOut"
        },
        ease: "power1.inOut"
      });
    }
    
    return () => {
      // Clean up ScrollTrigger instances on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Spacer to allow scrolling */}
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-4xl font-bold">Scroll Down</h1>
      </div>
      
      <section 
        ref={sectionRef}
        className="min-h-screen flex flex-col items-center justify-center p-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            {/* The text content container */}
            <p 
              ref={textContainerRef}
              className="text-4xl md:text-5xl font-bold leading-tight text-black relative z-10"
            >
              {/* Render each character in its own span for individual control */}
              {characters.map((char, index) => (
                <span key={index} className="char inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
      
      {/* Additional spacer at the end */}
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <p className="text-2xl">End of Demo</p>
      </div>
    </div>
  );
}