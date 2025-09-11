"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Star, Users, GitBranch } from "lucide-react";
import { COMPANY_PROJECTS, PERSONAL_PROJECTS, Project } from "@/lib/data";

// Helper component for project cards
function ProjectCard({ project }: { project: Project }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -12, scale: 1.02 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col group relative overflow-hidden p-6 sm:p-8 hover:bg-white/90 dark:hover:bg-gray-800/90"
    >
      {/* Project Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-responsive-xl font-bold text-gray-800 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-300 font-serif">
            {project.title}
          </h3>
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-brand-500 to-primary-500 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ rotate: 180, scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
        </div>
        <p className="text-responsive-base text-gray-600 dark:text-gray-400 leading-relaxed font-serif">
          {project.description}
        </p>
      </div>

      {/* Highlights */}
      <div className="mb-8 flex-grow">
        <h4 className="text-responsive-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide flex items-center gap-2 font-serif">
          <div className="w-2 h-2 bg-brand-500 rounded-full" />
          Key Achievements
        </h4>
        <ul className="space-y-3">
          {project.highlights.map((highlight: string, idx: number) => (
            <motion.li 
              key={idx} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-brand-500 rounded-full mt-2 flex-shrink-0 group-hover:animate-glow" />
              <span className="text-responsive-sm text-gray-600 dark:text-gray-400 leading-relaxed font-serif">
                {highlight}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h4 className="text-responsive-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide flex items-center gap-2 font-serif">
          <div className="w-2 h-2 bg-primary-500 rounded-full" />
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string, idx: number) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="px-3 py-2 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-responsive-xs font-medium text-gray-700 dark:text-gray-300 rounded-xl border border-white/40 dark:border-gray-600/60 hover:border-brand-500/60 hover:bg-white/70 dark:hover:bg-gray-700/70 transition-all duration-300 group-hover:scale-105 shadow-sm font-serif"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto flex flex-col sm:flex-row gap-3 mt-6">
        {project.links.map((link: { label: string; href: string }, idx: number) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`group/btn flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-responsive-sm transition-all duration-300 shadow-lg hover:shadow-xl font-serif ${
              link.label === "Live"
                ? "btn-primary"
                : link.label === "GitHub"
                ? "bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 hover:shadow-gray-500/25"
                : "btn-secondary"
            }`}
          >
            {link.label === "GitHub" ? (
              <Github className="w-4 h-4" />
            ) : (
              <ExternalLink className="w-4 h-4" />
            )}
            {link.label}
            <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
          </motion.a>
        ))}
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

// Helper component for project sections
function ProjectSection({ 
  title, 
  description, 
  projects, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  projects: Project[]; 
  icon: React.ComponentType<{ className?: string }>;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-3 glass-sm rounded-full mb-6"
        >
          <Icon className="w-5 h-5 text-brand-500" />
          <span className="text-responsive-sm text-gray-600 dark:text-gray-400 font-medium font-serif">
            {title}
          </span>
        </motion.div>

        <h2 className="text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl font-black mb-6 gradient-text text-shadow font-serif">
          {title}
        </h2>
        <p className="text-responsive-lg sm:text-responsive-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-serif">
          {description}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Projects() {

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-brand-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary-400/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Company Projects Section */}
        <ProjectSection
          title="Professional Experience Projects"
          description="Projects developed during my professional career, demonstrating enterprise-level development skills and business impact."
          projects={COMPANY_PROJECTS}
          icon={Users}
        />

        {/* Personal Projects Section */}
        <ProjectSection
          title="Independent Projects"
          description="Personal passion projects and experiments that showcase my learning journey and technical exploration."
          projects={PERSONAL_PROJECTS}
          icon={GitBranch}
        />

        {/* Enhanced View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 lg:mt-24"
        >
          <motion.a
            href="https://github.com/priyanshu6387"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary text-responsive-base px-10 py-5 flex items-center gap-4 mx-auto w-fit shadow-2xl hover:shadow-gray-500/25"
          >
            <Github className="w-6 h-6" />
            <span>View More on GitHub</span>
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-sm rounded-2xl p-8 text-center hover:glass transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2 font-serif">25+</div>
              <div className="text-gray-600 dark:text-gray-400 font-serif">Projects Completed</div>
            </div>
            
            <div className="glass-sm rounded-2xl p-8 text-center hover:glass transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2 font-serif">100+</div>
              <div className="text-gray-600 dark:text-gray-400 font-serif">Happy Clients</div>
            </div>
            
            <div className="glass-sm rounded-2xl p-8 text-center hover:glass transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2 font-serif">500+</div>
              <div className="text-gray-600 dark:text-gray-400 font-serif">Git Commits</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
