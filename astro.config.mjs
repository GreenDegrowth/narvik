// @ts-check
import sitemap from '@astrojs/sitemap';
import playformInline from '@playform/inline';
import compressor from 'astro-compressor';
import purgecss from 'astro-purgecss';
import AstroPWA from '@vite-pwa/astro';
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
  integrations: [
    sitemap(),
    AstroPWA({
      mode: 'production',
      registerType: 'autoUpdate',
      manifest: false,
      workbox: {
        globPatterns: [],
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              networkTimeoutSeconds: 5,
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^\/_astro\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets-cache',
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
    playformInline({
      Logger: 0,
    }),
    purgecss(),
    compressor({
      gzip: true,
      brotli: true,
      zstd: true,
    }),
  ],
  vite: {
    plugins: [FontaineTransform.vite(fontaineOptions)],
  },
});
