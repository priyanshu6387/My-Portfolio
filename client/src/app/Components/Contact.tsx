"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe
} from "react-icons/fa";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section className="py-10 px-6" id="contact">
      <motion.h2
        className="text-4xl font-bold text-teal-300 mb-6 mt-[-4vmin] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
        <div>
          <hr className="w-3/4 mx-auto border-t-2 border-teal-300 mb-4 mt-6" />
        </div>
      </motion.h2>

      {/* Split contact into two parts */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 justify-center max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left Side */}
        <motion.div className="space-y-6" variants={item}>
          <ContactItem
            Icon={FaEnvelope}
            label="Email"
            value="hemasagartg@gmail.com"
            href="mailto:hemasagartg@gmail.com"
            color="#EA4335"
          />
          <ContactItem
            Icon={FaPhoneAlt}
            label="Phone"
            value="+91 9353219313"
            href="tel:+919353219313"
            color="#34A853"
          />
          <ContactItem
            Icon={FaMapMarkerAlt}
            label="Location"
            value="Vidyanagara, Tumakuru, Karnataka - 572101"
            color="#FABB05"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div className="space-y-6" variants={item}>
          <ContactItem
            Icon={FaLinkedin}
            label="LinkedIn"
            value="linkedin.com/in/hemasagar-t-g"
            href="https://linkedin.com/in/hemasagar-t-g"
            color="#0077B5"
          />
          <ContactItem
            Icon={FaGithub}
            label="GitHub"
            value="github.com/yourusername"
            href="https://github.com/yourusername"
            color="#181717"
          />
          <ContactItem
            Icon={FaGlobe}
            label="Portfolio"
            value="your-portfolio.com"
            href="https://your-portfolio.com"
            color="#0ea5e9"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

type ContactItemProps = {
  Icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  color?: string;
};

const ContactItem = ({
  Icon,
  label,
  value,
  href,
  color = "#0284c7",
}: ContactItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-4 p-4 rounded-lg hover:bg-sky-50 transition w-full max-w-md"
    >
      <Icon className="w-6 h-6 flex-shrink-0" style={{ color }} />
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline break-words"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-700">{value}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
