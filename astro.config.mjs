import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://duboc.io',
  integrations: [mdx(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'solarized-dark',
      wrap: true
    },
    syntaxHighlight: 'shiki'
  }
});