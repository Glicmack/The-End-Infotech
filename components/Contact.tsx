"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)' }}>
      <div className="container-rs text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-white/40 text-[0.8125rem] uppercase tracking-[0.15em] mb-4">Interested in cooperation?</p>
          <h2 className="text-white text-[clamp(2.25rem,1.2961rem+3.2895vw,4rem)] font-bold mb-8 leading-tight">
            Let&apos;s create something <span className="text-gradient">amazing</span>
          </h2>
          <div className="flex items-center justify-center mb-[clamp(2rem,1rem+2vw,4rem)]">
            <a href="mailto:office@theendinfotech.com" className="btn btn-primary inline-flex items-center h-[3.25rem]">
              <span className="btn-text">DISCUSS THE PROJECT</span>
              <span className="btn-icon" style={{ background: 'white', borderColor: 'white', color: '#020202' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" /></svg>
              </span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <span className="text-white/70 text-[0.875rem]">office@theendinfotech.com</span>
            <span className="text-white/70 text-[0.875rem]">+91 89808 85714</span>
            <span className="text-white/70 text-[0.875rem]">Surat, Gujarat</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
