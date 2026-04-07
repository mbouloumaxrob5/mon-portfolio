"use client";

import { motion } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

export function GlowButton({
  children,
  className = "",
  onClick,
  variant = "primary",
}: GlowButtonProps) {
  const baseClasses = "relative px-6 py-3 font-medium rounded-xl transition-all duration-300 overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-indigo text-white",
    secondary: "bg-cyan text-white",
    outline: "bg-transparent border-2 border-indigo text-indigo hover:text-white",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: variant === "outline" 
            ? "linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(6, 182, 212, 0.4))"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))",
          filter: "blur(10px)",
        }}
      />
      
      {/* Animated border glow */}
      <motion.div
        className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, #6366f1, #06b6d4, #8b5cf6, #6366f1)",
          backgroundSize: "300% 100%",
          filter: "blur(4px)",
          animation: "glow-move 3s linear infinite",
        }}
      />
      
      {/* Inner content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

// Global glow animation style
export function GlowStyles() {
  return (
    <style jsx global>{`
      @keyframes glow-move {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `}</style>
  );
}
