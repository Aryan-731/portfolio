# Aryan Raj - 3D Portfolio

React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build
npm run preview
```

## Customize
| What | Where |
|---|---|
| Email, GitHub, LinkedIn, resume PDF | `src/config/site.ts` |
| Skills, projects (demo/repo links), timeline | `src/data/content.ts` |
| About text, education card | `src/sections/Content.tsx` |
| Hero 3D photo card | `src/components/PhotoCard.tsx` |
| Your photo | `public/aryan.jpg` (set in `src/config/site.ts`) |

**Resume:** put the PDF in `public/` and set `resumeUrl: "/your-file.pdf"`.
**Project links:** empty `demo`/`repo` strings render a disabled "(soon)" button. Nothing is claimed as deployed.

## Contact form
Create a free form at https://formspree.io, copy `.env.example` to `.env`, and set
`VITE_FORM_ENDPOINT=https://formspree.io/f/yourid`. Until then the form validates input but
shows an honest "not sent" message instead of a fake success.

## Deploy to Vercel
1. Push to GitHub.
2. Import the repo at vercel.com/new (Framework: Vite, build `npm run build`, output `dist`).
3. Add `VITE_FORM_ENDPOINT` under Settings > Environment Variables, then redeploy.
