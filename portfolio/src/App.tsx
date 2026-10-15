import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import Hero from "./sections/Hero";
import { About, Skills, Projects, Journey } from "./sections/Content";
import { Contact, Footer } from "./sections/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
}
