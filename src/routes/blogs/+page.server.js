import client from '$lib/blogs/sanityClient';
import { estimateReadTime, daysAgo } from '$lib/blogs/utils.js';
import { writable } from 'svelte/store';
let fetched = writable({ blogs: null, categories: null });

let data;

fetched.subscribe((value) => {
	data = value;
});

async function fetch() {
	const blogs = await client.fetch(`
	*[_type == "blog"] | order(_updatedAt desc) {
		title,
		description,
		body,
		date,
		"category": category->name,
		"slug": slug.current,
		"color": category->color,
		"symbol": category->icon,
		tags,
		"coverImage": featuredImage.asset->url,
		"url": "/article/" + slug.current,
		"imageSrc": featuredImage.asset -> creditLine,
		featured,
		"avgColor": featuredImage.asset->metadata.palette.dominant.background,
		featuredImage{
			asset->{
				...,
				metadata
			}
		}
	}
	`);
	const categories = await client.fetch(`
	*[_type == "category"]{
		...,
		image {
			asset->{
				...,
				metadata
			}
		},
		"count": count(*[_type == "blog" && references(^._id)])
	} | order(-count) [0...5]
	`);

	if (blogs && categories) {
		blogs.forEach((blog) => {
			blog.ert = estimateReadTime(blog.body) + ' min read';
			blog.daysAgo = daysAgo(blog.date);
			delete blog.body;
		});

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
