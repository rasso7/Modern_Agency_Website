import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import main_logo from "../assets/main_logo.avif";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="navbar-default validnavs menu-center no-full bg-white text-black w-full z-30 lg:px-33 relative">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        .nav-link {
          position: relative;
          padding-bottom: 2px;
          display: inline-block;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          animation: float 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #000000;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src={main_logo}
                alt="Plug Media Logo" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2 text-lg">
            <a href="/" className="nav-link text-black font-medium">Home,</a>
            <a href="/Work" className="nav-link text-black  font-medium">Work,</a>
            <a href="/About" className="nav-link text-black  font-medium">About,</a>
            <a href="/Blog" className="nav-link text-black  font-medium">Blog,</a>
            <a href="/Contact" className="nav-link text-black  font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl focus:outline-none bg-transparent"
            >
              {mobileMenuOpen ? <FaTimes className="text-black" /> : <FaBars className="text-black" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidenav - Top to Bottom Animation */}
      <div 
        className={`mobile-sidenav md:hidden w-full bg-white text-black shadow-lg transition-all duration-500 ease-in-out overflow-hidden z-30 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-6">
          <a href="/" className="py-3 border-b border-gray-200  text-left text-black">Home</a>
          <a href="/Work" className="py-3 border-b border-gray-200  text-left text-black">Work</a>
          <a href="/About" className="py-3 border-b border-gray-200  text-left text-black">About</a>
          <a href="/Blog" className="py-3 border-b border-gray-200  text-left text-black">Blog</a>
          <a href="/Contact" className="py-3 border-b border-gray-200  text-left text-black">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;