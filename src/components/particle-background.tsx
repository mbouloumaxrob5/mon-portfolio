"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  randomX: number;
}

export function ParticleBackground() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      size: Math.floor(Math.random() * 4 + 2),
      duration: Math.floor(Math.random() * 20 + 20),
      delay: Math.floor(Math.random() * 5),
      randomX: Math.random(),
    }))
  );
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient orbs that follow mouse */}
      <motion.div
        style={{
          x: useTransform(cursorXSpring, (val: number) => val - 200),
          y: useTransform(cursorYSpring, (val: number) => val - 200),
        }}
        className="absolute w-96 h-96 rounded-full bg-indigo/10 blur-3xl"
      />
      <motion.div
        style={{
          x: useTransform(cursorXSpring, (val: number) => val - 150),
          y: useTransform(cursorYSpring, (val: number) => val - 150),
        }}
        transition={{ delay: 0.1 }}
        className="absolute w-64 h-64 rounded-full bg-cyan/10 blur-3xl"
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-linear-to-br from-indigo/40 to-cyan/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.randomX * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connection lines between nearby particles */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
