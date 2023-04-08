import { browser } from '$app/environment';
import client from '$lib/blogs/sanityClient';
export async function load({ params }) {
	if (!browser) return;
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    if (saved.length == 0) return { posts: [] };
	const posts = await client.fetch(`*[_type == "blog" && slug.current in $saved] {
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
	}`, { saved });
	return { posts };
}
