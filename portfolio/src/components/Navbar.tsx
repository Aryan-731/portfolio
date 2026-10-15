import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = NAV.map((n) => n.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const link = (id: string) =>
    `rounded-full px-3 py-1.5 text-sm transition-colors ${active === id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav aria-label="Main" className="glass mx-auto mt-3 flex w-[calc(100%-1.5rem)] max-w-6xl items-center justify-between rounded-full px-5 py-2.5">
        <a href="#home" className="font-semibold tracking-tight text-white">
          Aryan<span className="text-cyan">.</span>developer
        </a>
        <ul className="hidden gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={link(n.id)} aria-current={active === n.id ? "page" : undefined}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="rounded-full p-2 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <ul className="glass mx-3 mt-2 rounded-2xl bg-ink/90 p-2 md:hidden">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className={`block py-3 ${link(n.id)}`}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
