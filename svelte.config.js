import preprocessor from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

const config = {
	preprocess: preprocessor({
		scss: {
			prependData: `@use './src/lib/styles/_variables.scss' as *;`
		}
	}),
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};

export default config;
