<script>
	import ScrollProgress from '$lib/blogs/ScrollProgress.svelte';
	import { fade, fly } from 'svelte/transition';
	import { parse } from 'marked';
	import { onMount } from 'svelte';
	import './markedSettings';
	import { useLazyImage as lazyImage } from 'svelte-lazy-image';
	import { setCode } from './markedSettings';
	import { lighten } from '$lib/blogs/utils';

	export let data;

	onMount(() => {
		setCode();
	});

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
	<div class="info" in:fly={{ y: 10, duration: 500, delay: 200 }}>
		<a style="color: rgb({lighten(data.blogs.featuredImage.asset.metadata.palette.dominant.background, 0.75)})" title="Tag" class="category" href="/blogs/explore/{data.blogs.category.name}">
			<span>{data.blogs.category.name}</span>
		</a>
		<span id="sep">•</span>

		<span class="date-published">{readableDate}</span>
	</div>
	<h1 class="title" in:fly={{ y: 10, duration: 500, delay: 100 }}>{data.blogs.title}</h1>
	<p class="description">{data.blogs.description}</p>

	<img
		transition:fade
		class="cover"
		data-src={data.blogs.featuredImage.asset.url + '?fm=webp'}
		src={data.blogs.featuredImage.asset.metadata.lqip}
		alt="thumbnail"
		title={data.blogs.featuredImage.source}
		use:lazyImage={{ threshold: 0.5 }}
	/>
	<article transition:fly class="main-content">
		{@html html}
	</article>
</div>

<style lang="scss">
	.article-body {
		max-width: 800px;
		margin: -3rem auto;
		padding: 20px;
		color: $clr-fg-4;
		margin-top: 40px;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	.info {
		text-align: center;
		height: 2rem;
		margin-bottom: 1rem;

		a {
			@include hover {
				filter: brightness(1.1);
			}
		}
	}

	.title {
		margin-block: 0.5rem;
		text-align: center;
		color: $clr-fg-1;
		font-size: 2.7rem;
		font-family: $title-secondary-font;
		font-weight: bold;
		border: none;

		@media screen and (max-width: $tablet) {
			font-size: 2.4rem;
		}
	}

	p.description {
		color: $clr-fg-4;
		text-align: center;
		font-family: 'Larsseit', sans-serif !important;
	}

	.cover {
		position: relative;
		border-radius: 0;
		margin-inline: calc(-50vw + 50%);
		width: 100vw !important;
		max-width: 100vw;
		margin-top: 5rem;
		margin-bottom: 2rem;
		object-fit: cover;
		height: 55rem;
		width: 100vw;
	}
	
</style>
