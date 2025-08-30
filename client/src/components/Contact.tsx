"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, Github, Linkedin, Twitter, Instagram, ExternalLink, MessageCircle, MapPin, Phone } from "lucide-react";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:${PROFILE.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`;
    
    // Open mailto link
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getSocialIcon = (label: string) => {
    switch (label) {
      case "GitHub":
        return <Github className="w-5 h-5" />;
      case "LinkedIn":
        return <Linkedin className="w-5 h-5" />;
      case "X (Twitter)":
        return <Twitter className="w-5 h-5" />;
      case "Instagram":
        return <Instagram className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
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
            <MessageCircle className="w-5 h-5 text-brand-500" />
            <span className="text-responsive-sm text-gray-600 dark:text-gray-400 font-medium font-serif">
              Contact
            </span>
          </motion.div>

          <h2 className="text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl font-black mb-6 gradient-text text-shadow font-serif">
            Let&apos;s Connect
          </h2>
          <p className="text-responsive-lg sm:text-responsive-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-serif">
            I&apos;m always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card p-6 sm:p-8 md:p-10 relative overflow-hidden group">
              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-brand-500 to-primary-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-responsive-lg sm:text-responsive-xl font-bold text-gray-800 dark:text-white font-serif">
                    Send me a message
                  </h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-responsive-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 font-serif">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass-sm border border-white/30 dark:border-gray-600/50 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-300 hover:glass"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-responsive-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 font-serif">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass-sm border border-white/30 dark:border-gray-600/50 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-300 hover:glass"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-responsive-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 font-serif">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 glass-sm border border-white/30 dark:border-gray-600/50 rounded-xl text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-all duration-300 hover:glass resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full text-responsive-base py-3 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 shadow-2xl hover:shadow-brand-500/25 font-serif"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="card p-8 md:p-10 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-responsive-xl font-bold text-gray-800 dark:text-white font-serif">
                    Get in touch
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <motion.a
                    href={`mailto:${PROFILE.email}`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-4 p-5 glass-sm rounded-2xl hover:glass transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-brand-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white text-responsive-base font-serif">Email</p>
                      <p className="text-brand-600 dark:text-brand-400 text-responsive-sm font-serif">{PROFILE.email}</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={`https://wa.me/${PROFILE.phone.replace(/\s+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-4 p-5 glass-sm rounded-2xl hover:glass transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white text-responsive-base font-serif">Phone & WhatsApp</p>
                      <p className="text-green-600 dark:text-green-400 text-responsive-sm font-serif">{PROFILE.phone}</p>
                    </div>
                  </motion.a>

                  <div className="flex items-center gap-4 p-5 glass-sm rounded-2xl">
                    <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white text-responsive-base font-serif">Location</p>
                      <p className="text-emerald-600 dark:text-green-400 text-responsive-sm font-serif">{PROFILE.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="card p-8 md:p-10 relative overflow-hidden group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-responsive-xl font-bold text-gray-800 dark:text-white font-serif">
                    Follow me
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {PROFILE.socials.map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -4, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-4 p-5 glass-sm rounded-2xl hover:glass transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {getSocialIcon(social.label)}
                      </div>
                      <span className="text-responsive-sm font-medium text-gray-700 dark:text-gray-300 text-center font-serif">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20 lg:mt-24"
        >
          <div className="card p-10 max-w-4xl mx-auto relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            
            <div className="relative z-10">
              <h3 className="text-responsive-2xl font-bold text-gray-800 dark:text-white mb-6">
                Ready to start a project?
              </h3>
              <p className="text-responsive-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how we can work together to bring your ideas to life.
              </p>
              <motion.a
                href={`mailto:${PROFILE.email}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent text-responsive-base px-10 py-5 inline-flex items-center gap-4 shadow-2xl hover:shadow-purple-500/25"
              >
                <Mail className="w-6 h-6" />
                <span>Start a conversation</span>
                <Send className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
