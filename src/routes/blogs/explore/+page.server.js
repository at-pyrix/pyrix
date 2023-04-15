import client from '$lib/blogs/sanityClient';
import { writable } from 'svelte/store';

let fetched = writable({ categories: null });

let data;

fetched.subscribe((value) => {
	data = value;
});

async function fetch() {
	const categories = await client.fetch(`*[_type == "category"] {
            ...,
            "count": count(*[_type == "blog" && references(^._id)])
        }
	`);

	if (categories) {
		data = { categories };
		fetched.set({ categories });
		return {
			categories
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}

export async function load({ params }) {
	if (!data.categories) {
		return await fetch();
	} else {
		return data;
	}
}
