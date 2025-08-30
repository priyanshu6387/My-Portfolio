"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, MessageCircle, MapPin, Clock } from "lucide-react";
import { PROFILE } from "@/lib/data";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Priyanshu-Patel-Resume.pdf";
    link.download = "Priyanshu-Patel-Resume.pdf";
    link.click();
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-40">
      {/* Enhanced Floating Gradient Blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-brand-400/20 via-primary-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-gradient-to-r from-primary-400/15 via-brand-400/15 to-indigo-400/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-brand-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 px-6 py-3 glass-sm rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
            <span className="text-responsive-lg text-gray-600 dark:text-gray-400 font-medium">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-responsive-5xl sm:text-responsive-6xl lg:text-responsive-7xl xl:text-responsive-8xl font-black mb-6 gradient-text leading-tight tracking-tight text-shadow-lg"
          >
            {PROFILE.name}
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-responsive-xl sm:text-responsive-2xl lg:text-responsive-3xl font-bold text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            {PROFILE.tagline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-responsive-lg sm:text-responsive-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Leading technical innovation and development teams at Triostack Technologies. 
            Fresh perspective with strong technical foundation and leadership potential.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#projects")}
              className="btn-primary text-responsive-base px-8 py-4 sm:px-10 sm:py-4 flex items-center gap-3 group shadow-2xl hover:shadow-brand-500/25"
            >
              <span>View Projects</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadResume}
              className="btn-secondary text-responsive-base px-8 py-4 sm:px-10 sm:py-4 flex items-center gap-3 group shadow-2xl"
            >
              <span>Download Resume</span>
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="btn-accent text-responsive-base px-8 py-4 sm:px-10 sm:py-4 flex items-center gap-3 group shadow-2xl hover:shadow-purple-500/25"
            >
              <span>Let&apos;s Talk</span>
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            </motion.button>
          </motion.div>

          {/* Enhanced Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center justify-center text-responsive-sm mb-8"
          >
            <div className="flex items-center gap-3 p-4 glass-sm rounded-2xl hover:glass transition-all duration-300 group">
              <div className="w-3 h-3 bg-brand-500 rounded-full animate-pulse group-hover:animate-glow" />
              <MapPin className="w-4 h-4 text-brand-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{PROFILE.location}</span>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
          >
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="glass-sm rounded-2xl p-6 text-center hover:glass transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Technologies</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center hover:border-brand-500 dark:hover:border-brand-400 transition-colors duration-300"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 group-hover:bg-brand-500 dark:group-hover:bg-brand-400 transition-colors duration-300"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
