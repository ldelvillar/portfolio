import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  redirects: {
    '/': '/es',
  },
  integrations: [tailwind()],
});
