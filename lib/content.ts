import {
  Megaphone,
  Share2,
  Palette,
  PenTool,
  Sparkles,
  FileText,
  Video,
  Camera,
  Film,
  Music2,
  LayoutTemplate,
  TrendingUp,
  Target,
  Lightbulb,
  Zap,
  Brain,
  Rocket,
  Gem,
  MessageCircle,
  BarChart3,
  Users,
  CheckCircle2,
  Heart,
  ShieldCheck,
  HandHeart,
  Trophy,
  GraduationCap,
  Flame,
} from "lucide-react";

export const stats = [
  { value: "50+", label: "Happy Clients" },
  { value: "200+", label: "Creative Projects" },
  { value: "100+", label: "Marketing Campaigns" },
  { value: "5+", label: "Creative Specialists" },
];

export const storyTimeline = [
  {
    number: "01",
    title: "Idea",
    description:
      "A small, ambitious idea: help businesses stand out through exceptional branding and honest creative work.",
  },
  {
    number: "02",
    title: "Agency Launch",
    description:
      "Ads by Effexia opens its doors, bringing strategy, design, and storytelling together under one roof.",
  },
  {
    number: "03",
    title: "Client Growth",
    description:
      "Startups, clinics, and growing brands partner with us to build memorable customer experiences.",
  },
  {
    number: "04",
    title: "Creative Expansion",
    description:
      "Our capabilities grow to include photography, videography, motion graphics, and music production.",
  },
  {
    number: "05",
    title: "Future Vision",
    description:
      "A studio built to keep evolving — combining strategy and craft to help brands grow with confidence.",
  },
];
export const services = [
  {
    key: "digitalMarketing",
    video: "digital-marketing.mp4",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Full-funnel campaigns that turn attention into growth.",
  },
  {
    key: "socialMedia",
    video: "social-media.mp4",
    icon: Share2,
    title: "Social Media Management",
    description: "Consistent, on-brand presence across every platform.",
  },
  {
    key: "branding",
    video: "branding.mp4",
    icon: Palette,
    title: "Branding",
    description: "Identity systems built to be instantly recognizable.",
  },
  {
    key: "graphicDesign",
    video: "graphic-design.mp4",
    icon: PenTool,
    title: "Graphic Design",
    description: "Visual design that carries your story with precision.",
  },
  {
    key: "logoDesign",
    video: "logo-design.mp4",
    icon: Sparkles,
    title: "Logo Design",
    description: "A distinct mark that anchors your entire identity.",
  },
  {
    key: "contentCreation",
    video: "content-creation.mp4",
    icon: FileText,
    title: "Content Creation",
    description: "Words and visuals crafted to actually get read.",
  },
  {
    key: "videoProduction",
    video: "video-production.mp4",
    icon: Video,
    title: "Video Production",
    description: "Cinematic storytelling from concept to final cut.",
  },
  {
    key: "photography",
    video: "photography.mp4",
    icon: Camera,
    title: "Photography",
    description: "Imagery that gives your brand a premium presence.",
  },
  {
    key: "motionGraphics",
    video: "motion-graphics.mp4",
    icon: Film,
    title: "Motion Graphics",
    description: "Animated detail that brings static ideas to life.",
  },
  {
    key: "musicProduction",
    video: "music-production.mp4",
    icon: Music2,
    title: "Music Production",
    description: "Original sound design tuned to your brand's tone.",
  },
  {
    key: "websiteDesign",
    video: "website-design.mp4",
    icon: LayoutTemplate,
    title: "Website Design",
    description: "Fast, modern sites built to convert visitors.",
  },
  {
    key: "performanceMarketing",
    video: "digital-marketing.mp4", // Fallback video since none was provided
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven media spend, optimized for ROI.",
  },
  {
    key: "advertising",
    video: "advertising.mp4",
    icon: Target,
    title: "Advertising Campaigns",
    description: "Bold campaigns designed to command attention.",
  },
  {
    key: "creativeStrategy",
    video: "creative-strategy.mp4",
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "The thinking that connects every deliverable.",
  },
];

export const whyChooseUs = [
  {
    icon: Zap,
    title: "Creative-First Approach",
    description: "Every solution starts with an idea worth noticing.",
  },
  {
    icon: Brain,
    title: "Strategic Thinking",
    description: "Creative work that's built on a clear business rationale.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Specialists across strategy, design, and production.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Momentum matters — we keep projects moving without shortcuts.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Craftsmanship and attention to detail in every deliverable.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "You always know where a project stands.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Marketing",
    description: "Decisions backed by performance, not guesswork.",
  },
  {
    icon: Heart,
    title: "Client-Centric Solutions",
    description: "Every strategy is shaped around your goals, not a template.",
  },
  {
    icon: CheckCircle2,
    title: "Results That Matter",
    description: "Measurable growth is the real deliverable.",
  },
];

