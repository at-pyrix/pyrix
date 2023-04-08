import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'u62jjaxi',
	dataset: 'production',
	apiVersion: '2023-01-05',
	useCdn: false // development
});

export default client;