"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Globe, Smartphone, Monitor, Code2, Sparkles, Zap, Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const expertiseCards = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Applications web modernes avec React, Next.js et TypeScript. Performance, SEO et expérience utilisateur optimale.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "indigo",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Applications mobiles cross-platform avec React Native et Flutter. Publication App Store et Play Store.",
    stack: ["React Native", "Flutter", "Expo", "iOS/Android"],
    color: "cyan",
  },
  {
    icon: Monitor,
    title: "Desktop Software",
    description: "Applications desktop performantes avec Electron et Tauri. Solutions métier et outils internes.",
    stack: ["Electron", "Tauri", "WPF", "Qt"],
    color: "violet",
  },
];

const highlights = [
  { icon: Code2, value: "50+", label: "Projets livrés" },
  { icon: Sparkles, value: "100%", label: "Clients satisfaits" },
  { icon: Zap, value: "3x", label: "Plus rapide" },
];

const photos = [
  { src: "/Photo_2.jpg", alt: "Maxwell - En action", rotate: -6 },
  { src: "/Photo_3.jpg", alt: "Maxwell - Certifié", rotate: 6 },
];

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  return (
    <section id="about" ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="indigo" className="mb-4">À propos</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Expert <span className="gradient-text">Full Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionné par la création de solutions digitales innovantes sur toutes les plateformes.
            Je combine expertise technique et vision produit pour livrer des applications performantes.
          </p>
        </motion.div>

        {/* Photo Collage with Parallax */}
        <motion.div style={{ opacity }} className="relative mb-20">
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                style={{ y: index === 0 ? y1 : y2 }}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: photo.rotate }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                className="relative w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating Quote */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -left-4 md:left-20 top-1/2 -translate-y-1/2 max-w-xs glass rounded-xl p-4 hidden lg:block"
          >
            <Quote className="w-8 h-8 text-indigo mb-2" />
            <p className="text-sm italic text-muted-foreground">
              &ldquo;Le code est comme l&apos;humour. Quand on doit l&apos;expliquer, c&apos;est mauvais.&rdquo;
            </p>
          </motion.div>
        </motion.div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Card className={cn(
                "h-full border-border/50 hover:border-indigo/30 transition-all duration-300 hover:shadow-lg",
                "bg-card/50 backdrop-blur-sm"
              )}>
                <CardHeader>
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    card.color === "indigo" && "bg-indigo/10 text-indigo",
                    card.color === "cyan" && "bg-cyan/10 text-cyan",
                    card.color === "violet" && "bg-violet/10 text-violet"
                  )}>
                    <card.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-base">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {card.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 glass rounded-xl"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-6 h-6 mx-auto mb-2 text-indigo" />
              </motion.div>
              <div className="text-2xl font-bold gradient-text">{item.value}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
