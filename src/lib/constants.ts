
import type { LucideIcon } from 'lucide-react';
import { 
  Briefcase, Zap, Users, BarChart3, Cpu, Database, Figma, FileText, GitMerge, LineChart, ListChecks, Palette, PieChart, Scaling, Lightbulb, Rocket, Target, TrendingUp, Award, Settings2, SearchCode,
  Linkedin, Twitter, BrainCircuit, Megaphone, Users2, DatabaseZap, Palette as PaletteIcon, Search, Landmark, LayoutPanelLeft, FilePlus2, Cog, Construction, BarChartBig, MessageSquare, ClipboardList, DraftingCompass, Projector, Image as ImageIcon
} from 'lucide-react';

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "My Story" },
  { href: "#journey", label: "Product Journey" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#metrics", label: "Impact" },
  { href: "#exploring", label: "Exploring" },
];

export const HERO_INFO = {
  name: "Subhra Das",
  title: "Product Manager",
  subtitle: "Entrepreneur turned Product Manager. Built Zyadashop (0 to 100K+ downloads, acquired by Mosambee). Expert in UX, data, and strategy for driving growth.",
  cta: "Explore My Journey",
  profileImageUrl: "https://placehold.co/160x160.png" // Placeholder image
};

export const CAREER_MILESTONES = [
  {
    id: "appyflux",
    title: "Zero to One: Founding Zyadashop",
    year: "2020-2022",
    description: "Co-founded Appyflux and built Zyadashop, a B2B e-commerce platform, from concept to 100K+ downloads and a 4.2-star rating. Led product strategy, UI/UX, and GTM, achieving 300% MAU growth.",
    image: "https://placehold.co/800x600.png",
    dataAiHint: "startup launch office",
    icon: Rocket,
    details: "Key Achievements: 4K+ merchants in 1 month, 10K web merchants in 2 months, 80% DAU increase post HUL/IDEO pilot."
  },
  {
    id: "acquisition",
    title: "Strategic Acquisition by Mosambee",
    year: "2022",
    description: "Successfully led Zyadashop through its acquisition by Mosambee, a leading fintech company. Oversaw the integration of Zyadashop’s SME commerce tools into Mosambee's Mod91 platform.",
    image: "https://placehold.co/800x600.png",
    dataAiHint: "business merger handshake",
    icon: Briefcase,
    details: "Impact: Boosted Mod91's B2B capabilities and achieved a 40% increase in client adoption post-integration."
  },
  {
    id: "mosambee_pm",
    title: "Product Leadership at Mosambee",
    year: "June 2022 – Present",
    description: "As Associate Product Manager, drove key product initiatives including Mod91's webView & iOS app development (enabling Tap-to-Pay in UAE), and optimized Mosambee’s landing page (50% traffic increase).",
    image: "https://placehold.co/800x600.png",
    dataAiHint: "fintech innovation team",
    icon: TrendingUp,
    details: "Further Impact: Reduced client queries by 50% via strategic documentation and automated Zyadashop ops, cutting manual effort by 80%."
  },
  {
    id: "achievements",
    title: "Industry Recognition & Fellowship",
    year: "2020-Present",
    description: "Consistently recognized for product excellence. Google Play’s Best Apps of 2022 (Hidden Gems - Zyadashop). Finalist in Y Combinator 2020, NSA 2021, and Google’s App Scale Academy 2022.",
    image: "https://placehold.co/800x600.png",
    dataAiHint: "awards display certificates",
    icon: Award,
    details: "Ranked 1st among 350+ candidates in NextLeap PM Fellowship (Graduation Project Score: 274/300)."
  }
];

export const ZYADASHOP_JOURNEY = [
  {
    id: "1",
    date: "2020 Q1",
    title: "Idea & Inception",
    description: "Identified B2B SME procurement gap. Zyadashop concept born, MVP planning.",
    icon: Lightbulb,
    metrics: ["Market Research", "UX Design"]
  },
  {
    id: "2",
    date: "2020 Q2",
    title: "MVP Launch & Rapid Merchant Acquisition",
    description: "Launched Zyadashop MVP. Acquired 4K+ merchants in 1 month with a 70% signup conversion rate.",
    icon: Rocket,
    metrics: ["4K+ Merchants", "70% Conversion"]
  },
  {
    id: "3",
    date: "2020 Q4 - 2021 Q1",
    title: "Scaling Users & Web Platform",
    description: "Scaled user base, achieved 300% MAU growth. Recognized as YC Finalist. Launched Zyadashop Web, onboarding 10K merchants in 2 months.",
    icon: TrendingUp,
    metrics: ["300% MAU Growth", "10K Web Merchants", "YC Finalist"]
  },
  {
    id: "4",
    date: "2021 Q2 - Q4",
    title: "100K Downloads & National Recognition",
    description: "Crossed 100K downloads with a 4.2-star rating. Finalist in NSA & Google App Scale Academy.",
    icon: Zap,
    metrics: ["100K+ Downloads", "4.2 Rating", "National Recognition"]
  },
  {
    id: "5",
    date: "2022 Q2",
    title: "Google Play's Best Apps Award",
    description: "Zyadashop recognized in Google Play’s Best Apps of 2022 (India - Hidden Gems category).",
    icon: Award,
    metrics: ["Google Play Award", "Sustained Growth"]
  },
  {
    id: "6",
    date: "2022 Q2",
    title: "Acquisition by Mosambee",
    description: "Appyflux (Zyadashop) acquired by Mosambee, strengthening its SME tech solutions market foothold.",
    icon: Briefcase,
    metrics: ["Successful Acquisition", "Strategic Integration"]
  }
];

