import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';  // server + static bitta paket

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'static',        // tez va statik
  adapter: vercel(),       // @astrojs/vercel paketidan
});
