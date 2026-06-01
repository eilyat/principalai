// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import cloudflare from '@astrojs/cloudflare';
// import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    // output: 'server',
    // adapter: cloudflare({
    //   imageService: 'compile'
    // }),
    trailingSlash: "never",
    build: {
      format: "file",
    },
    site: 'https://principaleconomics.co.nz',
    integrations: [
      pagefind({
        // Example of specifying Pagefind config:
        indexConfig: {
          keepIndexUrl: true,
        },
      }),
      mdx(),
//      sitemap(),
      alpinejs({ entrypoint: '/src/entrypoint' }),
      tailwind({nesting: true, applyBaseStyles: false,}),
      icon({
        include: {
          // Include only three `mdi` icons in the bundle
          carbon: ['email', 'phone', 'location', 'information', 'arrow-right', 'logo-linkedin', 'pin'],
          academicons: ['orcid', 'ssrn']
        }
      })
  ],
  
});

