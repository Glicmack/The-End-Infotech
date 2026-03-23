"use client";

import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="relative" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)' }}>
      <div className="container-rs text-center">
        <motion.h2
          className="caption-m text-white/[0.12] mb-[clamp(1.5rem,1rem+1vw,3rem)] select-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          LET&apos;S MOVE
          <br />
          THE WORLD
          <br />
          TOGETHER
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <a href="#contact" className="btn btn-secondary inline-flex items-center h-[3.25rem]">
            <span className="btn-text">BECOME A CLIENT</span>
            <span className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" /></svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
