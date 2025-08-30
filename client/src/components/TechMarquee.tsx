"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Zap, Sparkles } from "lucide-react";

const technologies = [
  "Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "MongoDB",
  "PostgreSQL", "Docker", "GitHub Actions", "Python", "FastAPI", "JWT",
  "Express", "Framer Motion", "Jest", "Playwright", "Nginx", "REST API"
];

export default function TechMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section-padding overflow-hidden bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
            <Code className="w-5 h-5 text-brand-500" />
            <span className="text-responsive-sm text-gray-600 dark:text-gray-400 font-medium">
              Tech Stack
            </span>
          </motion.div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl font-black mb-6 gradient-text text-shadow">
            Technologies I Work With
          </h2>
          <p className="text-responsive-lg sm:text-responsive-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive stack of modern technologies for building scalable applications
          </p>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            animate={{ x: isPaused ? 0 : "-50%" }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {/* First set of technologies */}
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 px-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -8, rotate: 2 }}
                  className="group px-6 py-4 glass-sm text-responsive-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap transition-all duration-300 hover:glass hover:shadow-2xl hover:border-brand-500/50 cursor-default relative overflow-hidden"
                >
                  <span className="relative z-10">{tech}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-primary-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <Zap className="absolute -top-1 -right-1 w-3 h-3 text-brand-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 px-4" aria-hidden="true">
              {technologies.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="px-6 py-4 glass-sm text-responsive-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 lg:w-32 bg-gradient-to-r from-slate-50 dark:from-slate-800 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-24 lg:w-32 bg-gradient-to-l from-slate-50 dark:from-slate-800 to-transparent pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="inline-flex items-center gap-4 p-6 glass rounded-2xl hover:glass-lg transition-all duration-300 group">
            <div className="w-3 h-3 bg-brand-500 rounded-full animate-pulse group-hover:animate-glow" />
            <Sparkles className="w-5 h-5 text-brand-500" />
            <p className="text-responsive-base text-gray-600 dark:text-gray-400 font-medium">
              Hover to pause • {technologies.length} technologies mastered
            </p>
          </div>
        </motion.div>

        {/* Additional Tech Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">React, Next.js, TypeScript</p>
            </div>
            
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Backend</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Node.js, Python, FastAPI</p>
            </div>
            
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">DevOps</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Docker, CI/CD, Cloud</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
