<script>
	import { fade, fly } from 'svelte/transition';
	import PostGrid from '$lib/blogs/PostGrid.svelte';
	import Icon from '@iconify/svelte';

	export let data;
	let posts = data.posts;
	posts.forEach((post) => {
		post.coverImage = post.coverImage + '?w=400&fm=webp';
	});

	
</script>

<svelte:head>
	<title>Saved - NotYasho</title>
</svelte:head>

<section class="main" in:fly={{ y: 10, duration: 500 }}>
	{#if posts.length === 0}
		<section class="error" in:fade>
			<Icon icon="solar:book-bookmark-minimalistic-broken" />
			<h1>Nothing saved yet</h1>
			<p>Save your favorite blogs to read them later</p>
		</section>
	{:else}
		<h1 class="highlight">Saved posts</h1>
		<PostGrid {posts} />
	{/if}
</section>

<style lang="scss">
	h1 {
		margin-bottom: 1rem;
	}

	section.main {
		position: relative;
		min-height: 80vh;
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
			stroke-width: .8px !important;
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
