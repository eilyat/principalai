// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
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