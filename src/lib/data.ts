export const site = {
  name: "Pranav",
  fullName: "Pranav Gupta",
  initials: "PG",
  role: "Full Stack Developer — React / Next.js / Node.js",
  tagline:
    "I build and ship production web applications end-to-end — from React/Next.js interfaces to Node.js/Express APIs and MySQL/MongoDB databases.",
  email: "pranavg9876@gmail.com",
  phone: "+91-9058722449",
  location: "Available for freelance & contract work",
  socials: {
    github: "https://github.com/pranav20030",
    linkedin: "https://www.linkedin.com/in/pranav-gupta-1a14aa233",
    email: "mailto:pranavg9876@gmail.com",
    phone: "tel:+919058722449",
  },
  resumeUrl: "/Pranav___Resume.pdf",
  headshotUrl: "/pranav.jpeg",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const aboutStats = [
  { label: "Live applications shipped", value: "5+" },
  { label: "Lighthouse score improvement", value: "25–30%" },
  { label: "API latency reduction via caching", value: "~20%" },
];

export const about = {
  bio: "Full stack developer with 1+ years shipping production web apps at Codeaegis as a React.js/Next.js Developer, plus independent full-stack projects spanning workflow management and real-time messaging. Delivered 5+ live applications, improved Lighthouse performance scores by 25–30%, and cut API latency by roughly 20% through caching.",
  education: "B.Tech in Computer Science, AKTU (2021–2025)",
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "Codeaegis",
    period: "Feb 2025 – Present",
    points: [
      "Developed and deployed 5+ production admin dashboards, including for fantasy sports platforms.",
      "Improved average Lighthouse performance score by 25–30% via route-based code-splitting, lazy loading, and SSR.",
      "Reduced API response latency by ~20% through caching.",
      "Built a WebSocket-powered live monitoring dashboard with instant UI updates.",
      "Managed shared application state with Redux across multiple dashboard products.",
    ],
  },
  {
    role: "React.js Intern",
    company: "Codeaegis",
    period: "Nov 2024 – Jan 2025",
    points: [
      "Built reusable UI components in React.js and Tailwind CSS.",
      "Implemented forms, dashboards, and REST API integrations for an internal admin dashboard.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "The fundamentals everything else is built on.",
    items: ["JavaScript (ES6+)", "TypeScript", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    description: "Interfaces that hold up under real data and real users.",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "WebSockets",
      "shadcn/ui",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend",
    description: "APIs designed around how the product actually uses data.",
    items: ["Node.js", "Express.js", "REST API Design"],
  },
  {
    title: "Databases",
    description: "Schemas and queries built for real query patterns.",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Practices",
    description: "The workflow around the code.",
    items: ["Git", "GitHub", "Vercel", "AWS (basic)", "Agile / Scrum"],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  link?: { label: string; href: string };
  repo?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "adar",
    title: "Adar — Property Maintenance Platform",
    description:
      "A role-based platform for the full property maintenance request lifecycle, with real-time chat and push notifications.",
    problem:
      "Property managers needed one system to route maintenance requests across five different roles — Admin, Supervisor, Technician, Cleaner, and Customer — without losing track of status or communication.",
    solution:
      "Built a role-based platform handling the full request lifecycle — creation, assignment, status tracking, completion, and ratings — with Firebase-powered real-time chat and FCM push notifications keeping every role in sync.",
    impact:
      "Gave each role a purpose-built view into the same request pipeline instead of five teams working off disconnected spreadsheets and phone calls.",
    tags: ["React.js", "Redux", "Node.js", "Express.js", "Sequelize", "MySQL", "Firebase", "JWT"],
    repo: { label: "View on GitHub", href: "https://github.com/pranav20030" },
  },
  {
    slug: "messenger",
    title: "Real-Time Messenger App",
    description:
      "A WebSocket-based messaging platform supporting 100+ concurrent users with instant delivery and role-based access.",
    problem:
      "Needed a chat platform that felt instant at real concurrency, with proper authentication and role-based access rather than a toy WebSocket demo.",
    solution:
      "Built a WebSocket-based messaging platform supporting 100+ concurrent users with instant delivery, backed by NextAuth/JWT for role-based access control and a MongoDB schema tuned to cut query overhead.",
    impact:
      "Reduced database query overhead by roughly 15% while holding instant delivery at 100+ concurrent connections.",
    tags: ["Next.js", "MongoDB", "WebSockets", "NextAuth"],
    repo: { label: "View on GitHub", href: "https://github.com/pranav20030" },
  },
  {
    slug: "clickshop",
    title: "ClickShop — E-commerce Platform",
    description:
      "A responsive storefront with dynamic cart, live product filtering, and real-time inventory updates.",
    problem:
      "Wanted to prove out a fast, responsive storefront experience — filtering, cart, and inventory all needed to feel instant, not just function.",
    solution:
      "Built a responsive storefront with a dynamic cart, live product filtering, and real-time inventory updates, using code-splitting and lazy image/route rendering to keep it fast.",
    impact:
      "Cut page loads by roughly 35% versus an unoptimized baseline build of the same storefront.",
    tags: ["React.js", "Tailwind CSS", "JavaScript"],
    repo: { label: "View on GitHub", href: "https://github.com/pranav20030" },
  },
 
  {
    slug: "fantasy-sports-admin",
    title: "Fantasy Sports Platform — Admin Dashboard",
    description:
      "An internal admin panel for a fantasy sports platform, managing users, contests, and live application data.",
    problem:
      "Operations needed to manage users, contests, and in-flight application data on a fantasy sports platform, with changes elsewhere in the system reflected immediately rather than on a manual refresh.",
    solution:
      "Built an admin panel with a WebSocket-powered live monitoring dashboard pushing real-time data updates straight to the UI, and Redux-managed shared state to eliminate redundant re-renders across views.",
    impact:
      "Gave operations a live view of the platform instead of a stale one, without the re-render cost of naively wiring WebSocket updates into shared state.",
    tags: ["React.js", "Next.js", "Redux", "TypeScript", "WebSockets", "REST APIs"],
    repo: { label: "View on GitHub", href: "https://github.com/pranav20030" },
  },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Full Stack Web Development",
    description:
      "React/Next.js frontends paired with Node.js/Express backends — one person owning the whole slice of the product.",
  },
  {
    title: "API Design & Database Architecture",
    description:
      "REST APIs and MySQL/MongoDB schemas designed around how your product actually queries and mutates data.",
  },
  {
    title: "Real-Time Features",
    description:
      "WebSockets, live dashboards, and chat that stay responsive under real concurrent load, not just in a demo.",
  },
  {
    title: "Performance Optimization",
    description:
      "Lighthouse score improvements, caching strategy, and code-splitting for apps that feel slow before they feel broken.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [];
