"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials, clientLogos } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)' }}>
      <div className="container-rs">
        {/* Heading */}
        <motion.h2
          className="caption-s text-white/[0.15] mb-[clamp(1.5rem,-0.3947rem+3.9474vw,3.75rem)]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          JOIN THE BEST
        </motion.h2>

        {/* Client logos marquee - circles 5rem */}
        <div className="relative overflow-hidden mb-[clamp(2rem,-0.5263rem+5.2632vw,5rem)]">
          <div className="marquee-track flex items-center gap-6 whitespace-nowrap w-max">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="w-[5rem] h-[5rem] lg:w-[7.5rem] lg:h-[7.5rem] rounded-full overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/5 flex items-center justify-center flex-shrink-0"
              >
                <span className="text-white/60 font-display text-[1.25rem] lg:text-[1.75rem] font-bold tracking-wider">
                  {logo.initial}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col lg:flex-row gap-[clamp(2rem,1rem+2vw,5rem)]"
          >
            {/* Left: project visual */}
            <div className="lg:w-[45%]">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
                <img
                  src={`/img/projects/project-${current * 2 + 1}.webp`}
                  alt={testimonials[current].company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white/80 text-[1.75rem] font-semibold drop-shadow-lg">
                    {testimonials[current].company}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: quote */}
            <div className="lg:w-[55%] flex flex-col justify-between">
              <div>
                {/* Quote mark */}
                <svg className="w-12 h-12 mb-6" viewBox="0 0 24 24" fill="#E70000">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>

                <blockquote className="text-white/75 text-[clamp(1rem,0.7895rem+0.4386vw,1.25rem)] leading-[1.7] mb-6">
                  {testimonials[current].quote}
                </blockquote>

                <div className="mb-8">
                  <span className="text-white font-semibold">{testimonials[current].name}</span>
                  <span className="text-white/40 mx-2">|</span>
                  <span className="text-white/70 text-[0.875rem]">
                    {testimonials[current].role}, {testimonials[current].company}
                  </span>
                </div>
              </div>

              {/* 400+ counter */}
              <div>
                <span className="caption-s text-white/[0.12] block">400+</span>
                <div className="text-white/40 text-[0.75rem] uppercase tracking-[0.2em] mt-1">
                  Satisfied Clients
                </div>
                <a href="#" className="inline-flex items-center gap-2 text-white/50 text-[0.8125rem] mt-4 link-hover hover:text-white transition-colors">
                  Read the review
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9L9 3M9 3H4M9 3v5" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center gap-3 mt-[clamp(1.5rem,1rem+1vw,3rem)]">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300 cursor-pointer" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 4L6 9L11 14" /></svg>
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-all duration-300 cursor-pointer" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 4L12 9L7 14" /></svg>
          </button>
          <div className="flex items-center gap-3 ml-3">
            <span className="text-white font-bold text-lg tabular-nums">{String(current + 1).padStart(2, "0")}</span>
            <div className="w-14 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <motion.div className="absolute inset-y-0 left-0 bg-white rounded-full" initial={false} animate={{ width: `${((current + 1) / testimonials.length) * 100}%` }} transition={{ duration: 0.5 }} />
            </div>
            <span className="text-white/40 font-medium text-lg tabular-nums">{String(testimonials.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
