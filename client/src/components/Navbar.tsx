"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`glass rounded-3xl px-6 sm:px-8 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "shadow-2xl" : "shadow-xl"
        }`}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer select-none group"
            onClick={() => scrollToSection("#hero")}
          >
            <span className="relative z-10 text-lg sm:text-xl lg:text-2xl font-serif font-bold tracking-wide bg-gradient-to-r from-brand-600 via-primary-600 to-purple-600 bg-clip-text text-transparent">
              Priyanshu Patel
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-primary-500/10 rounded-xl blur-lg"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="nav-link text-responsive-sm font-medium px-4 py-2 rounded-xl hover:bg-white/10 dark:hover:bg-gray-800/30 transition-all duration-300 relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-primary-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
            <div className="ml-4 pl-4 border-l border-white/20 dark:border-gray-700/30">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 glass-sm rounded-2xl flex items-center justify-center focus-ring hover:glass transition-all duration-300"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4"
            >
              <div className="glass rounded-3xl p-6">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left nav-link text-responsive-base py-4 px-6 rounded-2xl hover:bg-white/10 dark:hover:bg-gray-800/30 transition-all duration-300 font-medium group relative"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-primary-500/10 rounded-2xl opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
