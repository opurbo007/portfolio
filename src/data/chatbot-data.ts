export interface Skill {
  name: string;
  level: "Advanced" | "Intermediate" | "Familiar";
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Language";
  description: string;
  usedIn: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  highlights: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  startDate: string;
  responsibilities: string[];
  technologies: string[];
  location: string;
  address: string;
}

export const skills: Skill[] = [
  {
    name: "React",
    level: "Advanced",
    category: "Frontend",
    description:
      "Building complex UIs with hooks, context API, custom hooks, and component composition. Experienced with state management patterns and performance optimization.",
    usedIn: ["Finance Tracker", "ShowBox", "Qoo-Media", "me&u (Cook together)", "EventX", "Website Speed Tester"],
  },
  {
    name: "Next.js",
    level: "Advanced",
    category: "Frontend",
    description:
      "Full-stack React framework using App Router, Server Components, API routes, SSR/SSG, middleware, and file-based routing. My go-to for production apps.",
    usedIn: ["Bond Wallet", "Remote Office Manager", "Daily Task", "Finance Tracker", "Drive Academy", "Haven Store", "Portfolio", "Techys Retail & IT", "Wheelline", "Okra Derby"],
  },
  {
    name: "Node.js",
    level: "Advanced",
    category: "Backend",
    description:
      "Server-side JavaScript runtime for building REST APIs, real-time apps, and microservices. Comfortable with event-driven architecture and async patterns.",
    usedIn: ["Remote Office Manager", "Daily Task", "Finance Tracker", "Haven Store"],
  },
  {
    name: "Express",
    level: "Advanced",
    category: "Backend",
    description:
      "Lightweight Node.js web framework for routing, middleware, authentication, and RESTful API design.",
    usedIn: ["Remote Office Manager", "Daily Task", "Finance Tracker"],
  },
  {
    name: "TypeScript",
    level: "Advanced",
    category: "Language",
    description:
      "Type-safe JavaScript for scalable applications. Used for defining interfaces, generics, enums, and ensuring code quality across frontend and backend.",
    usedIn: ["Bond Wallet", "Remote Office Manager", "Daily Task", "Haven Store", "me&u (Cook together)", "Techys Retail & IT", "Wheelline", "Okra Derby"],
  },
  {
    name: "MongoDB",
    level: "Advanced",
    category: "Database",
    description:
      "NoSQL document database for flexible schemas. Experience with aggregation pipelines, indexing, Mongoose ODM, and MongoDB Atlas.",
    usedIn: ["Finance Tracker", "Drive Academy", "Haven Store", "Portfolio"],
  },
  {
    name: "PostgreSQL",
    level: "Intermediate",
    category: "Database",
    description:
      "Relational database for structured data. Used with Prisma ORM for type-safe queries, migrations, and relational data modeling.",
    usedIn: ["Remote Office Manager", "Daily Task"],
  },
  {
    name: "Prisma",
    level: "Intermediate",
    category: "Database",
    description:
      "Next-generation ORM for Node.js and TypeScript. Used for database migrations, type-safe queries, and schema management with PostgreSQL.",
    usedIn: ["Daily Task", "Remote Office Manager"],
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    category: "Frontend",
    description:
      "Utility-first CSS framework for rapid UI development. I use it in almost every project for responsive, consistent designs.",
    usedIn: ["Nearly all projects"],
  },
  {
    name: "Electron",
    level: "Intermediate",
    category: "DevOps",
    description:
      "Desktop application framework using web technologies. Built cross-platform desktop tools.",
    usedIn: ["Website Speed Tester"],
  },
  {
    name: "PHP",
    level: "Intermediate",
    category: "Backend",
    description:
      "Server-side scripting for web applications. Experience with form handling, database integration, and traditional web development.",
    usedIn: ["Routine Management", "Leisure Life", "Amar Fosol", "Pure Fashion", "Student Portal", "Be Green"],
  },
  {
    name: "Python",
    level: "Familiar",
    category: "Language",
    description:
      "General-purpose programming language. Used for scripting, automation, and backend logic.",
    usedIn: [],
  },
];

