"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)' }}>
      <div className="container-rs">
        {/* Caption heading */}
        <motion.h2
          className="caption-s text-white/[0.15] mb-[clamp(2rem,-0.5263rem+5.2632vw,5rem)]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          SERVICES
        </motion.h2>

        {/* Service list */}
        <div>
          <div className="h-separator" />
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.33, 1, 0.68, 1] }}
            >
              <a
                href="#contact"
                className="service-item group flex items-center justify-between py-[clamp(1.25rem,0.8289rem+0.8772vw,1.75rem)] cursor-pointer"
              >
                <div className="flex items-center gap-[clamp(1rem,0.5rem+1vw,2rem)]">
                  {/* Arrow icon */}
                  <span className="text-white/20 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 5L15 15M15 15H7M15 15V7" />
                    </svg>
                  </span>

                  {/* Title in display font */}
                  <h3 className="font-display text-white/30 text-[clamp(1.25rem,0.8289rem+0.8772vw,2.25rem)] group-hover:text-white transition-all duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Number */}
                <span className="font-display text-white/10 text-[clamp(0.875rem,0.5rem+0.8vw,1.25rem)] tracking-[0.1em] group-hover:text-white/40 transition-colors duration-300">
                  {String(service.id).padStart(2, "0")}
                </span>
              </a>
              <div className="h-separator" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
