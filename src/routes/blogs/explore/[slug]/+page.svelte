<script>
	import PostGrid from '$lib/blogs/PostGrid.svelte';
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	export let data;

	let posts = data.blogs;
	posts.forEach((post) => {
		post.coverImage = post.coverImage + '?w=400&fm=webp';
	});
</script>

<svelte:head>
	<title />
	<!-- Primary Meta Tags -->
	<title>Explore {data.category.name} articles</title>
	<meta name="title" content="Explore {data.category.name} articles" />
	<meta name="description" content="Articles related to {data.category.name}Explore categories of all sorts." />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://notyasho.netlify.app/explore/{data.category}" />
	<meta property="og:title" content="Explore {data.category.name} articles" />
	<meta property="og:description" content="Articles related to {data.category.name}Explore categories of all sorts." />
	<meta property="og:image" content={data.category.image.asset.url + '?fm=webp&w=256'} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://notyasho.netlify.app/explore/{data.category}" />
	<meta property="twitter:title" content="Explore {data.category.name} articles" />
	<meta property="twitter:description" content="Articles related to {data.category.name}. Explore categories of all sorts." />
	<meta property="twitter:image" content={data.category.image.asset.url + '?fm=webp&w=256'} />
</svelte:head>

<main>
	{#if data.blogs.length > 0}
		<section style="--color: {data.category.color}">
			<div class="cover">
				<img src={data.category.image.asset.url} alt="alt" />
				<div class="text">
					<h1>{data.category.name}</h1>
					<span id="count">Posts: {posts.length}</span>
				</div>
			</div>
			<h2 class="highlight">{data.category.name} Posts</h2>
			<PostGrid {posts} />
		</section>
	{:else}
		<section class="error" in:fade>
			<Icon icon="tabler:line-dotted" />
			<h1>Nothing but void :/</h1>
			<p>Looks like nothing has been posted related to <strong>{data.category.name}</strong></p>
		</section>
	{/if}
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		height: 100%;
	}

	.cover {
		position: relative;
		display: flex;
		align-items: center;
		margin-top: -3rem;
		margin-inline: calc(-50vw + 50%);
		width: 100vw !important;
		height: 16rem;
		justify-content: center;
		margin-bottom: 2rem;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to top, $bg 5%, transparent 100%);
		}
	}

	.text {
		position: absolute;
		z-index: 1;
		text-align: center;

		h1 {
			color: rgba(var(--color), 1);
			filter: saturate(0.4);
			font-size: 2.3rem;
		}

		span {
			color: rgba(var(--color), 1);
			filter: saturate(0.4);
			font-size: 1.3rem;
		}
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	img {
		height: 14rem;
		z-index: -1;
		width: 100vw;
		object-fit: cover;
		object-position: center;
		filter: grayscale(0.3) brightness(0.5);
	}

	section.error {
		// center
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: auto;

		text-align: center;
		opacity: 0.5;
		transition: opacity 0.5s ease-in-out;

		:global(svg) {
			width: 100px;
			height: 100px;
			margin-bottom: 1rem;
		}

		h1 {
			font-size: 2rem;
			margin-bottom: 0.5rem;
		}

		p {
			font-size: 1.2rem;
		}
	}

	section {
		margin-bottom: 2rem;
	}

	section::before,
	section::after {
		content: '';
		width: 50vw;
		position: fixed;
		pointer-events: none;
		height: 100%;
		z-index: 100;
		opacity: 0.5;
		animation: growGradient 2s ease-in;
	}

	section::before {
		left: 0;
		bottom: 0;
		background-image: radial-gradient(at 45% 100%, rgba(var(--color), 0.2) 0px, transparent 50%);
	}

	section::after {
		right: 0;
		top: 0;
		background-image: radial-gradient(at 100% 15%, rgba(var(--color), 0.2) 0px, transparent 50%);
	}

	@media only screen and (max-width: $tablet) {
		section::before {
			background-image: radial-gradient(at 0% 100%, rgba(var(--color), 0.1) 0px, transparent 50%);
		}
	}

	@keyframes growGradient {
		0% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.5;
		}
	}
</style>
