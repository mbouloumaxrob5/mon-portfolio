"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 300, x: "10%", y: "20%", delay: 0, duration: 20 },
  { size: 200, x: "80%", y: "60%", delay: 5, duration: 25 },
  { size: 150, x: "70%", y: "10%", delay: 10, duration: 22 },
  { size: 250, x: "20%", y: "80%", delay: 3, duration: 28 },
];

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
