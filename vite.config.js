import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import alias from 'alias-reuse';

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
    alias: alias(__dirname)
      .fromTsconfig()
      .toVite(),
  },
});
