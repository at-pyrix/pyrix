import client from '$lib/blogs/sanityClient.js';
import { daysAgo, estimateReadTime } from '$lib/blogs/utils.js';
export async function load({ params }) {
	const category = await client.fetch(`*[_type == "category" && name == "${params.slug}"][0] {
		...,
		image {
			asset->{
				...,
				metadata
			}
		}
	}
	`);
	const blogs = await client.fetch(`*[_type == "blog" && category._ref=="${category._id}"] {
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
	}`);

	if (category && blogs) {
		blogs.forEach((blog) => {
			blog.ert = estimateReadTime(blog.body) + ' min read';
			blog.daysAgo = daysAgo(blog.date);
			delete blog.body;
		});
		return {
			blogs,
			category
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
