import { useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { SITE } from "../config/site";

const CHIPS = [
  { label: "FRONTEND", pos: "-left-3 top-10 sm:-left-8", z: 70 },
  { label: "BACKEND", pos: "-right-3 top-1/3 sm:-right-8", z: 90 },
  { label: "FULL STACK DEVELOPER", pos: "left-6 -bottom-4", z: 60 },
];

export default function PhotoCard() {
  const reduce = !!useReducedMotion();
  const [broken, setBroken] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 16 });
  const sy = useSpring(my, { stiffness: 120, damping: 16 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [14, -14]);
  const gx = useTransform(sx, [-0.5, 0.5], ["15%", "85%"]);
  const gy = useTransform(sy, [-0.5, 0.5], ["15%", "85%"]);
  const glare = useMotionTemplate`radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,.22), transparent 55%)`;

  function move(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function leave() { mx.set(0); my.set(0); }

  return (
    <div className="flex h-full items-center justify-center" style={{ perspective: 1100 }}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          onPointerMove={move}
          onPointerLeave={leave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", touchAction: "pan-y" }}
          className="relative w-[250px] sm:w-[320px] lg:w-[360px]"
        >
          <div aria-hidden="true" className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-cyan/20 via-electric/15 to-violet/20 blur-2xl" style={{ transform: "translateZ(-60px)" }} />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-panel shadow-2xl opacity-100" style={{ transform: "translateZ(0)" }}>
            {broken ? (
              <div role="img" aria-label="Placeholder for Aryan Raj's photo" className="flex h-full w-full items-center justify-center bg-gradient-to-br from-electric/30 to-violet/30 text-7xl font-semibold text-white/80">AR</div>
            ) : (
              <img src={SITE.photoUrl} alt="Portrait of Aryan Raj" onError={() => setBroken(true)} className="h-full w-full object-cover" draggable={false} />
            )}
            <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: glare }} />
          </div>
          {CHIPS.map((c) => (
            <span key={c.label} aria-hidden="true" className={`glass absolute ${c.pos} rounded-full px-3 py-1.5 text-xs font-medium text-white`} style={{ transform: `translateZ(${c.z}px)` }}>
              {c.label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
