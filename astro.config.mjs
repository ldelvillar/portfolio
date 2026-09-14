import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ldelvillar.vercel.app',

  // Also in vercel.json (the real 307 on Vercel); keep both in sync.
  redirects: {
    '/': '/es',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
