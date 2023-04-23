<script>
	import { page } from '$app/stores';
	import client from '$lib/blogs/sanityClient';
	import PostGrid from '$lib/blogs/PostGrid.svelte';
	import { estimateReadTime, daysAgo } from '$lib/blogs/utils';
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';

	let searchQuery;
	let timeout = false;

	async function search(query) {
		timeout = false;
		results = [];
		let response = await client
			.fetch(
				`*[_type == "blog" && (title match $query || description match $query || tags[] match $query)] | order(date desc) {
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
				{ query }
			)
			.then((res) => {
				return res.map((post) => {
					return {
						...post,
						ert: estimateReadTime(post.body) + ' min read',
						daysAgo: daysAgo(post.date),
						coverImage: post.coverImage + '?w=400&fm=webp'
					};
				});
			});

		timeout = true;
		return response;
	}

	let results = [];

	$: searchQuery = $page.url.searchParams.toString().split('q=')[1];
	$: search(searchQuery).then((res) => {
		results = res;
	});
</script>

{#if !searchQuery}
	<section class="error" in:fade>
		<Icon icon="solar:arrow-to-top-left-broken" />
		<h1>No search query</h1>
		<p>Try searching from the search bar above.</p>
	</section>
{:else if !timeout && !results.length}
	<svg width="48" class="loader" height="48" viewBox="0 0 24	 24" xmlns="http://www.w3.org/2000/svg">
		<style>
			.spinner_7mtw {
				transform-origin: center;
				animation: spinner_jgYN 0.6s linear infinite;
				fill: #ff2600;
			}
			@keyframes spinner_jgYN {
				100% {
					transform: rotate(360deg);
				}
			}
		</style>
		<path class="spinner_7mtw" d="M2,12A11.2,11.2,0,0,1,13,1.05C12.67,1,12.34,1,12,1a11,11,0,0,0,0,22c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z" />
	</svg>
{:else if timeout && results.length == 0}
	<section class="error" in:fade>
		<Icon icon="solar:ghost-broken" />
		<h1>Sorry, No Results found</h1>
		<p>Try searching for something more specific.</p>
	</section>
{:else if results.length > 0}
	<PostGrid posts={results} />
{/if}

<style lang="scss">
	h1 {
		margin-bottom: 2rem;
		color: $clr-fg-3;
	}
	.loader {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: auto;
	}
	section.error {
		// center
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: auto;

		text-align: center;
		color: var(--text-color);
		opacity: 0.5;
		transition: opacity 0.5s ease-in-out;

		:global(svg) {
			width: 100px;
			height: 100px;
			margin-bottom: 1rem;
		}

		:global(svg path) {
			stroke-width: 0.8px !important;
		}

		h1 {
			font-size: 2rem;
			margin-bottom: 0.5rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
</style>
