import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextRevealSection({ content, buttonText, className = '' }) {
  const sectionRef = useRef(null);
  const textRevealRef = useRef(null);
  const wipeRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;

      if (sectionRef.current && textRevealRef.current && wipeRef.current) {
        gsap.set(wipeRef.current, {
          left: '0%',
          width: '200%',
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
          },
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    };

    loadGSAP();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" flex flex-col items-center justify-center p-6 relative z-30 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden relative text-center">
          <p
            ref={textRevealRef}
            className={`text-3xl md:text-3xl font-bold leading-tight text-black transition-opacity duration-300 ${className}`}
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

        {buttonText && (
          <div className="mt-6 flex justify-center">
            <button
              data-button-text={buttonText}
              className="flip-button bg-blue-500 text-white px-6 py-3 font-semibold  hover:bg-blue-700 hover:text-black hover:-translate-y-2"
            >
              <span>{buttonText}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}