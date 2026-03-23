"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-80px 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100]" style={{ height: '4.5rem' }}>
        <motion.div
          className="fixed top-0 left-0 w-full z-[100]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`container-rs transition-all duration-300 ${
            isScrolled ? "mt-[2px]" : ""
          }`}>
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "header-scrolled h-[4.5rem]"
                : "h-[4.5rem]"
            }`}>
              {/* Logo */}
              <a href="#hero" className="block w-[10rem] flex-shrink-0">
                <div className="flex flex-col leading-tight">
                  <span className="text-[22px] font-extrabold tracking-tight text-white">
                    <span className="text-red">.</span>THE END
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.3em] text-white/60 uppercase ml-[6px]">
                    INFOTECH
                  </span>
                </div>
              </a>

              {/* Nav links */}
              <nav className="hidden lg:flex items-center gap-[3.125vw] mx-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-[0.875rem] leading-[1.125rem] font-semibold uppercase text-white transition-all duration-300 link-hover ${
                      activeSection === link.href.replace("#", "")
                        ? "underline decoration-current"
                        : ""
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      {link.label}
                      {link.hasDropdown && (
                        <span className="relative w-[1.125rem] h-[1.125rem] inline-flex items-center justify-center">
                          <span className="absolute w-[67%] h-[2px] bg-current rotate-90" />
                          <span className="absolute w-[67%] h-[2px] bg-current" />
                        </span>
                      )}
                    </span>
                  </a>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden lg:block flex-shrink-0">
                <a href="#contact" className="btn btn-primary inline-flex items-center h-[3.25rem]">
                  <span className="btn-text">LET&apos;S TALK</span>
                  <span className="btn-icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 9H5M5 9L8.5 5.5M5 9L8.5 12.5" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Mobile burger */}
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="16" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
