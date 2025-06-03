"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-10 px-6 " id="contact">
      <motion.h2
        className="text-4xl font-bold text-teal-300 mb-6 mt-[-4vmin] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
        <div>
            <hr className="w-full mx-auto border-t-2 border-teal-300 mb-4 mt-6" />
          </div>
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 py-1 px-4 gap-10 text-left px-4 py-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left Side */}
        <motion.div className="space-y-6" variants={item}>
          <ContactItem
            Icon={Mail}
            label="Email"
            value="hemasagartg@gmail.com"
            href="mailto:hemasagartg@gmail.com"
          />
          <ContactItem
            Icon={Phone}
            label="Phone"
            value="+91 9353219313"
            href="tel:+919353219313"
          />
          <ContactItem
            Icon={MapPin}
            label="Location"
            value="Vidyanagara, Tumakuru, Karnataka - 572101"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div className="space-y-6" variants={item}>
          <ContactItem
            Icon={Linkedin}
            label="LinkedIn"
            value="linkedin.com/in/hemasagar-t-g"
            href="https://linkedin.com/in/hemasagar-t-g"
          />
          <ContactItem
            Icon={Github}
            label="GitHub"
            value="github.com/yourusername"
            href="https://github.com/yourusername"
          />
          <ContactItem
            Icon={Globe}
            label="Portfolio"
            value="your-portfolio.com"
            href="https://your-portfolio.com"
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
};

const ContactItem = ({ Icon, label, value, href }: ContactItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-2 p-4 rounded-lg hover:bg-sky-50 transition"
    >
      <Icon className="text-sky-600 w-6 h-6 flex-shrink-0" />
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
