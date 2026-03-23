"use client";

import { motion } from "framer-motion";
import { navLinks } from "@/lib/data";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-background border-l border-border z-50 flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        <div className="flex justify-between items-center p-6 border-b border-border">
          <div className="flex flex-col leading-tight">
            <span className="text-[18px] font-extrabold text-white">THE END</span>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-text-secondary uppercase">INFOTECH</span>
          </div>
          <button onClick={onClose} className="text-text-secondary hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="15" y1="5" x2="5" y2="15" />
              <line x1="5" y1="5" x2="15" y2="15" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between text-[18px] font-medium text-text-secondary hover:text-white py-3 px-4 rounded-xl hover:bg-white/5 transition-all uppercase tracking-wide"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {link.label}
              {link.hasDropdown && <span className="text-text-muted text-sm">+</span>}
            </motion.a>
          ))}
        </nav>

        <div className="mt-auto p-6 border-t border-border">
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full pill-btn pill-btn-outline"
          >
            LET&apos;S TALK
          </a>
        </div>
      </motion.div>
    </>
  );
}
