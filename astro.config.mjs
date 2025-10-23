// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import awsAmplify from 'astro-aws-amplify';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://localhost:4321',
  integrations: [sitemap(), robotsTxt()],
  
  output: "server",
  adapter: awsAmplify(),
 
/*   adapter: node({
    mode: 'standalone',
  }), */
});