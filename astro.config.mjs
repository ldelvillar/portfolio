import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucasdelvillar.com',

  // Dev/build fallback only. On Vercel, vercel.json handles `/` (307) and also
  // picks de/en from Accept-Language; keep the default target in sync.
  redirects: {
    '/': '/es',
  },

  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({ filter: page => !page.endsWith('/itsme') })],
});
