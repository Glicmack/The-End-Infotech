"use client";

import { motion } from "framer-motion";

export default function AISection() {
  return (
    <section className="relative" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)' }}>
      <div className="container-rs">
        <div className="flex flex-col lg:flex-row gap-[clamp(2rem,1rem+3vw,5rem)] items-center">
          <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}>
            <div className="aspect-square max-w-[480px] mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#020202]" />
              <div className="absolute inset-[12%] rounded-full bg-gradient-to-t from-[#151515] via-[#111] to-[#0a0a0a] shadow-inner" />
              <motion.div className="absolute top-[38%] left-[25%] w-[50%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/[0.03] font-display" style={{ fontSize: 'clamp(6rem,5rem+5vw,12rem)' }}>AI</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}>
            <h3 className="text-white/40 text-[0.8125rem] uppercase tracking-[0.2em] mb-4 font-semibold">AI Tools</h3>
            <h2 className="text-white text-[clamp(1.5rem,0.8684rem+1.3158vw,2.5rem)] font-medium leading-[1.3] mb-4">
              Content Writing. Image Generation. Optimization.
            </h2>
            <p className="text-white/70 text-[clamp(1rem,0.7895rem+0.4386vw,1.25rem)] leading-[1.6] mb-8">
              More Solutions for the Uniqueness of Your Business
            </p>
            <a href="#contact" className="btn btn-primary inline-flex items-center h-[3.25rem]">
              <span className="btn-text">DISCUSS THE PROJECT</span>
              <span className="btn-icon" style={{ background: 'white', borderColor: 'white', color: '#020202' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" /></svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
