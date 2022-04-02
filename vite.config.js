import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solidPlugin(),
  ],
  root: './src',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: '../',
  },
  resolve: {
    alias: {
      '~components': path.resolve(__dirname, './src/components'),
      '~root': path.resolve(__dirname, './src'),
    },
  },
});
