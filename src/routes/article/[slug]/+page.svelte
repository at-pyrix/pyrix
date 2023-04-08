<script>
	import ScrollProgress from '$lib/blogs/ScrollProgress.svelte';
	import { fade, fly } from 'svelte/transition';
	import { parse } from 'marked';
	import { onMount } from 'svelte';
	import './markedSettings';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	import { setCode } from './markedSettings';

	onMount(() => {
		setCode();
	});

	export let data;

	let source = data.blogs.body;
	const html = parse(source);

	const readableDate = new Date(data.blogs.date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});

	let innerWidth;
	let articleHeight;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{data.blogs.title} | NotYasho</title>
	<meta name="title" content="{data.blogs.title} | NotYasho" />
	<meta name="description" content={data.blogs.description} />
	<meta name="keywords" content={data.blogs.tags.join(', ')} />
	<meta name="image" content={data.blogs.featuredImage.asset.url + '?w=256&fm=webp'} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://notyasho.netlify.app/article/{data.blogs.slug.current}" />
	<meta property="og:title" content="{data.blogs.title} | NotYasho" />
	<meta property="og:site_name" content="NotYasho - Explore blogs" />
	<meta property="og:description" content={data.blogs.description} />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:image:width" content="256" />
	<meta property="og:image:height" content="256" />
	<meta property="og:image" content={data.blogs.featuredImage.asset.url + '?w=256&fm=webp'} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://notyasho.netlify.app/article/{data.blogs.slug.current}" />
	<meta property="twitter:title" content="{data.blogs.title} | NotYasho" />
	<meta property="twitter:description" content={data.blogs.description} />
	<meta property="twitter:image" content={data.blogs.featuredImage.asset.url + '?w=256&fm=webp'} />
</svelte:head>

<svelte:window bind:innerWidth />
<ScrollProgress {articleHeight} />
<div class="article-body" bind:offsetHeight={articleHeight}>
	<nav class="breadcrumb" aria-label="breadcrumb">
		<a href="/blogs">Home</a>
		<span>&gt;</span>
		<a href={'/blogs/explore/' + data.blogs.category.name}>{data.blogs.category.name}</a>
		<span>&gt;</span>
		<a href={'/article/' + data.blogs.slug.current}>
			<span>
				<em style={`color: ${data.blogs.featuredImage.asset.metadata.palette.dominant.background}`}>this</em>
			</span>
		</a>
	</nav>

	<h1 class="title" in:fly={{ y: 10, duration: 500, delay: 100 }}>{data.blogs.title}</h1>
	<div class="info" in:fly={{ y: 10, duration: 500, delay: 200 }}>
		<span class="date-published">{`Posted: ${readableDate}`}</span>
		<a style="color: rgb({data.blogs.category.color})" title="Tag" class="category" href="/blogs/explore/{data.blogs.category.name}">
			<span>{data.blogs.category.name}</span>
		</a>
	</div>
	<hr />
	<p class="description">{data.blogs.description}</p>

	<img
		class="cover"
		data-src={data.blogs.featuredImage.asset.url + '?fm=webp'}
		src={data.blogs.featuredImage.asset.metadata.lqip}
		alt="thumbnail"
		title={data.blogs.featuredImage.source}
		use:lazyImage={{ threshold: 0.5 }}
	/>
	<article transition:fly>
		{@html html}
	</article>
</div>

<style lang="scss">
	.article-body {
		max-width: 800px;
		margin: -3rem auto;
		padding: 20px;
		color: $clr-text-4;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	.info {
		position: relative;
		height: 2rem;

		a {
			&:hover {
				filter: brightness(1.1);
			}
		}
	}

	.breadcrumb {
		font-size: smaller;

		a {
			color: $clr-text-4;
			&:hover {
				color: $clr-accent-0;
			}
		}

		em {
			filter: saturate(5);
		}

		span:not(:last-child) {
			margin-inline: 0.5ch;
			color: $clr-text-450;
		}
	}

	.title {
		margin-block: 0.5rem;
		color: $clr-text-1;
		font-size: 2.7rem;
		font-family: 'Larsseit';
		font-weight: bold;
		border: none;

		@media screen and (max-width: 800px) {
			font-size: 2.4rem;
		}
	}

	hr {
		height: 0.1rem;
		mix-blend-mode: screen;
	}

	p.description {
		color: $clr-text-4;
		font-family: 'Larsseit', sans-serif !important;
	}

	.cover {
		position: relative;
		border-radius: 0;
		margin-inline: calc(-50vw + 50%);
		width: 100vw !important;
		max-width: 100vw;
		margin-top: 2rem;
		margin-bottom: 2rem;
		object-fit: cover;
		height: 55rem;
		width: 100vw;
	}

	.date-published {
		position: absolute;
		left: 0;
	}

	.category {
		position: absolute;
		right: 0;
		padding: 0;
		color: var(--color);
	}

	.article-body {
		margin-top: 40px;
	}
</style>
