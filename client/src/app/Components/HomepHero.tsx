"use client";
// components/Hero.tsx
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/home-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content on top of the video */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center h-full">
        {/* Heading animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white"
        >
          Hi.. I'm <span className="text-indigo-400"></span>
          Priyanshu Patel 
        </motion.h1>

        {/* Subheading animation */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-white"
        >
          Fullstack Developer | Open Source Contributor 
        </motion.p>

        {/* Primary Button */}
        <motion.a
          href="#get-started"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-block px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition mb-4"
        >
          Get Started
        </motion.a>

        {/* Secondary Button */}
        <motion.a
          href="#learn-more"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-indigo-900 transition"
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
}
