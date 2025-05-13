import { FiArrowUp, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer className="bg-black text-white py-12 px-6 relative z-20">
      {/* Added relative positioning and z-20 to ensure it overlaps the fixed CONTACT text */}
      <div className="container mx-auto max-w-6xl">
        {/* Desktop Layout - Grid with 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-8">
          {/* First Column - Sitemap */}
          <div>
            <h3 className="font-medium mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Work</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>

          {/* Second Column - Legal */}
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Licensing</a></li>
              <li><a href="#" className="hover:text-gray-300">Changelog</a></li>
            </ul>
          </div>

          {/* Third Column - Social */}
          <div>
            <h3 className="font-medium mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">Linkedin</a></li>
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
            </ul>
          </div>

          {/* Fourth Column - Newsletter */}
          <div>
            <div className="flex">
              <div className="relative flex-grow bg-white text-black flex items-center">
                <FiSend className="ml-4 h-5 w-5 text-black" />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-3 pl-2 bg-white focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-3 font-medium whitespace-nowrap">
                GET NOTIFIED
              </button>
            </div>
            <div className="mt-4 flex items-start">
              <input
                type="checkbox"
                id="terms-desktop"
                className="mr-2 mt-1"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="terms-desktop" className="text-sm">
                I agree to the Terms & Conditions
              </label>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Vertical stack matching the image */}
        <div className="md:hidden">
          {/* Newsletter Section - At the top for mobile */}
          <div className="mb-8">
            <div className="flex w-full bg-white">
              <div className="flex-grow bg-white text-black flex items-center">
                <FiSend className="ml-4 h-5 w-5 text-black" />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-3 pl-2 bg-white focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-3 font-medium whitespace-nowrap">
                GET NOTIFIED
              </button>
            </div>
            <div className="mt-4 flex items-start">
              <input
                type="checkbox"
                id="terms-mobile"
                className="mr-2 mt-1"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="terms-mobile" className="text-sm">
                I agree to the Terms & Conditions
              </label>
            </div>
          </div>

          {/* Sitemap */}
          <div className="mb-8">
            <h3 className="font-medium mb-4 text-gray-400">Sitemap</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Work</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="mb-8">
            <h3 className="font-medium mb-4 text-gray-400">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">Licensing</a></li>
              <li><a href="#" className="hover:text-gray-300">Changelog</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="mb-8">
            <h3 className="font-medium mb-4 text-gray-400">Social</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">Linkedin</a></li>
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <p>Copyright © Digital Innovation Studio — made by Rashid</p>
          </div>
          <div>
            <a href="#top" className="flex items-center hover:text-gray-300">
              Back to Top
              <FiArrowUp className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}