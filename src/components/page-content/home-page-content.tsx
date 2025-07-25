// src/components/page-content/home-page-content.tsx
'use client'; // Required for Framer Motion and potentially other hooks

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// Removed unused Layers, GithubIconLucide imports. Replaced Github alias.
import { ArrowRight, User, Briefcase, Cloud, Code, GitBranch, Monitor, Bot, Rss, FileText, Linkedin, Mail, Globe, Download, BadgeCheck } from 'lucide-react';
// Using a basic img tag for simplicity in Astro/React context

import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Animation variants (remain the same)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  },
};

const cardHoverVariants = {
  hover: {
    y: -5,
    scale: 1.02,
    boxShadow: "0px 12px 35px -8px hsla(var(--primary)/0.2)",
    transition: { duration: 0.3, type: 'spring', stiffness: 200 }
  },
  initial: {
    y: 0,
    scale: 1,
    boxShadow: "0px 6px 20px -5px hsla(var(--foreground)/0.08)",
  }
};

// Data for sections grid
const sections: any[] = [];

// Add the featured product (Career-AI) for the Home page
const featuredProduct = {
    title: "Career-AI: Your AI-powered Career Assistant",
    description: `A smart, AI-powered platform built to help job seekers stand out and land interviews faster!\n\nWhat you can do with Career-AI:\n- Resume Analyzer: Instantly compare your resume with any job description, get your ATS score & actionable insights\n- Cover Letter Generator: Create a personalized, professional cover letter in seconds\n- Mock Interview Simulator: Practice live with AI, get instant feedback\n- Try it FREE for a limited time!\n- Secure login/signup, payments via Razorpay, Pro Plan with unlimited features.`,
    tags: ["AI", "Career", "Resume", "Cover Letter", "Interview", "Web App"],
    imageUrl: "https://career.use-ai.co/og-career-ai.png",
    imageHint: "Career AI website preview",
    link: "https://career.use-ai.co"
};

// Add the latest blog article for the Showcase section
const latestShowcase = {
    title: "Prompt Engineering: The Underrated Soft Skill Every Techie Needs",
    description: "Discover why mastering prompt engineering is crucial in the age of AI, even if you're not an AI specialist. Explore practical tips and insights.",
    tags: ["Blog", "Prompt Engineering", "AI", "Medium"],
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HMUMrXYkn2uSnhfWEdmVMw.png",
    imageHint: "abstract AI brain text interface",
    link: "https://medium.com/@singhmanishds/prompt-engineering-the-underrated-soft-skill-every-techie-needs-yes-even-you-14eb5fb8c0cb"
};

// Skills highlight data remains the same
const skillsHighlight = [
  { name: "Cloud", icon: Cloud },
  { name: "Terraform (IaC)", icon: Code },
  { name: "CI/CD Pipelines", icon: GitBranch },
  { name: "Kubernetes (AKS)", icon: Monitor },
  { name: "Gen AI", icon: Bot },
];

// Data for the latest blog post
const latestBlogPost = {
    title: "Prompt Engineering: The Underrated Soft Skill Every Techie Needs",
    description: "Discover why mastering prompt engineering is crucial in the age of AI, even if you're not an AI specialist. Explore practical tips and insights.",
    link: "https://medium.com/@singhmanishds/prompt-engineering-the-underrated-soft-skill-every-techie-needs-yes-even-you-14eb5fb8c0cb",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HMUMrXYkn2uSnhfWEdmVMw.png", // Example placeholder
    imageHint: "abstract AI brain text interface",
};

