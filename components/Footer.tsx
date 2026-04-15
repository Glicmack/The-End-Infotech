"use client";

import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mt-auto" style={{ marginTop: 'clamp(6.25rem, 3.2895rem + 8.7719vw, 12.5rem)', backgroundColor: '#020202' }}>
      <div className="container-rs py-[clamp(3rem,2rem+2vw,5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,1rem+2vw,3rem)]">
          {/* Portfolio links */}
          <div>
            <h4 className="font-display text-white/30 text-[0.75rem] tracking-[0.2em] mb-5">PORTFOLIO</h4>
            <ul className="space-y-2.5">
              {footerLinks.portfolio.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-2 text-white/70 text-[0.875rem] font-medium hover:text-white transition-colors link-hover">
                    <span className="w-[0.5em] h-[0.5em] rounded-full border border-white/40 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-display text-white/30 text-[0.75rem] tracking-[0.2em] mb-5">SERVICES</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-2 text-white/70 text-[0.875rem] font-medium hover:text-white transition-colors link-hover">
                    <span className="w-[0.5em] h-[0.5em] rounded-full border border-white/40 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-white/30 text-[0.75rem] tracking-[0.2em] mb-5">COMPANY</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 text-[0.875rem] font-medium uppercase hover:text-white transition-colors link-hover">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + CTA */}
          <div>
            <div className="space-y-2 mb-6">
              <a href="mailto:office@theendinfotech.com" className="block text-white text-[0.9375rem] hover:text-white/70 transition-colors">office@theendinfotech.com</a>
              <a href="mailto:support@theendinfotech.com" className="block text-white text-[0.9375rem] hover:text-white/70 transition-colors">support@theendinfotech.com</a>
            </div>
            <a href="#contact" className="btn btn-secondary inline-flex items-center h-[2.5rem]">
              <span className="btn-text text-[0.75rem]">LET&apos;S BEGIN</span>
              <span className="btn-icon w-[2.5rem]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 7H4M4 7L6.5 4.5M4 7L6.5 9.5" /></svg>
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-[clamp(2rem,1rem+2vw,4rem)] pt-6 border-t border-white/[0.06]">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#about" className="text-white/70 text-[0.8125rem] uppercase hover:text-white transition-colors link-hover">About</a>
            <a href="#testimonials" className="text-white/70 text-[0.8125rem] uppercase hover:text-white transition-colors link-hover">Reviews</a>
            <a href="#contact" className="text-white/70 text-[0.8125rem] uppercase hover:text-white transition-colors link-hover">Contact Us</a>
          </div>
          <div className="text-right">
            <p className="text-white/50 text-[0.8125rem]">9th floor, KBC Karunesh Business Centre, 916, Yogi Chowk Rd,</p>
            <p className="text-white/50 text-[0.8125rem]">Yogi Chowk Ground, Chikuwadi, Nana Varachha, Surat, Gujarat 395010</p>
            <p className="text-white/50 text-[0.8125rem] mt-1">+91 89808 85714</p>
          </div>
        </div>
      </div>

      {/* Copyright + Social */}
      <div className="border-t border-white/[0.06]">
        <div className="container-rs py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="text-white/40 text-[0.8125rem]">&copy; 2026 ALL RIGHTS RESERVED</p>
            <a href="#" className="text-white/40 text-[0.8125rem] uppercase hover:text-white transition-colors link-hover">Privacy Policy</a>
          </div>
          <div className="flex gap-[0.375rem]">
            {[
              { name: "Instagram", icon: "/img/icons/icon-instagram.svg" },
              { name: "Facebook", icon: "/img/icons/icon-facebook.svg" },
              { name: "Dribbble", icon: "/img/icons/icon-dribbble.svg" },
            ].map(({ name, icon }) => (
              <a key={name} href="#" className="social-icon" aria-label={name}>
                <img src={icon} alt={name} className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Large brand watermark */}
      <div className="overflow-hidden py-4">
        <div className="container-rs">
          <span className="font-display text-white/[0.03] select-none whitespace-nowrap block" style={{ fontSize: 'clamp(4rem, 2rem + 10vw, 12rem)', lineHeight: '0.9em' }}>
            THE END INFOTECH
          </span>
        </div>
      </div>
    </footer>
  );
}
