"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Code, Zap, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 md:py-20 border-t border-white/10 dark:border-gray-800/50 bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-brand-400/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-400/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-xl font-black text-white">PP</span>
              </div>
              <h3 className="text-xl font-bold gradient-text">Priyanshu Patel</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-responsive-sm leading-relaxed">
              General Manager & Technical Head at Triostack Technologies. 
              Leading innovation and building scalable solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" }
              ].map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 font-medium text-left hover:translate-x-2 group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">Built With</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: <Code className="w-4 h-4" />, label: "Next.js & TypeScript" },
                { icon: <Zap className="w-4 h-4" />, label: "Tailwind CSS" },
                { icon: <Sparkles className="w-4 h-4" />, label: "Framer Motion" }
              ].map((tech, idx) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-end gap-2 text-gray-600 dark:text-gray-400 text-responsive-sm"
                >
                  <span>{tech.label}</span>
                  <span className="text-brand-500">{tech.icon}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-responsive-sm"
          >
            <span>© {currentYear} Priyanshu Patel. Made with</span>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>in India</span>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 glass-sm rounded-xl text-gray-600 dark:text-gray-400 hover:glass hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-300 group"
          >
            <span className="text-responsive-sm font-medium">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/5 dark:border-gray-800/30 text-center"
        >
          <p className="text-responsive-xs text-gray-500 dark:text-gray-500">
            Crafted with modern web technologies for the best user experience
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
