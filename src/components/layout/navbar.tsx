"use client";

import { useState, useEffect } from "react";
// Removed unused GithubIcon, Layers imports
import { Menu, X, Home, User, Briefcase, Palette, Rss, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
// Removed SocialMediaPanel import as it's no longer used here

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/resume", label: "Resume", icon: User },
  { href: "/projects", label: "Showcase", icon: Briefcase },
  // Removed Career-AI link (now featured in Showcase)
];

// Define props for the Navbar component
interface NavbarProps {
  currentPathname?: string; // Accept current pathname from Astro
}

export default function Navbar({ currentPathname }: NavbarProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection for background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close sheet on navigation (relying on full page load in Astro)
  useEffect(() => {
    setIsSheetOpen(false);
  }, [currentPathname]); // React to pathname changes

  if (!mounted) {
    // Render a simpler placeholder during SSR/SSG or before hydration
    return (
       <header className={cn(
            "sticky top-0 z-50 w-full border-b transition-colors duration-300",
            "border-transparent bg-transparent" // Initial state (no scroll)
         )}>
        <div className="container flex h-16 max-w-screen-xl items-center">
          <a href="/" className="mr-6 flex items-center space-x-2" aria-label="Go to Homepage">
             <Palette className="h-6 w-6 text-primary transition-transform hover:scale-110" />
             <span className="font-semibold hidden sm:inline-block text-lg">codeandcurtains</span>
          </a>
          {/* Placeholder elements */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-1">
            {navItems.map((item) => (
              <Button key={item.href} variant="ghost" disabled className="text-foreground/70">
                {item.label}
              </Button>
            ))}
             <div className="ml-4 flex items-center space-x-1 border-l border-border/40 pl-4">
                {/* Placeholder for Theme Toggle Switch */}
                 <div className="flex items-center space-x-2 w-[70px]">
                     <span className="h-5 w-5 block bg-muted rounded-full" /> {/* Sun Placeholder */}
                     <div className="h-6 w-11 bg-muted rounded-full" /> {/* Switch Placeholder */}
                     <span className="h-5 w-5 block bg-muted rounded-full" /> {/* Moon Placeholder */}
                </div>
             </div>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2 md:hidden">
              {/* Placeholder for Theme Toggle Switch */}
               <div className="flex items-center space-x-2 w-[70px]">
                     <span className="h-5 w-5 block bg-muted rounded-full" /> {/* Sun Placeholder */}
                     <div className="h-6 w-11 bg-muted rounded-full" /> {/* Switch Placeholder */}
                     <span className="h-5 w-5 block bg-muted rounded-full" /> {/* Moon Placeholder */}
                </div>
             <Button variant="ghost" size="icon" disabled>
               <Menu className="h-5 w-5" />
             </Button>
          </div>
        </div>
      </header>
    );
  }

  // Use currentPathname prop from Astro for active state
  const pathname = currentPathname || (typeof window !== 'undefined' ? window.location.pathname : '/');

  return (
     <header className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300", // Added transition-all
        isScrolled
          ? "border-border/40 bg-background/90 backdrop-blur-lg" // Scrolled state
          : "border-transparent bg-transparent" // Initial state (top)
      )}>
      <div className="container flex h-16 max-w-screen-xl items-center">
        {/* Logo/Brand */}
        <a href="/" className="mr-6 flex items-center space-x-2 group" aria-label="Go to Homepage">
           <Palette className="h-6 w-6 text-primary transition-transform group-hover:scale-110 group-hover:rotate-[-10deg]" />
           <span className="font-semibold hidden sm:inline-block text-lg group-hover:text-primary transition-colors">codeandcurtains</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-end space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                "transition-colors hover:text-primary focus-visible:text-primary focus-visible:ring-primary",
                pathname === item.href
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-foreground/80"
              )}
            >
              <a href={item.href} className="px-3 py-2 flex items-center">
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </a>
            </Button>
          ))}
          {/* Theme Toggle Button */}
          <div className="ml-4 flex items-center space-x-2 border-l border-border/40 pl-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex flex-1 items-center justify-end md:hidden space-x-2">
           <ThemeToggle /> {/* Render the new ThemeToggle Switch */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] pr-0 pt-8 bg-background flex flex-col shadow-xl">
               <div className="flex items-center justify-between pl-6 mb-8">
                 <a href="/" className="flex items-center space-x-2 group" aria-label="Go to Homepage">
                    <Palette className="h-6 w-6 text-primary group-hover:scale-110" />
                     <span className="font-semibold text-lg group-hover:text-primary transition-colors">codeandcurtains</span>
                 </a>
                 <SheetClose asChild>
                   <Button variant="ghost" size="icon" className="mr-4 text-muted-foreground">
                     <X className="h-5 w-5" />
                     <span className="sr-only">Close</span>
                   </Button>
                 </SheetClose>
               </div>
              <nav className="flex flex-col space-y-3 flex-grow px-4">
                {navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                     <a
                       href={item.href} // Use standard anchor tags
                       className={cn(
                         "flex items-center rounded-md px-4 py-3 text-base font-medium transition-all duration-200 hover:bg-accent/10 hover:text-primary hover:pl-5",
                         pathname === item.href
                           ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                           : "text-foreground/80"
                       )}
                     >
                      <item.icon className="mr-4 h-5 w-5 flex-shrink-0" />
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              {/* Removed SocialMediaPanel from sheet */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
