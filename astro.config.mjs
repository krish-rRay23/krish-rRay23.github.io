// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://krish-rray23.github.io',
  base: '/',
  integrations: [tailwind(), react(), vue(), svelte(), mdx()],
  build: {
    assets: 'assets'
  }
});