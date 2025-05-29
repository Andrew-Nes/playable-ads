import { defineConfig } from 'vite';
import singleFile from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [singleFile()],
  build: {
    target: 'es2015',
    assetsInlineLimit: Infinity,
    cssCodeSplit: false,
  },
});