import { resolve } from 'path';
import { defineConfig } from 'vite';

// @ts-ignore
/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'BKSmoothScrollbar'
    },
  }
});
