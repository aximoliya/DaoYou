import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aximoliya.github.io/DaoYou',
  base: '/DaoYou',
  output: 'static',
  build: {
    assets: '_assets'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      lastmod: new Date(),
    })
  ],
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  }
});
