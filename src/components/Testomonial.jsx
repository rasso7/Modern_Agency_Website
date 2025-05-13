
import logo from "../assets/logo.avif";
import TextRevealSection from './TextReveal';
export default function TestimonialSection() {
 
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-2 bg-white relative "
    >
      {/* Logo */}
    <div className="mb-2 mt-6">
        <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          <img 
            src={logo} 
            alt="Digital Innovation Studio Logo" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      
      {/* Testimonial Text with Animation */}
    
         <TextRevealSection
     content="WORKING WITH DIGITAL INNOVATION STUDIO WAS AN EXCEPTIONAL EXPERIENCE FROM START TO FINISH"
    
     className="text-4xl md:text-6xl font-bold leading-tight text-black text-center px-0"
   />
       <div className="w-full max-w-7xl mx-auto mt-10">
        <hr className="border-t border-gray-300" />
      </div>
    </section>
  );
}