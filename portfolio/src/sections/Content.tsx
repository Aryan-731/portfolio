import { motion } from "framer-motion";
import { Download, ExternalLink, GraduationCap, MapPin } from "lucide-react";
import Reveal, { SectionHead } from "../components/Reveal";
import { GithubIcon } from "../components/Icons";
import { SKILLS, PROJECTS, JOURNEY } from "../data/content";
import { SITE } from "../config/site";

const wrap = "mx-auto max-w-6xl px-6 py-24";

export function About() {
  return (
    <section id="about" className={wrap}>
      <SectionHead kicker="About me" title="Learning to build things people enjoy using." />
      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="space-y-5 leading-relaxed text-slate-400 lg:col-span-3">
          <p>I'm a Computer Science Engineering student interested in frontend development, interactive user interfaces, and modern web technologies.</p>
          <p>I'm growing from frontend work toward full-stack development, learning how interfaces, APIs and databases fit together. I care about clear UI, accessible interactions, and code that is easy to maintain.</p>
          <p>My goal is to join a team where I can build real products and keep learning from experienced developers.</p>
          {SITE.resumeUrl ? (
            <a href={SITE.resumeUrl} download className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink">
              <Download size={16} /> Download resume
            </a>
          ) : (
            <button disabled title="Add your PDF in /public and set resumeUrl in src/config/site.ts" className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-slate-500">
              <Download size={16} /> Resume coming soon
            </button>
          )}
        </Reveal>
        <Reveal delay={0.1} className="space-y-4 lg:col-span-2">
          <div className="glass rounded-3xl p-6">
            <GraduationCap className="mb-4 text-cyan" />
            <h3 className="font-semibold text-white">B.Tech, Computer Science Engineering</h3>
            <p className="mt-1 text-sm text-slate-400">Shivalik College of Engineering</p>
            <p className="mt-3 flex items-center gap-1.5 text-sm text-slate-500"><MapPin size={14} /> Dehradun, India</p>
          </div>
          <pre aria-hidden="true" className="overflow-x-auto rounded-3xl border border-line bg-panel p-5 font-mono text-xs leading-6 text-slate-400"><code>{`const aryan = {
  focus: "frontend",
  learning: ["Node.js", "MongoDB"],
  building: "interfaces that feel good",
};`}</code></pre>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className={wrap}>
      <SectionHead kicker="Technical skills" title="The tools I work with." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 0.05}>
            <motion.div whileHover={{ y: -4 }} className="glass h-full rounded-3xl p-6 transition-colors hover:border-cyan/40">
              <s.icon className="mb-4 text-cyan" size={24} />
              <h3 className="mb-4 font-semibold text-white">{s.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <li key={t} className="rounded-full border border-line bg-panel px-3 py-1 text-sm text-slate-300">{t}</li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LinkBtn({ href, children, icon, primary }: { href: string; children: string; icon: React.ReactNode; primary?: boolean }) {
  const base = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition";
  if (!href) {
    return <span aria-disabled="true" title="Link not added yet" className={`${base} cursor-not-allowed border border-line text-slate-600`}>{icon} {children} (soon)</span>;
  }
  return <a href={href} target="_blank" rel="noreferrer" className={`${base} ${primary ? "bg-white text-ink" : "border border-white/15 text-white hover:bg-white/10"}`}>{icon} {children}</a>;
}

export function Projects() {
  return (
    <section id="projects" className={wrap}>
      <SectionHead kicker="Projects" title="Things I'm building." />
      <div className="grid gap-6 lg:grid-cols-3">
        {PROJECTS.map((p, idx) => (
          <Reveal key={p.title} delay={idx * 0.08}>
            <motion.article whileHover={{ y: -6 }} className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel p-7">
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-cyan/30 to-violet/30 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" aria-hidden="true" />
              <p className="text-xs text-violet">{p.status}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => <li key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">{t}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                <LinkBtn href={p.demo} primary icon={<ExternalLink size={14} />}>Live Demo</LinkBtn>
                <LinkBtn href={p.repo} icon={<GithubIcon className="h-3.5 w-3.5" />}>Source Code</LinkBtn>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className={wrap}>
      <SectionHead kicker="Learning journey" title="Education and growth." />
      <ol className="relative ml-3 space-y-10 border-l border-line">
        {JOURNEY.map((j, idx) => (
          <Reveal key={j.title} delay={idx * 0.05}>
            <li className="relative pl-8">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-cyan to-violet ring-4 ring-ink" aria-hidden="true" />
              {j.period && <p className="text-xs text-slate-500">{j.period}</p>}
              <h3 className="font-semibold text-white">{j.title}</h3>
              <p className="text-sm text-cyan">{j.place}</p>
              <p className="mt-2 max-w-xl text-sm text-slate-400">{j.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
