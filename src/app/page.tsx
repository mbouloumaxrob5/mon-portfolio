import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { PhotoGallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PhotoGallery />
      <Projects />
      <Testimonials />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
