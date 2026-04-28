import type {
  ContactMethod,
  Highlight,
  NavSection,
  PostPreview,
  Profile,
  Project,
  Service,
  SocialLink,
  TimelineItem,
  ToolGroup
} from "./types";

export const navSections: Array<{ id: NavSection; label: string; eyebrow: string }> = [
  { id: "about", label: "About", eyebrow: "Positioning" },
  { id: "resume", label: "Resume", eyebrow: "Experience" },
  { id: "services", label: "Services", eyebrow: "Offerings" },
  { id: "portfolio", label: "Portfolio", eyebrow: "Selected work" },
  { id: "blog", label: "Blog", eyebrow: "Insights" },
  { id: "contact", label: "Contact", eyebrow: "Start a project" }
];

export const profile: Profile = {
  name: "Mohammed Hisham Haris",
  role: "Full-Stack Web Developer & Digital Growth Specialist",
  location: "Kannur, Kerala",
  availability: "Taking on new clients — local & remote",
  tagline: "I build high-converting websites for businesses that deserve a better online presence.",
  overview:
    "Most local businesses have great service and loyal customers — but their website is costing them clients every single day. I fix that. Professional websites, reputation systems, and digital strategies that turn your Google presence into a lead-generation machine.",
  portraitLabel: "MH",
  portraitNote: ""
};



export const highlights: Highlight[] = [
  {
    title: "Your website should work as hard as you do",
    description:
      "A plumber with 200 five-star reviews shouldn't have a website from 2011. I build sites with clear calls-to-action, booking flows, and trust signals that turn visitors into paying clients."
  },
  {
    title: "One person. Zero handoff gaps.",
    description:
      "No agency overhead, no miscommunication chains. I handle design, development, deployment, and ongoing support — so your project stays on track and on budget."
  },
  {
    title: "I understand business — not just code",
    description:
      "Before web development, I managed online communities and digital operations with thousands of active users. I know what keeps customers coming back — and I build that into every site."
  }
];

export const servicePillars: string[] = [
  "Professional websites for HVAC, plumbing, electrical & roofing companies",
  "Google Maps optimization & local visibility",
  "Reputation management & automated review systems",
  "High-converting landing pages with booking integration",
  "Full-stack web applications & custom solutions"
];

export const services: Service[] = [
  {
    title: "Business Website Design & Build",
    summary:
      "A professional, mobile-first website built specifically for your business — with your real reviews, services, and booking flow. Most clients go live within a week.",
    deliverables: ["5-page responsive website", "Service booking integration", "Google reviews section", "SEO-ready structure", "Ongoing maintenance available"]
  },
  {
    title: "Reputation & Review Management",
    summary:
      "94% of consumers avoid a business after reading negative reviews. I monitor, respond to, and systematically improve your Google rating — so you stop losing clients to competitors.",
    deliverables: ["Review monitoring & response", "Automated review request system", "Google Maps optimization", "Monthly performance reports"]
  },
  {
    title: "Full-Stack Development",
    summary:
      "Need more than a standard website? Custom web applications, dashboards, client portals, and automation tools — built with modern technology that scales with your business.",
    deliverables: ["React & Next.js applications", "API & database design", "AI-assisted automation", "Deployment & hosting"]
  }
];

export const processSteps: Highlight[] = [
  {
    title: "Audit",
    description: "I pull up your Google Maps listing, your reviews, your current site, and your competitors — and show you exactly where you're losing potential clients."
  },
  {
    title: "Build",
    description: "Within days, you get a live website preview built around your actual services and reviews. Most business owners say yes on the spot because they've needed this for years."
  },
  {
    title: "Grow",
    description: "After launch, I help you climb the local rankings, collect more 5-star reviews, and turn your online presence into a consistent lead-generation engine."
  }
];

