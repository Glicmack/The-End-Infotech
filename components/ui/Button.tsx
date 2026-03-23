"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "white" | "outline" | "dark";
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = "white",
  href,
  onClick,
  className = "",
  showArrow = true,
}: ButtonProps) {
  const variantStyles = {
    white: "pill-btn pill-btn-white",
    outline: "pill-btn pill-btn-outline",
    dark: "pill-btn pill-btn-dark",
  };

  const arrowColor = variant === "white" ? "#0A0A0A" : "#FFFFFF";

  const content = (
    <>
      <span className={variantStyles[variant]}>{children}</span>
      {showArrow && (
        <span className={`arrow-circle ${variant === "white" ? "arrow-circle-white" : "arrow-circle-dark"}`}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke={arrowColor} strokeWidth="1.5">
            <path d="M14 9H4M4 9L8 5M4 9L8 13" />
          </svg>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={`inline-flex items-center gap-2 ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`inline-flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
