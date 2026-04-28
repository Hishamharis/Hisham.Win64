import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Copy,
  ExternalLink,
  FolderKanban,
  GitBranch,
  Image,
  Mail,
  MapPin,
  Menu,
  MessageCircleMore,
  NotebookPen,
  Phone,
  Send,
  Sparkles,
  UserRound,
} from "lucide-react";
import {
  contactMethods,
  education,
  experience,
  highlights,
  navSections,
  posts,
  processSteps,
  profile,
  projects,
  servicePillars,
  services,
  socialLinks,
  toolGroups,
} from "./content";
import type { NavSection, PostPreview } from "./types";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormValues {
  name: string;
  email: string;
  projectType: string;
  message: string;
  botField: string;
}

const initialFormValues: FormValues = {
  name: "",
  email: "",
  projectType: "Website design",
  message: "",
  botField: "",
};

const navIcons = {
  about: UserRound,
  resume: BriefcaseBusiness,
  services: Code2,
  portfolio: FolderKanban,
  blog: NotebookPen,
  contact: Send,
} as const;

/* Brand SVG icons — lucide doesn't include social brand marks */
const GithubIcon = ({ size = 18 }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const XIcon = ({ size = 18 }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const encodeForm = (values: Record<string, string>) =>
  new URLSearchParams(values).toString();

function App() {
  const [activeSection, setActiveSection] = useState<NavSection>("about");
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeBlogPost, setActiveBlogPost] = useState<PostPreview | null>(null);
  const [cmsPosts, setCmsPosts] = useState<PostPreview[]>([]);

  // Load CMS-created blog posts
  useEffect(() => {
    fetch('/blog/index.json')
      .then(r => r.ok ? r.json() : [])
      .then((data: PostPreview[]) => setCmsPosts(data.filter(p => !p.comingSoon)))
      .catch(() => setCmsPosts([]));
  }, []);

  // Merge hardcoded + CMS posts: real posts first, fill remaining with Coming Soon placeholders
  const allBlogPosts = (() => {
    const hardcodedReal = posts.filter(p => !p.comingSoon && p.fullContent);
    const hardcodedPlaceholders = posts.filter(p => p.comingSoon);
    // Merge CMS posts (skip duplicates by title)
    const existingTitles = new Set(hardcodedReal.map(p => p.title.toLowerCase()));
    const newCmsPosts = cmsPosts.filter(p => !existingTitles.has(p.title.toLowerCase()));
    const realPosts = [...hardcodedReal, ...newCmsPosts];
    // Show all real posts, then fill up to at least 3 total with placeholders
    const minSlots = Math.max(3, realPosts.length);
    const placeholdersNeeded = Math.max(0, minSlots - realPosts.length);
    return [...realPosts, ...hardcodedPlaceholders.slice(0, placeholdersNeeded)];
  })();

  const sectionIds = navSections.map(s => s.id);

  const handleSectionChange = (section: NavSection) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
      setActiveBlogPost(null);
    }, 200);
  };

  // 4.5 Loading screen — plays once per session
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('mhh-visited');
    if (hasVisited) {
      setIsLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('mhh-visited', 'true');
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // 4.3 Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) return;

      const currentIndex = sectionIds.indexOf(activeSection);

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, sectionIds.length - 1);
        handleSectionChange(sectionIds[nextIndex]);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        handleSectionChange(sectionIds[prevIndex]);
      } else if (e.key >= '1' && e.key <= '6') {
        const index = parseInt(e.key) - 1;
        if (index < sectionIds.length) {
          handleSectionChange(sectionIds[index]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  useEffect(() => {
    const currentSection = navSections.find(
      (section) => section.id === activeSection
    );
    document.title = `${profile.name} | ${currentSection?.label ?? "Portfolio"}`;
  }, [activeSection]);

  const handleInputChange = (
    field: keyof FormValues,
    value: FormValues[keyof FormValues]
  ) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    if (formStatus !== "idle") {
      setFormStatus("idle");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("submitting");

    const payload = encodeForm({
      "form-name": "contact",
      "bot-field": formValues.botField,
      name: formValues.name,
      email: formValues.email,
      "project-type": formValues.projectType,
      message: formValues.message,
    });

    try {
      if (import.meta.env.DEV) {
        await new Promise((resolve) => window.setTimeout(resolve, 700));
        setFormStatus("success");
        setFormValues(initialFormValues);
        return;
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setFormStatus("success");
      setFormValues(initialFormValues);
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  const currentSection = navSections.find((section) => section.id === activeSection);

  const getSidebarNavClasses = (id: string) => {
    const isActive = activeSection === id;
    if (isActive) {
      return "font-nav-item text-nav-item text-[#d7ba79] font-semibold flex items-center gap-3 py-3 transition-all hover:bg-white/5 duration-200 rounded-lg px-4 relative";
    }
    return "font-nav-item text-nav-item text-slate-400 hover:text-slate-200 flex items-center gap-3 py-3 transition-all hover:bg-white/5 duration-200 rounded-lg px-4 active:scale-95 transition-transform";
  };

  const getMobileNavClasses = (id: string) => {
    const isActive = activeSection === id;
    if (isActive) {
      return "font-nav-item text-nav-item text-[#d7ba79] border-b border-[#d7ba79] pb-1 transition-colors";
    }
    return "font-nav-item text-nav-item text-slate-400 hover:text-[#d7ba79] transition-colors";
  };

  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* Ambient background gradient */}
      <div className={`ambient-bg ambient-${activeSection}`} />
      {/* Film grain overlay */}
      <div className="grain-overlay" />

      {/* 4.5 Loading / Entrance Screen */}
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-monogram">MH</div>
            <div className="loading-name">{profile.name}</div>
            <div className="loading-role">{profile.role}</div>
            <div className="loading-bar"><div className="loading-bar-fill" /></div>
          </div>
        </div>
      )}
      {/* TopAppBar (Mobile) */}
      <header className="bg-[#161719]/80 backdrop-blur-md fixed top-0 w-full z-40 lg:hidden border-b border-white/5 shadow-2xl shadow-black/50 fade-in">
        <div className="flex justify-between items-center px-5 h-16">
          <button onClick={() => handleSectionChange("about")} className="flex items-center gap-2.5">
            <img src="/monogram.png" alt="MH" className="w-8 h-8 object-contain rounded" />
            <span className="font-serif text-[#d7ba79] font-bold text-sm tracking-wide">Hisham Haris</span>
          </button>
          <nav className="hidden md:flex space-x-6">
            {navSections.slice(0, 4).map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={getMobileNavClasses(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>
          <button
            className="text-[#d7ba79] p-2 md:hidden active:scale-90 transition-transform"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </div>
        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <nav className="mobile-menu-slide flex flex-col bg-[#111213]/98 backdrop-blur-xl px-5 pt-4 pb-6 md:hidden border-b border-white/5 relative z-40">
              {/* Menu header with branding */}
              <div className="flex items-center gap-3 pb-4 mb-3 border-b border-white/10">
                <img src="/monogram.png" alt="MH" className="w-12 h-12 object-contain rounded-lg border border-accent-gold/20" />
                <div>
                  <h3 className="text-[#d7ba79] font-serif font-bold text-base">{profile.name}</h3>
                  <p className="text-slate-500 text-xs">{profile.role}</p>
                </div>
              </div>
              {/* Navigation items */}
              <div className="space-y-1">
                {navSections.map((section, i) => {
                  const Icon = navIcons[section.id];
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        handleSectionChange(section.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 stagger-item stagger-delay-${i + 1} ${
                        activeSection === section.id
                          ? 'text-[#d7ba79] bg-white/5 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      <Icon size={18} />
                      {section.label}
                      {activeSection === section.id && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#d7ba79]" />
                      )}
                    </button>
                  );
                })}
              </div>
              {/* CTA + socials */}
              <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                <button
                  onClick={() => { handleSectionChange("contact"); setMobileMenuOpen(false); }}
                  className="w-full bg-accent-soft text-accent-gold border border-accent-gold/20 font-nav-item text-sm py-3 px-5 rounded-lg hover:bg-accent-gold hover:text-on-primary transition-all duration-300"
                >
                  {profile.availability}
                </button>
                <div className="flex justify-center gap-5">
                  {socialLinks.filter(s => !s.comingSoon).map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-[#d7ba79] transition-colors p-1"
                    >
                      {link.icon === "github" && <GithubIcon size={16} />}
                      {link.icon === "x" && <XIcon size={16} />}
                      {link.icon === "instagram" && <InstagramIcon size={16} />}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Mobile Hero — shows branding below the sticky header */}
      <section className="lg:hidden pt-20 pb-6 px-5 flex flex-col items-center text-center relative z-10 fade-in">
        <div className="portrait-glow relative mb-4">
          <img
            src="/monogram.png"
            alt={profile.name}
            className="w-24 h-24 object-contain rounded-xl relative z-10 bg-[#111213] border border-accent-gold/10"
          />
        </div>
        <h1 className="font-serif text-[#d7ba79] text-2xl font-bold tracking-tight mb-1.5 gold-heading-glow">
          {profile.name}
        </h1>
        <p className="text-slate-400 text-sm mb-5 max-w-[280px]">{profile.role}</p>
        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mb-4">
          {navSections.map((section) => (
            <button
              key={`mobile-dot-${section.id}`}
              onClick={() => handleSectionChange(section.id)}
              className={`rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'w-5 h-1.5 bg-[#d7ba79]'
                  : 'w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400'
              }`}
              title={section.label}
            />
          ))}
        </div>
      </section>

      {/* SideNavBar (Desktop) */}
      <aside className="hidden lg:flex flex-col p-8 gap-8 bg-[#111213] w-[330px] h-screen fixed left-0 top-0 border-r border-slate-800/50 z-30">
        <div className="flex flex-col items-center text-center mt-8">
          <div className="portrait-glow relative mb-6">
            <img
              src="/monogram.png"
              alt={profile.name}
              className="w-32 h-32 object-contain rounded-lg relative z-10 bg-[#111213]"
            />
          </div>
          <h1 className="font-display-name text-2xl text-[#d7ba79] font-bold tracking-tight mb-2 gold-heading-glow">
            {profile.name}
          </h1>
          <p className="font-body-reading text-body-reading text-text-secondary">
            {profile.role}
          </p>
        </div>

        <nav className="flex-1 mt-12 flex flex-col gap-1">
          {/* 4.2 Step progress dots */}
          <div className="flex justify-center gap-1.5 mb-6">
            {navSections.map((section) => (
              <button
                key={`dot-${section.id}`}
                onClick={() => handleSectionChange(section.id)}
                className={`rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'w-6 h-1.5 bg-[#d7ba79]'
                    : 'w-1.5 h-1.5 bg-slate-600 hover:bg-slate-400'
                }`}
                title={section.label}
              />
            ))}
          </div>
          {navSections.map((section) => {
            const Icon = navIcons[section.id];
            return (
              <button
                key={section.id}
                onClick={() => handleSectionChange(section.id)}
                className={`${getSidebarNavClasses(section.id)} nav-icon-glow`}
              >
                <Icon size={18} /> {section.label}
                {activeSection === section.id && (
                  <span className="absolute left-0 w-1 h-6 bg-[#d7ba79] rounded-r-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-border-subtle flex justify-center">
          <button
            onClick={() => handleSectionChange("contact")}
            className="bg-accent-soft text-accent-gold border border-accent-gold/20 font-nav-item text-nav-item py-3 px-6 rounded-lg hover:bg-accent-gold hover:text-on-primary transition-all duration-300 w-full"
          >
            {profile.availability}
          </button>
        </div>
      </aside>

      {/* Main Content Workspace */}
      <main className="flex-1 lg:ml-[330px] pt-4 lg:pt-16 pb-24 px-5 md:px-12 lg:px-20 max-w-[1380px] mx-auto w-full min-h-screen flex flex-col relative z-10">
        <header className="mb-stack-gap-lg border-b border-border-subtle pb-8 fade-in">
          <span className="font-eyebrow-label text-eyebrow-label text-accent-gold uppercase tracking-widest mb-2 block">
            {currentSection?.eyebrow}
          </span>
          <h2 className="font-h2-editorial text-h2-editorial text-text-primary mb-4 gold-heading-glow">
            {currentSection?.label}
          </h2>
          <p className="font-body-reading text-body-reading text-text-secondary max-w-2xl">
            {profile.tagline}
          </p>
        </header>

        <div
          key={activeSection}
          className="flex-1"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(12px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease, transform 0.3s ease',
          }}
        >
          {activeSection === "about" && (
            <div className="space-y-stack-gap-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap-md">
                {highlights.map((item, i) => (
                  <section className={`bg-surface-primary glass-panel rounded-xl border border-border-subtle p-6 card-hover card-shimmer stagger-item stagger-delay-${i + 1}`} key={item.title}>
                    <h3 className="font-nav-item text-lg text-text-primary mb-2">{item.title}</h3>
                    <p className="font-body-reading text-text-secondary text-sm">{item.description}</p>
                  </section>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-gap-lg stagger-item stagger-delay-4">
                <section>
                  <span className="font-eyebrow-label text-accent-gold uppercase tracking-widest mb-4 block">Workflow</span>
                  <div className="space-y-6">
                    {processSteps.map((step) => (
                      <div className="border-b border-border-subtle pb-4 last:border-0" key={step.title}>
                        <strong className="block text-text-primary mb-2">{step.title}</strong>
                        <p className="text-text-secondary text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
                <section>
                  <span className="font-eyebrow-label text-accent-gold uppercase tracking-widest mb-4 block">Location</span>
                  <div className="bg-surface-primary glass-panel rounded-xl border border-border-subtle p-6 card-hover">
                    <div className="flex items-center gap-3 mb-4 text-text-primary">
                      <MapPin size={20} className="text-accent-gold" />
                      <strong>{profile.location}</strong>
                    </div>
                    <p className="text-text-secondary text-sm">{profile.overview}</p>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeSection === "resume" && (
            <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-gap-lg">
              <section>
                <h3 className="font-h2-editorial text-2xl text-text-primary mb-8 border-b border-border-subtle pb-4">Experience snapshot</h3>
                <div className="space-y-8">
                  {experience.map((item, i) => (
                    <article key={`${item.period}-${item.title}`} className={`relative pl-6 border-l border-border-subtle stagger-item stagger-delay-${i + 1}`}>
                      <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-accent-gold timeline-dot"></span>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-text-faint">{item.period}</span>
                        {item.placeholder && <span className="text-xs text-accent-gold bg-accent-soft px-2 py-1 rounded">Placeholder</span>}
                      </div>
                      <h4 className="font-nav-item text-lg text-text-primary">{item.title}</h4>
                      <strong className="block text-sm text-text-secondary mb-2">{item.organization}</strong>
                      <p className="text-sm text-text-secondary">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="font-h2-editorial text-2xl text-text-primary mb-8 border-b border-border-subtle pb-4">Education and growth</h3>
                <div className="space-y-8">
                  {education.map((item, i) => (
                    <article key={`${item.period}-${item.title}`} className={`relative pl-6 border-l border-border-subtle stagger-item stagger-delay-${i + 4}`}>
                      <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-accent-gold timeline-dot"></span>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-text-faint">{item.period}</span>
                        {item.placeholder && <span className="text-xs text-accent-gold bg-accent-soft px-2 py-1 rounded">Placeholder</span>}
                      </div>
                      <h4 className="font-nav-item text-lg text-text-primary">{item.title}</h4>
                      <strong className="block text-sm text-text-secondary mb-2">{item.organization}</strong>
                      <p className="text-sm text-text-secondary">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            {/* Tools — full width 3-column row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
              {toolGroups.map((group, i) => (
                <section className={`bg-surface-primary glass-panel rounded-xl border border-border-subtle p-6 card-hover stagger-item stagger-delay-${i + 6}`} key={group.title}>
                  <h3 className="font-nav-item text-text-primary mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-surface-secondary border border-border-subtle rounded-full text-xs text-text-secondary tag-hover cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            </div>
          )}

          {activeSection === "services" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap-md">
              {services.map((service, i) => (
                <section className={`bg-surface-primary glass-panel rounded-xl border border-border-subtle p-8 flex flex-col hover:border-accent-gold/30 card-hover card-shimmer stagger-item stagger-delay-${i + 1}`} key={service.title}>
                  <h3 className="font-display-name text-2xl text-text-primary mb-4">{service.title}</h3>
                  <p className="text-text-secondary text-sm mb-6 flex-1">{service.summary}</p>
                  <ul className="space-y-3">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-3 text-sm text-text-secondary">
                        <ArrowRight size={16} className="text-accent-gold flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}

          {activeSection === "portfolio" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-gap-md">
              {projects.map((project, idx) => (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-surface-primary glass-panel rounded-xl border border-border-subtle overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)] hover:border-accent-gold/30 transition-all duration-500 flex flex-col stagger-item stagger-delay-${idx + 1} cursor-pointer ${
                    idx % 2 !== 0 ? "md:mt-12" : ""
                  }`}
                  key={project.title}
                >
                  <div className="relative h-64 overflow-hidden bg-surface-secondary">
                    {project.imageUrl ? (
                      <img
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 img-zoom"
                        src={project.imageUrl}
                      />
                    ) : (
                      <div className={`w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-surface-primary to-page-bg flex items-center justify-center`}>
                         <span className="text-accent-gold/50 font-serif italic">Project visual</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-surface-primary/20 to-transparent opacity-80"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 relative z-10 -mt-10 bg-surface-primary rounded-t-xl border-t border-border-subtle">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-eyebrow-label text-accent-gold uppercase tracking-widest">{project.category}</span>
                    </div>
                    <h3 className="font-display-name text-2xl text-text-primary mb-3 group-hover:text-accent-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body-reading text-text-secondary text-sm mb-6 flex-1">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto mb-4">
                      {project.stack.map((item) => (
                        <span key={item} className="px-3 py-1 bg-surface-secondary border border-border-subtle rounded text-xs text-text-secondary tag-hover cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                    {project.outcome && (
                      <p className="text-xs text-text-faint border-t border-border-subtle pt-4">{project.outcome}</p>
                    )}
                    {project.liveUrl && (
                      <div className="flex items-center gap-2 mt-4 text-accent-gold text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink size={14} />
                        <span>Visit live site</span>
                        <ArrowRight size={12} />
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}

          {activeSection === "blog" && (
            <div>
              {activeBlogPost ? (
                /* Blog Detail View */
                <article className="w-full stagger-item stagger-delay-1">
                  <button
                    onClick={() => setActiveBlogPost(null)}
                    className="flex items-center gap-2 text-text-faint hover:text-accent-gold transition-colors mb-8 group"
                  >
                    <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to all posts</span>
                  </button>
                  <div className="bg-surface-primary glass-panel rounded-xl border border-border-subtle p-8 md:p-14">
                    <div className="flex items-center gap-3 mb-6 text-sm">
                      <span className="text-accent-gold bg-accent-soft px-3 py-1 rounded font-medium">{activeBlogPost.category}</span>
                      <span className="text-text-faint">{activeBlogPost.readTime}</span>
                    </div>
                    <h2 className="font-display-name text-3xl md:text-4xl text-text-primary mb-10 leading-tight">{activeBlogPost.title}</h2>
                    <div className="prose-blog max-w-none">
                      {(() => {
                        const content = activeBlogPost.fullContent || '';
                        const blocks = content.split(/\n\n+/).filter(b => b.trim());
                        
                        const renderInline = (text: string) => {
                          const parts = text.split(/\*\*(.+?)\*\*/g);
                          return parts.map((part, j) => 
                            j % 2 === 1 
                              ? <strong key={j} className="text-text-primary font-semibold">{part}</strong> 
                              : <span key={j}>{part}</span>
                          );
                        };
                        
                        return blocks.map((block, i) => {
                          const trimmed = block.trim();
                          
                          // H2 heading
                          if (trimmed.startsWith('## ')) {
                            return (
                              <div key={i} className="mt-14 mb-6 pt-8 border-t border-accent-gold/20">
                                <h3 className="text-accent-gold font-bold text-2xl">{trimmed.replace('## ', '')}</h3>
                              </div>
                            );
                          }
                          
                          // H3 heading
                          if (trimmed.startsWith('### ')) {
                            return (
                              <h4 key={i} className="text-text-primary font-semibold text-lg mt-8 mb-3">{trimmed.replace('### ', '')}</h4>
                            );
                          }
                          
                          // Bullet list block
                          if (trimmed.startsWith('- ')) {
                            const items = trimmed.split('\n').filter(l => l.trim().startsWith('- '));
                            return (
                              <ul key={i} className="space-y-3 my-6 ml-2">
                                {items.map((item, k) => {
                                  const text = item.replace(/^- /, '');
                                  return (
                                    <li key={k} className="flex gap-3">
                                      <ArrowRight size={14} className="text-accent-gold mt-1.5 flex-shrink-0" />
                                      <span className="text-text-secondary text-base leading-relaxed">{renderInline(text)}</span>
                                    </li>
                                  );
                                })}
                              </ul>
                            );
                          }
                          
                          // Regular paragraph
                          const lines = trimmed.split('\n').join(' ');
                          return (
                            <p key={i} className="text-text-secondary text-base leading-[1.9] my-5">
                              {renderInline(lines)}
                            </p>
                          );
                        });
                      })()}
                    </div>
                  </div>
                </article>
              ) : (
                /* Blog Card Grid */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-gap-md">
                  {allBlogPosts.map((post, i) => (
                    <article
                      className={`relative bg-surface-primary glass-panel rounded-xl border border-border-subtle p-6 group stagger-item stagger-delay-${i + 1} ${
                        post.comingSoon
                          ? 'cursor-default'
                          : 'hover:border-accent-gold/30 card-hover card-shimmer cursor-pointer'
                      }`}
                      key={post.title}
                      onClick={() => !post.comingSoon && post.fullContent && setActiveBlogPost(post)}
                    >
                      {post.comingSoon && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 rounded-xl bg-[#0a0b0c]/80 backdrop-blur-sm">
                          <span className="text-accent-gold bg-accent-soft border border-accent-gold/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">Coming Soon</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center mb-4 text-xs">
                        <span className="text-accent-gold">{post.category}</span>
                        <span className="text-text-faint">{post.readTime}</span>
                      </div>
                      <h3 className={`font-nav-item text-lg text-text-primary mb-3 transition-colors ${
                        post.comingSoon ? '' : 'group-hover:text-accent-gold underline-sweep'
                      }`}>{post.title}</h3>
                      <p className="text-text-secondary text-sm line-clamp-3">{post.description}</p>
                      {!post.comingSoon && post.fullContent && (
                        <div className="flex items-center gap-1 mt-4 text-xs text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Read article</span>
                          <ArrowRight size={12} />
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeSection === "contact" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-gap-lg items-start">
              <section className="space-y-4">
                {/* Email Card */}
                <a
                  href="mailto:Hishamharismeet@gmail.com?subject=Project%20Inquiry&body=Hi%20Hisham%2C%0A%0AI%E2%80%99d%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A"
                  className="block bg-surface-primary glass-panel rounded-xl border border-border-subtle p-6 card-hover stagger-item stagger-delay-1 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center">
                      <Mail size={20} className="text-accent-gold" />
                    </div>
                    <div className="flex-1">
                      <strong className="text-text-primary text-sm block">Email</strong>
                      <span className="text-xs text-text-faint">Opens Gmail compose</span>
                    </div>
                    <ExternalLink size={14} className="text-text-faint group-hover:text-accent-gold transition-colors" />
                  </div>
                  <h3 className="text-accent-gold font-nav-item mb-1">Hishamharismeet@gmail.com</h3>
                  <p className="text-text-secondary text-sm">Best for project inquiries and detailed briefs.</p>
                </a>

                {/* WhatsApp Card */}
                <a
                  href="https://wa.me/917559015380?text=Hi%20Hisham%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-surface-primary glass-panel rounded-xl border border-border-subtle p-6 card-hover stagger-item stagger-delay-2 group cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <Phone size={20} className="text-green-400" />
                    </div>
                    <div className="flex-1">
                      <strong className="text-text-primary text-sm block">WhatsApp</strong>
                      <span className="text-xs text-text-faint">Opens WhatsApp chat</span>
                    </div>
                    <ExternalLink size={14} className="text-text-faint group-hover:text-green-400 transition-colors" />
                  </div>
                  <h3 className="text-green-400 font-nav-item mb-1">+91 75590 15380</h3>
                  <p className="text-text-secondary text-sm">For quick conversations and scheduling calls.</p>
                </a>

                {/* Socials Block */}
                <div className="bg-surface-primary glass-panel rounded-xl border border-border-subtle p-6 stagger-item stagger-delay-3">
                  <h3 className="text-text-primary text-sm font-semibold mb-4">Find me on</h3>
                  <div className="space-y-3">
                    {socialLinks.map((platform) => {
                      const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
                        github: GithubIcon,
                        x: XIcon,
                        instagram: InstagramIcon,
                        linkedin: LinkedinIcon,
                      };
                      const PlatformIcon = iconMap[platform.icon];
                      return (
                        <a
                          key={platform.name}
                          href={platform.comingSoon ? undefined : platform.url}
                          target={platform.comingSoon ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-200 group ${
                            platform.comingSoon
                              ? 'opacity-40 cursor-not-allowed'
                              : 'hover:bg-white/5 cursor-pointer'
                          }`}
                        >
                          <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent-gold/10 transition-colors">
                            <PlatformIcon size={18} className="text-text-secondary group-hover:text-accent-gold transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-text-primary text-sm font-medium block">{platform.name}</span>
                            <span className="text-text-faint text-xs truncate block">{platform.handle}</span>
                          </div>
                          {platform.comingSoon ? (
                            <span className="text-xs text-accent-gold bg-accent-soft px-2 py-0.5 rounded">Soon</span>
                          ) : (
                            <ExternalLink size={14} className="text-text-faint group-hover:text-accent-gold transition-colors flex-shrink-0" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </section>

              <section className="bg-surface-primary glass-panel rounded-xl border border-border-subtle p-8">
                <form
                  className="space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  data-testid="contact-form"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="absolute -left-[9999px] w-[1px] h-[1px] overflow-hidden">
                    <label htmlFor="bot-field">Leave this field empty</label>
                    <input
                      id="bot-field"
                      name="bot-field"
                      type="text"
                      value={formValues.botField}
                      onChange={(event) => handleInputChange("botField", event.target.value)}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>

                  <label className="block">
                    <span className="text-text-secondary text-sm mb-2 block">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={(event) => handleInputChange("name", event.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded-lg p-3 text-text-primary focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-text-secondary text-sm mb-2 block">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={(event) => handleInputChange("email", event.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded-lg p-3 text-text-primary focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-colors"
                    />
                  </label>

                  <label className="block">
                    <span className="text-text-secondary text-sm mb-2 block">Project type</span>
                    <select
                      name="project-type"
                      value={formValues.projectType}
                      onChange={(event) =>
                        handleInputChange("projectType", event.target.value)
                      }
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded-lg p-3 text-text-primary focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-colors"
                    >
                      <option>Website design</option>
                      <option>Landing page</option>
                      <option>Business website</option>
                      <option>Full-stack build</option>
                      <option>Something else</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-text-secondary text-sm mb-2 block">Message</span>
                    <textarea
                      name="message"
                      value={formValues.message}
                      onChange={(event) => handleInputChange("message", event.target.value)}
                      placeholder="Tell me about the website you want to build."
                      rows={4}
                      required
                      className="w-full bg-[#0c0d0e] border border-white/10 rounded-lg p-3 text-text-primary focus:border-accent-gold/50 focus:outline-none focus:ring-1 focus:ring-accent-gold/50 transition-colors resize-y"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto bg-accent-soft border border-accent-gold/30 text-text-primary px-6 py-3 rounded-lg hover:bg-accent-gold hover:text-on-primary transition-all disabled:opacity-70 disabled:cursor-wait"
                  >
                    <Send size={16} />
                    <span>
                      {formStatus === "submitting" ? "Sending inquiry..." : "Send inquiry"}
                    </span>
                  </button>

                  {formStatus !== "idle" && (
                    <div
                      className={`p-4 rounded-lg border ${
                        formStatus === "success"
                          ? "bg-success/10 border-success/30 text-success"
                          : "bg-error/10 border-error/30 text-error"
                      }`}
                      data-testid="form-status-message"
                    >
                      {formStatus === "success" && (
                        <p className="text-sm">Thank you! Your message has been sent. I'll get back to you within 24 hours.</p>
                      )}
                      {formStatus === "error" && (
                        <p className="text-sm">Something went wrong. Please try again, or reach out directly via email.</p>
                      )}
                    </div>
                  )}
                  {formStatus === "idle" && (
                     <div className="p-4 rounded-lg border bg-white/5 border-white/10 text-text-secondary text-sm">
                        <p>Real submission works after Netlify deploy. Local preview simulates the success state.</p>
                     </div>
                  )}
                </form>
              </section>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-24 pb-12 w-full border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-[10px] tracking-tighter uppercase text-slate-500">
              © {new Date().getFullYear()} Mohammed Hisham Haris. Digital Artisan.
            </p>
            <div className="flex gap-6">
              <a className="font-sans text-[10px] tracking-tighter uppercase text-slate-500 hover:text-[#d7ba79] underline decoration-gold/30 transition-all duration-500" href="https://github.com/hishamharis" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="font-sans text-[10px] tracking-tighter uppercase text-slate-500 hover:text-[#d7ba79] underline decoration-gold/30 transition-all duration-500" href="https://x.com/hishamharismeet" target="_blank" rel="noopener noreferrer">X / Twitter</a>
              <a className="font-sans text-[10px] tracking-tighter uppercase text-slate-500 hover:text-[#d7ba79] underline decoration-gold/30 transition-all duration-500" href="https://instagram.com/_hishamhh" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
