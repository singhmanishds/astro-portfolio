import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  // Optional: Specify the port if needed, matches the old dev script port
  server: {
     port: 9002
  },
  // Needed for Genkit/server-side code
  output: "hybrid",
});
