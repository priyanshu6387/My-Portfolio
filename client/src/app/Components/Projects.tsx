// components/Projects.tsx
import React from "react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Task Tracker App",
    description:
      "A full-stack MERN application for managing tasks with authentication, drag-and-drop UI, and real-time updates.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    link: "https://github.com/yourusername/task-tracker",
  },
  {
    title: "E-commerce Platform",
    description:
      "Developed a scalable multi-vendor platform with secure payments, admin dashboard, and product management.",
    techStack: ["Angular", "Spring Boot", "MySQL", "JWT"],
    link: "https://github.com/yourusername/e-commerce",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with Next.js, Tailwind CSS, and TypeScript showcasing skills and projects.",
    techStack: ["Next.js", "Tailwind", "TypeScript"],
    link: "https://yourdomain.com",
  },
  {
    title: "Job Board API",
    description:
      "RESTful API for job listings, company profiles, and candidate applications. Integrated with OAuth2.",
    techStack: ["C#", ".NET Core", "SQL Server", "Swagger"],
    link: "https://github.com/yourusername/job-board-api",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-10 mx-auto px-6 mb-6 mt-[-15vmin] bg-white text-teal-300">
      <h2 className="text-4xl font-bold text-blue-500 text-center mb-6">Projects</h2>
       <div>
            <hr className="w-full mx-auto border-t-2 border-teal-300 mb-10" />
          </div>
      <div className="grid md:grid-cols-2 gap-6 py-1 px-4">
        {projects.map((project, index) => (
          <div key={index} className={`bg-white p-6 border-black border-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform opacity-100 translate-y-0 hover:shadow-xl hover:bg-blue-50 hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <div className="mb-3">
              <span className="font-semibold text-sm">Tech Stack:</span>
              <ul className="list-disc list-inside text-sm text-gray-600">
                {project.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
