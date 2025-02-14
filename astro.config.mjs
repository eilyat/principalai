// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    build: {
      format: "file",
    },
    site: 'https://example.com',
    integrations: [
      pagefind(),
      mdx(),
      sitemap(),
      alpinejs({ entrypoint: '/src/entrypoint' }),
      tailwind({nesting: true, applyBaseStyles: false,}),
      icon({
        include: {
          // Include only three `mdi` icons in the bundle
          carbon: ['email', 'phone', 'location', 'information', 'arrow-right', 'logo-linkedin'],
          academicons: ['orcid', 'ssrn']
        }
      })
  ],
  
});

