"use client"
import { FC } from "react";
import { useEffect, useState } from "react";

const About: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set a timeout to trigger animation on load
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delaying the animation by 300ms
  }, []);

  return (
    <section id="about" className=" flex items-center bg-white text-white py-20">
      <div className="container mx-auto px-6">
        {/* About Section Content */}
        <div
          className={`text-center transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-500">About Me</h2>
           <div>
            <hr className="w-full mx-auto border-t-2 border-blue-600 mb-4" />
          </div>
          <p className="text-lg mb-6 mt-9 text-black">
            Hi, I'm Priyanshu Patel, a passionate Fullstack Developer with expertise in front-end and back-end technologies. I love solving complex problems, contributing to open-source projects, and continually improving my skills.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-teal-500 text-white font-semibold text-lg rounded-lg transition-all duration-300 ease-in-out hover:bg-teal-600 hover:scale-105"
          >
            Check My Projects
          </a>
        </div>

        
        
      </div>
    </section>
  );
};

export default About;
