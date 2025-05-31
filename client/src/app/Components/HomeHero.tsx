"use client"
import React from 'react'
import { FC } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importing icons

const HomeHero: FC = () => {
  return (
    <div className="relative py-25 flex justify-center items-center bg-cover bg-center text-white"
         style={{ backgroundImage: "url('/images/homehero.png')" }}>
      {/* Hero Text */}
      <div className="relative z-10 text-center px-4 mt-15">
        <h1 className="text-5xl font-bold text-blue-500 mb-4 transition-all duration-300 ease-in-out transform hover:text-white">
          Hi.. I'm Priyanshu Patel
        </h1>
        <p className="text-xl mb-8 text-red-400 transition-all duration-300 ease-in-out transform ">
          Fullstack Developer | Open Source Contributor
        </p>

        {/* Resume Button */}
        <a href="/path/to/your/resume.pdf" download>
          <button className="bg-green-600 px-8 py-3 rounded-md text-white text-lg mb-4 transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">
            Download Resume
          </button>
        </a>

        {/* Social Media Icons below Resume Button */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener"
            className="text-blue-600 text-3xl transition-transform duration-300 ease-in-out hover:scale-125 hover:text-blue-700"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener"
            className="text-white text-3xl transition-transform duration-300 ease-in-out hover:scale-125 hover:text-gray-400"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            className="text-pink-500 text-3xl transition-transform duration-300 ease-in-out hover:scale-125 hover:text-pink-400"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