export const experience: TimelineItem[] = [
  {
    period: "2024 – Present",
    title: "Freelance Web Developer & Digital Consultant",
    organization: "Independent Practice",
    description:
      "Building professional websites and digital growth systems for local service businesses. Specializing in high-converting sites for HVAC, plumbing, electrical, and roofing companies — turning strong Google reputations into consistent online client acquisition.",
    placeholder: false
  },
  {
    period: "2024 – Present",
    title: "Full-Stack Development Program",
    organization: "GTech — MuLearn",
    description:
      "Advanced full-stack training covering React, Node.js, TypeScript, databases, API architecture, and cloud deployment. Building production-grade applications alongside active client work.",
    placeholder: false
  },
  {
    period: "2019 – 2023",
    title: "Digital Operations & Community Management",
    organization: "Roblox Platform — Multiple Groups",
    description:
      "Managed large-scale online communities and game development groups with thousands of active users. Handled team coordination, content strategy, user retention systems, and revenue operations — building a deep understanding of what keeps customers engaged and coming back.",
    placeholder: false
  }
];

export const education: TimelineItem[] = [
  {
    period: "Current",
    title: "Full-Stack Development Program",
    organization: "GTech — MuLearn",
    description:
      "Comprehensive program covering modern web development end-to-end: React, TypeScript, Node.js, databases, cloud deployment, and professional development practices.",
    placeholder: false
  },
  {
    period: "Ongoing",
    title: "Applied Learning & Real-World Projects",
    organization: "Self-directed + Client Work",
    description:
      "Sharpening skills daily through real client projects, advanced coursework, AI-assisted development workflows, and deep-dives into 3D web graphics, automation, and business growth strategies.",
    placeholder: false
  }
];

export const toolGroups: ToolGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "MongoDB", "REST APIs", "Python", "SQL", "Firebase"]
  },
  {
    title: "Business Tools",
    items: ["Figma", "Git & GitHub", "AI Workflows", "Google Maps API", "Netlify / Vercel", "Analytics"]
  }
];

export const projects: Project[] = [
  {
    category: "Developer portfolio",
    title: "Cinematic Portfolio Website",
    summary:
      "This site — a dark, editorial-themed portfolio with cinematic entrance sequences, glassmorphism cards, ambient lighting effects, and a custom CSS animation engine. Built entirely from scratch.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    outcome: "End-to-end design and development showcasing advanced frontend craft and motion design sensibility.",
    accent: "gold",
    placeholder: false
  },
  {
    category: "Cinematic experience",
    title: "IVORY Operations",
    summary:
      "An Awwwards-grade cinematic website featuring React Three Fiber for 3D elements, custom GLSL shaders, GSAP scroll choreography, and WebGL particle systems.",
    stack: ["Next.js", "Three.js", "GLSL Shaders", "GSAP"],
    outcome: "Pushed the boundaries of browser-based 3D rendering and scroll-driven narrative design.",
    accent: "plum",
    placeholder: false
  },
  {
    category: "Intelligence platform",
    title: "CCTV Intelligence Dashboard",
    summary:
      "A geospatial intelligence dashboard with CesiumJS 3D globe visualization, live CCTV video feed integration, spatial data overlays, and real-time monitoring capabilities.",
    stack: ["CesiumJS", "React", "Video Streaming", "GIS"],
    outcome: "Complex spatial data integrated with live video feeds in a performant, browser-based 3D environment.",
    accent: "teal",
    placeholder: false
  },
  {
    category: "Creative build",
    title: "Windows 95 Portfolio Theme",
    summary:
      "A pixel-perfect recreation of the Windows 95 desktop as a portfolio website — functional window chrome, taskbar, boot sequence, and interactive desktop apps.",
    stack: ["React", "Tailwind CSS", "Custom UI System", "State Management"],
    outcome: "Demonstrates deep CSS mastery, interaction design, and creative problem-solving ability.",
    accent: "red",
    placeholder: false
  }
];

