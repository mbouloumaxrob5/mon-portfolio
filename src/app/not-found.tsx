"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Ghost, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo/5 via-transparent to-cyan/5" />
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
        className="absolute -top-1/4 -right-1/4 w-96 h-96 rounded-full bg-indigo/20 blur-3xl"
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
        className="absolute -bottom-1/4 -left-1/4 w-80 h-80 rounded-full bg-cyan/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[150px] sm:text-[200px] font-bold leading-none gradient-text select-none"
          >
            404
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2"
          >
            <Ghost className="w-16 h-16 text-indigo/50" />
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Page non trouvée
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Oups ! La page que vous recherchez semble avoir disparu dans le cyberespace.
          </p>
        </motion.div>

        {/* Search suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="glass rounded-2xl p-6 mb-8 inline-block"
        >
          <div className="flex items-center gap-3 text-muted-foreground">
            <Search className="w-5 h-5" />
            <span>Vous cherchiez peut-être :</span>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Projets", "Compétences", "Contact", "À propos"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 text-sm bg-muted hover:bg-indigo/10 hover:text-indigo rounded-lg transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="gradient-indigo-cyan text-white border-0"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            <Link href="#" onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Page précédente
            </Link>
          </Button>
        </motion.div>

        {/* Fun fact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          <span className="inline-block animate-bounce">👻</span>
          {" "}Fun fact : Le code 404 signifie &quot;Not Found&quot; dans le protocole HTTP
        </motion.p>
      </div>
    </div>
  );
}
