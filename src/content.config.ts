import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    readTime: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    slug: z.string().optional(),
    /** 设为 true 时不对外展示；新文章默认 false（可见） */
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};

