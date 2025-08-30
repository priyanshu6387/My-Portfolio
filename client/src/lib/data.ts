export type Project = {
  title: string;
  description: string;
  highlights: string[]; // bullet impacts with metrics if possible
  tech: string[];
  links: { label: "Live" | "GitHub" | string; href: string }[];
  image?: string; // optional thumbnail path
};

export type Experience = {
  role: string;
  company: string;
  start: string; // "Jun 2025"
  end: string;   // "Present" or specific date
  bullets: string[];
  tech: string[];
};

export type SkillGroup = {
  title: string; // "Languages", "Frontend", "Backend", "DevOps", "DB", "Tools", "Testing"
  items: string[];
};

export const PROFILE = {
  name: "Priyanshu Patel",
  tagline: "General Manager & Technical Head",
  location: "Beta 1 Greater Noida, Uttar Pradesh",
  yearsOfExperience: 0, // Fresh graduate/new professional
  email: "priyanshupatel405@gmail.com",
  phone: "+91 6387760877",
  socials: [
    { label: "GitHub", href: "https://github.com/priyanshu6387" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-patel-3a100a323/" },
    { label: "X (Twitter)", href: "https://x.com/PriyanshuP61386" },
    { label: "Instagram", href: "https://instagram.com/priyanshupatel.6387" }
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "Robo Books (Accounting SaaS)",
    description: "Zoho-Books inspired accounting platform with dashboards, banking, and automations.",
    highlights: [
      "Reduced manual bookkeeping by 60% via automated reconciliations",
      "Role-based access & JWT auth with Google OAuth",
      "Optimized queries → 35% faster reports"
    ],
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind", "Recharts"],
    links: [
      { label: "Live", href: "https://robobooks.example.com" },
      { label: "GitHub", href: "https://github.com/yourhandle/robobooks" }
    ],
  },
  {
    title: "Triostack ERP",
    description: "Modular ERP with Audit Logs, Projects, Timesheets, Banking, and Documents.",
    highlights: [
      "Audit log pipeline handling 100k+ events/day",
      "Granular permissions, org-level settings",
      "CI/CD with containerized services"
    ],
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/yourhandle/triostack-erp" }
    ],
  },
  {
    title: "Codemap",
    description: "Modern web development platform and services website showcasing innovative solutions.",
    highlights: [
      "Professional business website with modern UI/UX",
      "Responsive design optimized for all devices",
      "Showcasing company services and expertise"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Modern Web"],
    links: [
      { label: "Live", href: "https://codemap.online" }
    ],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "General Manager & Technical Head",
    company: "Triostack Technologies Private Limited",
    start: "23 Jun 2025",
    end: "Present",
    bullets: [
      "Leading technical operations and development teams",
      "Overseeing project delivery and technical strategy",
      "Managing client relationships and technical requirements",
      "Implementing best practices and development standards"
    ],
    tech: ["Leadership", "Project Management", "Technical Strategy", "Team Management"],
  },
  {
    role: "Fullstack Developer Intern",
    company: "Codemap (A brand of Triostack Technologies Pvt. Ltd.)",
    start: "May 2025",
    end: "June 2025",
    bullets: [
      "Developed full-stack web applications using modern technologies",
      "Collaborated with senior developers on client projects",
      "Learned industry best practices and development workflows",
      "Worked on both frontend and backend development tasks"
    ],
    tech: ["React", "Node.js", "JavaScript", "Git", "Fullstack Development"],
  },
];

export const SKILLS: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { title: "Frontend", items: ["Next.js", "React", "Tailwind", "Framer Motion"] },
  { title: "Backend", items: ["Node.js", "Express", "REST", "JWT/OAuth"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL"] },
  { title: "DevOps", items: ["Docker", "GitHub Actions", "Nginx"] },
  { title: "Leadership", items: ["Team Management", "Project Planning", "Client Communication"] },
  { title: "Testing", items: ["Jest", "Playwright"] },
  { title: "Tools", items: ["VS Code", "Figma", "Postman"] },
];
