// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';
import tailwindcssNesting from 'tailwindcss/nesting'

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
      mdx(),
      sitemap(),
      tailwind(),
      alpinejs({ entrypoint: '/src/entrypoint' }),
      tailwind({nesting: true})
    ],vite: {
      css: {
        postcss: {
          plugins: [tailwindcssNesting()]
        }
      }
    },
});