/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import SVGInjectPlugin from 'vite-plugin-svg-inject';
import checkerPlugin from 'vite-plugin-checker';
import alias from 'alias-reuse';

export default defineConfig({
  plugins: [
    solidPlugin(),
    SVGInjectPlugin(),
    checkerPlugin({
      typescript: true,
      eslint: {
        lintCommand: 'eslint **/*.{js,ts,tsx} --ignore-path ../.gitignore',
      },
    }),
  ],
  root: './src',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    outDir: '../dist',
  },
  resolve: {
    alias: alias.fromFile(__dirname, './tsconfig.json').toVite(),
  },
});
