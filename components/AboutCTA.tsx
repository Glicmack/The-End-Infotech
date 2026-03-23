"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "You are in a ", highlight: "RACE" },
  { text: "New day, new ", highlight: "WORLD" },
  { text: "Your crew of engineers to ", highlight: "WIN" },
];

export default function AboutCTA() {
  return (
    <section id="about" className="relative" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)' }}>
      <div className="container-rs text-center">
        <h2 className="text-[clamp(1.75rem,0.8rem+2.5vw,3.25rem)] font-light leading-[1.4] text-white mb-[clamp(1.5rem,1rem+1vw,3rem)]">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              className="block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
            >
              {line.text}
              <span className="font-extrabold text-accent">{line.highlight}</span>
            </motion.span>
          ))}
        </h2>

        <motion.div
          className="flex items-center justify-center mb-[clamp(2rem,1rem+2vw,4rem)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="#contact" className="btn btn-secondary inline-flex items-center h-[3.25rem]" style={{ borderColor: 'rgba(59,130,246,0.4)' }}>
            <span className="btn-text" style={{ borderColor: 'rgba(59,130,246,0.4)', color: '#3B82F6' }}>BOOK A CALL</span>
            <span className="btn-icon" style={{ borderColor: 'rgba(59,130,246,0.4)', color: '#3B82F6' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8H4M4 8L7 5M4 8L7 11" /></svg>
            </span>
          </a>
        </motion.div>

        <motion.p className="text-white/40 text-[clamp(0.875rem,0.7697rem+0.2193vw,1rem)] max-w-[550px] mx-auto leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
          We like projects that make sense, that move things forward, that are part of the momentum of a rapidly changing world.
        </motion.p>
      </div>
    </section>
  );
}
