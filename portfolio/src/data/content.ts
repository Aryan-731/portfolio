import { Code2, Layout, Server, Database, Wrench, type LucideIcon } from "lucide-react";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export const ROLES = ["Frontend Developer", "React.js Developer", "Aspiring Full-Stack Developer"];

export const SKILLS: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: "Programming Languages", icon: Code2, items: ["C++", "Java", "Python", "JavaScript"] },
  { title: "Frontend Development", icon: Layout, items: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "TypeScript"] },
  { title: "Backend Development", icon: Server, items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", icon: Database, items: ["MongoDB", "SQL"] },
  { title: "Developer Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code", "Postman"] },
];

// Set demo/repo to real URLs when ready. Empty string = button shows "(soon)".
export const PROJECTS = [
  {
    title: "MERN E-commerce Website",
    status: "Personal project (concept)",
    description:
      "A responsive e-commerce application concept featuring product browsing, search, filtering, product details, shopping cart, authentication, and order management.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    demo: "",
    repo: "",
  },
  {
    title: "AI Product Assistant",
    status: "Personal project (concept)",
    description:
      "An AI-powered product discovery application concept that helps users explore products based on their preferences and requirements.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "AI API"],
    demo: "",
    repo: "",
  },
  {
    title: "Interactive 3D Portfolio",
    status: "Personal project",
    description:
      "A personal portfolio featuring an interactive 3D photo card, responsive layouts, modern animations, and frontend development skills.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    demo: "",
    repo: "",
  },
  {
    title: "Interactive 3D Travel Book",
    status: "Personal project",
    description:
      "A cinematic, fully responsive personal travel portfolio of a destinations across India.",
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    demo: "https://aryan-travel07.netlify.app/",
    repo: "",
  },
];

// Edit freely. Add a "period" only when you want a real date shown.
export const JOURNEY: { title: string; place: string; text: string; period?: string }[] = [
  {
    title: "B.Tech in Computer Science Engineering",
    place: "Shivalik College of Engineering, Dehradun",
    text: "Studying core computer science alongside self-directed web development.",
  },
  {
    title: "Programming foundations",
    place: "C++, Java, Python, JavaScript",
    text: "Built a base in problem solving and programming across multiple languages.",
  },
  {
    title: "Frontend development",
    place: "HTML5, CSS3, React.js, TypeScript, Tailwind CSS",
    text: "Focused on responsive, interactive and accessible user interfaces.",
  },
  {
    title: "Moving toward full-stack",
    place: "Node.js, Express.js, MongoDB, SQL, REST APIs",
    text: "Learning to build complete applications, from interface to database.",
  },
];
