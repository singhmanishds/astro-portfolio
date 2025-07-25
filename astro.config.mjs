import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify"; // Import the Netlify adapter

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }), // Disable default base styles if using ShadCN's globals
    react()
  ],
  output: "static", // Set output to 'hybrid' for SSR/SSG mix on Netlify
  adapter: netlify() // Add the Netlify adapter
});
