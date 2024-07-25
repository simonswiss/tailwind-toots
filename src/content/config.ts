import { z, defineCollection } from 'astro:content'

const tootsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    videoId: z.string(),
  }),
})

export const collections = {
  toots: tootsCollection,
}
