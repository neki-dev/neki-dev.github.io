/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import SVGInjectPlugin from 'vite-plugin-svg-inject';
import checkerPlugin from 'vite-plugin-checker';
import path from 'path';
import alias from 'alias-reuse';

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
