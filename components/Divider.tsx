"use client";

import { motion } from "framer-motion";

interface DividerProps {
  lines: string[];
  cta?: { label: string; href: string };
}

export default function Divider({ lines, cta }: DividerProps) {
  return (
    <section className="relative overflow-hidden" style={{ marginTop: 'clamp(3.75rem,-1.5132rem+10.9649vw,10rem)' }}>
      <div className="container-rs">
        {lines.map((line, i) => (
          <motion.h2
            key={i}
            className="caption-m text-white/[0.12] select-none"
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
          >
            {line}
          </motion.h2>
        ))}
        {cta && (
          <motion.div className="mt-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <a href={cta.href} className="btn btn-secondary inline-flex items-center h-[3.25rem]">
              <span className="btn-text">{cta.label.toUpperCase()}</span>
              <span className="btn-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" /></svg>
              </span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
