export type NavSection =
  | "about"
  | "resume"
  | "services"
  | "portfolio"
  | "blog"
  | "contact";

export interface Profile {
  name: string;
  role: string;
  location: string;
  availability: string;
  tagline: string;
  overview: string;
  portraitLabel: string;
  portraitNote: string;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: "github" | "x" | "instagram" | "linkedin";
  comingSoon?: boolean;
  label?: string;
  value?: string;
  href?: string;
  placeholder?: boolean;
}

export interface Highlight {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  summary: string;
  deliverables: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  placeholder?: boolean;
}

export interface ToolGroup {
  title: string;
  items: { name: string; level: number }[];
}

export interface Project {
  category: string;
  title: string;
  summary: string;
  stack: string[];
  outcome: string;
  accent: "gold" | "plum" | "teal" | "red";
  placeholder?: boolean;
  imageUrl?: string;
  liveUrl?: string;
}

export interface PostPreview {
  category: string;
  title: string;
  slug?: string;
  description: string;
  readTime: string;
  placeholder?: boolean;
  comingSoon?: boolean;
  fullContent?: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  detail: string;
  href?: string;
  placeholder?: boolean;
}
