import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ title, kicker }: { title: string; kicker?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      {kicker && <p className="mb-3 text-sm font-medium text-cyan">{kicker}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
    </Reveal>
  );
}
