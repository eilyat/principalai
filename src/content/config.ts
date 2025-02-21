import { defineCollection, z } from 'astro:content';

// Function-based schema to access `image()`
export const collections = {
  resources: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string().optional(),
      authors: z.array(z.string()).optional(),
      heroImage: image().optional(),
      cardImage: image().optional(),
      iframe: z.string().optional(),
      downloadPdf: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),

  articles: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string().optional(),
      authors: z.array(z.string()).optional(),
      heroImage: image().optional(),
      cardImage: image().optional(),
      downloadPdf: z.string().optional(),
      tags: z.array(z.string()).optional(),
      type: z.literal('Article'),
      tagline: z.string(),
      pubDate: z.coerce.date(),
    }),
  }),

  publications: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      type: z.literal('Publication'),
      tagline: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      authors: z.array(z.string()).optional(),
      heroImage: image().optional(),
      cardImage: image().optional(),
      downloadPdf: z.string().optional(),
    }),
  }),

  industries: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      navDesc: z.string(),
      description: z.string(),
      cardSummary: z.string(),
      cardImage: image().optional(),
      bannerImage: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),

  capabilities: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      navDesc: z.string(),
      description: z.string(),
      cardSummary: z.string().optional(),
      cardImage: image().optional(),
      bannerImage: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),

  team: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      name: z.string(),
      photo: image(),
      shortName: z.string(),
      joinDate: z.coerce.date().optional(),
      role: z.string(),
      location: z.string(),
      phone: z.string().optional(),
      email: z.string(),
      qualification: z.string().optional(),
      linkedIn: z.string().optional(),
      orcid: z.string().optional(),
      ssrn: z.string().optional(),
    }),
  }),
};
