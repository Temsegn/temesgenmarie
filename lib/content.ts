export const siteConfig = {
  name: "Temesgen Marie",
  monogram: "TM",
  title: "Temesgen Marie — Backend, Mobile & Web Developer",
  description:
    "Backend-focused software engineer building scalable systems, real-time platforms, and SaaS products across fintech, video infrastructure, delivery logistics, and education tech.",
  url: "https://temesgen-marie.dev",
  email: "temesgenmarie97@gmail.com",
  phone: "099 232 7207",
  phoneHref: "tel:+251992327207",
  github: "https://github.com/Temsegn",
  linkedin: "https://linkedin.com/in/temesgenmarie",
  cvPath: "/Temesgen_Marie_CV.pdf",
  location: "Ethiopia",
  languages: ["English", "Amharic"],
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const

export const hero = {
  eyebrow: "AVAILABLE FOR OPPORTUNITIES",
  name: "Temesgen Marie",
  subheadline:
    "Backend, Mobile & Web Developer building scalable systems, real-time platforms, and SaaS products.",
  support:
    "Backend-focused engineer with a Computer Science degree. Ships production systems across fintech-style wallets, video infrastructure, delivery logistics, and education technology.",
  stats: [
    { label: "2 Years Experience" },
    { label: "NestJS · Flutter · React" },
  ],
}

export const about = {
  bio: [
    "Backend-focused software engineer with a B.Sc. in Computer Science from Bahir Dar University (GPA 3.78/4.0). I design and ship production-grade backend systems, cross-platform apps, and real-time SaaS platforms.",
    "Work spans fintech-style wallets, video conferencing infrastructure, delivery logistics, and education technology — systems where correctness, auth, and scale actually matter.",
    "How I work: system design, database design, architecture, and domain engineering — with APIs built to stay reliable under load.",
  ],
  highlights: [
    { label: "Focus", value: "Backend systems & real-time platforms" },
    { label: "Education", value: "B.Sc. CS · GPA 3.78/4.0" },
    { label: "Languages", value: "English · Amharic (fluent)" },
    {
      label: "Approach",
      value: "System design · Database design · Architecture · Domain engineering",
    },
  ],
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  current?: boolean
  description: string
}

export const experience: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "IDUAR Software Company",
    period: "Mar 2025 – Current",
    current: true,
    description:
      "Scaling a distributed CRM platform on the MERN stack. Engineering secure RESTful APIs and high-performance React dashboards; automating sales pipelines and data management workflows for enterprise clients.",
  },
  {
    role: "Backend & Mobile App Developer",
    company: "Team Work IT Solution",
    period: "Jun 2026 – Current",
    current: true,
    description:
      "Building a live-streaming mobile app with NestJS — real-time WebSocket connections and PostgreSQL query optimization for user sessions, stream metadata, and chat logs.",
  },
  {
    role: "Backend & Mobile App Developer",
    company: "Dream More Company",
    period: "Sep 2024 – May 2025",
    description:
      "Instructed and developed Flutter, Express, REST API, and MongoDB solutions as a full-stack team lead. Delivered mobile and backend solutions from architecture through deployment.",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Mesa Gebeya Web App",
    period: "Jun 2025 – Dec 2025",
    description:
      "Delivered a full-stack e-commerce web application using the MERN stack for an independent client.",
  },
  {
    role: "Backend & Mobile App Developer",
    company: "Wisdomwalk Application",
    period: "Project engagement",
    description:
      "Built the WisdomWalk mobile application using Flutter, Express.js, REST APIs, and MongoDB with a designated backend architecture.",
  },
]

