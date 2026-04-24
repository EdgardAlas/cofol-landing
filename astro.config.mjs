// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

const env = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: env.SITE_URL,

  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
  integrations: [sitemap()],

  adapter: node({
    mode: 'standalone',
  }),

  security: {
    checkOrigin: false,
  },
});
