import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
	plugins: [
		solidPlugin(),
		// createHtmlPlugin({
		// 	minify: true,
		// 	entry: './src/index.tsx',
		// }),
	],
	root: './src',
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
		outDir: '../',
	},
});
