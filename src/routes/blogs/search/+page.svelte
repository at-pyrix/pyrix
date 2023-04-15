<script>
	import { page } from '$app/stores';
	import client from '$lib/blogs/sanityClient';
	import PostGrid from '$lib/blogs/PostGrid.svelte';
	import Icon from '@iconify/svelte';
	import { blur } from 'svelte/transition';

	let searchQuery;
	let timeout = false;

	async function search(query) {
		timeout = false;
		results = [];
		const result = await client.fetch(
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
		);

		setTimeout(() => {
			timeout = true;
		}, 500);

		return result;
	}

	let results = [];

	$: searchQuery = $page.url.searchParams.toString().split('q=')[1];
	$: search(searchQuery).then((res) => {
		results = res;
	});

	$: console.log(results);
</script>

<h1>Search results for "{searchQuery}"</h1>

{#if !timeout && !results.length}
	<svg width="48" height="48" viewBox="0 0 24	 24" xmlns="http://www.w3.org/2000/svg">
		<style lang="scss">
			.spinner_7mtw {
				transform-origin: center;
				animation: spinner_jgYN 0.6s linear infinite;
				fill: white;
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
	<section class="error" in:blur>
		<Icon icon="solar:ghost-broken" />
		<h1>Sorry, No Results found</h1>
		<p>Try searching for something more specific.</p>
	</section>
{:else if results.length > 0}
	<PostGrid posts={results} />
{/if}

<style lang="scss">
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
