import { defineCollection, z, reference } from 'astro:content';
import { optional } from 'astro:schema';

export const collections = {
	publications: defineCollection({
		type: 'content',
		// Type-check frontmatter using a schema
		schema: z.object({
			title: z.string(),
			tagline: z.string(),
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
				navDesc: z.string(),
				description: z.string(),
				cardSummary: z.string(),
				cardImg:  z.string().optional(),
				bannerImage: z.string().optional(),
			}),
		}),
		capabilities: defineCollection({
			type: 'content',
			// Type-check frontmatter using a schema
			schema: z.object({
				title: z.string(),
				navDesc: z.string(),
				description: z.string(),
				cardSummary: z.string(),
				cardImg:  z.string().optional(),
				bannerImage: z.string().optional(),
			}),
		}),
		team: defineCollection({
			type: 'content',
			// Type-check frontmatter using a schema
			schema: ({ image }) => z.object({
				name: z.string(),
				photo: image(),  // No width check or refinement
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

