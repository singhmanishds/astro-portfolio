'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import Image from "next/image"; // Remove next/image
// import Link from "next/link"; // Use standard anchor tags
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Career-AI: Your AI-powered Career Assistant",
        description: `A smart, AI-powered platform built to help job seekers stand out and land interviews faster!\n\nWhat you can do with Career-AI:\n- Resume Analyzer: Instantly compare your resume with any job description, get your ATS score & actionable insights\n- Cover Letter Generator: Create a personalized, professional cover letter in seconds\n- Mock Interview Simulator: Practice live with AI, get instant feedback\n- Try it FREE for a limited time!\n- Secure login/signup, payments via Razorpay, Pro Plan with unlimited features.`,
        tags: ["AI", "Career", "Resume", "Cover Letter", "Interview", "Web App"],
        imageUrl: "/careerAI.png", // Replace with actual OG image if available
        imageHint: "Career AI website preview",
        link: "https://career.use-ai.co"
    },
    {
        title: "Prompt Engineering: The Underrated Soft Skill Every Techie Needs",
        description: "Discover why mastering prompt engineering is crucial in the age of AI, even if you're not an AI specialist. Explore practical tips and insights.",
        tags: ["Blog", "Prompt Engineering", "AI", "Medium"],
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HMUMrXYkn2uSnhfWEdmVMw.png",
        imageHint: "abstract AI brain text interface",
        link: "https://medium.com/@singhmanishds/prompt-engineering-the-underrated-soft-skill-every-techie-needs-yes-even-you-14eb5fb8c0cb"
    },
    {
        title: "Cloud Landing Zone Automation",
        description: "Designed and implemented a standardized Azure landing zone using Terraform, incorporating security best practices and reducing deployment times by 40%. Automated network and firewall configurations.",
        tags: ["Azure", "Terraform", "Security", "Automation", "Networking"],
        imageUrl: "https://picsum.photos/seed/project1/600/400",
        imageHint: "cloud infrastructure diagram blue abstract",
        link: "#"
    },
    {
        title: "High-Availability ECS Deployment",
        description: "Architected and deployed a multi-region, high-availability solution on Amazon ECS for a critical client application, ensuring fault tolerance and business continuity using Terraform.",
        tags: ["AWS", "ECS", "Terraform", "High Availability", "Architecture"],
        imageUrl: "https://picsum.photos/seed/project2/600/400",
        imageHint: "server racks data center bright lights",
        link: "#"
    },
    {
        title: "Microservices Deployment on AKS",
        description: "Containerized .NET microservices using Docker and deployed them onto Azure Kubernetes Service (AKS) using Helm charts. Implemented CI/CD pipelines with Azure DevOps for automated deployments.",
        tags: ["Azure", "AKS", "Kubernetes", "Docker", "Helm", "CI/CD", ".NET"],
        imageUrl: "https://picsum.photos/seed/project3/600/400",
        imageHint: "kubernetes cluster diagram nodes connect",
        link: "#"
    },
    {
        title: "Observability Dashboard Implementation",
        description: "Developed real-time monitoring dashboards using Grafana and Prometheus for critical Azure services, significantly improving system observability and reducing incident response time.",
        tags: ["Azure", "Grafana", "Prometheus", "Monitoring", "Observability"],
        imageUrl: "https://picsum.photos/seed/project4/600/400",
        imageHint: "dashboard charts graphs data glowing",
        link: "#"
    },
    {
        title: "GenAI Terraform Module Generator",
        description: "Developed a proof-of-concept Generative AI solution (using OpenAI wrapper) to automatically generate Terraform modules based on internal GitHub repository patterns, reducing boilerplate code.",
        tags: ["GenAI", "OpenAI", "Python", "Terraform", "Automation", "POC"],
        imageUrl: "https://picsum.photos/seed/project5/600/400",
        imageHint: "abstract AI brain network code",
        link: "#"
    },
    {
        title: "Crossplane & ArgoCD Integration",
        description: "Integrated Crossplane with ArgoCD for declarative, GitOps-driven management of cloud infrastructure (Azure resources) alongside application deployments within Kubernetes.",
        tags: ["Kubernetes", "Crossplane", "ArgoCD", "GitOps", "Azure", "IaC"],
        imageUrl: "https://picsum.photos/seed/project6/600/400",
        imageHint: "gitops workflow diagram connected blocks",
        link: "#"
    },
];

export default function ProjectsPageContent() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary tracking-tight">My Projects</h1>
      <p className="text-lg text-muted-foreground mb-12">A selection of projects showcasing my work in cloud infrastructure, automation, and modern DevOps practices.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {projects.map((project, index) => (
           // Use standard anchor tag
           <a key={index} href={project.link} target={project.link !== '#' ? '_blank' : '_self'} rel="noopener noreferrer" className="group block h-full">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl border border-border/50 transition-all duration-300 group-hover:border-primary/40 group-hover:scale-[1.03] flex flex-col h-full bg-card rounded-xl">
                <div className="relative w-full h-52 overflow-hidden">
                 {/* Featured badge for the first project */}
                 {index === 0 && (
                   <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold shadow-md border border-accent/70 animate-fade-in">
                     Featured
                   </span>
                 )}
                 {/* Use standard img tag */}
                 <img
                    src={project.imageUrl}
                    alt={project.title}
                    // layout="fill" // Not applicable
                    // objectFit="cover" // Use CSS
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.imageHint}
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Not applicable
                    loading="lazy" // Standard lazy loading
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                  {project.link !== '#' && (
                    <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md transition-transform group-hover:scale-110">
                      <ArrowUpRight className="h-4 w-4 text-foreground/80" />
                    </div>
                  )}
                 </div>
                <CardHeader className="pb-3 pt-5 px-5">
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-200">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between pt-0 px-5 pb-5">
                  <div>
                    <CardDescription className="mb-4 text-base text-muted-foreground line-clamp-3">
                       {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs font-medium bg-secondary/60 hover:bg-secondary border border-transparent px-2.5 py-0.5 cursor-default">
                           {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                   <div className="mt-auto pt-2">
                     <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline underline-offset-4">
                       {project.link === '#' ? 'Details (Internal)' : 'View Project'}
                       {project.link !== '#' && <ArrowUpRight className="ml-1.5 h-4 w-4" />}
                     </span>
                  </div>
                </CardContent>
              </Card>
            </a>
        ))}
      </div>
    </div>
  );
}
