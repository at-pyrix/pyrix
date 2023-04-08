<script>
	export let data;

	import PostGrid from '$lib/blogs/PostGrid.svelte';
	import CategoriesGrid from '$lib/blogs/CategoriesGrid.svelte';
	import FeaturedCarrousel from '$lib/blogs/FeaturedCarrousel.svelte';
	import { daysAgo, estimateReadTime, lighten as lighteness } from '$lib/blogs/utils';

	let featuredPosts = data.blogs.filter((blog) => blog.featured === true).slice(0, 1);

	featuredPosts = featuredPosts.map((blog) => ({
		title: blog.title,
		description: blog.description,
		category: blog.category.name,
		slug: blog.slug.current,
		color: lighteness(blog.featuredImage.asset.metadata.palette.dominant.background, 0.75),
		symbol: blog.category.icon,
		featuredImage: blog.featuredImage,
		coverImage: blog.featuredImage.asset.url + '?w=1000&fm=webp',
		imageSrc: blog.featuredImage.asset.creditLine || blog.featuredImage.source,
		url: `/article/${blog.slug.current}`,
		ert: `${estimateReadTime(blog)} mins`,
		daysAgo: daysAgo(blog.date)
	}));

	let latestPosts = data.blogs
		.filter((blog) => !featuredPosts.find((fp) => fp.title === blog.title))
		.map((blog) => ({
			title: blog.title,
			description: blog.description,
			category: blog.category.name,
			slug: blog.slug.current,
			color: blog.category.color,
			symbol: blog.category.icon,
			daysAgo: daysAgo(blog.date),
			coverImage: blog.featuredImage.asset.url + '?w=400&fm=webp',
			placeholderImage: blog.featuredImage.asset.metadata.lqip,
			imageSrc: blog.featuredImage.asset.creditLine || blog.featuredImage.source,
			tags: blog.tags,
			daysAgo: daysAgo(blog.date),
			url: `/article/${blog.slug.current}`,
			ert: `${estimateReadTime(blog)} mins`
		}));


	data.categories.forEach((category) => {
		category.coverImage = category.image.asset.url + '?w=200&fm=webp';
		category.placeholderImage = category.image.asset.metadata.lqip;
	});
</script>

<section class="featured">
	<FeaturedCarrousel posts={featuredPosts} />
</section>

<section class="categories">
	<h2 class="highlight" id="categories-browse">Browse categories</h2>
	<a href="/blogs/explore">View all</a>
	<CategoriesGrid categories={data.categories} />
</section>

<section class="latest">
	<h2 id="latest-articles" class="highlight">Latest Posts</h2>
	<PostGrid posts={latestPosts} />
</section>

<style lang="scss">
	.categories {
		position: relative;
		width: 100%;
		height: 100%;

		a {
			display: none;
		}
	}

	.latest h2,
	.categories h2 {
		font-size: 1.5rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
		color: $clr-text-2;
		font-weight: 600;
	}

	.categories h2 {
		margin-top: 0rem;
	}

	// Tablet and smaller devices
	@media screen and (max-width: $tablet) {
		h2 {
			font-size: 1.3rem;
			color: $clr-text-2;
			font-weight: 400;
		}
	}

	// Mobile
	@media only screen and (max-width: $mobile) {
		.categories a {
			position: absolute;
			display: inline;
			right: 0;
			color: $clr-accent-0;
		}
	}
</style>