export const projects: Project[] = [
  {
    title: "Techys Retail & IT",
    description:
      "Professional retail and IT services website for Techys, featuring a modern landing page, service showcases, and responsive design.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.mytechys.co.uk/retail",
    highlights: "Client-facing business website with polished UI and performance.",
  },
  {
    title: "Wheelline",
    description:
      "Wheelchair accessories and mobility solutions e-commerce website with product catalog and responsive layout.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.wheelline.co.uk/",
    highlights: "E-commerce platform focused on accessibility and mobility products.",
  },
  {
    title: "Okra Derby",
    description:
      "Okra restaurant website with online ordering system, menu browsing, and reservation features.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://okracfw.mytechys.co.uk/",
    highlights: "Full restaurant web app with online ordering capabilities.",
  },
  {
    title: "Bond Wallet",
    description:
      "Prize bond list and checker app. Users can search, filter, and check prize bond results against winning numbers.",
    tech: ["Next.js", "Tailwind CSS", "Shadcn/UI", "MongoDB"],
    repoUrl: "https://github.com/opurbo007/prize-bond-checker",
    liveUrl: "https://bondwallet.vercel.app",
    highlights:
      "Practical utility app with real-time data checking, search functionality, and clean UI.",
  },
  {
    title: "Remote Office Manager",
    description:
      "Remote office management application for tracking tasks, team members, and office operations.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "React-icons"],
    repoUrl: "https://github.com/opurbo007/remote-office-manager",
    highlights:
      "Full-stack app with PostgreSQL database, team management features, and role-based access.",
  },
  {
    title: "Daily Task",
    description:
      "Advanced personal task manager with categories, priorities, due dates, and productivity tracking.",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma ORM"],
    repoUrl: "https://github.com/opurbo007/daily-task",
    liveUrl: "https://justdoeverything.vercel.app/",
    highlights:
      "Personal productivity tool with Prisma ORM, relational data modeling, and intuitive task management.",
  },
  {
    title: "Finance Tracker",
    description:
      "Personal finance tracker with PWA support for offline usage. Track expenses, income, budgets, and financial goals.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "PWA"],
    repoUrl: "https://github.com/opurbo007/finance-tracker",
    liveUrl: "https://trackerfi.vercel.app/",
    highlights:
      "Full-stack PWA with MongoDB backend, offline-first architecture, and financial analytics.",
  },
  {
    title: "Website Speed Tester",
    description:
      "Desktop tool for testing and analyzing website loading speeds, performance metrics, and optimization suggestions.",
    tech: ["React", "Tailwind CSS", "Electron"],
    repoUrl: "https://github.com/opurbo007/security-scanner",
    highlights:
      "Cross-platform desktop application built with Electron for web performance analysis.",
  },
  {
    title: "me&u (Cook together)",
    description:
      "Video calling platform where users can cook together with shared recipes and real-time video interaction.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/opurbo007/recipe_video",
    liveUrl: "https://me-and-u.vercel.app/",
    highlights:
      "Real-time video communication app with recipe sharing and collaborative cooking features.",
  },
  {
    title: "Drive Academy",
    description:
      "Attendance management system for driving schools with PWA support, student tracking, and schedule management.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    repoUrl: "https://github.com/opurbo007/drive-academy",
    liveUrl: "https://ttc19.vercel.app/",
    highlights:
      "PWA-enabled attendance system with MongoDB backend for driving school operations.",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio website built with Next.js, featuring project showcases, skills section, and contact form.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Aceternity UI"],
    repoUrl: "https://github.com/opurbo007/portfolio",
    liveUrl: "https://portfolio-theta-hazel-45.vercel.app/",
    highlights:
      "Full-stack portfolio with MongoDB-backed contact form and modern UI animations.",
  },
  {
    title: "ShowBox",
    description:
      "Movie and TV show discovery app with search, trending content, detailed info, and TMDB API integration.",
    tech: ["React", "Redux", "TMDB API", "SCSS"],
    repoUrl: "https://github.com/opurbo007/showbox",
    liveUrl: "https://showbox-two.vercel.app/",
    highlights:
      "Media discovery platform with Redux state management and rich TMDB data integration.",
  },
  {
    title: "Qoo-Media",
    description:
      "YouTube-like streaming app with video search, channel browsing, and content discovery using RapidAPI.",
    tech: ["React", "RapidAPI", "Material UI"],
    repoUrl: "https://github.com/opurbo007/Qoo-media/",
    liveUrl: "https://qoo-media.vercel.app/",
    highlights:
      "Video streaming platform with search, categories, and channel-based content browsing.",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with city search, forecasts, and dynamic weather-based backgrounds.",
    tech: ["Vue.js", "OpenWeather API", "CSS"],
    repoUrl: "https://github.com/opurbo007/Weather-With-VUE-JS",
    liveUrl: "https://weather000.netlify.app/",
    highlights:
      "Weather app built with Vue.js and OpenWeather API with responsive, dynamic UI.",
  },
  {
    title: "Routine Management",
    description:
      "Academic routine scheduler with PDF export, email notifications, and role-based access control.",
    tech: ["PHP", "MySQL", "Tailwind CSS", "PHPMailer"],
    repoUrl: "https://github.com/opurbo007/Routine",
    highlights:
      "Full-featured academic scheduler with PDF generation, email alerts, and RBAC system.",
  },
  {
    title: "Haven Store",
    description:
      "Full-stack e-commerce platform with Sanity CMS for content management and Stripe for payments.",
    tech: ["Next.js", "TypeScript", "Sanity", "Stripe", "Tailwind CSS"],
    repoUrl: "https://github.com/opurbo007/havenstore",
    highlights:
      "Production-ready e-commerce with headless CMS, Stripe payments, and TypeScript throughout.",
  },
  {
    title: "EventX",
    description:
      "Event discovery and management platform for finding, creating, and managing events.",
    tech: ["React", "Tailwind CSS"],
    repoUrl: "https://github.com/opurbo007/eventx",
    liveUrl: "https://eventx-zeta.vercel.app/",
    highlights:
      "Event platform with search, filtering, and event creation capabilities.",
  },
  {
    title: "Leisure Life",
    description:
      "Tour and travel website with destination showcases, booking inquiries, and travel content.",
    tech: ["HTML", "Tailwind CSS", "PHP", "MySQL"],
    repoUrl: "https://github.com/opurbo007/tour_website",
    highlights:
      "Travel platform with destination browsing and booking inquiry system.",
  },
  {
    title: "Amar Fosol",
    description:
      "Agriculture marketplace connecting farmers directly with buyers for fresh produce.",
    tech: ["PHP", "MySQL", "JavaScript"],
    repoUrl: "https://github.com/opurbo007/farmar",
    highlights:
      "Marketplace platform bridging the gap between farmers and consumers.",
  },
  {
    title: "Pure Fashion",
    description:
      "E-commerce fashion site with product catalog, shopping cart, and order management system.",
    tech: ["PHP", "MySQL", "JavaScript"],
    repoUrl: "https://github.com/opurbo007/pure_fashion-an-e-commerce-website-",
    highlights:
      "Full e-commerce solution with catalog, cart, and order tracking.",
  },
  {
    title: "Student Portal",
    description:
      "Student management system with authentication, grade tracking, and admin dashboard.",
    tech: ["HTML", "PHP", "MySQL", "JavaScript"],
    repoUrl: "https://github.com/opurbo007/student_panal",
    highlights:
      "Educational portal with auth system, grade management, and admin controls.",
  },
  {
    title: "Be Green",
    description:
      "Nursery management system with product listings, admin panel, and inventory management.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    repoUrl: "https://github.com/opurbo007/Nursary-Management",
    highlights:
      "Nursery business management with product catalog and admin dashboard.",
  },
  {
    title: "Tea Station",
    description:
      "Responsive landing page for a tea shop with modern CSS animations and clean design.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/opurbo007/Project-I-Tea-Station-",
    highlights:
      "Polished landing page showcasing modern front-end design skills.",
  },
  {
    title: "Tom & Jerry Game",
    description:
      "Fun browser-based game built with vanilla JavaScript, featuring character animations and game mechanics.",
    tech: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/opurbo007/Tom-Jerry-Game",
    highlights:
      "Interactive browser game demonstrating vanilla JS game development skills.",
  },
];

