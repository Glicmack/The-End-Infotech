"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroWords } from "@/lib/data";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % heroWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="h-screen relative overflow-hidden" style={{ backgroundColor: '#020202' }}>
      <div className="container-rs h-full flex flex-col pt-[4.5rem]">
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center relative">
          {/* Massive headline - TwidGrotesk */}
          <motion.h1
            className="font-display text-white select-none leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 13.4vw, 14rem)' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            >
              SAAS. APP.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.33, 1, 0.68, 1] }}
            >
              WEB SOLUTION
            </motion.span>
          </motion.h1>

          {/* Portfolio preview - top right */}
          <motion.div
            className="absolute top-0 right-0 hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <div
              className="bg-white rounded-lg overflow-hidden shadow-2xl"
              style={{ width: '15.43vw', aspectRatio: '220/140' }}
            >
              <div className="w-full h-full relative">
                <img
                  src="/img/banners/hero-preview.webp"
                  alt="Portfolio preview"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="relative p-4 flex flex-col justify-end h-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={wordIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {heroWords.map((word, i) => (
                        <div
                          key={word}
                          className={`text-[13px] leading-snug transition-all duration-300 ${
                            i === wordIndex
                              ? "text-gray-900 font-semibold text-[15px]"
                              : "text-gray-400"
                          }`}
                        >
                          {word}
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pb-12">
          {/* Trust badge */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Overlapping avatar circles */}
            <div className="flex items-center">
              {[
                { bg: "bg-teal-400", text: "\u2605" },
                { bg: "bg-pink-200", text: "\u25C9" },
                { bg: "bg-gray-600", text: "AI" },
                { bg: "bg-gray-800", text: "C" },
              ].map((avatar, i) => (
                <motion.div
                  key={i}
                  className={`w-[3.25rem] h-[3.25rem] rounded-full ${avatar.bg} flex items-center justify-center text-[11px] font-bold text-white border-[3px] border-[#020202]`}
                  style={{ marginLeft: i > 0 ? '-1.625rem' : 0, zIndex: 4 - i }}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                >
                  {avatar.text}
                </motion.div>
              ))}
            </div>

            {/* Stars + text */}
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex items-center h-[1.5rem]">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-[1.5rem] h-[1.5rem]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.06 }}
                  >
                    <svg viewBox="0 0 24 24" fill="#E70000" className="w-full h-full">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </motion.div>
                ))}
              </div>
              <span className="text-white/60 text-[0.875rem]">Trusted by 150+ clients</span>
            </div>
          </motion.div>

          {/* Description + CTA - right aligned */}
          <motion.div
            className="max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
          >
            <p className="text-white/75 text-[clamp(1rem,0.7895rem+0.4386vw,1.25rem)] leading-[1.6] mb-[2.5rem]">
              We develop online stores, CRM systems, SaaS solutions, and app platforms — integrating AI into processes and business solutions.
            </p>
            <a href="#portfolio" className="btn btn-primary inline-flex items-center h-[3.25rem]">
              <span className="btn-text">VIEW PORTFOLIO</span>
              <span className="btn-icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
