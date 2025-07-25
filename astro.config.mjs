import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: netlify(),
  output: "server", // required in Astro v5+

});
