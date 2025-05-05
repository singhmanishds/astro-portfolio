"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
// Removed unused Label import
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Helper function to apply theme and update localStorage
// Removed unused toggleTheme function

export function ThemeToggle() {
  // State to hold whether dark mode is currently *active*
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Determine initial state *after* mount by checking the class or resolved_theme
    // This avoids hydration mismatch. The class is set by theme-provider-script.astro
    const currentlyDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(currentlyDark);

    // Optional: Listen for changes from other tabs/windows
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'resolved_theme') {
         setIsDarkMode(event.newValue === 'dark');
         // Ensure class matches if changed elsewhere
          if (event.newValue === 'dark') {
              document.documentElement.classList.add('dark');
          } else {
              document.documentElement.classList.remove('dark');
          }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);

  }, []);

  const handleThemeChange = (checked: boolean) => {
    // checked = true means the switch is toggled ON (requesting dark mode)
    // checked = false means the switch is toggled OFF (requesting light mode)
    const requestedTheme = checked ? 'dark' : 'light';
    setIsDarkMode(checked); // Update local state immediately

    // Apply the theme change
    if (requestedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', requestedTheme);
    localStorage.setItem('resolved_theme', requestedTheme);
  };

  if (!mounted) {
    // Render a placeholder or null during SSR/SSG or before hydration to avoid hydration mismatch
    // Match the final structure to prevent layout shifts
    return (
        <div className="flex items-center space-x-2 w-[70px]" aria-hidden="true">
             <span className="h-5 w-5 block text-transparent" /> {/* Sun Placeholder */}
             <div className="h-6 w-11 bg-muted rounded-full" /> {/* Switch Placeholder */}
             <span className="h-5 w-5 block text-transparent" /> {/* Moon Placeholder */}
        </div>
    );
  }

  return (
     <TooltipProvider delayDuration={100}>
        <Tooltip>
            <TooltipTrigger asChild>
                <div className="flex items-center space-x-2" aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
                    <Sun className={`h-5 w-5 transition-colors ${!isDarkMode ? 'text-accent' : 'text-muted-foreground/70'}`} />
                    <Switch
                      id="theme-toggle-switch" // Give a unique ID
                      checked={isDarkMode}
                      onCheckedChange={handleThemeChange}
                      aria-label="Toggle theme between light and dark" // More descriptive label
                      role="switch" // Explicit role
                      aria-checked={isDarkMode}
                    />
                    <Moon className={`h-5 w-5 transition-colors ${isDarkMode ? 'text-accent' : 'text-muted-foreground/70'}`} />
                </div>
            </TooltipTrigger>
            <TooltipContent side="bottom">
                <p>Switch to {isDarkMode ? 'light' : 'dark'} mode</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  );
}
