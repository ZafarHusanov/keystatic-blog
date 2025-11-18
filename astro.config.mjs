import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/static';  // <-- import qo'shildi

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'static',
  adapter: vercel(),
});
