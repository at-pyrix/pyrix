import client from '$lib/blogs/sanityClient';
import { writable } from 'svelte/store';
let fetched = writable({ blogs: null, categories: null });

let data;

fetched.subscribe((value) => {
	data = value;
});

async function fetch() {
	const blogs = await client.fetch(`*[_type == "blog"] | order(_updatedAt desc) {
		...,
		category->{
			name,
			icon,
			color
		},
		featuredImage{
			asset->{
				...,
				metadata
			}
		}
	}
	`);
	const categories = await client.fetch(`*[_type == "category"]{
		...,
		image {
			asset->{
				...,
				metadata
			}
		},
		"count": count(*[_type == "blog" && references(^._id)])
	}
	| order(-count)
	[0...5]
	`);

	if (blogs && categories) {
		data = { blogs, categories };
		fetched.set({ blogs, categories });
		return {
			blogs,
			categories
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}

export async function load({ params }) {
	if (!data.blogs || !data.categories) {
		return await fetch();
	} else {
		return data;
	}
}
