"use client";

import { useTheme } from "next-themes";
import { Moon, Sun, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-12 h-12 rounded-2xl glass-sm flex items-center justify-center transition-all duration-300 hover:glass focus-ring group"
      aria-label="Toggle theme"
    >
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-primary-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Icon Container */}
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300"
      >
        {theme === "dark" ? (
          <div className="relative">
            <Sun className="w-6 h-6" />
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        ) : (
          <div className="relative">
            <Moon className="w-6 h-6" />
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        )}
      </motion.div>

      {/* Sparkle Effect on Hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Sparkles className="absolute -top-1 -left-1 w-3 h-3 text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Sparkles className="absolute -bottom-1 -right-1 w-3 h-3 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.button>
  );
}
