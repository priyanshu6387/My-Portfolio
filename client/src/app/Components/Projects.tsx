"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="max-w-[220vmin] mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-teal-300 mb-12">
          Projects
           <div>
            <hr className="w-full mx-auto border-t-2 border-teal-300 mb-4 mt-4" />
          </div>
        </h2>

        <div className="w-full mx-auto my-8 ">
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-3xl font-semibold text-blue-700 mb-3">
              Triostack Technologies Pvt Ltd
            </h3>
            <p className="text-lg text-gray-800 font-medium mb-1">
              Full Stack Developer
            </p>
            <p className="text-gray-600 italic mb-4 text-sm">
              Jan 2022 – Jan 2024
            </p>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              Developed enterprise-grade web applications using MERN and MEAN
              stacks. Built RESTful APIs, optimized backends with Node.js and
              .NET, and created responsive UIs with React and Angular. Focused
              on performance, security, and scalability in Agile team settings.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full">
                React.js
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full">
                Angular
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full">
                .NET
              </span>
              <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full">
                MongoDB
              </span>
              <span className="bg-pink-100 text-pink-800 px-4 py-1 rounded-full">
                Agile
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
