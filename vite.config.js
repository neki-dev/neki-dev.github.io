/* eslint-disable import/no-extraneous-dependencies */
import alias from 'alias-reuse';
import path from 'path';
import { defineConfig } from 'vite';
import checkerPlugin from 'vite-plugin-checker';
import solidPlugin from 'vite-plugin-solid';
import SVGInjectPlugin from 'vite-plugin-svg-inject';

export default defineConfig({
  plugins: [
    solidPlugin(),
    SVGInjectPlugin(),
    checkerPlugin({
      typescript: true,
    }),
  ],
  root: './src',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: '../dist',
  },
  resolve: {
    alias: alias.fromFile(
      __dirname,
      path.resolve(__dirname, './tsconfig.json'),
    ).toVite(),
  },
});
