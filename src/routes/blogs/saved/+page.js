import { browser } from '$app/environment';
import { daysAgo, estimateReadTime } from '$lib/blogs/utils';
import client from '$lib/blogs/sanityClient';
export async function load({ params }) {
	if (!browser) return;
	const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
	if (saved.length == 0) return { posts: [] };
	const posts = await client.fetch(
		`*[_type == "blog" && slug.current in $saved] {
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
		}`,
		{ saved }
	);

	if (!posts) return { posts: [] };

	posts.forEach((post) => {
		post.ert = estimateReadTime(post.body) + ' min read';
		post.daysAgo = daysAgo(post.date);
		delete post.body;
	});
	return { posts };
}
