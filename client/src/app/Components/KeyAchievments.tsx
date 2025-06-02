// components/KeyAchievements.tsx
import React from "react";
import { Award } from "lucide-react";

const achievements: string[] = [
  "1st place in National Hackathon 2024 – AI Health Assistant",
  "Published paper in IEEE on Ethical AI Decision-Making",
  "Completed Google TensorFlow Developer Certification",
  "Interned as AI Developer at XYZ Corp (NLP Chatbots)",
  "Built 10+ full-stack projects (MERN, Spring Boot, .NET)",
  "Core contributor to GirlScript & Hacktoberfest projects",
  "Led college AI Club with 100+ members & tech events",
  "Maintained 95%+ score in B.Tech CSE (AI specialization)",
];

const KeyAchievements: React.FC = () => {
  return (
    <section id="achievements" className="py-10 mx-auto px-6 mb-6 mt-[-6vmin] bg-white text-teal-300">
      <h2 className="text-4xl text-teal-300 font-bold text-center mb-6">Key Achievements</h2>
       <div>
            <hr className="w-full mx-auto border-t-2 border-teal-300 mb-10" />
          </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-1 px-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`bg-white p-5 border-black border-1 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform opacity-100 translate-y-0 hover:shadow-xl hover:bg-blue-50 hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
          >
            <Award className="text-indigo-600 w-5 h-5 mt-1 shrink-0" />
            <p className="text-gray-800 text-sm font-medium">{achievement}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyAchievements;
