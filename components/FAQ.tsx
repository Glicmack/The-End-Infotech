"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/lib/data";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="relative" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)' }}>
      <div className="container-rs">
        <div className="flex flex-col lg:flex-row gap-[clamp(2rem,1rem+3vw,5rem)]">
          <div className="lg:w-[30%]">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-[6rem]">
              <div className="w-14 h-14 rounded-2xl bg-[#0F0F0F] border border-white/10 flex items-center justify-center mb-8">
                <span className="text-white font-extrabold text-[14px]"><span className="text-red">.</span>TE</span>
              </div>
              <h2 className="text-white text-[clamp(2rem,0.7368rem+2.6316vw,3.25rem)] font-light leading-tight mb-[clamp(1.5rem,1rem+1vw,3rem)]">Let&apos;s talk</h2>
              <a href="#contact" className="btn btn-secondary inline-flex items-center h-[3.25rem]">
                <span className="btn-text">BOOK A CALL</span>
                <span className="btn-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" /></svg>
                </span>
              </a>
            </motion.div>
          </div>

          <div className="lg:w-[70%]">
            <motion.h2 className="caption-s text-white/[0.15] mb-[clamp(1.5rem,1rem+1vw,3rem)]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              FREQUENTLY ASKED QUESTIONS AND ANSWERS
            </motion.h2>
            <div>
              {faqItems.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="border-b border-white/[0.06]">
                  <button onClick={() => toggle(item.id)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer group">
                    <span className={`text-[clamp(0.875rem,0.7697rem+0.2193vw,1rem)] font-medium pr-6 transition-colors duration-300 ${openId === item.id ? "text-white" : "text-white/40 group-hover:text-white"}`}>{item.question}</span>
                    <motion.span animate={{ rotate: openId === item.id ? 180 : 0 }} transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }} className={`flex-shrink-0 transition-colors duration-300 ${openId === item.id ? "text-white" : "text-white/30"}`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6L8 10L12 6" /></svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openId === item.id && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }} className="overflow-hidden">
                        <div className="pb-5 text-white/70 text-[clamp(0.875rem,0.7697rem+0.2193vw,1rem)] leading-[1.7] max-w-[600px]">{item.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
