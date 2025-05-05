// src/components/page-content/home-page-content.tsx
'use client'; // Required for Framer Motion and potentially other hooks

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// Removed unused Layers, GithubIconLucide imports. Replaced Github alias.
import { ArrowRight, User, Briefcase, Cloud, Code, GitBranch, Monitor, Bot, Rss, FileText } from 'lucide-react';
import { SocialMediaPanel } from '@/components/layout/social-media-panel';
// Using a basic img tag for simplicity in Astro/React context

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
const sections = [
    {
        title: "Resume / About Me",
        description: "Detailed overview of my skills, experience, education, and certifications.",
        link: "/resume", // Astro uses standard hrefs
        icon: User,
        bgColor: "bg-gradient-to-br from-primary/10 via-background to-secondary/20 dark:from-primary/15 dark:via-background dark:to-secondary/10",
        borderColor: "border-primary/20 dark:border-primary/30",
        textColor: "text-foreground",
        accentColor: "text-primary"
    },
    {
        title: "Projects Showcase",
        description: "Explore key projects demonstrating my expertise in cloud, automation, and CI/CD.",
        link: "/projects",
        icon: Briefcase,
        bgColor: "bg-gradient-to-br from-accent/10 via-background to-secondary/20 dark:from-accent/15 dark:via-background dark:to-secondary/10",
        borderColor: "border-accent/20 dark:border-accent/30",
        textColor: "text-foreground",
        accentColor: "text-accent"
    },
    // {
    //     title: "GitHub Contributions",
    //     description: "View my public repositories, contributions, and open-source activity.",
    //     link: "/github",
    //     icon: GithubIconLucide, // Using alias for clarity, can use GithubIcon directly
    //     bgColor: "bg-gradient-to-br from-muted/20 via-background to-secondary/20 dark:from-muted/15 dark:via-background dark:to-secondary/10",
    //     borderColor: "border-border",
    //     textColor: "text-foreground",
    //     accentColor: "text-foreground/80"
    // }, // Commented out GitHub section
    {
        title: "Blog / Articles", // Updated title
        description: "Read my thoughts on technology, DevOps practices, prompt engineering, and more.", // Updated description
        link: "/other", // Link remains the same, pointing to the 'other' page
        icon: Rss, // Changed icon to Rss
        bgColor: "bg-gradient-to-br from-blue-500/10 via-background to-secondary/20 dark:from-blue-400/15 dark:via-background dark:to-secondary/10",
        borderColor: "border-blue-500/20 dark:border-blue-400/30",
        textColor: "text-foreground",
        accentColor: "text-blue-500 dark:text-blue-400"
    },
];

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


export default function HomePageContent() {
  return (
    <div className="min-h-screen overflow-hidden">
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20 md:mb-28"
          variants={itemVariants}
        >
           <motion.div
              className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-8 rounded-full overflow-hidden shadow-xl border-4 border-primary/30 dark:border-primary/50 ring-4 ring-primary/10 dark:ring-primary/20"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
           >
               <img
                  src="src/images/self.png"
                  alt="Manish Singh Profile"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint="professional headshot man studio lighting"
                  loading="eager"
               />
           </motion.div>
          <motion.h1
             className="text-4xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-accent animate-gradient-x tracking-tight"
             variants={itemVariants}
             style={{ backgroundSize: '200% auto' }}
           >
            Manish Singh
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
           >
            Experienced DevOps Engineer specializing in Cloud Infrastructure, Automation, and CI/CD.
            <br className="hidden md:block" /> Actively exploring and building AI-driven tools and platforms.
          </motion.p>
           <motion.div
             className="flex flex-wrap justify-center gap-3 mb-10"
             variants={containerVariants}
           >
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
          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
            <Button size="lg" asChild className="group bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-500 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-visible:ring-primary/50 px-8 py-3 text-base">
              <a href="/resume">
                View Full Resume <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Button>
            <SocialMediaPanel />
          </motion.div>
        </motion.section>

        {/* Sections Grid */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-20 md:mb-28" // Added margin-bottom
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

        {/* Latest Blog Post Section */}
        <motion.section
            className="mb-20 md:mb-28"
            variants={itemVariants}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 flex items-center justify-center">
                <FileText className="mr-3 h-7 w-7 text-accent" /> Latest Blog Post
            </h2>
             <motion.div
                whileHover="hover"
                initial="initial"
                variants={itemVariants} // Reuse item variant for entrance
             >
                <a href={latestBlogPost.link} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl border border-border/50 transition-all duration-300 group-hover:border-primary/40 group-hover:scale-[1.02] bg-card rounded-xl flex flex-col md:flex-row">
                         <motion.div variants={cardHoverVariants} className="flex flex-col md:flex-row w-full">
                            {/* Image Section */}
                             <div className="md:w-1/3 relative h-60 md:h-auto overflow-hidden rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                                <img
                                    src={latestBlogPost.imageUrl}
                                    alt={latestBlogPost.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-ai-hint={latestBlogPost.imageHint}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                             </div>
                            {/* Content Section */}
                            <div className="md:w-2/3 flex flex-col p-6 md:p-8">
                                <CardHeader className="p-0 mb-3">
                                    <CardTitle className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">{latestBlogPost.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between p-0">
                                    <CardDescription className="mb-5 text-base text-muted-foreground line-clamp-3">
                                        {latestBlogPost.description}
                                    </CardDescription>
                                     <div className="mt-auto">
                                         <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline underline-offset-4">
                                             Read on Medium <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