// Social links for the hero section
const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/manishsingh9075/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://medium.com/@singhmanishds',
    label: 'Medium',
    icon: Globe,
  },
  {
    href: 'mailto:singhmanishds@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];


export default function HomePageContent() {
  // Section reveal animation hooks
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, margin: '-100px' });
  const showcaseRef = useRef(null);
  const showcaseInView = useInView(showcaseRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated SVG Blob Background */}
      <svg className="absolute top-[-120px] left-1/2 -translate-x-1/2 z-0 opacity-40 blur-2xl select-none pointer-events-none" width="900" height="600" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg" style={{animation: 'blobMove 18s ease-in-out infinite alternate'}}>
        <defs>
          <linearGradient id="blobGradient" x1="0" y1="0" x2="900" y2="600" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        <path fill="url(#blobGradient)" d="M728.5 320.5Q729 391 669.5 434.5Q610 478 540.5 507.5Q471 537 401.5 520.5Q332 504 263.5 470.5Q195 437 168.5 368.5Q142 300 181.5 241Q221 182 288.5 154.5Q356 127 427.5 110.5Q499 94 563.5 127Q628 160 677.5 210Q727 260 728.5 320.5Z">
          <animate attributeName="d" dur="18s" repeatCount="indefinite" values="M728.5 320.5Q729 391 669.5 434.5Q610 478 540.5 507.5Q471 537 401.5 520.5Q332 504 263.5 470.5Q195 437 168.5 368.5Q142 300 181.5 241Q221 182 288.5 154.5Q356 127 427.5 110.5Q499 94 563.5 127Q628 160 677.5 210Q727 260 728.5 320.5Z;M750 320Q750 400 670 450Q590 500 500 520Q410 540 340 500Q270 460 220 400Q170 340 200 260Q230 180 310 150Q390 120 470 110Q550 100 610 140Q670 180 710 240Q750 300 750 320Z;M728.5 320.5Q729 391 669.5 434.5Q610 478 540.5 507.5Q471 537 401.5 520.5Q332 504 263.5 470.5Q195 437 168.5 368.5Q142 300 181.5 241Q221 182 288.5 154.5Q356 127 427.5 110.5Q499 94 563.5 127Q628 160 677.5 210Q727 260 728.5 320.5Z"/>
        </path>
      </svg>
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-24 md:mb-32"
          variants={itemVariants}
        >
          {/* Animated SVG/gradient background behind avatar */}
          <div className="relative flex justify-center items-center mb-10">
            <span className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 blur-2xl opacity-70 animate-pulse-slow z-0"></span>
            <motion.div
              className="relative w-40 h-40 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary/30 dark:border-primary/50 ring-4 ring-primary/10 dark:ring-primary/20 z-10"
              whileHover={{ scale: 1.07, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/self.png"
                alt="Manish Singh - Professional Headshot"
                title="Manish Singh - Professional Headshot"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-ai-hint="professional headshot man studio lighting"
                loading="eager"
              />
            </motion.div>
          </div>
          <motion.div className="flex flex-col items-center gap-2 mb-2" variants={itemVariants}>
            <div className="flex items-center gap-3 justify-center">
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-accent animate-gradient-x tracking-tight"
                variants={itemVariants}
                style={{ backgroundSize: '200% auto' }}
              >
                Manish Singh
              </motion.h1>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/80 text-accent-foreground text-sm md:text-base font-semibold shadow border border-accent/40 ml-2 animate-fade-in">
                <BadgeCheck className="h-4 w-4 mr-1 text-primary" /> DevOps Engineer
              </span>
            </div>
            <motion.p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-2 mb-2" variants={itemVariants}>
              Building cloud, automating workflows, and exploring AI.
            </motion.p>
            {/* About Me paragraph */}
            <motion.p className="text-base md:text-lg text-foreground/80 max-w-2xl mb-4" variants={itemVariants}>
              I’m a passionate DevOps Engineer with 6+ years of experience designing, automating, and optimizing cloud infrastructure. I love building scalable solutions, mentoring teams, and experimenting with the latest in AI and cloud tech. When I’m not coding, you’ll find me sharing knowledge, writing, or in theatre.
            </motion.p>
          </motion.div>
          <motion.div className="flex flex-wrap justify-center gap-3 mb-10" variants={containerVariants}>
            {skillsHighlight.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Badge
                  variant="secondary"
                  className="text-sm md:text-base px-4 py-2 bg-background border border-border shadow-sm hover:shadow-md transition-all hover:border-accent/50 cursor-default"
                >
                  <skill.icon className="mr-2 h-4 w-4 text-accent" />
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2">
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-visible:ring-primary/50 px-8 py-3 text-base rounded-2xl"
            >
              <a href="/resume" title="View Resume">
                View Resume
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="group border-accent text-accent hover:bg-accent/10 hover:border-accent focus-visible:ring-accent px-8 py-3 text-base rounded-2xl"
            >
              <a href="https://career.use-ai.co" target="_blank" rel="noopener noreferrer" title="Visit Career-AI Website">
                <Globe className="mr-2 h-5 w-5" /> Visit Career-AI
              </a>
            </Button>
            <div className="flex gap-3 mt-3 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex items-center justify-center rounded-full bg-background border border-border shadow hover:bg-accent/20 hover:border-accent/60 transition-all w-11 h-11 focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:outline-none"
                  tabIndex={0}
                >
                  <social.icon className="h-5 w-5 text-primary" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Sections Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-20 md:mb-28"
          variants={containerVariants}
        >
          {sections.map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              whileHover="hover"
              initial="initial"
            >
              <a href={section.link} className="block h-full group">
                  <Card className={`overflow-hidden h-full flex flex-col border ${section.borderColor} ${section.bgColor} shadow-lg transition-all duration-300 rounded-xl`}>
                     <motion.div variants={cardHoverVariants} className="h-full flex flex-col p-6 md:p-8">
                      <CardHeader className="flex flex-row items-center space-x-4 p-0 mb-4">
                        <div className={`p-3 rounded-lg bg-background/80 dark:bg-card/50 border ${section.borderColor} shadow-sm`}>
                          <section.icon className={`h-6 w-6 ${section.accentColor}`} />
                        </div>
                        <CardTitle className={`text-xl md:text-2xl font-semibold ${section.textColor}`}>{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col justify-between p-0">
                        <CardDescription className={`mb-6 text-base ${section.textColor}/80`}>
                          {section.description}
                        </CardDescription>
                        <div className="mt-auto">
                           <span className={`inline-flex items-center text-sm font-medium ${section.accentColor} group-hover:underline underline-offset-4`}>
                             Explore Section <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                           </span>
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </a>
            </motion.div>
          ))}
        </motion.section>

        {/* Featured Showcase Section */}
        <motion.section
          ref={showcaseRef}
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={showcaseInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center justify-center">
            <Briefcase className="mr-3 h-7 w-7 text-accent" /> Latest Showcase
          </h2>
          <motion.div
            whileHover="hover"
            initial="initial"
            variants={itemVariants}
          >
            <a href={latestShowcase.link} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl border border-border/50 transition-all duration-300 group-hover:border-primary/40 group-hover:scale-[1.02] bg-card rounded-xl flex flex-col md:flex-row">
                <motion.div variants={cardHoverVariants} className="flex flex-col md:flex-row w-full">
                  {/* Image Section */}
                  <div className="md:w-1/3 relative h-60 md:h-auto overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                    <img
                      src={latestShowcase.imageUrl}
                      alt={latestShowcase.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={latestShowcase.imageHint}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>
                  {/* Content Section */}
                  <div className="md:w-2/3 flex flex-col p-6 md:p-8">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">{latestShowcase.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between p-0">
                      <CardDescription className="mb-5 text-base text-muted-foreground line-clamp-3 whitespace-pre-line">
                        {latestShowcase.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {latestShowcase.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs font-medium bg-secondary/60 hover:bg-secondary border border-transparent px-2.5 py-0.5 cursor-default">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto">
                        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline underline-offset-4">
                          View Project <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </motion.div>
              </Card>
            </a>
          </motion.div>
        </motion.section>


          {/* Subtle background elements - remain the same */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
             <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-border [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
                 <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                     <circle cx="512" cy="512" r="512" fill="url(#gradient-radial)" fillOpacity="0.2" />
                     <defs>
                         <radialGradient id="gradient-radial">
                             <stop stopColor="hsl(var(--primary))" />
                             <stop offset="1" stopColor="hsl(var(--accent))" />
                         </radialGradient>
                     </defs>
                 </svg>
             </div>
         </div>
      </motion.div>

    </div>
  );
}
