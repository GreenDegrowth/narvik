// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkSmartypants],
  },
  site: 'https://narvik.timothybrits.co.za',
  trailingSlash: 'never',
  output: 'static',
  prefetch: {
    defaultStrategy: 'hover',
  },
  integrations: [sitemap()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Lora',
      cssVariable: '--font-serif',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'DM Sans',
      cssVariable: '--font-sans',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Playfair Display',
      cssVariable: '--font-display',
    },
  ],
  experimental: {
    rustCompiler: true,
  },
});
