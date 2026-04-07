"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail, Code2, Smartphone, Monitor, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const stats = [
  { value: "50+", label: "Projets réalisés" },
  { value: "30+", label: "Clients satisfaits" },
  { value: "5+", label: "Années d'expérience" },
];

const techStack = [
  { icon: Code2, label: "React / Next.js", color: "indigo" },
  { icon: Smartphone, label: "React Native", color: "cyan" },
  { icon: Monitor, label: "Electron / Tauri", color: "violet" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-indigo/5 via-transparent to-transparent dark:from-indigo/10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/4 -right-1/4 w-150 h-150 rounded-full bg-indigo/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-1/4 -left-1/4 w-125 h-125 rounded-full bg-cyan/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                🈵 Disponible pour missions
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              <span className="block text-foreground">Full Stack</span>
              <span className="block gradient-text">Developer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-muted-foreground mb-2"
            >
              Web • Mobile • Desktop
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Je crée des applications performantes et élégantes sur toutes les plateformes. 
              Du concept au déploiement, je transforme vos idées en solutions digitales impactantes & innovantes.
            </motion.p>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {techStack.map((tech, index) => (
                <Badge
                  key={tech.label}
                  variant={tech.color as "indigo" | "cyan" | "violet" | "emerald" | "amber"}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium",
                    "animate-float"
                  )}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <tech.icon className="mr-1.5 h-3.5 w-3.5" />
                  {tech.label}
                </Badge>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="gradient-indigo-cyan text-white border-0 hover:opacity-90 text-base"
              >
                <Link href="#projects">
                  Voir mes projets
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base"
              >
                <Link href="#contact">Me contacter</Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="text-base border border-indigo/30 hover:border-indigo/50 hover:bg-indigo/10"
              >
                <a 
                  href="/CV_Maxwell%20Yoan%20Roberto_MBOULOU%20(1)%20(1).pdf" 
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Mon CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex justify-center lg:justify-start gap-4 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/skymax2057", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/maxwell-yoan-roberto-mboulou-57903038a/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:mbouloumaxyoanr.2@gmail.com", label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Photo avec effet glassmorphism */}
              <div className="w-80 h-96 rounded-2xl gradient-indigo-cyan p-1 shadow-2xl glow-indigo overflow-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-card">
                  <Image
                    src="/Photo_1.JPG"
                    alt="Maxwell Yoan Roberto Mboulou"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-sm font-medium">TypeScript</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 shadow-lg"
              >
                <span className="text-sm font-medium">Node.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              className="text-center glass rounded-xl p-4"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
