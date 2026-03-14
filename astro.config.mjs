// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { FontaineTransform } from 'fontaine';

const fontaineOptions = {
  fallbacks: {},
  categoryFallbacks: {
    serif: ['Georgia', 'Times New Roman'],
    'sans-serif': ['Arial', 'Helvetica Neue'],
    monospace: ['Courier New', 'Roboto Mono'],
  },
};

export default defineConfig({
  site: 'https://narvik.timothybrits.co.za',
  trailingSlash: 'never',
  output: 'static',
  prefetch: {
    defaultStrategy: 'hover',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [FontaineTransform.vite(fontaineOptions)],
  },
});
