import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'server',        // Keystatic admin panel uchun server output
  adapter: vercel(),       // Vercel serverless deploy uchun
});
