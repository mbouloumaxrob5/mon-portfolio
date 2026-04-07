"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Laurent",
    role: "CEO",
    company: "StartupFlow",
    content: "Maxwell a transformé notre vision en une application web performante en un temps record. Son expertise Full Stack et sa capacité à résoudre des problèmes complexes ont été déterminantes pour le succès de notre projet.",
    rating: 5,
    avatar: "ML",
  },
  {
    id: "2",
    name: "Thomas Dubois",
    role: "Directeur Technique",
    company: "TechCorp",
    content: "Un développeur exceptionnel ! Maxwell a livré notre application mobile avec une qualité impeccable. Sa maîtrise de React Native et son souci du détail ont dépassé nos attentes. Je le recommande vivement.",
    rating: 5,
    avatar: "TD",
  },
  {
    id: "3",
    name: "Sophie Martin",
    role: "Product Manager",
    company: "InnovateLab",
    content: "Travailler avec Maxwell a été une expérience formidable. Son approche méthodique, sa communication claire et sa capacité à s'adapter à nos besoins ont fait de lui un atout précieux pour notre équipe.",
    rating: 5,
    avatar: "SM",
  },
  {
    id: "4",
    name: "Pierre Bernard",
    role: "Fondateur",
    company: "DigitalFirst",
    content: "Maxwell a conçu et développé notre plateforme e-commerce from scratch. Les performances, la sécurité et l'expérience utilisateur sont au top. Un vrai professionnel qui livre toujours dans les délais.",
    rating: 5,
    avatar: "PB",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo/5 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="indigo" className="mb-4">Témoignages</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ce que disent mes <span className="gradient-text">clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des collaborations réussies et des clients satisfaits qui ont fait confiance à mon expertise.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 },
              }}
              className="glass rounded-3xl p-8 sm:p-12 border border-indigo/20 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="w-16 h-16 rounded-full bg-indigo/10 flex items-center justify-center mb-6">
                  <Quote className="w-8 h-8 text-indigo" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-5 h-5",
                        i < currentTestimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground"
                      )}
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg sm:text-xl text-foreground mb-8 max-w-2xl leading-relaxed">
                  &ldquo;{currentTestimonial.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-indigo to-cyan flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {currentTestimonial.avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentTestimonial.role} @ {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 hover:bg-indigo/10 hover:border-indigo/30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 hover:bg-indigo/10 hover:border-indigo/30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-indigo"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
        >
          {[
            { value: "30+", label: "Clients satisfaits" },
            { value: "100%", label: "Taux de recommandation" },
            { value: "4.9/5", label: "Note moyenne" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
