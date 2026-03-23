"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/data";

const tiers = [
  { key: "basic" as const, label: "SINGLE" },
  { key: "intermediate" as const, label: "MIDDLE" },
  { key: "enterprise" as const, label: "ENTERPRISE" },
];

export default function Technologies() {
  return (
    <section id="technologies" className="relative" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)' }}>
      <div className="container-rs">
        <motion.h2
          className="caption-s text-white/[0.15] mb-[clamp(1rem,0.5rem+1vw,1.5rem)]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          OUR TECHNOLOGIES
        </motion.h2>

        <motion.p
          className="text-white/40 text-[clamp(0.875rem,0.7697rem+0.2193vw,1rem)] mb-[clamp(2rem,-0.5263rem+5.2632vw,5rem)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A personalized approach to every project — for the best results.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(2rem,1rem+2vw,5rem)]">
          {tiers.map((tier, ti) => {
            const techs = technologies.filter((t) => t.tier === tier.key);
            return (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: ti * 0.15, ease: [0.33, 1, 0.68, 1] }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
                    <path d="M3 5L7 9L11 5" />
                  </svg>
                  <h3 className="font-display text-white/40 text-[0.8125rem] tracking-[0.2em]">{tier.label}</h3>
                </div>
                <div>
                  {techs.map((tech, idx) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-4 py-3 border-b border-white/[0.06] group cursor-default"
                      whileHover={{ x: 4 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ti * 0.1 + idx * 0.04 }}
                    >
                      {tech.icon.startsWith("/") ? (
                        <img src={tech.icon} alt={tech.name} className="w-7 h-7 group-hover:scale-110 transition-transform duration-300 object-contain" />
                      ) : (
                        <span className="text-xl w-7 group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                      )}
                      <span className="text-white/70 text-[0.9375rem] font-medium group-hover:text-white transition-colors duration-300">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="mt-[clamp(2rem,-0.5263rem+5.2632vw,5rem)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <a href="#contact" className="btn btn-secondary inline-flex items-center h-[3.25rem]">
            <span className="btn-text">MORE TECHNOLOGIES</span>
            <span className="btn-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" /></svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
