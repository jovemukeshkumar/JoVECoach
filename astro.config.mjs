import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

export default defineConfig({
  server: {
    host: true, // This enables network hosting
  },

  adapter: vercel(),
  output: 'server',
});