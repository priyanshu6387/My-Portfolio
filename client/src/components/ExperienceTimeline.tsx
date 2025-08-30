"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

export default function ExperienceTimeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
            <Briefcase className="w-5 h-5 text-brand-500" />
            <span className="text-responsive-sm text-gray-600 dark:text-gray-400 font-medium font-serif">
              Experience
            </span>
          </motion.div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl font-black mb-6 gradient-text text-shadow font-serif">
            Work Experience
          </h2>
          <p className="text-responsive-lg sm:text-responsive-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-serif">
            My professional journey showcasing leadership, technical expertise, and 
            growth in software development and team management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-500 via-primary-500 to-purple-500 transform -translate-x-1/2 rounded-full shadow-lg" />
          
          {/* Timeline Glow Effect */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-8 bg-gradient-to-b from-brand-500/20 via-primary-500/20 to-purple-500/20 transform -translate-x-1/2 rounded-full blur-xl" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={itemVariants}
              className={`relative flex items-start gap-6 md:gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Enhanced Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r from-brand-500 to-primary-600 rounded-full border-4 border-white dark:border-gray-900 transform -translate-x-1/2 mt-2 z-10 shadow-lg group-hover:animate-glow" />
              
              {/* Timeline Dot Glow */}
              <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-gradient-to-r from-brand-500/30 to-primary-600/30 rounded-full transform -translate-x-1/2 mt-2 blur-xl" />

              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card card-hover p-8 md:p-10 relative overflow-hidden group"
                >
                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Header */}
                  <div className="mb-8 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-responsive-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300 font-serif">
                          {exp.role}
                        </h3>
                        <p className="text-responsive-lg font-semibold text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-2 font-serif">
                          <Briefcase className="w-5 h-5" />
                          {exp.company}
                        </p>
                      </div>
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-r from-brand-500 to-primary-500 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ rotate: 180, scale: 1.1 }}
                      >
                        <TrendingUp className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-responsive-sm text-gray-500 dark:text-gray-400 font-serif">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium font-serif">
                          {exp.start} - {exp.end}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="mb-8 relative z-10">
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-brand-500 to-primary-500 rounded-full mt-2 flex-shrink-0 group-hover:animate-glow" />
                          <span className="text-responsive-base text-gray-600 dark:text-gray-400 leading-relaxed font-serif">
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="relative z-10">
                    <h4 className="text-responsive-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide flex items-center gap-2 font-serif">
                      <div className="w-2 h-2 bg-brand-500 rounded-full" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.tech.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="px-4 py-2 glass-sm text-responsive-xs font-medium text-gray-700 dark:text-gray-300 rounded-full border border-white/30 dark:border-gray-600/50 hover:border-brand-500/50 hover:glass transition-all duration-300 font-serif"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 lg:mt-24"
        >
          <motion.a
            href="/Priyanshu-Patel-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-responsive-base px-10 py-5 flex items-center gap-4 mx-auto w-fit shadow-2xl hover:shadow-brand-500/25 font-serif"
          >
            <Briefcase className="w-6 h-6" />
            <span>View Full Resume</span>
            <TrendingUp className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2 font-serif">5+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-serif">Years Experience</div>
            </div>
            
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2 font-serif">3</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-serif">Companies</div>
            </div>
            
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2 font-serif">2</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-serif">Locations</div>
            </div>
            
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold gradient-text mb-2 font-serif">2020</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-serif">Started Career</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
