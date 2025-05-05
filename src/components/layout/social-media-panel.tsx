
"use client";

// Updated imports for non-deprecated icons
import { LinkedinIcon, GithubIcon, TwitterIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // Import Tooltip components

// Updated social media links
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manishsingh9075/", // Updated LinkedIn URL
    icon: LinkedinIcon, // Use LinkedinIcon
    ariaLabel: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    url: "https://github.com/singhmanishds", // Updated GitHub URL
    icon: GithubIcon, // Use GithubIcon
    ariaLabel: "View GitHub Profile",
  },
   {
    name: "Twitter",
    url: "#", // Replace with your actual Twitter URL or remove if not applicable (using # for placeholder)
    icon: TwitterIcon, // Use TwitterIcon
    ariaLabel: "Follow on Twitter",
  },
   {
    name: "Email",
    url: "mailto:singhmanishds@gmail.com", // Updated Email
    icon: Mail,
    ariaLabel: "Send an Email",
  },
];

export function SocialMediaPanel() {
  return (
    <TooltipProvider delayDuration={100}> {/* Added TooltipProvider */}
      <div className="flex items-center space-x-1"> {/* Reduced space */}
        {socialLinks.map((link) => (
           link.url && link.url !== '#' ? ( // Only render if URL is valid
             <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all duration-200" // Use primary on hover, add subtle bg
                  aria-label={link.ariaLabel}
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom"> {/* Show tooltip below */}
                <p>{link.ariaLabel}</p>
              </TooltipContent>
            </Tooltip>
          ) : null // Don't render button if URL is '#' or empty
        ))}
      </div>
    </TooltipProvider>
  );
}
