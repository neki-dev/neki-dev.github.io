import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import alias from 'alias-reuse';

export default defineConfig({
  plugins: [
    solidPlugin(),
    solidSvg(),
  ],
  root: './src',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: '../',
  },
  resolve: {
    alias: alias(__dirname)
      .fromTsconfig()
      .toVite(),
  },
});
