// types/vite-plugin-singlefile.d.ts
declare module 'vite-plugin-singlefile' {
  import type { Plugin } from 'vite';

  export function singleFile(): Plugin;
}