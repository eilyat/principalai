import { defineCollection, z, reference } from 'astro:content';

// Shared schemas
const baseContentSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  authors: z.array(z.string()).optional(),
  heroImage: z.string().optional(),
  cardImage: z.string().optional(),
  iframe: z.string().optional(),
  downloadPdf: z.string().optional(),
	tags: z.array(z.string()).optional(),
});

const navEntrySchema = z.object({
  title: z.string(),
  navDesc: z.string(),
  description: z.string(),
  cardSummary: z.string(),
  cardImage: z.string().optional(),
  bannerImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

// Factory function for publication types
const createPublicationSchema = (options: {
  type: z.ZodLiteral<string>;
  requirePubDate?: boolean;
  requireTagline?: boolean;
}) => {
  return baseContentSchema.extend({
    type: options.type,
    tagline: options.requireTagline ? z.string() : z.string().optional(),
    pubDate: options.requirePubDate ? z.coerce.date() : z.coerce.date().optional(),
  });
};

export const collections = {
  resources: defineCollection({
    type: 'content',
    schema: createPublicationSchema({
      type: z.literal('Resource'),
      requirePubDate: false,
      requireTagline: false,
    }),
  }),
  articles: defineCollection({
    type: 'content',
    schema: createPublicationSchema({
      type: z.literal('Article'),
      requirePubDate: true,
      requireTagline: true,
    }),
  }),
  publications: defineCollection({
    type: 'content',
    schema: createPublicationSchema({
      type: z.literal('Publication'),
      requirePubDate: true,
      requireTagline: true,
    }),
  }),
  industries: defineCollection({
    type: 'content',
    schema: navEntrySchema,
  }),
  capabilities: defineCollection({
    type: 'content',
    schema: navEntrySchema,
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