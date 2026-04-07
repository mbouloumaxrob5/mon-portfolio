"use client";

import Link from "next/link";
import logo_RS from "@/public/logo_RS.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Code2, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "À propos", href: "#about" },
      { label: "Projets", href: "#projects" },
      { label: "Compétences", href: "#skills" },
      { label: "Parcours", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Réseaux",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "Twitter", href: "https://twitter.com" },
      { label: "Dev.to", href: "https://dev.to" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
    ],
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -5 }}
                className="relative w-10 h-10 rounded-xl overflow-hidden"
              >
                <Image
                  src={logo_RS}
                  alt="Maxwell MBOULOU"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </motion.div>
              <span className="text-xl font-bold gradient-text">Maxwell</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Développeur Full Stack spécialisé dans les applications Web, Mobile et Desktop.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Code2 className="w-4 h-4" />
              <span>Next.js • React • TypeScript</span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Maxwell Yoan. Fait avec
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" />
            et Next.js
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Retour en haut
          </Button>
        </div>
      </div>
    </footer>
  );
}
