import React from "react";

interface Project {
  company: string;
  role: string;
  duration: string;
  description: string;
}

const projects: Project[] = [
  {
    company: "Triostack Technologies",
    role: "Full Stack Developer",
    duration: "Jan 2022 – Jan 2024",
    description:
      "Worked on enterprise-grade web applications using the MERN and MEAN stacks. Built scalable APIs, responsive UIs with React and Angular, and optimized backend logic using .NET and Node.js. Collaborated in Agile teams and followed best practices for performance, security, and code quality.",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-12 mt-[-16vmin]">
          Projects
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 mb-6 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              {project.company}
            </h3>
            <p className="text-gray-800 font-medium mb-1">{project.role}</p>
            <p className="text-gray-600 italic mb-4">{project.duration}</p>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
