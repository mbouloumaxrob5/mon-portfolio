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
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  // Generate particles only on client side after mount
  useEffect(() => {
    setMounted(true);
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      size: Math.floor(Math.random() * 4 + 2),
      duration: Math.floor(Math.random() * 20 + 20),
      delay: Math.floor(Math.random() * 5),
      randomX: Math.random(),
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Compute transforms unconditionally to maintain hook order
  const orb1X = useTransform(cursorXSpring, (val: number) => val - 200);
  const orb1Y = useTransform(cursorYSpring, (val: number) => val - 200);
  const orb2X = useTransform(cursorXSpring, (val: number) => val - 150);
  const orb2Y = useTransform(cursorYSpring, (val: number) => val - 150);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Static gradient orbs for SSR / before mount */}
      {!mounted && (
        <>
          <div className="absolute w-96 h-96 rounded-full bg-indigo/10 blur-3xl" style={{ left: '10%', top: '20%' }} />
          <div className="absolute w-64 h-64 rounded-full bg-cyan/10 blur-3xl" style={{ right: '15%', bottom: '30%' }} />
        </>
      )}

      {/* Animated gradient orbs that follow mouse - only after mount */}
      {mounted && (
        <>
          <motion.div
            style={{ x: orb1X, y: orb1Y }}
            className="absolute w-96 h-96 rounded-full bg-indigo/10 blur-3xl"
          />
          <motion.div
            style={{ x: orb2X, y: orb2Y }}
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
        </>
      )}
    </div>
  );
}
