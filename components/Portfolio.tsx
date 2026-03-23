"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] as const },
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ marginTop: 'clamp(2rem,-0.5263rem+5.2632vw,5rem)' }}>
      <div className="container-rs">
        {/* 3-column grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 'clamp(1.5rem,0.5rem+2vw,2.5rem)' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group cursor-pointer portfolio-card"
            >
              {/* Image area */}
              <div className="relative overflow-hidden rounded-xl" style={{ aspectRatio: '480/576' }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} transition-transform duration-700 ease-out group-hover:scale-[1.05]`} />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                {/* Project name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-[clamp(1.25rem,1rem+0.5vw,1.75rem)] font-semibold drop-shadow-lg">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Project info */}
              <div className="project-info mt-3">
                <div className="project-info-left">
                  <h3 className="font-display text-white text-[0.875rem] tracking-wide">
                    {project.title.toUpperCase()}
                  </h3>
                </div>
                <div className="project-info-right">
                  <span className="text-white/75 text-[0.875rem] font-medium">{project.category}</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-white/40 text-[0.8125rem]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More projects */}
        <motion.div
          className="mt-[clamp(2rem,-0.5263rem+5.2632vw,5rem)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="btn btn-secondary inline-flex items-center h-[3.25rem]">
            <span className="btn-text">MORE PROJECTS</span>
            <span className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
