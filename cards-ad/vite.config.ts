import { defineConfig } from 'vite';

import { viteSingleFile } from 'vite-plugin-singlefile';

import path from 'path';

export default defineConfig({
  plugins: [viteSingleFile()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2015',
    assetsInlineLimit: Infinity,
    cssCodeSplit: false,
  },
});
