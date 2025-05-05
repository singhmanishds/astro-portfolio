'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button"; // Button not used directly here
import { ExternalLink, Mic, FileText, Rss, GithubIcon } from "lucide-react";
// import Image from "next/image"; // Remove next/image
// import Link from "next/link"; // Use standard anchor tags

const otherContent = [
    {
        type: "Blog Post",
        title: "Demystifying Infrastructure as Code with Terraform",
        description: "An introductory guide to understanding the concepts and benefits of managing infrastructure using Terraform, with Azure examples.",
        link: "#",
        icon: <FileText className="h-5 w-5 text-accent" />,
        imageUrl: "https://picsum.photos/seed/blog1/600/400",
        imageHint: "code editor screen terraform abstract",
    },
    {
        type: "Conference Talk",
        title: "Scaling Microservices on Kubernetes: Lessons Learned",
        description: "Shared insights and practical tips on deploying and scaling microservices effectively using Azure Kubernetes Service (AKS) at ScaleConf.",
        link: "#",
        icon: <Mic className="h-5 w-5 text-accent" />,
        imageUrl: "https://picsum.photos/seed/talk1/600/400",
        imageHint: "conference stage presentation audience",
    },
    {
        type: "Personal Blog",
        title: "My DevOps Journey & Tech Musings",
        description: "A personal space (work in progress) where I plan to share thoughts on technology, DevOps practices, and career development.",
        link: "#",
        icon: <Rss className="h-5 w-5 text-accent" />,
        imageUrl: "https://picsum.photos/seed/blog2/600/400",
        imageHint: "person writing laptop modern office",
    },
    {
        type: "Open Source Contribution",
        title: "Contribution to Awesome-DevOps List",
        description: "Curated and added valuable resources related to Azure DevOps and Terraform to the popular Awesome-DevOps list on GitHub.",
        link: "https://github.com/topics/awesome-devops",
        icon: <GithubIcon className="h-5 w-5 text-accent" />,
        imageUrl: "https://picsum.photos/seed/oss1/600/400",
        imageHint: "github repository page code snippet",
    },
];

export default function OtherPageContent() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary tracking-tight">Other Activities & Content</h1>
      <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
        Beyond core projects, I actively engage with the tech community through writing, speaking, and contributing to open source. Explore some of my other works below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {otherContent.map((item, index) => (
          // Use standard anchor tag
          <a key={index} href={item.link} target={item.link !== '#' ? '_blank' : '_self'} rel="noopener noreferrer" className="group block h-full">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-border/50 group-hover:border-primary/40 group-hover:scale-[1.03] bg-card rounded-xl overflow-hidden">
                 {item.imageUrl && (
                   <div className="relative w-full h-52 overflow-hidden">
                    {/* Use standard img tag */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      // layout="fill" // Not applicable
                      // objectFit="cover" // Use CSS
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={item.imageHint}
                      // sizes="(max-width: 768px) 100vw, 50vw" // Not applicable
                      loading="lazy"
                     />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                      {item.link !== '#' && (
                        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md transition-transform group-hover:scale-110">
                          <ExternalLink className="h-4 w-4 text-foreground/80" />
                        </div>
                      )}
                  </div>
                 )}
                <CardHeader className="flex flex-row items-start space-x-3 pb-3 pt-5 px-5">
                  <div className="flex-shrink-0 pt-1">{item.icon}</div>
                  <div className="flex-grow">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{item.type}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between pt-0 pb-5 px-5">
                  <CardDescription className="mb-5 text-base text-muted-foreground">
                     {item.description}
                  </CardDescription>
                  <div className="mt-auto">
                     <span className={`inline-flex items-center text-sm font-medium ${item.link === '#' ? 'text-muted-foreground' : 'text-primary group-hover:underline underline-offset-4'}`}>
                       {item.link === '#' ? 'Coming Soon' : 'Learn More'}
                       {item.link !== '#' && <ExternalLink className="ml-1.5 h-4 w-4" />}
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
