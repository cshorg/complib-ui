/// <reference types="vitest" />

import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [react(), tsconfigPaths(), dts({ rollupTypes: true})],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './lib/test/setup.ts',
		css: true
	},
	build: {
		lib: {
			entry: resolve(__dirname, "lib/index.ts"),
			name: "complib-ui",
			fileName: "complib-ui",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "react/jsx-runtime",
				},
			},
		},
	},
});