export const posts: PostPreview[] = [
  {
    category: "Local business",
    title: "Your competitor has a worse rating than you — but they're getting more clients. Here's why.",
    description:
      "How a professional website with clear CTAs, real testimonials, and a booking system can outperform a competitor with better reviews but a terrible online presence.",
    readTime: "8 min read",
    placeholder: false,
    fullContent: `There are 8 billion people on the planet and only 7,000 of them know this combination.

5 million local businesses on Google Maps are losing clients every day because of bad websites and low ratings — and none of them know you can fix it in an hour.

## The insight that makes this work

Local service businesses — HVAC, plumbing, electrical, air conditioning, pest control, roofing — have some of the highest profit margins of any business category. A single HVAC job pays $300–800 and a roofing project pays $5,000–15,000.

These businesses don't compete on price — they compete on **trust and visibility**, and most of them are completely blind to how bad their digital presence is because they're too busy doing the actual work.

The businesses with the worst websites but the highest profit margins? HVAC, plumbing, electricians, pest control, auto repair, roofing. A single new client from a better website pays for your entire service fee in one job.

## Part 1 — The website problem

Open Google Maps. Search "HVAC near me" or "plumber near me" in any city. Look for businesses with good ratings but no website — or an obviously outdated one.

These businesses already have proof of quality. Real customers leaving real reviews. They just have **no front door online.**

Take their business name, their services from the Google Maps profile, and their best customer reviews. Within an hour, you can have a complete professional website ready to show them — with their real services, real reviews, and real booking flow.

You show them the live preview and most say yes on the spot. Because they've been meaning to fix this for years and never had time.

### What a professional website includes:
- **Hero header** with their main service and years of experience
- **Service booking section** with all their services listed
- **Testimonials section** using their real Google reviews
- **About Us section** emphasizing experience and trust signals
- **Clear call-to-action buttons** throughout

## Part 2 — The reputation problem

Every business on Google Maps with under 4.2 stars is actively losing customers. Studies show **94% of consumers avoid a business after reading negative reviews.** A restaurant going from 3.8 to 4.3 stars increases revenue by an average of 9%.

The fix is simple — monitor Google Maps reviews, respond to every review professionally, and implement a system to generate more positive reviews from happy customers. The business owner does absolutely nothing.

Businesses that actively request reviews after good service consistently average **4.5+ stars within 90 days.** That's the kind of transformation that pays for itself many times over.

## Part 3 — The visibility problem

Most of these businesses can't be found online at all. An electrician with no website. A plumber with a 4.7 rating and a site from 2011. An HVAC company with 300 reviews and no online booking.

They're all already on Google Maps. Already making money. They just don't know how much more they're leaving on the table.

## The bottom line

A plumber with 200 five-star reviews shouldn't have a website from 2011. An HVAC company with 300 reviews shouldn't have no online booking. An electrician who does great work shouldn't be invisible online.

**These businesses have earned their reputation. They just need someone to build the front door.**

That's what I do. Professional websites, reputation management, and digital strategies that turn great Google reviews into consistent client acquisition.

Your first client is one Google Maps search away.`
  },
  {
    category: "Reputation",
    title: "From 3.8 to 4.5 stars in 90 days — the review system most businesses don't know about",
    description:
      "A simple, automated approach to requesting reviews from happy customers and climbing Google's ranking algorithm.",
    readTime: "4 min read",
    placeholder: false,
    comingSoon: true
  },
  {
    category: "Growth strategy",
    title: "What a $500 website needs to convert for a local service business",
    description:
      "The exact sections, trust signals, and call-to-action patterns that turn a simple 5-page website into a lead-generation machine.",
    readTime: "6 min read",
    placeholder: false,
    comingSoon: true
  }
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "Hishamharismeet@gmail.com",
    detail: "Best for project inquiries and detailed briefs.",
    placeholder: false
  },
  {
    label: "WhatsApp",
    value: "+91 75590 15380",
    detail: "For quick conversations and scheduling calls.",
    placeholder: false
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    handle: "@hishamharis",
    url: "https://github.com/hishamharis",
    icon: "github" as const
  },
  {
    name: "X (Twitter)",
    handle: "@hishamharismeet",
    url: "https://x.com/hishamharismeet",
    icon: "x" as const
  },
  {
    name: "Instagram",
    handle: "@_hishamhh",
    url: "https://instagram.com/_hishamhh",
    icon: "instagram" as const
  },
  {
    name: "LinkedIn",
    handle: "Coming soon",
    url: "#",
    icon: "linkedin" as const,
    comingSoon: true
  }
];
