import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import SVGInjectPlugin from 'vite-plugin-svg-inject';
import alias from 'alias-reuse';

export default defineConfig({
  plugins: [
    solidPlugin(),
    SVGInjectPlugin(),
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
