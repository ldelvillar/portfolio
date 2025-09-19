import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  redirects: {
    '/': '/es',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