export const experience: Experience = {
  company: "Techy's World Ltd",
  role: "Full-Stack Developer",
  duration: "May 2024 - Present",
  startDate: "2024-05",
  location: "Nottingham, United Kingdom",
  address: "62 High St., Long Eaton, Nottingham, NG10 1LP, UK",
  responsibilities: [
    "Developing and maintaining full-stack web applications using Next.js, React, and Node.js",
    "Building RESTful APIs and integrating third-party services",
    "Working with MongoDB and PostgreSQL databases",
    "Implementing responsive UI designs with Tailwind CSS",
    "Collaborating with team members on client projects",
    "Deploying and managing applications on Vercel and cloud platforms",
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Vercel",
  ],
};

export const personalInfo = {
  name: "Opu Pal",
  title: "Full-Stack Developer",
  location: "Nottingham, UK",
  email: "opu.pal.dev@gmail.com",
  github: "https://github.com/opurbo007",
  linkedin: "https://www.linkedin.com/in/opu-pal/",
  portfolio: "https://opupal.dev",
  cv: "/opu_pal_cv.pdf",
  bio: "A passionate full-stack web developer based in Nottingham, UK, specializing in the MERN stack, Next.js, and modern web technologies. I love building practical, user-friendly applications.",
  education: "B.Sc. in CSE, Dhaka International University",
};