export const CASE_STUDIES_DATA = [
  {
    id: "1",
    title: "BookMyShow: Auction Ticketing & E-Verification",
    description: "Designed an auction-based ticketing system and DigiLocker e-verification for high-demand events on BookMyShow to improve fan participation and reduce black market sales.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "event tickets concert",
    tags: ["Conceptual", "UX Design", "Problem Solving"],
    links: [
      { label: "View Details", url: "#", icon: FileText },
    ]
  },
  {
    id: "2",
    title: "Zomato: Smart Notification Text Reviews",
    description: "Developed a concept for a smart notification system for Zomato, allowing users to submit food reviews directly via phone/smartwatch prompts to increase review engagement.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "food app notification",
    tags: ["Conceptual", "Mobile UX", "Engagement"],
    links: [
      { label: "View Details", url: "#", icon: FileText },
    ]
  },
  {
    id: "3",
    title: "Goibibo: AI-Powered Travel Planner (GoPlanner)",
    description: "Conceptualized 'GoPlanner,' an AI-powered travel planning assistant for Goibibo, enabling users to chat, speak, or build trips for seamless itinerary creation and booking.",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "travel planning ai",
    tags: ["Conceptual", "AI/ML", "TravelTech"],
    links: [
      { label: "View Details", url: "#", icon: FileText },
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
  { name: "Product Strategy", icon: Target, level: 90 },
  { name: "Roadmapping", icon: Settings2, level: 90 },
  { name: "UI/UX Design", icon: PaletteIcon, level: 85 },
  { name: "Data-Driven Decision", icon: DatabaseZap, level: 90 },
  { name: "User Research", icon: Users, level: 90 },
  { name: "A/B Testing", icon: Scaling, level: 80 },
  { name: "Agile Methodology", icon: Zap, level: 95 },
  { name: "Gen AI Tools", icon: BrainCircuit, level: 80 },
  { name: "GTM Strategy", icon: Megaphone, level: 85 },
  { name: "Stakeholder Mgt.", icon: Users2, level: 85 },
  { name: "Amplitude", icon: BarChartBig, level: 80 },
];

export const METRICS_DATA = [
  { id: "downloads", label: "Zyadashop Downloads", value: 100000, suffix: "+", description: "Reached organically in 1.5 years" },
  { id: "mau", label: "MAU Growth (Zyadashop)", value: 300, suffix: "%", description: "Achieved within one year" },
  { id: "automation", label: "Ops Automation", value: 80, suffix: "%", description: "Manual effort reduction" },
  { id: "adoption", label: "Client Adoption (Mod91)", value: 40, suffix: "%", description: "Post-Zyadashop tools integration" },
];

export const EXPLORING_NOW_DATA = [
  {
    id: "1",
    title: "NextLeap PM Fellowship",
    description: "Top Fellow (Rank 1/350+). Honing advanced PM skills through intensive projects and mentorship. (July 2024 – Oct 2024)",
    icon: Award,
    tags: ["PM Fellowship", "Leadership", "Advanced PM"]
  },
  {
    id: "2",
    title: "AI in Product Management",
    description: "Exploring practical applications of GenAI and ML in product development, personalization, and analytics. Experimenting with GenAI tools for PM workflows.",
    icon: Cpu,
    tags: ["AI/ML", "GenAI", "Product Innovation"]
  },
  {
    id: "3",
    title: "Advanced Data Analysis & SQL",
    description: "Deepening expertise in SQL and data analysis techniques for complex user behavior insights, cohort analysis, and data-informed product strategies.",
    icon: Database,
    tags: ["Data Analysis", "SQL", "Product Analytics"]
  }
];

export const FOOTER_INFO = {
  name: "Subhra Das",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/subhra-das-pm/", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/subhradasq", icon: Twitter },
  ],
  copyright: `© ${new Date().getFullYear()} Subhra Das. All rights reserved.`
};
