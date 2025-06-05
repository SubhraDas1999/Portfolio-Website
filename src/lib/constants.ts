import type { LucideIcon } from 'lucide-react';
import { Briefcase, Zap, Users, BarChart3, Cpu, Database, Figma, FileJson, GitMerge, LineChart, ListChecks, Palette, PieChart, Scaling, Lightbulb, Rocket, Target, TrendingUp, UserCheck, Settings2, SearchCode } from 'lucide-react';

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "My Story" },
  { href: "#journey", label: "Product Journey" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#metrics", label: "Impact" },
  { href: "#exploring", label: "Exploring" },
  { href: "#optimizer", label: "AI Optimizer" },
];

export const HERO_INFO = {
  name: "Subhra Das",
  title: "Product Manager",
  subtitle: "Crafting impactful digital experiences for B2C & B2B in Fintech and SME Tech.",
  cta: "Explore My Journey"
};

export const CAREER_MILESTONES = [
  {
    id: "startup",
    title: "The Leap: Zyadashop",
    year: "2019-2021",
    description: "Co-founded Zyadashop, a B2B e-commerce platform. Led product from concept to market, achieving significant user adoption and growth.",
    image: "https://placehold.co/1200x800.png",
    dataAiHint: "startup team",
    icon: Rocket,
    details: "Key Learnings: 0 to 1 product development, agile methodologies, user acquisition strategies, team building."
  },
  {
    id: "acquisition",
    title: "Milestone: Acquisition by Mosambee",
    year: "2021",
    description: "Successfully navigated Zyadashop's acquisition by Mosambee, a leading fintech company. Integrated product lines and teams.",
    image: "https://placehold.co/1200x800.png",
    dataAiHint: "business handshake",
    icon: Target,
    details: "Key Learnings: M&A processes, post-merger integration, strategic alignment, stakeholder management."
  },
  {
    id: "scaling",
    title: "Growth Phase: Scaling at Mosambee",
    year: "2021-Present",
    description: "Driving product growth at Mosambee, focusing on innovative fintech solutions for SMEs. Leading cross-functional teams to deliver high-impact features.",
    image: "https://placehold.co/1200x800.png",
    dataAiHint: "growth chart",
    icon: TrendingUp,
    details: "Key Learnings: Scaling products, data-driven decision making, enterprise product management, market expansion."
  },
  {
    id: "fellowship",
    title: "Recognition: PM Fellowship & Awards",
    year: "2020-2022",
    description: "Acknowledged for product leadership and innovation. Finalist in Y Combinator 2020, NSA 2021, and Google App Scale Academy 2022. Ranked 1st in NextLeap PM Fellowship.",
    image: "https://placehold.co/1200x800.png",
    dataAiHint: "award ceremony",
    icon: UserCheck,
    details: "Key Learnings: Advanced PM frameworks, leadership development, networking with industry experts."
  },
  {
    id: "next",
    title: "What's Next?",
    year: "Future",
    description: "Eager to leverage my experience to build and scale innovative products that solve real-world problems. Passionate about AI, Web3, and sustainable tech.",
    image: "https://placehold.co/1200x800.png",
    dataAiHint: "future technology",
    icon: Lightbulb,
    details: "Currently exploring new opportunities and side projects in emerging technologies."
  }
];

export const ZYADASHOP_JOURNEY = [
  {
    id: "1",
    date: "2019 Q2",
    title: "Idea & Inception",
    description: "Identified gap in B2B SME procurement. Zyadashop concept born.",
    icon: Lightbulb,
    metrics: ["Market Research", "MVP Planning"]
  },
  {
    id: "2",
    date: "2019 Q4",
    title: "MVP Launch",
    description: "Launched Zyadashop MVP to early adopters. Gathered initial feedback.",
    icon: Rocket,
    metrics: ["100+ Beta Users", "Iterative Development"]
  },
  {
    id: "3",
    date: "2020 Q2",
    title: "Growth & Traction",
    description: "Scaled user base, enhanced features based on feedback. YC Finalist recognition.",
    icon: TrendingUp,
    metrics: ["10K+ Downloads", "Feature Expansion"]
  },
  {
    id: "4",
    date: "2020 Q4",
    title: "MAU Surge",
    description: "Achieved 300% MAU growth through targeted marketing and product improvements.",
    icon: Users,
    metrics: ["300% MAU Growth", "Improved Retention"]
  },
  {
    id: "5",
    date: "2021 Q2",
    title: "Road to 100K",
    description: "Crossed the 100K downloads milestone. NSA & Google App Scale Academy Finalist.",
    icon: Zap,
    metrics: ["100K+ Downloads", "National Recognition"]
  },
  {
    id: "6",
    date: "2021 Q3",
    title: "Acquisition by Mosambee",
    description: "Zyadashop acquired by Mosambee, marking a new chapter.",
    icon: Briefcase,
    metrics: ["Successful Exit", "Strategic Integration"]
  }
];

