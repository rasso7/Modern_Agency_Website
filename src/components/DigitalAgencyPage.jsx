import { useState, useEffect } from 'react';
import img3 from "../assets/3.avif";
import img6 from "../assets/6.avif";
import img7 from "../assets/7.avif";
import logo1 from "../assets/logo1.avif";
import logo2 from "../assets/logo2.avif";
import logo3 from "../assets/logo3.avif";
import logo4 from "../assets/logo4.avif";
import logo5 from "../assets/logo5.avif";
import logo6 from "../assets/logo6.avif";
import logo7 from "../assets/logo7.avif";
import logo8 from "../assets/logo8.avif";
import TextRevealSection from './TextReveal';

export default function DigitalAgencyPage() {
  const [logos, setLogos] = useState([
    { id: 1, src: logo1, alt: "CUBE logo" },
    { id: 2, src: logo2, alt: "DEEL logo" },
    { id: 3, src: logo3, alt: "Brig logo" },
    { id: 4, src: logo4, alt: "Albor logo" },
    { id: 5, src: logo5, alt: "MOON logo" },
    { id: 6, src: logo6, alt: "PULSE logo" },
    { id: 7, src: logo7, alt: "RX logo" },
    { id: 8, src: logo8, alt: "MOVE logo" },
  ]);

  // Function to shuffle logos randomly
  const shuffleLogos = () => {
    setLogos(prevLogos => {
      const newLogos = [...prevLogos];
      // Fisher-Yates shuffle algorithm
      for (let i = newLogos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newLogos[i], newLogos[j]] = [newLogos[j], newLogos[i]];
      }
      return newLogos;
    });
  };

  // Set interval to shuffle logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(shuffleLogos, 3000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Mission and Vision Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left side header */}
          <div className="col-span-1">
            <h2 className="text-gray-800 text-lg font-medium">Mission and Vision</h2>
          </div>
          
          {/* Right side content */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="mb-6">
              <span className="text-gray-400 text-3xl font-light">Digital Innovation Studio</span>
              <span className="text-black text-3xl"> is a forward-thinking digital agency specializing in innovative web solutions, custom software development, and digital transformation.</span>
            </h1>
            
            <p className="text-black text-xl mt-8">
              We empower businesses to thrive in the digital age through cutting-edge technology, creative design, and strategic development solutions that drive real business growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Numbers and Image Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side - Image */}
          <div className="col-span-1">
            <img 
              src={img3} 
              alt="Person with futuristic blue glasses" 
              className="w-full rounded"
            />
          </div>
          
          {/* Right side - Stats */}
          <div className="col-span-1">
            <h3 className="text-gray-700 mb-6">Numbers</h3>
            
            <div className="mb-12 mx-10">
              <div className="flex items-baseline">
                <span className="text-8xl font-bold">15</span>
                <span className="text-4xl font-bold ml-2">+</span>
              </div>
              <p className="text-sm mt-1">Projects Delivered</p>
            </div>
            
            <div className='mx-10'>
              <div className="flex items-baseline">
                <span className="text-8xl font-bold">5</span>
                <span className="text-4xl font-bold ml-2">+</span>
              </div>
              <p className="text-sm mt-1">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients Section with Animated Logos - Positioned like the image */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-8">
        <h3 className="text-gray-700 mb-20 text-left">Our clients</h3>
        
        <div className="grid grid-cols-4 gap-x-12 gap-y-32 relative overflow-hidden">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="flex items-center justify-center transition-all duration-700 transform animate-rise"
              style={{
                animation: 'fadeInUp 0.5s ease-out'
              }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Portfolio Images */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Replace these with your actual portfolio images */}
          <div>
            <img 
              src={img6}
              alt="Computer monitor with MOON logo" 
              className="w-full h-auto"
            />
          </div>
          <div>
            <img 
              src={img7}
              alt="Person with futuristic glasses" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Team Section and CTA */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-8 text-center">
               <TextRevealSection
          content="Our team excels in creating designs that speak directly to the audience's needs."
          buttonText="JOIN US"
          className="text-xl"
        />
      </section>

      {/* Add CSS for the animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}