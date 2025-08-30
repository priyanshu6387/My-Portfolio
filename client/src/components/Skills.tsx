"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { Brain, Zap, Users, Target, TrendingUp, BookOpen } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };



  const skillIcons = {
    "Frontend Development": <Brain className="w-6 h-6" />,
    "Backend Development": <Zap className="w-6 h-6" />,
    "DevOps & Tools": <Target className="w-6 h-6" />,
    "Leadership & Soft Skills": <Users className="w-6 h-6" />
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-brand-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 glass-sm rounded-full mb-6"
          >
            <Brain className="w-5 h-5 text-brand-500" />
            <span className="text-responsive-sm text-gray-600 dark:text-gray-400 font-medium">
              Expertise
            </span>
          </motion.div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl font-black mb-6 gradient-text text-shadow">
            Skills & Expertise
          </h2>
          <p className="text-responsive-lg sm:text-responsive-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A comprehensive collection of technical skills, leadership abilities, and tools 
            I&apos;ve mastered through education and hands-on experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16"
        >
          {SKILLS.map((skillGroup) => (
            <motion.div
              key={skillGroup.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card card-hover p-6 sm:p-8 relative overflow-hidden group"
            >
              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              {/* Group Header */}
              <div className="text-center mb-8 relative z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-brand-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skillIcons[skillGroup.title as keyof typeof skillIcons] || <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
                </div>
                <h3 className="text-responsive-lg font-bold text-gray-800 dark:text-white mb-2">
                  {skillGroup.title}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-brand-500 to-primary-500 mx-auto rounded-full" />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-3 relative z-10">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 glass-sm text-responsive-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl border border-white/30 dark:border-gray-600/50 text-center transition-all duration-300 hover:glass hover:border-brand-500/50 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-sm rounded-2xl p-8 hover:glass transition-all duration-300">
              <h3 className="text-responsive-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-brand-500" />
                Technical Proficiency
              </h3>
              <div className="space-y-4">
                {["Frontend", "Backend", "DevOps", "Database"].map((skill, idx) => (
                  <div key={skill} className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{skill}</span>
                      <span>{85 + idx * 5}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-brand-500 to-primary-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + idx * 5}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-sm rounded-2xl p-8 hover:glass transition-all duration-300">
              <h3 className="text-responsive-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary-500" />
                Leadership Skills
              </h3>
              <div className="space-y-4">
                {["Team Management", "Communication", "Problem Solving", "Strategic Planning"].map((skill, idx) => (
                  <div key={skill} className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>{skill}</span>
                      <span>{90 + idx * 3}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${90 + idx * 3}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card p-10 max-w-4xl mx-auto relative overflow-hidden group">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-primary-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-responsive-2xl font-bold text-gray-800 dark:text-white mb-6">
                Always Learning & Growing
              </h3>
              <p className="text-responsive-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                I&apos;m constantly exploring new technologies and methodologies to stay 
                current with industry best practices and emerging trends.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { text: "Continuous Learning", color: "from-brand-500 to-primary-600" },
                  { text: "Problem Solving", color: "from-emerald-500 to-teal-600" },
                  { text: "Team Leadership", color: "from-purple-500 to-pink-600" },
                  { text: "Innovation", color: "from-orange-500 to-red-600" }
                ].map((item, idx) => (
                  <motion.span
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-6 py-3 bg-gradient-to-r ${item.color} text-white text-responsive-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-default`}
                  >
                    {item.text}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
