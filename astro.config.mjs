import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucasdelvillar.com',

  // Also in vercel.json (the real 307 on Vercel); keep both in sync.
  redirects: {
    '/': '/es',
  },

  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
