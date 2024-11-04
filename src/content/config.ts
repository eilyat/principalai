import { defineCollection, z, reference } from 'astro:content';

export const collections = {
	publications: defineCollection({
		type: 'content',
		// Type-check frontmatter using a schema
		schema: z.object({
			title: z.string(),
			tagline: z.string().optional(),
			description: z.string().optional(),
			pubDate: z.coerce.date(),
			authors: z.array(z.string()),
			heroImage: z.string().optional(),
			downloadPdf: z.string().optional(),
		}),
	}),
		industries: defineCollection({
			type: 'content',
			// Type-check frontmatter using a schema
			schema: z.object({
				title: z.string(),
				description: z.string(),
				cardSummary: z.string(),
				cardImg:  z.string().optional(),
				bannerImage: z.string().optional(),
			}),
		}),
};

