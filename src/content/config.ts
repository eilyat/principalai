import { defineCollection, z, reference } from 'astro:content';

export const collections = {
	publications: defineCollection({
		type: 'content',
		// Type-check frontmatter using a schema
		schema: z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			authors: z.string().optional(),
			heroImage: z.string().optional(),
		}),
	}),
};