export const teamMembers = [
  {
    key: "abinTPeter",
    name: "Abin T Peter",
    role: "Founder & Managing Director",
  },
  {
    key: "georgeShalomMathew",
    name: "George Shalom Mathew",
    role: "Co-Founder & Creative Director",
  },
  {
    key: "shibinMKuruvila",
    name: "Shibin M Kuruvila",
    role: "Digital Marketing Manager",
  },
  {
    key: "suryajithMS",
    name: "Suryajith MS",
    role: "Head of Video Production",
  },
  {
    key: "albinPK",
    name: "Albin PK",
    role: "Head of Music Production",
  },
  {
    key: "alishaPeter",
    name: "Alisha Peter",
    role: "Content Creator",
  },
] as const;
export const values = [
  { 
    icon: Lightbulb, 
    title: "Creativity",
    description: "We embrace bold ideas and think outside the box to craft unique, memorable solutions."
  },
  { 
    icon: Rocket, 
    title: "Innovation",
    description: "We constantly push boundaries, leveraging new technologies and methods to keep your brand ahead."
  },
  { 
    icon: ShieldCheck, 
    title: "Integrity",
    description: "We build lasting trust through transparency, honesty, and unwavering ethical standards."
  },
  { 
    icon: HandHeart, 
    title: "Collaboration",
    description: "We believe the best results come from working closely with our clients as true, dedicated partners."
  },
  { 
    icon: Trophy, 
    title: "Excellence",
    description: "We are committed to delivering the highest quality in every pixel, word, and strategy we produce."
  },
  { 
    icon: Target, 
    title: "Client Success",
    description: "Your growth is our ultimate metric of success. We align our goals directly with yours."
  },
  { 
    icon: GraduationCap, 
    title: "Continuous Learning",
    description: "We stay curious and constantly evolve our skills to meet the demands of a rapidly changing digital world."
  },
  { 
    icon: Flame, 
    title: "Passion",
    description: "We pour our energy and dedication into every project, because we truly love what we do."
  },
];

// export const values = [
//   { icon: Lightbulb, title: "Creativity" },
//   { icon: Rocket, title: "Innovation" },
//   { icon: ShieldCheck, title: "Integrity" },
//   { icon: HandHeart, title: "Collaboration" },
//   { icon: Trophy, title: "Excellence" },
//   { icon: Target, title: "Client Success" },
//   { icon: GraduationCap, title: "Continuous Learning" },
//   { icon: Flame, title: "Passion" },
// ];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const heroServices = [
  "Website Design",
  "Development",
  "Branding",
  "Marketing",
  "Video Production",
];

export const portfolioFilters = ["All", "Branding", "Web", "Marketing", "Video"];


// ─────────────────────────────────────────────
// TEAM DATA
// ─────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: "abin",
    name: "Abin T Peter",
    role: "Founder & Managing Director",
    image: "/images/team/abin.png",
    bio: "Visionary leader shaping the studio's creative direction.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: "george",
    name: "George Shalom Mathew",
    role: "Co-Founder & Creative Director",
    image: "/images/team/george.png",
    bio: "Crafting visual stories that resonate.",
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    id: "shibin",
    name: "Shibin M Kuruvila",
    role: "Digital Marketing Manager",
    image: "/images/team/shibin.png",
    socials: { linkedin: "#" },
  },
  {
    id: "suryajith",
    name: "Suryajith MS",
    role: "Head of Video Production",
    image: "/images/team/suryajith.png",
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    id: "albin",
    name: "Albin PK",
    role: "Head of Music Production",
    image: "/images/team/albin.png",
    socials: { linkedin: "#" },
  },
  {
    id: "alisha",
    name: "Alisha Peter",
    role: "Content Creator",
    image: "/images/team/alisha.jpeg",
    socials: { instagram: "#" },
  },
  {
    id: "punith",
    name: "Punith Moolya",
    role: "Lead Full Stack Engineer",
    image: "/images/team/punith.jpeg",
    bio: "Engineering premium digital experiences.",
    socials: { linkedin: "#", github: "#" },
  },
];