<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let searchQuery;

	onMount(() => {
		searchQuery = $page.url.searchParams.toString().split('q=')[1]; // Print the query to the console
	});
</script>

<h1>Search results for "{searchQuery}"</h1>
<!-- Display search results here -->
