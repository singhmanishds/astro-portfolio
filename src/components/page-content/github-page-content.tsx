
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, Star, GitFork, ExternalLink } from "lucide-react";
// import Link from "next/link"; // Use standard anchor tags
import { Badge } from "@/components/ui/badge";
import React, { useEffect } from 'react'; // Import useEffect

// Updated data with real GitHub username and new repo examples
const githubData = {
    username: "singhmanishds", // Updated username
    profileUrl: "https://github.com/singhmanishds", // Updated profile URL
    repositories: [
        {
            name: "GenAI-Terraform-Module-Generator",
            description: "Proof-of-concept using Genkit & Gemini to generate Terraform module boilerplate based on specified Azure/AWS resource types and parameters.",
            stars: 25,
            forks: 5,
            url: "https://github.com/singhmanishds/GenAI-Terraform-Module-Generator", // Placeholder URL
            language: "TypeScript"
        },
        {
            name: "Automated-MLOps-Pipeline-Azure",
            description: "A complete MLOps pipeline template using Azure DevOps, Azure ML, Terraform, and Docker for automated training, deployment, and monitoring of ML models.",
            stars: 40,
            forks: 10,
            url: "https://github.com/singhmanishds/Automated-MLOps-Pipeline-Azure", // Placeholder URL
            language: "YAML"
        },
        {
            name: "k8s-Observability-Stack-Helm",
            description: "Helm charts for deploying a comprehensive Kubernetes observability stack (Prometheus, Grafana, Loki, Tempo) with pre-configured dashboards and alerts.",
            stars: 30,
            forks: 8,
            url: "https://github.com/singhmanishds/k8s-Observability-Stack-Helm", // Placeholder URL
            language: "YAML"
        },
        // Keeping some existing relevant ones for variety
         { name: "Terraform-Azure-Modules", description: "Reusable Terraform modules for provisioning various Azure resources following best practices.", stars: 120, forks: 35, url: "https://github.com/singhmanishds/Terraform-Azure-Modules", language: "HCL" },
         { name: "github-actions-workflows", description: "A repository showcasing example GitHub Actions workflows for different CI/CD scenarios.", stars: 70, forks: 25, url: "https://github.com/singhmanishds/github-actions-workflows", language: "YAML" },
         { name: "dotfiles", description: "My personal configuration files (dotfiles) for development environment setup.", stars: 30, forks: 5, url: "https://github.com/singhmanishds/dotfiles", language: "Shell" },
    ]
};


export default function GitHubPageContent() {

    // This effect handles the image fallback logic on the client side
    useEffect(() => {
        const imgElement = document.getElementById('github-chart') as HTMLImageElement | null;
        if (imgElement) {
            imgElement.onerror = () => {
                // Try a different color if the default fails (or just hide)
                const fallbackColor = document.documentElement.classList.contains('dark') ? '196127' : '2178FF'; // Example fallback based on theme
                imgElement.src = `https://ghchart.rshah.org/${fallbackColor}/${githubData.username}`;
                imgElement.onerror = null; // Prevent infinite loop if fallback also fails
            };
        }
    }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary flex items-center tracking-tight mb-3 md:mb-0">
          <GithubIcon className="h-8 w-8 mr-3 text-accent" />
          GitHub Contributions
        </h1>
        <Button variant="outline" asChild className="mt-4 md:mt-0 hover:bg-accent hover:text-accent-foreground border-primary/50 hover:border-accent transition-all duration-300 focus-visible:ring-accent shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
          <a href={githubData.profileUrl} target="_blank" rel="noopener noreferrer">
            View Profile on GitHub <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
        Explore some of my public repositories showcasing my work in DevOps, automation, cloud, and emerging AI integrations. These projects reflect my commitment to open source and exploring innovative solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {githubData.repositories.map((repo, index) => (
           // Use standard anchor tag
           <a key={index} href={repo.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full border border-border/50 group-hover:border-primary/40 group-hover:scale-[1.03] bg-card rounded-xl p-5">
                <CardHeader className="pb-3 p-0">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors mb-1">
                      {repo.name}
                    </CardTitle>
                     {repo.language && (
                        <Badge variant="secondary" className="text-xs font-normal px-2.5 py-1 rounded bg-secondary/70 border border-transparent text-secondary-foreground flex-shrink-0 mt-0.5">
                           {repo.language}
                        </Badge>
                     )}
                   </div>
                  <CardDescription className="pt-1 text-base line-clamp-2 text-muted-foreground">{repo.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4 pb-0 p-0">
                  <div className="flex items-center space-x-5">
                    <span className="flex items-center group/stat hover:text-yellow-500 transition-colors">
                      <Star className="h-4 w-4 mr-1.5 text-muted-foreground group-hover/stat:text-yellow-500 transition-colors" /> {repo.stars}
                    </span>
                    <span className="flex items-center group/stat hover:text-blue-500 transition-colors">
                      <GitFork className="h-4 w-4 mr-1.5 text-muted-foreground group-hover/stat:text-blue-500 transition-colors" /> {repo.forks}
                    </span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground/70 group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </a>
        ))}
      </div>

      {/* Contribution Graph */}
       <div className="mt-16 p-6 bg-card border border-border/50 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-3 text-primary">Contribution Activity</h2>
        <p className="text-muted-foreground mb-5">
          A visual snapshot of my GitHub contribution activity. Visit my profile for more details.
        </p>
         <a href={`https://github.com/${githubData.username}`} target="_blank" rel="noopener noreferrer" title="View contributions on GitHub" className="block overflow-hidden rounded-lg border border-border/30 hover:shadow-lg transition-shadow">
           <img
             id="github-chart" // Add an ID for the useEffect hook to find
             src={`https://ghchart.rshah.org/${githubData.username}`}
             alt={`${githubData.username}'s Github contribution chart`}
             className="w-full block"
            // onError logic is moved to useEffect
            />
         </a>
      </div>
    </div>
  );
}
