import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://aximoliya.github.io/DaoYou',
  base: '/DaoYou',
  build: {
    assets: '_assets'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild'
    }
  }
});