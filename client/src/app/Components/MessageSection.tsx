"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHome
} from "react-icons/fa";

const MessageSection = () => {
  return (
    <section className="py-10 px-6 max-w-full mx-auto" id="message">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-teal-300 mb-6 mt-[-4vmin] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Send a Message
        <div>
          <hr className="w-2/3 mx-auto border-t-2 border-teal-300 mb-4 mt-6" />
        </div>
      </motion.h2>

      {/* Form */}
      <motion.form
         className={`space-y-6 border-black border-1 max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform opacity-100 translate-y-0 hover:shadow-xl hover:bg-white hover:translate-y-[-2vmin] hover:shadow-xl hover:shadow-blue-200 hover:border-blue-100 hover:scale-103`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent (functionality to be added)");
        }}
      >
        <div>
          <label className="block font-medium mb-1">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Message:</label>
          <textarea
            placeholder="Your message here"
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-sky-500"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </motion.button>
      </motion.form>

      {/* Social Icons */}
      <motion.div
        className="mt-12 flex justify-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <SocialIcon
          href="https://github.com/yourusername"
          Icon={FaGithub}
          color="#181717"
          label="GitHub"
        />
        <SocialIcon
          href="https://linkedin.com/in/hemasagar-t-g"
          Icon={FaLinkedin}
          color="#0077B5"
          label="LinkedIn"
        />
        <SocialIcon
          href="https://instagram.com/yourprofile"
          Icon={FaInstagram}
          color="#E4405F"
          label="Instagram"
        />
        <SocialIcon
          href="/"
          Icon={FaHome}
          color="#0ea5e9"
          label="Home"
        />
      </motion.div>
    </section>
  );
};

type SocialIconProps = {
  href: string;
  Icon: React.ElementType;
  label: string;
  color: string;
};

const SocialIcon = ({ href, Icon, label, color }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, rotate: 5 }}
      title={label}
      style={{ color }}
      className="transition"
    >
      <Icon className="w-7 h-7" />
    </motion.a>
  );
};

export default MessageSection;
