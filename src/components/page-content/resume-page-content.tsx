
'use client'; // Keep client directive for potential future interactions, though currently static

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
// Use non-deprecated icons, removed Phone
import { Mail, MapPin, Linkedin, Github, Monitor, Database, Cloud, Code, Terminal, Network, GitBranch, ShieldCheck, BrainCircuit, Server, BookOpen, UserCircle, Briefcase, Download } from 'lucide-react';

// Resume data remains the same
const resumeData = {
  name: "MANISH SINGH",
  contact: {
    email: "singhmanishds@gmail.com",
    location: "Pune, Maharashtra 411057",
    linkedin: "https://www.linkedin.com/in/manishsingh9075/",
  },
  summary: "DevOps Engineer with 6+ years of experience in cloud infrastructure design, deployment, and management across Azure, AWS, and GCP. Expertise in scalable infrastructure, automation with Terraform, and CI/CD pipelines using GitHub Actions and Azure DevOps. Proficient in containerization (Docker, Kubernetes, AKS) and optimizing deployment processes for enhanced productivity and reliability. Certified in multiple cloud and DevOps technologies, delivering secure, high-availability solutions aligned with business goals.",
  skills: [
    { category: "Cloud Platforms", items: ["Azure (Primary)", "AWS", "GCP"], icon: <Cloud className="h-4 w-4 mr-2 text-accent" /> },
    { category: "Generative AI & ML", items: ["Retrieval-Augmented Generation (RAG)", "Azure OpenAI", "Fine-tuning LLMs", "Prompt Engineering", "LangChain","Open Source LLMs"], icon: <BrainCircuit className="h-4 w-4 mr-2 text-accent" /> },
    { category: "Infrastructure as Code", items: ["Terraform"], icon: <Code className="h-4 w-4 mr-2 text-accent" /> },
    { category: "CI/CD", items: ["GitHub Actions", "Azure DevOps", "Argo-CD"], icon: <GitBranch className="h-4 w-4 mr-2 text-accent" /> },
    { category: "Containerization & Orchestration", items: ["Docker", "Kubernetes", "Azure Kubernetes Service (AKS)", "Helm"], icon: <Monitor className="h-4 w-4 mr-2 text-accent" /> },
    { category: "Version Control & Collaboration", items: ["Git", "Jira", "Confluence", "Azure Boards"], icon: <Terminal className="h-4 w-4 mr-2 text-accent" /> },
    { category: "Automation", items: ["Python", "Bash"], icon: <Network className="h-4 w-4 mr-2 text-accent" /> },
    { category: "Observability", items: ["Grafana & Prometheus", "Azure Monitor"], icon: <Database className="h-4 w-4 mr-2 text-accent" /> },

  ],
  experience: [
     {
      title: "DevOps Consultant",
      company: "KPMG Global Service",
      location: "Pune, India",
      date: "10/2022 - Current",
      projects: [
        {
          name: "Enterprise-Wide Technology (EWT) – Data Center Automation & Networking",
          points: [
            "Designed and implemented a standardized Azure landing zone using Terraform, cutting deployment times by 40% while reinforcing security best practices.",
            "Automated firewall policy configurations and networking setups (VNets, Subnets, NSGs) to streamline operations and improve security posture.",
            "Implemented advanced observability solutions by developing real-time monitoring dashboards using Grafana and Prometheus for critical Azure services.",
            "Deployed Azure services such as Data Factory, Web Apps, and Storage Accounts via terraform module to enhance application availability and storage efficiency.",
            "Integrated Cross-plane with ArgoCD to enable declarative, cloud-native infrastructure management across multi-cloud environments, ensuring streamlined orchestration and enhanced operational visibility.",
            "Built a GenAI solution leveraging Azure OpenAI and LangChain for Retrieval-Augmented Generation (RAG) and internal module creation. Fine-tuned OpenAI models using project-specific datasets hosted securely in Azure Blob Storage."
          ],
        },
        {
          name: "Beazley – Cloud Migration and High Availability Solutions",
          points: [
            "Architected high-availability, multi-region Amazon ECS deployments for the Beazley project, ensuring fault tolerance and business continuity.",
            "Integrated Azure Kubernetes Service (AKS) and Docker to containerize and deploy microservices, achieving improved workload scalability and streamlined resource management.",
            "Developed a Generative AI solution using an OpenAI wrapper to automatically generate Terraform modules from internal GitHub repositories, reducing manual effort by 30%.",
          ],
        },
      ],
    },
    {
      title: "DevOps Engineer",
      company: "Infogain India Private Limited",
      location: "Pune, India",
      date: "10/2021 - 10/2022",
      points: [
        "Provisioned AWS resources (EC2, ELB, VPC, S3, RDS) using Terraform, significantly enhancing infrastructure scalability and reducing deployment downtime by 25%.",
        "Containerized Java-based applications using Docker and deployed them on Kubernetes (EKS), optimizing resource utilization and simplifying application management.",
        "Built and maintained CI/CD pipelines on Azure DevOps for seamless deployment to Kubernetes clusters using Helm charts, improving release frequency by 50%.",
        "Integrated advanced monitoring (CloudWatch, Prometheus) and logging (ELK Stack) solutions to improve system observability and expedite incident resolution times by 40%.",
      ],
    },
    {
      title: "AZURE DEVOPS ENGINEER",
      company: "Tata Consultancy Services",
      location: "Pune, India",
      date: "06/2019 - 10/2021",
      projects: [
        {
          name: "Application Containerization & CI/CD for Microservices",
          points: [
            "Dockerized a Python application and implemented deployment pipelines in Azure CI/CD (Azure Pipelines), reducing deployment time by 60% and improving release velocity.",
            "Deployed a suite of .NET microservices on Azure Kubernetes Service (AKS), enhancing scalability and reliability through automated orchestration and health checks.",
            "Automated infrastructure provisioning with Terraform, deploying Virtual Machines, Virtual Networks, and associated resources on Azure, standardizing environments.",
          ],
        },
        {
          name: "Document Processing Automation and Infrastructure Monitoring",
          points: [
            "Automated the extraction of key-value pairs from medical documents using Azure Form Recognizer, improving data processing accuracy by over 95%.",
            "Documented technical processes and created comprehensive onboarding materials using Confluence, optimizing training time for new team members.",
            "Automated routine system administration tasks and generated operational reports using Python and Bash scripting, reducing manual intervention.",
          ],
        },
      ],
    },
  ],
  certifications: [
    { name: "Microsoft Certified: Azure DevOps Expert (AZ-400)", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
    { name: "Microsoft Certified: Azure Solutions Architect Expert (AZ-305)", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
    { name: "Microsoft Certified: Azure Administrator Associate (AZ-104)", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
    { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
    { name: "AWS Certified Solutions Architect – Associate (SAA-C03)", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
    { name: "HashiCorp Certified: Terraform Associate (003)", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
    { name: "GitHub Actions Certification", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
    { name: "Google Certified: Associate Cloud Engineer (GCP-ACE)", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
    { name: "Certified Kubernetes Administrator (CKA)", icon: <ShieldCheck className="h-4 w-4 mr-2 text-accent flex-shrink-0" /> },
  ],
  education: {
    degree: "Bachelor Of Engineering, Computer Science & Engineering",
    university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal, MP",
    date: "05/2019",
    gpa: "8.9 CGPA",
    icon: <BookOpen className="h-4 w-4 mr-2 text-accent flex-shrink-0" />
  },
};

export default function ResumePageContent() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <Card className="shadow-xl rounded-xl overflow-hidden bg-card border border-border/50 transition-shadow hover:shadow-2xl duration-300">
        <CardHeader className="p-6 md:p-8 bg-gradient-to-br from-primary via-primary/90 to-blue-600 text-primary-foreground">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-3xl md:text-4xl font-bold tracking-tight">{resumeData.name}</CardTitle>
              <CardDescription className="text-lg mt-1 text-primary-foreground/90">DevOps Engineer</CardDescription>
            </div>
            <div className="flex flex-col md:items-end gap-2 w-full md:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-primary-foreground/90">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href={`mailto:${resumeData.contact.email}`} className="hover:text-accent transition-colors break-all">{resumeData.contact.email}</a>
                </div>
                {/* Removed Phone section */}
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                  <span>{resumeData.contact.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-4 w-4 text-accent flex-shrink-0" />
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                </div>
              </div>
              <a
                href="/public/Manish_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center mt-2 md:mt-0 px-5 py-2 rounded-xl bg-accent text-accent-foreground font-semibold shadow hover:bg-accent/90 transition-colors text-base focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                title="Download Resume as PDF"
              >
                <Download className="h-5 w-5 mr-2" /> Download PDF
              </a>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 md:p-8 space-y-10">
          {/* Summary */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
               <UserCircle className="mr-2 h-6 w-6 text-accent" />
              Professional Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">{resumeData.summary}</p>
          </section>
          <Separator className="my-6 bg-border/50" />

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-5 text-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 text-accent"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
               Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumeData.skills.map((skillCategory, index) => (
                <div key={index} className="bg-secondary/30 dark:bg-secondary/20 border border-border/40 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                  <h3 className="flex items-center text-lg font-medium mb-3 text-foreground">{skillCategory.icon} {skillCategory.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-sm font-normal bg-background border border-border/60 text-secondary-foreground hover:bg-secondary/80 cursor-default">{item}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Separator className="my-6 bg-border/50" />

          {/* Experience */}
          <section>
             <h2 className="text-2xl font-semibold mb-5 text-primary flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-accent" />
               Work Experience
            </h2>
            <div className="space-y-8">
              {resumeData.experience.map((job, index) => (
                <div key={index} className="relative pl-10 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-border/70">
                   <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-4 ring-background shadow-sm">
                     <Server className="h-3.5 w-3.5 text-primary-foreground" />
                   </div>
                  <h3 className="text-xl font-semibold text-foreground mb-0.5">{job.title}</h3>
                  <p className="text-muted-foreground">{job.company} | {job.location}</p>
                  <p className="text-sm text-muted-foreground/80 mb-4 font-mono">{job.date}</p>
                  {job.points && (
                     <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground text-base">
                      {job.points.map((point, pIndex) => (
                        <li key={pIndex}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {job.projects && job.projects.map((project, projIndex) => (
                    <div key={projIndex} className="mt-5 bg-secondary/40 dark:bg-secondary/20 p-5 rounded-lg border border-border/30 shadow-inner">
                      <h4 className="font-semibold text-base mb-2 text-foreground">{project.name}</h4>
                       <ul className="list-disc list-outside pl-5 space-y-2 text-muted-foreground text-sm">
                        {project.points.map((point, pIndex) => (
                          <li key={pIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
          <Separator className="my-6 bg-border/50" />

          {/* Certifications */}
          <section>
             <h2 className="text-2xl font-semibold mb-5 text-primary flex items-center">
                <ShieldCheck className="mr-2 h-6 w-6 text-accent" />
               Certifications
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {resumeData.certifications.map((cert, index) => (
                <li key={index} className="flex items-center text-muted-foreground text-base group">
                  {React.cloneElement(cert.icon, { className: "h-4 w-4 mr-2 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" })}
                  <span className="group-hover:text-foreground transition-colors">{cert.name}</span>
                </li>
              ))}
            </ul>
          </section>
          <Separator className="my-6 bg-border/50" />

          {/* Education */}
          <section>
             <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
                 <BookOpen className="mr-2 h-6 w-6 text-accent" />
               Education
            </h2>
             <div className="flex items-start space-x-4">
               {React.cloneElement(resumeData.education.icon, { className: "h-5 w-5 mt-1 text-accent flex-shrink-0" })}
               <div>
                <h3 className="text-lg font-semibold text-foreground">{resumeData.education.degree}</h3>
                <p className="text-muted-foreground">{resumeData.education.university}</p>
                <p className="text-sm text-muted-foreground/80 mt-0.5">Graduated: {resumeData.education.date} | {resumeData.education.gpa}</p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
