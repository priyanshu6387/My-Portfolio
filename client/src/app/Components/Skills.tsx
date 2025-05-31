"use client"
import React, { useEffect, useState } from "react";

const TechnicalSkills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Triggering animation on component mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delayed by 300ms
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-white py-20 text-black">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div
          className={`text-center transition-opacity duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-teal-300 mb-6">Technical Skills</h2>
           <div>
            <hr className="w-full mx-auto border-t-2 border-teal-300 mb-4" />
          </div>
          <p className="text-lg mb-6 mt-9 text-black">
            Below are the skills I have developed over time as a Fullstack Developer.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mb-10 mt-10">
          {/* Frontend Skill Card */}
          <div
            className={`bg-white p-6 border-black border-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:shadow-xl hover:bg-blue-50 hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">Frontend Development</h3>
            <ul className="text-black space-y-2">
              <li>React</li>
              <li>Next.js</li>
              <li>TailwindCSS</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>

          {/* Backend Skill Card */}
          <div
            className={`bg-white p-6 border-black border-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:shadow-xl hover:bg-blue-50 hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">Backend Development</h3>
            <ul className="text-black space-y-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* DevOps & Tools Skill Card */}
          <div
             className={`bg-white p-6 border-black border-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:shadow-xl hover:bg-blue-50 hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">DevOps & Tools</h3>
            <ul className="text-black space-y-2">
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Git & GitHub</li>
              <li>Jenkins</li>
            </ul>
          </div>

          {/* Additional skill cards */}
          <div
              className={`bg-white p-6 border-black border-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:shadow-xl hover:bg-blue-50 hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">Cloud & Hosting</h3>
            <ul className="text-black space-y-2">
              <li>AWS (EC2, S3, Lambda)</li>
              <li>Heroku</li>
              <li>Firebase</li>
              <li>NGINX</li>
            </ul>
          </div>

          <div
              className={`bg-white p-6 border-black border-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:shadow-xl hover:bg-blue-50 hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">Version Control</h3>
            <ul className="text-black space-y-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>GitLab</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
