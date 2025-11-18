import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string().optional(),
  }),
});

const homepage = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    hero: z.string().optional(),
  }),
});

const about = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    body: z.string(),
    photo: z.string().optional(),
  }),
});

export const collections = { posts, homepage, about };
