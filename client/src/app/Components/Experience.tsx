"use client"
import { FC, useState, useEffect } from 'react';

const Experience: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); // Animation delay
  }, []);

  return (
    <section id="experience" className=" bg-white py-10 text-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center transition-opacity duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-blue-500 mb-6 mt-[-8vmin]">Experience</h2>
          <div>
            <hr className="w-full mx-auto border-t-2 border-blue-600 mb-4" />
          </div>
          <p className="text-lg mb-6 mt-9 text-black">
            Here's a glimpse of my work as a Fullstack Developer at Triostack Technologies Pvt. Ltd.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className={`transition-opacity duration-1000 py-1 px-4 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div
            className={`bg-white p-6 border-black border-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:shadow-xl hover:bg-blue-50 hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-2">
              Fullstack Developer | Triostack Technologies Pvt. Ltd.
            </h3>
            <p className="text-lg text-black mb-4">
              May 2025 - Present | Greater Noida, India
            </p>
            <p className="text-black mb-4">
              As a Fullstack Developer at Triostack Technologies Pvt. Ltd., I worked on various client projects focusing on both front-end and back-end technologies. My primary responsibilities included developing dynamic web applications, managing databases, and ensuring smooth communication between the server and the client side.
            </p>

            {/* Skills/Technologies */}
            <div className="flex space-x-6 mt-4">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <h4 className="text-blue-500 font-semibold">Frontend</h4>
                <ul className="text-black">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TailwindCSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              <div className="text-center hover:scale-105 transition-transform duration-300">
                <h4 className="text-blue-500 font-semibold">Backend</h4>
                <ul className="text-black">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="mt-6">
              <h5 className="text-blue-500 font-semibold text-lg">Project Highlights</h5>
              <ul className="list-disc pl-6 text-black">
                <li>Developed and deployed a full-stack web application for a client in the e-commerce domain, improving user experience and increasing conversion rates by 15%.</li>
                <li>Worked closely with the design team to implement responsive UI designs using React and TailwindCSS.</li>
                <li>Built and maintained RESTful APIs with Node.js and Express to handle client requests efficiently.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
