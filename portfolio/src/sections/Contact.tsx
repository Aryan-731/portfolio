import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import Reveal from "../components/Reveal";
import { GithubIcon, LinkedinIcon } from "../components/Icons";
import { SITE } from "../config/site";

type Status = { kind: "idle" | "sending" | "ok" | "error"; msg?: string };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs: Record<string, string> = {};
    if (!d.name?.trim()) errs.name = "Enter your name.";
    if (!emailRe.test(d.email ?? "")) errs.email = "Enter a valid email address.";
    if (!d.subject?.trim()) errs.subject = "Enter a subject.";
    if ((d.message ?? "").trim().length < 10) errs.message = "Write at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (!SITE.formEndpoint) {
      setStatus({ kind: "error", msg: `Message not sent: the form isn't configured yet. Email me at ${SITE.email} instead.` });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(d),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({ kind: "ok", msg: "Message sent. I'll reply soon." });
    } catch {
      setStatus({ kind: "error", msg: `Message not sent. Try again or email ${SITE.email}.` });
    }
  }

  const field = "w-full rounded-xl border border-line bg-panel px-4 py-3 text-sm text-white placeholder:text-slate-600";
  const Err = ({ k }: { k: string }) => (errors[k] ? <p id={`${k}-err`} className="mt-1 text-xs text-red-400">{errors[k]}</p> : null);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let's Build <span className="gradient-text">Something Great.</span></h2>
          <p className="mt-5 max-w-md text-slate-400">Have a project in mind or an opportunity to discuss? Send a message and I'll get back to you.</p>
          <div className="mt-8 space-y-3 text-sm">
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white"><Mail size={18} className="text-cyan" /> {SITE.email}</a>
            <a href={SITE.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white"><GithubIcon className="h-[18px] w-[18px] text-cyan" /> GitHub</a>
            <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white"><LinkedinIcon className="h-[18px] w-[18px] text-cyan" /> LinkedIn</a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-4 rounded-3xl p-6 sm:p-8">
            {(["name", "email", "subject"] as const).map((k) => (
              <div key={k}>
                <label htmlFor={k} className="mb-1.5 block text-sm text-slate-300">{k[0].toUpperCase() + k.slice(1)}</label>
                <input id={k} name={k} type={k === "email" ? "email" : "text"} autoComplete={k === "subject" ? "off" : k} className={field} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
                <Err k={k} />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-slate-300">Message</label>
              <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} />
              <Err k="message" />
            </div>
            <button type="submit" disabled={status.kind === "sending"} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-electric px-6 py-3 text-sm font-semibold text-ink disabled:opacity-60">
              <Send size={16} /> {status.kind === "sending" ? "Sending..." : "Send message"}
            </button>
            <p role="status" aria-live="polite" className={`text-sm ${status.kind === "ok" ? "text-emerald-400" : "text-red-400"}`}>{status.msg}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} Aryan Raj. Built with React, Framer Motion and Tailwind CSS.
    </footer>
  );
}
