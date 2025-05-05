'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Mic, FileText, Rss } from "lucide-react"; // Removed GithubIcon
// import Image from "next/image"; // Remove next/image
// import Link from "next/link"; // Use standard anchor tags

// Updated content focusing on blog/articles
const otherContent = [
    {
        type: "Medium Article",
        title: "Prompt Engineering: The Underrated Soft Skill Every Techie Needs (Yes, Even You!)",
        description: "An exploration of why prompt engineering is becoming a vital skill across tech roles, with practical advice on how to improve.",
        link: "https://medium.com/@singhmanishds/prompt-engineering-the-underrated-soft-skill-every-techie-needs-yes-even-you-14eb5fb8c0cb",
        icon: <FileText className="h-5 w-5 text-accent" />,
        imageUrl: "https://picsum.photos/seed/promptEngBlog/600/400", // Use the same seed as homepage for consistency
        imageHint: "abstract AI brain text interface",
    },
    {
        type: "Conference Talk",
        title: "Scaling Microservices on Kubernetes: Lessons Learned",
        description: "Shared insights and practical tips on deploying and scaling microservices effectively using Azure Kubernetes Service (AKS) at ScaleConf.",
        link: "#", // Keep placeholder if no public link
        icon: <Mic className="h-5 w-5 text-accent" />,
        imageUrl: "https://picsum.photos/seed/talk1/600/400",
        imageHint: "conference stage presentation audience",
    },
    {
        type: "Personal Blog (Planned)",
        title: "Tech Musings & DevOps Insights",
        description: "A space currently under construction where I plan to share deeper dives into DevOps practices, cloud strategies, and GenAI explorations.",
        link: "#", // Placeholder link
        icon: <Rss className="h-5 w-5 text-accent" />,
        imageUrl: "https://picsum.photos/seed/blog2/600/400",
        imageHint: "person writing laptop modern office",
    },
    // Removed the Open Source Contribution example as GitHub link is commented out
    // {
    //     type: "Open Source Contribution",
    //     title: "Contribution to Awesome-DevOps List",
    //     description: "Curated and added valuable resources related to Azure DevOps and Terraform to the popular Awesome-DevOps list on GitHub.",
    //     link: "https://github.com/topics/awesome-devops",
    //     icon: <GithubIcon className="h-5 w-5 text-accent" />,
    //     imageUrl: "https://picsum.photos/seed/oss1/600/400",
    //     imageHint: "github repository page code snippet",
    // },
];

export default function OtherPageContent() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary tracking-tight flex items-center">
         <Rss className="mr-3 h-7 w-7 text-accent" /> Blog & Other Content
      </h1>
      <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
        Beyond core projects, I actively engage with the tech community through writing and speaking. Explore some of my articles and talks below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {otherContent.map((item, index) => (
          <a key={index} href={item.link} target={item.link !== '#' ? '_blank' : '_self'} rel="noopener noreferrer" className="group block h-full">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-border/50 group-hover:border-primary/40 group-hover:scale-[1.03] bg-card rounded-xl overflow-hidden">
                 {item.imageUrl && (
                   <div className="relative w-full h-52 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={item.imageHint}
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
                       {item.link === '#' ? 'Coming Soon' : 'View Content'}
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
