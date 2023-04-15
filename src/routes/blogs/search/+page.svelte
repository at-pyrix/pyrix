<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import client from '$lib/blogs/sanityClient';

	let searchQuery;

	async function search(query) {
		const results = await client.fetch(
			`*[_type == "blog" && title match $query] {
				_id,
				title,
				slug,
				"category": category->{name, color},
				"coverImage": coverImage.asset->url
			}`,
			{ query }
		);

		return results;
	}

	let results = [];


	onMount(() => {
		searchQuery = $page.url.searchParams.toString().split('q=')[1];
		search(searchQuery).then((res) => {
			results = res;
		});
	});
</script>

<h1>Search results for "{searchQuery}"</h1>
{#if results.length > 0}
	{#each results as result}
		<div>
			<h2>{result.title}</h2>
			<p>{result.category}</p>
			<img src={result.coverImage} alt={result.title} />
		</div>
	{/each}
{:else}
	<p>No results found</p>
{/if}
<!-- Display search results here -->
