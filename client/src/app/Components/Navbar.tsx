"use client"
import React, { useState } from 'react';
import { FC } from 'react';

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-white/80 py-2 px-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between text-white items-center">
        {/* Brand Name */}
        <div className="text-blue-600 text-2xl font-bold hover:text-teal-400 transition-colors">
          PRIYANSHU PATEL
        </div>

        <div className="md:hidden flex items-center ">
          <button
            onClick={toggleMenu}
            className="text-blue-600"
            title={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links (for desktop) */}
        
        <div className=" ml-[60vmin] flex space-x-8">
          <a href="#about" className="text-blue-600 hover:text-teal-400 transition-colors">About</a>
          <a href="#experience" className="text-blue-600 hover:text-teal-400 transition-colors">Experience</a>
          <a href="#skills" className="text-blue-600 hover:text-teal-400 transition-colors">Skills</a>
          <a href="#projects" className="text-blue-600 hover:text-teal-400 transition-colors">Project</a>
          <a href="#contact" className="text-blue-600 hover:text-teal-400 transition-colors">Contact</a>
        </div>
        

        {/* Resume Button */}
        <div className="ml-auto hidden md:flex">
          <a href="#resume" className="text-blue-600 border-2 border-blue-700 px-6 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition-all">
            Resume
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1F2937] flex flex-col items-center space-y-4 py-4">
          <a href="#about" className="text-white hover:text-teal-300">About</a>
          <a href="#experience" className="text-white hover:text-teal-300">Experience</a>
          <a href="#skills" className="text-white hover:text-teal-300">Skills</a>
          <a href="#projects" className="text-white hover:text-teal-300">Project</a>
          <a href="#contact" className="text-white hover:text-teal-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