export type FeaturedProject = {
  name: string
  category: string
  role: string
  stack: string[]
  description: string
  highlights: string[]
  featured?: boolean
  href?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "ServeLink",
    category: "Education, Services & Earning Platform",
    role: "Lead Backend/Full-Stack",
    stack: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Flutter",
      "Next.js",
      "WebSockets",
      "Firebase",
      "Docker",
    ],
    description:
      "Ethiopia-focused SaaS connecting students, teachers, freelancers, and civil servants through learning, service delivery, and a Learn → Do Task → Earn workflow.",
    highlights: [
      "Modular NestJS monolith with transactional consistency and role-based authorization across student, teacher, freelancer, and admin workflows.",
      "Community structures by school, woreda, zone, and region; service booking and 1:1/1:M learning sessions; wallet and escrow-ready payment infrastructure.",
      "Migration architecture for large government-user datasets, plus badges, professions, and verification systems.",
    ],
    featured: true,
    href: "https://www.servelinks.com",
  },
  {
    name: "Equilex",
    category: "Legal Consultation Platform",
    role: "Full-Stack",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Real-Time Chat", "Payments"],
    description:
      "Full-stack platform connecting clients with attorneys for legal consultation and dispute resolution — with payments and real-time chat.",
    highlights: [
      "Client–attorney matching with role-based access for consultation and case workflows.",
      "Real-time chat between clients and attorneys for ongoing legal communication.",
      "Integrated payment flows alongside consultation sessions; Next.js for frontend and backend with PostgreSQL.",
    ],
    featured: true,
    href: "https://equilex.vercel.app",
  },
  {
    name: "MeetUp / Conference SaaS",
    category: "Real-Time Collaboration Platform",
    role: "Backend/Full-Stack",
    stack: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "mediasoup",
      "WebRTC",
      "Socket.IO",
      "Next.js",
      "Docker",
    ],
    description:
      "Multi-tenant video-conferencing SaaS with organizations, subscriptions, and real-time meeting rooms.",
    highlights: [
      "Core mediasoup SFU architecture: WebRTC media routing, producer/consumer lifecycle, multi-participant audio and video.",
      "Real-time screen sharing, host/co-host moderation, waiting rooms, and a collaborative whiteboard.",
    ],
    featured: true,
  },
  {
    name: "Wisdom Walk",
    category: "Cross-Platform Mobile Application",
    role: "Mobile/Full-Stack",
    stack: ["Flutter", "Dart", "REST APIs", "Firebase"],
    description:
      "Feature-based Flutter architecture with structured content flows, state management, and reusable mobile components.",
    highlights: [
      "Modular feature architecture with clear separation of concerns across mobile and backend surfaces.",
      "Structured content flows and reusable components designed for long-term maintainability.",
    ],
  },
]

export type AdditionalProject = {
  name: string
  tag: string
  stack: string[]
  description: string
  href?: string
}

export const additionalProjects: AdditionalProject[] = [
  {
    name: "MAS Gebeya",
    tag: "Full-Stack",
    stack: ["Next.js", "React", "MongoDB", "Node.js"],
    description:
      "Ethiopian marketplace for vehicles, properties, land, and machines — listings, dealer chat, and deal workflows.",
    href: "https://mas-gebeya.vercel.app/",
  },
  {
    name: "CRM Platform",
    tag: "Full-Stack",
    stack: ["NestJS", "PostgreSQL", "React", "Next.js"],
    description:
      "Relational data modeling, backend modules, and authorization layers for lead management and dashboard reporting.",
  },
  {
    name: "Kids Education App (NeoGenia)",
    tag: "Full-Stack/Product",
    stack: ["Next.js", "AI-Assisted Features"],
    description:
      "Child-focused learning with AI-assisted recommendations, paired with a parent monitoring dashboard.",
  },
  {
    name: "Task Management System",
    tag: "Backend/Full-Stack",
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js"],
    description:
      "Project and task modeling with assignment, status tracking, role-based permissions, attendance workflows, and productivity dashboards.",
    href: "https://kabba-admin-attendance-tracker.vercel.app/",
  },
  {
    name: "CookieCMP",
    tag: "Full-Stack",
    stack: ["Next.js", "NestJS", "PostgreSQL", "WordPress"],
    description:
      "GDPR/CCPA-oriented consent management SaaS with banner builder, site scanning, and audit logs.",
    href: "https://cookiescmp.vercel.app/",
  },
]

export const skillGroups = [
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "Django",
      "Spring Boot",
      "TypeScript",
      "REST APIs",
      "WebSockets",
      "Socket.IO",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Flutter", "Dart"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Prisma", "MySQL", "MongoDB"],
  },
  {
    title: "Real-Time",
    skills: ["WebRTC", "mediasoup", "LiveKit", "Socket.IO"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "Git", "GitHub", "GitLab", "CI/CD", "Firebase"],
  },
  {
    title: "Architecture",
    skills: [
      "SaaS",
      "Modular Monoliths",
      "RBAC",
      "Authentication",
      "Payments",
      "Data Migration",
      "Transactional Systems",
    ],
  },
] as const

export const strengths = [
  "Team Leadership",
  "Effective Communication",
  "Critical Thinking",
]

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "Bahir Dar University",
  gpa: "3.78/4.0",
}

export const contact = {
  headline: "Let's build something reliable.",
  subtext:
    "Open to full-time roles, contract work, and systems that need careful backend engineering.",
}
