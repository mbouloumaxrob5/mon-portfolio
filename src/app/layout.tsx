import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/providers";
import { ParticleBackground } from "@/components/particle-background";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maxwellmboulou.dev"),
  title: {
    default: "Maxwell MBOULOU | Développeur Full Stack",
    template: "%s | Maxwell MBOULOU",
  },
  description: "Développeur Full Stack spécialisé en applications Web, Mobile et Desktop. Expert React, Next.js, TypeScript, React Native et Electron. Création de solutions digitales innovantes et performantes.",
  keywords: [
    "développeur full stack",
    "développeur web",
    "développeur mobile",
    "react",
    "next.js",
    "typescript",
    "react native",
    "electron",
    "tailwind css",
    "node.js",
    "freelance",
    "portfolio",
  ],
  authors: [{ name: "Maxwell MBOULOU", url: "https://maxwellmboulou.dev" }],
  creator: "Maxwell MBOULOU",
  publisher: "Maxwell MBOULOU",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://maxwellmboulou.dev",
    siteName: "Maxwell MBOULOU | Portfolio Full Stack",
    title: "Maxwell MBOULOU | Développeur Full Stack",
    description: "Développeur Full Stack spécialisé en applications Web, Mobile et Desktop. Expert React, Next.js, TypeScript.",
    images: [
      {
        url: "/Photo_1.JPG",
        width: 1200,
        height: 630,
        alt: "Maxwell MBOULOU - Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell MBOULOU | Développeur Full Stack",
    description: "Développeur Full Stack spécialisé en applications Web, Mobile et Desktop.",
    images: ["/Photo_1.JPG"],
    creator: "@maxwellmboulou",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://maxwellmboulou.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased cursor-none md:cursor-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <ParticleBackground />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
