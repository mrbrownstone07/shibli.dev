import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