export const quickStartChips = [
  "What are your strongest skills?",
  "Tell me about your latest project",
  "What's your work experience?",
  "Let's talk!",
];

export function buildSystemPrompt(): string {
  const skillsList = skills
    .map(
      (s) =>
        `${s.name} (${s.level}) — ${s.usedIn.length > 0 ? s.usedIn.slice(0, 4).join(", ") : "learning"}`,
    )
    .join(", ");

  const projectsList = projects
    .map((p) => {
      const links = [
        p.liveUrl ? `demo:${p.liveUrl}` : "",
        p.repoUrl ? `repo:${p.repoUrl}` : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `${p.title}: ${p.description.slice(0, 100)} [${p.tech.join(", ")}] ${links}`;
    })
    .join("\n");

  return `You are Opu Pal's AI assistant on his portfolio. Be concise, friendly, and helpful.

RULES:
- Use **markdown**: **bold**, - bullets, [links](url).
- Max 3-4 sentences + bullets. No walls of text.
- Include [live demo](url) or [source code](repo) links for projects.
- On hiring/contact interest → suggest the contact form on this page.
- Stay on topic about Opu's work. If unrelated, politely redirect.

INFO:
Name: Opu Pal | Full-Stack Developer | Nottingham, UK
Email: opu.pal.dev@gmail.com | GitHub: https://github.com/opurbo007 | LinkedIn: https://www.linkedin.com/in/opu-pal/ | CV: /opu_pal_cv.pdf
Education: ${personalInfo.education}

EXPERIENCE:
${experience.role} at ${experience.company} (${experience.duration})
Location: ${experience.address}
Responsibilities: ${experience.responsibilities.join("; ")}
Technologies: ${experience.technologies.join(", ")}

SKILLS:
${skillsList}

PROJECTS (24 total):
${projectsList}`;
}