export const CASE_STUDIES_DATA = [
  {
    id: "1",
    title: "Fintech Product Revamp for SME Lending",
    description: "Led the redesign of a key lending product at Mosambee, improving user experience and conversion rates.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "fintech app",
    tags: ["Fintech", "UX/UI", "B2B"],
    links: [
      { label: "View on Notion", url: "#" , icon: FileJson}, // Replace with actual link
      { label: "Figma Prototype", url: "#" , icon: Figma},   // Replace with actual link
    ]
  },
  {
    id: "2",
    title: "Zyadashop: 0 to 100K Downloads Journey",
    description: "Detailed case study on building and scaling Zyadashop, covering product strategy, growth hacking, and challenges.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "mobile app",
    tags: ["Startup", "Growth", "B2B E-commerce"],
    links: [
      { label: "Read on Medium", url: "#" , icon: FileJson}, // Replace with actual link
    ]
  },
  {
    id: "3",
    title: "Automating SME Onboarding Process",
    description: "Designed and implemented an automated onboarding system, reducing manual effort by 50% and improving TAT.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "automation workflow",
    tags: ["Automation", "SME Tech", "Process Improvement"],
    links: [
      { label: "Google Slides Deck", url: "#", icon: FileJson }, // Replace with actual link
    ]
  }
];

interface Skill {
  name: string;
  icon: LucideIcon;
  level?: number; // Optional: for progress bar, 0-100
}

export const PM_SKILLS: Skill[] = [
  { name: "SQL", icon: Database, level: 90 },
  { name: "Jira", icon: ListChecks, level: 95 },
  { name: "Mixpanel", icon: BarChart3, level: 85 },
  { name: "Figma", icon: Figma, level: 90 },
  { name: "Google Analytics", icon: PieChart, level: 80 },
  { name: "Agile Methodology", icon: Zap, level: 95 },
  { name: "Product Strategy", icon: Target, level: 90 },
  { name: "Data Analysis", icon: LineChart, level: 85 },
  { name: "User Research", icon: Users, level: 90 },
  { name: "API Design", icon: GitMerge, level: 75 },
  { name: "A/B Testing", icon: Scaling, level: 80 },
  { name: "Roadmapping", icon: Settings2, level: 90 },
];

export const METRICS_DATA = [
  { id: "downloads", label: "App Downloads", value: 100000, suffix: "+", description: "Zyadashop" },
  { id: "dau", label: "DAU Increase", value: 80, suffix: "%", description: "Key Product Initiative" },
  { id: "effort", label: "Manual Effort Reduction", value: 50, suffix: "%", description: "Automation Project" },
  { id: "mau", label: "MAU Growth (Zyadashop)", value: 300, suffix: "%", description: "During peak scaling" },
];

export const EXPLORING_NOW_DATA = [
  {
    id: "1",
    title: "Advanced SQL for Product Analytics",
    description: "Deepening SQL skills for complex cohort analysis and funnel optimization. Building custom dashboards.",
    icon: Database,
    tags: ["SQL", "Data Analysis", "Product Analytics"]
  },
  {
    id: "2",
    title: "AI Recommendation System for Swiggy (Concept)",
    description: "Exploring the architecture and algorithms behind a personalized AI-driven recommendation engine for a food delivery platform.",
    icon: Cpu,
    tags: ["AI/ML", "Recommendation Systems", "Concept Project"]
  },
  {
    id: "3",
    title: "Web3 & Decentralized Technologies",
    description: "Learning about blockchain fundamentals, smart contracts, and potential applications in fintech and identity.",
    icon: SearchCode,
    tags: ["Web3", "Blockchain", "Emerging Tech"]
  }
];

export const FOOTER_INFO = {
  name: "Subhra Das",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/subhra-das-pm/", icon: Users }, // Example, use appropriate icons
    { name: "Twitter", url: "https://x.com/subhradasq", icon: Users }, // Example
    { name: "Medium", url: "#", icon: Users } // Example
  ],
  copyright: `© ${new Date().getFullYear()} Subhra Das. All rights reserved.`
};
