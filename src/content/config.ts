import { z, defineCollection } from 'astro:content'

const featuresCollection = defineCollection({
	type: 'data',
	schema: z.object({
		href: z.string(),
		title: z.string(),
		icon: z.string(),
		body: z.string()
	})
})

export const collections = {
	features: featuresCollection
}
