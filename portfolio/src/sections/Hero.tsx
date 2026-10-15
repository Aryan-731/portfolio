import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ROLES } from "../data/content";
import { SITE } from "../config/site";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import PhotoCard from "../components/PhotoCard";

export default function Hero() {
  const reduce = !!useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" aria-hidden="true" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-xs font-medium tracking-[0.2em] text-cyan">
            COMPUTER SCIENCE ENGINEERING STUDENT
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Aryan Raj.</span>
          </motion.h1>
          <div className="mt-5 h-9 text-xl text-slate-300 sm:text-2xl" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span key={i} className="inline-block" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
                {ROLES[i]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-400">
            I enjoy building interactive, user-friendly web experiences, from clean interfaces to the APIs and databases behind them.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-full bg-gradient-to-r from-cyan to-electric px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-110">Explore My Work</a>
            <a href="#contact" className="glass rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Let's Connect</a>
            <div className="ml-2 flex gap-2">
              <a href={SITE.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="glass rounded-full p-3 text-slate-300 transition hover:text-white"><GithubIcon className="h-5 w-5" /></a>
              <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="glass rounded-full p-3 text-slate-300 transition hover:text-white"><LinkedinIcon className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[380px] sm:min-h-[480px]">
          <PhotoCard />
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white">
        <ChevronDown className={reduce ? "" : "animate-bounce"} />
      </a>
    </section>
  );
}
