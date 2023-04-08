import { sveltekit } from '@sveltejs/kit/vite';
import viteCompression from 'vite-plugin-compression';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), viteCompression()],
	server: {
		cors: true
	}
};

export default config;
